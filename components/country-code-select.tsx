"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { Check, ChevronDown, Search } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const countries = [
  { name: "مصر", code: "+20", flag: "🇪🇬" },
  { name: "السعودية", code: "+966", flag: "🇸🇦" },
  { name: "الإمارات", code: "+971", flag: "🇦🇪" },
  { name: "الأردن", code: "+962", flag: "🇯🇴" },
  { name: "الكويت", code: "+965", flag: "🇰🇼" },
  { name: "قطر", code: "+974", flag: "🇶🇦" },
  { name: "البحرين", code: "+973", flag: "🇧🇭" },
  { name: "عُمان", code: "+968", flag: "🇴🇲" },
  { name: "لبنان", code: "+961", flag: "🇱🇧" },
  { name: "العراق", code: "+964", flag: "🇮🇶" },
  { name: "سوريا", code: "+963", flag: "🇸🇾" },
  { name: "فلسطين", code: "+970", flag: "🇵🇸" },
  { name: "اليمن", code: "+967", flag: "🇾🇪" },
  { name: "ليبيا", code: "+218", flag: "🇱🇾" },
  { name: "تونس", code: "+216", flag: "🇹🇳" },
  { name: "الجزائر", code: "+213", flag: "🇩🇿" },
  { name: "المغرب", code: "+212", flag: "🇲🇦" },
  { name: "السودان", code: "+249", flag: "🇸🇩" },
  { name: "الولايات المتحدة", code: "+1", flag: "🇺🇸" },
  { name: "المملكة المتحدة", code: "+44", flag: "🇬🇧" },
  { name: "كندا", code: "+1", flag: "🇨🇦" },
  { name: "ألمانيا", code: "+49", flag: "🇩🇪" },
  { name: "فرنسا", code: "+33", flag: "🇫🇷" },
  { name: "إيطاليا", code: "+39", flag: "🇮🇹" },
  { name: "إسبانيا", code: "+34", flag: "🇪🇸" },
  { name: "هولندا", code: "+31", flag: "🇳🇱" },
  { name: "بلجيكا", code: "+32", flag: "🇧🇪" },
  { name: "سويسرا", code: "+41", flag: "🇨🇭" },
  { name: "النمسا", code: "+43", flag: "🇦🇹" },
  { name: "تركيا", code: "+90", flag: "🇹🇷" },
  { name: "الهند", code: "+91", flag: "🇮🇳" },
  { name: "باكستان", code: "+92", flag: "🇵🇰" },
  { name: "الصين", code: "+86", flag: "🇨🇳" },
  { name: "اليابان", code: "+81", flag: "🇯🇵" },
  { name: "كوريا الجنوبية", code: "+82", flag: "🇰🇷" },
  { name: "أستراليا", code: "+61", flag: "🇦🇺" },
  { name: "نيوزيلندا", code: "+64", flag: "🇳🇿" },
  { name: "جنوب أفريقيا", code: "+27", flag: "🇿🇦" },
  { name: "نيجيريا", code: "+234", flag: "🇳🇬" },
  { name: "كينيا", code: "+254", flag: "🇰🇪" },
  { name: "البرازيل", code: "+55", flag: "🇧🇷" },
  { name: "المكسيك", code: "+52", flag: "🇲🇽" },
  { name: "الأرجنتين", code: "+54", flag: "🇦🇷" },
  { name: "روسيا", code: "+7", flag: "🇷🇺" },
  { name: "بولندا", code: "+48", flag: "🇵🇱" },
  { name: "السويد", code: "+46", flag: "🇸🇪" },
  { name: "النرويج", code: "+47", flag: "🇳🇴" },
  { name: "الدنمارك", code: "+45", flag: "🇩🇰" },
  { name: "فنلندا", code: "+358", flag: "🇫🇮" },
  { name: "أيرلندا", code: "+353", flag: "🇮🇪" },
  { name: "البرتغال", code: "+351", flag: "🇵🇹" },
  { name: "اليونان", code: "+30", flag: "🇬🇷" },
  { name: "ماليزيا", code: "+60", flag: "🇲🇾" },
  { name: "سنغافورة", code: "+65", flag: "🇸🇬" },
  { name: "إندونيسيا", code: "+62", flag: "🇮🇩" },
  { name: "تايلاند", code: "+66", flag: "🇹🇭" },
  { name: "فيتنام", code: "+84", flag: "🇻🇳" },
  { name: "الفلبين", code: "+63", flag: "🇵🇭" },
]

interface CountryCodeSelectProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function CountryCodeSelect({ value, onChange, className }: CountryCodeSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const selectedCountry = countries.find((c) => c.code === value) || countries[0]

  const filteredCountries = React.useMemo(() => {
    if (!search) return countries
    const searchLower = search.toLowerCase()
    return countries.filter(
      (country) =>
        country.name.includes(search) ||
        country.code.includes(search)
    )
  }, [search])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          dir="rtl"
          className={cn(
            "flex h-12 min-h-[48px] items-center justify-between gap-1 rounded-md border border-input bg-background px-3 text-sm ring-offset-background",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "touch-manipulation",
            className
          )}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-base">{selectedCountry.flag}</span>
            <span className="text-sm font-medium">{selectedCountry.code}</span>
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[280px] p-0" 
        align="end"
        side="bottom"
        sideOffset={4}
      >
        <CommandPrimitive dir="rtl" className="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground">
          <div className="flex items-center border-b px-3 flex-row-reverse">
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              placeholder="ابحث عن الدولة..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              dir="rtl"
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm text-right outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <CommandPrimitive.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
            {filteredCountries.length === 0 && (
              <div className="py-6 text-center text-sm text-muted-foreground">
                لم يتم العثور على دولة.
              </div>
            )}
            {filteredCountries.map((country) => (
              <CommandPrimitive.Item
                key={`${country.code}-${country.name}`}
                value={`${country.name} ${country.code}`}
                onSelect={() => {
                  onChange(country.code)
                  setSearch("")
                  setOpen(false)
                }}
                className={cn(
                  "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-3 py-2.5 text-sm outline-none flex-row-reverse",
                  "hover:bg-accent hover:text-accent-foreground",
                  "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
                  value === country.code && "bg-accent/50"
                )}
              >
                <span className="text-lg">{country.flag}</span>
                <span className="flex-1 text-right">{country.name}</span>
                <span className="text-muted-foreground">{country.code}</span>
                {value === country.code && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </CommandPrimitive.Item>
            ))}
          </CommandPrimitive.List>
        </CommandPrimitive>
      </PopoverContent>
    </Popover>
  )
}

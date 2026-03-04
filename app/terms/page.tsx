import Link from "next/link"

export const metadata = {
  title: "الشروط والأحكام | Finance Coach Academy",
  description: "الشروط والأحكام وسياسة الاسترداد لتنظيم العلاقة بين أكاديمية فاينانس كوتش والعميل",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-3xl">
        <Link
          href="/"
          className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          ← العودة للرئيسية
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          الشروط والأحكام
        </h1>
        <p className="text-muted-foreground mb-10">
          لتنظيم العلاقة بين أكاديمية فاينانس كوتش والعميل
        </p>

        <article className="space-y-10 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-4">أولاً: التعريفات</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>فاينانس كوتش:</strong> تشير إلى الأكاديمية التعليمية.</li>
              <li><strong>العميل:</strong> تشير إلى أي شخص طبيعي أو اعتباري قام بشراء أو التسجيل في أي من خدمات فاينانس كوتش.</li>
              <li><strong>الخدمة:</strong> تشير إلى أي دورة تدريبية لشهادة احترافية معتمدة دوليا، دورة تدريبية عامة، أو محتوى رقمي تقدمه فاينانس كوتش.</li>
              <li><strong>فترة الاسترداد:</strong> المدة الزمنية المسموح خلالها للعميل بطلب استرداد الرسوم المدفوعة بعد المحاضرة الاولى فقط.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">ثانيًا: شروط استخدام الخدمة</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>يلتزم العميل باستخدام الخدمات لأغراض شخصية أو تعليمية فقط، ويحظر استخدام المحتوى لأغراض تجارية أو إعادة توزيعه دون إذن كتابي مسبق من فاينانس كوتش.</li>
              <li>يُمنع نقل بيانات الدخول اسم المستخدم وكلمة السر لأي طرف ثالث.</li>
              <li>يُمنع أي استخدام يُعدّ مسيئًا أو مخالفًا للقانون أو للآداب العامة.</li>
              <li>يحق للشركة إيقاف حساب العميل مؤقتًا أو دائمًا في حال اكتشاف سوء استخدام للخدمة، دون أن يترتب على فاينانس كوتش أي التزام مالي.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">ثالثًا: التزامات فاينانس كوتش</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>تلتزم فاينانس كوتش بتقديم المحتوى والخدمات وفقًا للوصف المعلن على الموقع أو المنصة الرسمية.</li>
              <li>تضمن فاينانس كوتش توفير الدعم الفني أو التوجيهي للعملاء خلال فترة الاشتراك.</li>
              <li>تلتزم فاينانس كوتش بالحفاظ على خصوصية بيانات العملاء وعدم مشاركتها مع أي جهة خارجية بدون إذن.</li>
              <li>للعميل خيار إيقاف الدورة مؤقتاً لأي سبب من الأسباب لمدة تصل إلى 6 أشهر. (يجب إرسال هذا الطلب مسبقاً إلى إدارة الأكاديمية).</li>
              <li>يمكن للدارس إعادة الحضور مرة واحدة فقط لنفس الدورة التدريبية فى حالة دخول امتحان الشهادة وعدم التوفيق، دون تحمل أي رسوم إضافية (مجانا).</li>
            </ol>
          </section>

          <section id="refund-policy">
            <h2 className="text-lg font-semibold mb-4">رابعًا: سياسة استرداد الأموال (Refund Policy)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>يحق للعميل استرداد قيمة الدورة التدريبية كاملة في حال حضور المحاضرة الأولى فقط، شريطة إبلاغ الأكاديمية بعدم الرغبة في الاستمرار قبل بدء المحاضرة الثانية كحد أقصى.</li>
              <li>يتم استرداد المبلغ بنفس وسيلة الدفع أو حسب الاتفاق خلال 5-7 أيام عمل من تاريخ الموافقة على الطلب.</li>
              <li>يتم تقديم الطلب من خلال النموذج المخصص على موقع فاينانس كوتش، مع ذكر الأسباب المتعلقة بعدم الرغبة في استكمال الدورة التدريبية.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">خامسًا: حقوق الملكية الفكرية</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>جميع المواد التعليمية المقدمة من فاينانس كوتش محمية بموجب قوانين حقوق النشر، ولا يحق للعميل نسخ أو توزيع أو إعادة إنتاج أي جزء منها.</li>
              <li>أي خرق لهذه البنود يعرّض العميل للمساءلة القانونية.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">سادسًا: التعديلات</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>تحتفظ فاينانس كوتش بحقها في تعديل الشروط والأحكام في أي وقت، وسيتم إخطار العملاء عبر البريد الإلكتروني أو الموقع الرسمي.</li>
              <li>استمرار العميل في استخدام الخدمة بعد التعديلات يُعدّ موافقة ضمنية.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-4">سابعًا: النزاعات والقانون الواجب التطبيق</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>في حال نشوء أي نزاع، يُسعى أولاً إلى حله وديًا.</li>
              <li>في حال تعذّر الحل الودي، تُعرض النزاعات على القضاء المختص في دولة مقر فاينانس كوتش، ويُطبق القانون المحلي.</li>
            </ol>
          </section>
        </article>

        <div className="mt-12 pt-6 border-t">
          <Link
            href="/"
            className="inline-block text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← العودة للرئيسية
          </Link>
        </div>
      </div>
    </main>
  )
}

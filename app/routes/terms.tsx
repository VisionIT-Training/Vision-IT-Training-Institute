import { motion } from "framer-motion";
import type { Route } from "./+types/terms";

export const meta: Route.MetaFunction = () => [
  { title: "Terms & Conditions | Vision Training & Internship" },
  { name: "description", content: "Rules and regulations for using Vision Training & Internship services, including courses, training, and internship programs." },
];

export default function Terms() {
  const sections = [
    {
      id: "welcome",
      title: "1. Welcome to Vision Training & Internship",
      content: "These Terms and Conditions outline the rules and regulations for the use of the Vision Training & Internship website and its services, including language courses, technical training, professional education, and internship programs. By accessing our platform or enrolling in our programs, you agree to comply with these terms.",
    },
    {
      id: "about",
      title: "2. About Us",
      content: "Vision Training & Internship provides online and offline professional courses, language programs, and IT training to individuals, students, and corporates. Our goal is to deliver practical and industry-relevant education to learners across India and abroad.",
    },
    {
      id: "registration",
      title: "3. Course Registration",
      list: [
        "Registration is required to secure a seat in any of our programs.",
        "Students must provide accurate details and complete payment to confirm admission.",
        "Registration is confirmed only after full or partial payment of the course fee.",
        "The institute reserves the right to cancel or reschedule registrations due to insufficient enrollment or unforeseen circumstances.",
      ],
    },
    {
      id: "payment",
      title: "4. Payment Terms",
      list: [
        "Full payment or a pre-decided installment must be made before the course start date.",
        "Accepted payment modes: UPI, bank transfer, credit/debit cards, and net banking.",
        "Fees once paid are non-refundable, except under special cases as per our refund policy.",
      ],
    },
    {
      id: "refund",
      title: "5. Refund & Cancellation Policy",
      list: [
        "Refund requests must be submitted in writing via email within 3 days of course commencement.",
        "No refunds will be processed after the stated period.",
        "Cancellations by the institute will result in an alternative batch placement or a full refund.",
      ],
    },
    {
      id: "delivery",
      title: "6. Course Delivery",
      list: [
        "Courses may be delivered in-person (offline), live online, or through pre-recorded sessions.",
        "Vision Training & Internship reserves the right to change instructors, schedules, or batch timings to meet industry standards.",
      ],
    },
    {
      id: "certification",
      title: "7. Certification",
      list: [
        "Students must meet minimum attendance and assessment criteria to receive certificates.",
        "E-certificates are issued upon successful course completion and may be verified upon request.",
      ],
    },
    {
      id: "responsibilities",
      title: "8. User Responsibilities",
      list: [
        "You agree to use the platform ethically. Harassment of staff, instructors, or fellow students will result in immediate termination without refund.",
        "Unauthorized access or data scraping is strictly prohibited.",
      ],
    },
    {
      id: "law",
      title: "9. Governing Law",
      content: "These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts located in Anantapur, Andhra Pradesh.",
    },
  ];

  return (
    <div className="bg-surface min-h-screen">
      {/* Header / Hero */}
      <section className="container mx-auto px-6 pt-24 pb-12 border-b border-outline-variant/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="font-label text-xs uppercase tracking-[0.2em] text-on-primary-container mb-4 block">Legal Documentation</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
            Terms & <br />
            <span className="text-on-primary-container">Conditions</span>
          </h1>
          <p className="mt-8 text-lg font-sans text-on-surface/70 leading-relaxed max-w-2xl">
            Last updated: April 20, 2026. Please read these terms carefully before enrolling in our professional training and internship programs.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Navigation Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-32">
            <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-primary/50">Jump to Section</h3>
              <nav className="flex flex-col gap-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="font-sans text-sm text-on-surface/60 hover:text-on-primary-container transition-colors py-1 border-l-2 border-transparent hover:border-on-primary-container pl-4"
                  >
                    {section.title.split('. ')[1] || section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Sections */}
          <div className="lg:col-span-8 space-y-24">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="scroll-mt-32"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center font-display font-bold text-primary shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary mb-6">
                      {section.title.includes('. ') ? section.title.split('. ')[1] : section.title}
                    </h2>
                    {section.content && (
                      <p className="font-sans text-on-surface/80 leading-relaxed text-lg mb-6">
                        {section.content}
                      </p>
                    )}
                    {section.list && (
                      <ul className="space-y-4">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-on-primary-container shrink-0 mt-2.5"></span>
                            <span className="font-sans text-on-surface/80 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Support Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-32 p-12 rounded-3xl bg-primary text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-on-primary-container/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-4">Have questions about our terms?</h3>
                <p className="text-white/70 mb-8 max-w-md">
                  If you have any queries regarding our Terms and Conditions or policies, feel free to reach out to our legal department.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md font-label uppercase tracking-widest text-xs px-8 py-4 bg-white text-primary transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}

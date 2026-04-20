import { motion } from "framer-motion";
import type { Route } from "./+types/privacy";

export const meta: Route.MetaFunction = () => [
  { title: "Privacy Policy | Vision Training & Internship" },
  { name: "description", content: "How Vision Training & Internship collects, uses, and protects your personal data and intellectual property." },
];

export default function Privacy() {
  const sections = [
    {
      id: "collection",
      title: "1. Information Collection",
      content: "Vision Training & Internship collects personal information such as name, email address, phone number, and educational background during the registration process to provide a personalized learning experience.",
    },
    {
      id: "use-of-data",
      title: "2. Use of Data",
      description: "We use the collected data to:",
      list: [
        "Process enrollments and payments.",
        "Communicate course updates and schedules.",
        "Improve our website and training modules.",
        "Issue certificates and provide placement assistance.",
      ],
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property Protection",
      content: "All course materials, content, designs, logos, and branding are the intellectual property of Vision Training & Internship. Reproduction, distribution, or resale of any content without written permission is strictly prohibited.",
    },
    {
      id: "third-party",
      title: "4. Third-Party Links",
      content: "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external platforms.",
    },
    {
      id: "security",
      title: "5. Data Security",
      content: "We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure. However, no method of transmission over the internet is 100% secure.",
    },
    {
      id: "modifications",
      title: "6. Modifications",
      content: "Vision Training & Internship reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting to our website.",
    },
    {
      id: "contact",
      title: "Contact Information",
      description: "If you have any questions regarding these documents, please reach out to us:",
      contactInfo: {
        company: "Vision Training & Internship",
        address: "2nd floor, BFC Plaza Mano Mini AC function hall, Srinagar Colony, Anantapur, Andhra Pradesh, India",
        phone: "+91-9390441858",
        email: "sakevamsik@gmail.com",
      }
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
          <span className="font-label text-xs uppercase tracking-[0.2em] text-on-primary-container mb-4 block">Confidentiality & Rights</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
            Privacy <br />
            <span className="text-on-primary-container">Policy</span>
          </h1>
          <p className="mt-8 text-lg font-sans text-on-surface/70 leading-relaxed max-w-2xl">
            At Vision Training & Internship, we are committed to protecting your personal data and ensuring your privacy is respected throughout your learning journey.
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
                      {index < 6 ? (index + 1).toString().padStart(2, '0') : "!"}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-primary mb-6">
                      {section.title.includes('. ') ? section.title.split('. ')[1] : section.title}
                    </h2>

                    {section.description && (
                      <p className="font-sans text-on-surface/80 leading-relaxed text-lg mb-6">
                        {section.description}
                      </p>
                    )}

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

                    {section.contactInfo && (
                      <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-primary/40 mb-1">Company</p>
                            <p className="font-sans font-semibold text-primary">{section.contactInfo.company}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-primary/40 mb-1">Email</p>
                            <a href={`mailto:${section.contactInfo.email}`} className="font-sans font-semibold text-on-primary-container hover:underline">{section.contactInfo.email}</a>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-[10px] uppercase font-bold tracking-widest text-primary/40 mb-1">Address</p>
                            <p className="font-sans text-on-surface/80 leading-relaxed">{section.contactInfo.address}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-primary/40 mb-1">Phone</p>
                            <p className="font-sans font-semibold text-primary">{section.contactInfo.phone}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Compliance Note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-32 p-12 rounded-3xl bg-surface-container-low border border-outline-variant/20 relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Our technical commitment</h3>
                  <p className="text-on-surface/60 max-w-sm">
                    We use modern encryption and security protocols to ensure your data remains your own.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md font-label uppercase tracking-widest text-xs px-8 py-4 bg-primary text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact Data Officer
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}

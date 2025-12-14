"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}
type FAQSectionProps = {
  title?: string
  faqs?: FAQItem[]
}
const defaultFAQs: FAQItem[] = [
  {
    question: "What hookups and amenities are included?",
    answer:
      "All spaces include full RV hookups with water, sewer, and electric (both 50A and 30A service available). We also provide free city water and sewer, free garbage service, complimentary WiFi on the upper level, paved roads, concrete pads, and grass between sites. Our park is camera-monitored 24/7 for your security.",
  },
  {
    question: "Do you accept pets and what's your pet policy?",
    answer:
      "Yes, we are pet-friendly! We welcome dogs under 20 lbs with a limit of one dog per space. There is a $50/month pet fee. All pets must be kept on a leash when outside your RV and owners are responsible for cleaning up after their pets.",
  },
  {
    question: "What's the difference between standard and premium city view spaces?",
    answer:
      "Our premium city view spaces are located on the upper tier of the park and offer spectacular 180-degree panoramic views of downtown St. George, the red rock formations, and stunning sunrise/sunset vistas. Standard spaces are $55/night while premium city view spaces are $65/night. Both include the same full hookups and amenities.",
  },
  {
    question: "Do you offer long-term and snowbird rates?",
    answer:
      "We offer monthly rates and special seasonal pricing for snowbirds staying 3-6 months. We also offer returning guest discounts and senior rates for guests 55+. Please call us at (435) 673-2809 for current monthly and seasonal rates.",
  },
  {
    question: "What's nearby and how far is Zion National Park?",
    answer:
      "We're in an ideal location! Zion National Park is just 45 minutes away, and Snow Canyon State Park is only 20 minutes. Within walking distance, you'll find Temple Springs Trailhead (1 block), Vernon Worthen Park, and several restaurants including Morty's Burgers and Voodoo Pizza. Downtown St. George's historic district, art galleries, and shops are all within one mile.",
  },
]

export const FAQSection = ({ title = "Frequently Asked Questions", faqs = defaultFAQs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className="w-full py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight sticky top-24"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#e5e5e5] last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className="text-lg leading-7 text-[#202020] pr-8"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "400",
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-[#202020]" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p
                            className="text-lg leading-6 text-[#666666]"
                            style={{
                              fontFamily: "var(--font-figtree), Figtree",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

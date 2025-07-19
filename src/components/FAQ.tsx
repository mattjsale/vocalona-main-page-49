import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What happens if the AI can't handle a specific call?",
      answer: "Our AI agents are designed to handle 90% of common inquiries. For complex situations, the agent seamlessly transfers calls to your team with full context of the conversation. You can also set custom escalation rules based on your preferences."
    },
    {
      question: "Can the AI integrate with my existing calendar and CRM?",
      answer: "Yes! We integrate with popular platforms like Google Calendar, Outlook, Calendly, HubSpot, Salesforce, and many others. During setup, we'll connect your AI agent to the tools you already use to create a seamless workflow."
    },
    {
      question: "How much does it cost per call or minute?",
      answer: "There are no per-call or per-minute charges. You pay a flat monthly fee of £150 for unlimited usage, plus a one-time setup fee of £500. This makes budgeting predictable and ensures you're never worried about call volume."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with service-based businesses across industries including healthcare practices, home services (plumbing, HVAC, cleaning), professional services (law, accounting), fitness centers, restaurants, and more. Our AI agents are customized for each industry's specific needs."
    },
    {
      question: "How does the AI sound? Will customers know it's not human?",
      answer: "Our AI voices are remarkably natural and can be customized to match your brand's tone. While the technology is advanced, we recommend transparency with customers. Most appreciate the 24/7 availability and efficient service the AI provides."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We want you to feel confident and excited about working with us. If you're not satisfied with the service, let us know—we'll do everything we can to make it right. Our goal is to build long-term relationships, not quick wins."
    },
    {
      question: "How secure is my customer data?",
      answer: "We take security seriously. All conversations are encrypted, and we comply with GDPR and data protection regulations. Your customer data is processed securely and never shared with third parties. We can provide detailed security documentation upon request."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our AI voice agents
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg border border-border shadow-sm">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors rounded-lg"
              >
                <h3 className="text-lg font-semibold text-card-foreground pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? Send as an email (listed at bottom of this page) or consult our own AI Voice Assistant (bottom right corner)
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
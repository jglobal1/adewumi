import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Usman",
      role: "SaaS & E-commerce Copywriter",
      company: "",
      content: "I've had the opportunity to work closely with Mr. Adewumi Adeyanju and I can confidently say he brings exceptional strategic clarity to every project. Mr. Adewumi has a rare ability to analyze complex situations, design actionable plans, and drive measurable results. Beyond technical skill, he combine sound judgment with creativity. A balance that consistently turns ideas into growth. I strongly recommend Mr. Adewumi Adeyanju for any role or project requiring vision, strategy, and execution excellence.",
      highlight: "Exceptional strategic clarity and measurable results"
    },
    {
      name: "Onyinyechi Vivian Oleka",
      role: "Founder | Product & Brand Designer | Book Editor",
      company: "Vheevid Hub",
      content: "When I started running Vheevid Hub, I knew what I wanted to build, but I honestly didn't have full clarity on how to lead, scale, or structure it properly. I had the passion and the vision, but leadership, team management, and business strategy felt like uncharted territory. Working with him has been one of the best investments l've made in myself and in my business. He didn't just give me theories; he helped me strategize, structure, and stabilize my company. Today, Vheevid Hub runs with more clarity, stronger systems, and a team that actually works together towards a shared vision.",
      highlight: "Best investment in myself and my business"
    },
    {
      name: "Babatunde James",
      role: "AI-Powered Ghostwriter",
      company: "",
      content: "Adewumi Adeyanju is an exceptional leadership and business coach with a rare ability to simplify complex challenges. His clear and actionable guidance helps founders, solopreneurs, and business leaders build stronger systems, high-performing teams, and companies that truly scale. He is insightful, practical, and deeply committed to seeing leaders succeed. I strongly recommend him to anyone looking to transform their leadership approach and achieve sustainable growth.",
      highlight: "Rare ability to simplify complex challenges"
    },
    {
      name: "Aruwa Usman",
      role: "Business Development Strategist",
      company: "NBSDP, Quest Fellow - Queens University",
      content: "Working with Adewumi honestly changed how I lead and manage my business. Before our sessions, everything felt scattered too many moving parts, too many decisions on my plate. But Adewumi has this calm, precise way of helping you cut through the noise and focus on what actually matters. What I appreciate most is that he blends structure with empathy. He's firm when it's needed, but you always feel supported. Since working with him, my team runs more independently, and I finally have the space to focus on growth instead of micromanaging every detail.",
      highlight: "Changed how I lead and manage my business"
    },
    {
      name: "Anonymous Founder",
      role: "Tech Startup Founder",
      company: "",
      content: "Working with Adewumi has been one of the best investments I've made in my leadership journey. He doesn't just give advice; he helps you build clarity. I remember one particular session where a single question he asked completely reframed how I was thinking about delegation that one insight alone saved me weeks of frustration. If you're serious about building systems that work and leading with confidence (not chaos), Adewumi is the coach you want in your corner.",
      highlight: "Best investment in my leadership journey"
    }
  ];

  const stats = [
    { number: "50+", label: "Businesses Transformed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
    { number: "10+", label: "Industries Served" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-white/90">
              Real transformations from business leaders who took action
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 lg:p-10 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col gap-6">
                  <Quote className="h-10 w-10 text-accent opacity-50" />
                  
                  <blockquote className="text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t">
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                      {testimonial.company && (
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      )}
                    </div>
                    
                    <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {testimonial.highlight}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Common Results Our Clients Achieve</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">For Solo Entrepreneurs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clear business strategy and execution plan</li>
                  <li>• First paying customers within weeks</li>
                  <li>• Systems that save 10+ hours per week</li>
                  <li>• Confidence to make business decisions</li>
                </ul>
              </Card>

              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">For Team Leaders</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Teams that operate independently</li>
                  <li>• 50%+ reduction in micromanagement</li>
                  <li>• Clear accountability and performance metrics</li>
                  <li>• Time to focus on strategic growth</li>
                </ul>
              </Card>

              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">For Founders Scaling</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 2-5x revenue growth within 6 months</li>
                  <li>• Scalable systems and processes</li>
                  <li>• High-performing team structure</li>
                  <li>• Business that runs without them</li>
                </ul>
              </Card>

              <Card className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">For New Leaders</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Confidence in leadership decisions</li>
                  <li>• Clear communication frameworks</li>
                  <li>• Effective delegation systems</li>
                  <li>• Strong team relationships</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the growing community of leaders who've transformed their businesses with clarity and structure.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Book Your Clarity Session
            </Button>
          </Link>
          <p className="text-white/60 mt-4">Start with a 90-minute session for ₦50,000</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;

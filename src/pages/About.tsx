import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import founderImage from "@/assets/founder.png";
import { CALENDLY_URL } from "@/lib/constants";

const About = () => {
  const whoWeHelp = [
    "Sitting on a business idea and don't know where to start",
    "Running a one-person business and trying to scale",
    "Struggling with team issues or alignment",
    "Unsure which career or skill path fits your goals"
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
              Who We Are
            </h1>
            <p className="text-xl text-white/90">
              The Leaders' Guide helps people grow: personally, professionally, and in business.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-10">
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The Leaders' Guide helps people grow: personally, professionally, and in business. We work with 
                  individuals, founders, and organizations who want structure, clarity, and results that last.
                </p>
                <p>
                  Whether you're:
                </p>
                <ul className="space-y-3 ml-6">
                  {whoWeHelp.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-semibold text-foreground">
                  You don't have to figure it out alone.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Approach</h2>
            </div>
            <Card className="p-10">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We don't train and walk away. We build, guide, and coach you until you can grow with structure and 
                  confidence. Every engagement begins with clarity and ends with measurable progress.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Offerings</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8 border-2 border-accent">
                <div className="mb-4">
                  <span className="px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                    Tier 1
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">The Clarity Session</h3>
                <p className="text-muted-foreground mb-4">
                  One focused session to define your next step.
                </p>
              </Card>

              <Card className="p-8 border-2">
                <div className="mb-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                    Tier 2
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Growth & Structure Programs</h3>
                <p className="text-muted-foreground mb-4">
                  In-depth coaching programs designed to move you from idea to execution, solo to company, and company to scale.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-bold mb-6">Adewumi Adeyanju</h2>
                <p className="text-xl font-semibold text-accent mb-6">Founder, The Leaders' Guide</p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I've spent years helping founders, entrepreneurs, and team leads transform their businesses 
                    from chaotic operations into structured, scalable companies that don't depend on them for every decision.
                  </p>
                  <p>
                    My approach is simple but uncommon: I bring clarity to confusion, structure to chaos, 
                    and actionable strategy to overwhelm. I don't just teach theory, I build alongside you, 
                    ensuring systems work, teams perform, and you gain the freedom you started your business to achieve.
                  </p>
                  <p>
                    Whether you're starting from an idea, stuck as a solopreneur, or struggling to lead a team 
                    that actually delivers, I help you build what you need to grow without burning out.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3"></div>
                  <img 
                    src={founderImage} 
                    alt="Adewumi Adeyanju, Business Coach" 
                    className="relative rounded-2xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a Clarity Session and discover exactly what your business needs to thrive.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl">
              Book Your Clarity Session
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

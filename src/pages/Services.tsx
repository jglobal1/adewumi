import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CALENDLY_URL } from "@/lib/constants";

const Services = () => {
  const whoItsFor = [
    "You have an idea but don't know where to start.",
    "You're trying to choose the right business or career path.",
    "You're running a one-person business and feel stuck.",
    "You're not sure what's holding your growth back."
  ];

  const whatYouGet = [
    "A full clarity audit: where you are, what's blocking you, and what's possible next.",
    "A customized next-step roadmap designed around your exact goals.",
    "Guidance on skills, systems, and opportunities that fit your path.",
    "Option to continue with one of the Growth & Structure Programs after the session."
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
              Tier One
            </h1>
            <p className="text-xl text-white/90">
              The Clarity Session
            </p>
          </div>
        </div>
      </section>

      {/* The Clarity Session */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-10 border-2 border-accent animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-6">
                TIER 1
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Clarity Session</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This is where every transformation starts. Most people don't have business or leadership problems, 
                  they have clarity problems. Before building or scaling anything, you need direction that actually 
                  makes sense for you. This session gives you that direction. It's a focused 90-minute deep dive into 
                  your goals, gaps, and next steps.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Who It Is For</h3>
                <div className="space-y-3">
                  {whoItsFor.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/5 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                <div className="space-y-3">
                  {whatYouGet.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Duration</h4>
                  <p className="text-muted-foreground">90 minutes (virtual/in-person)</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Investment</h4>
                  <p className="text-2xl font-bold text-accent">₦50,000 ($33)</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gradient-accent rounded-xl text-accent-foreground">
                <div>
                  <p className="text-sm opacity-90 mb-2">Ready to get started?</p>
                  <p className="text-lg font-semibold">Book your Clarity Session today</p>
                </div>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="xl" className="bg-white text-primary hover:bg-white/90">
                    Book Your Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Happens Next?</h2>
            <Card className="p-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every transformation starts with clarity. If you're ready to move from confusion to direction, or from 
                direction to growth, your next step is simple: Start with a Clarity Session. We'll uncover where you 
                are, what's blocking progress, and which program fits your goals best.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start With Clarity
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every successful transformation begins with understanding where you are and where you need to go.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl">
              Book Your Clarity Session, ₦50,000
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Award, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import founderImage from "@/assets/founder.png";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Clarity First",
      description: "Every transformation begins with crystal-clear understanding of where you are and where you're going."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Results-Driven",
      description: "We measure success by your outcomes, not just activities. Progress is tangible and measurable."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Build to Last",
      description: "Create systems and teams that run independently, giving you freedom to focus on growth."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Sustainable Growth",
      description: "Scale without burnout by building structure that supports both you and your business."
    }
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
              About The Leaders' Guide
            </h1>
            <p className="text-xl text-white/90">
              Building businesses that work, teams that deliver, and leaders who inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">Meet Adewumi Adeyanju</h2>
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
                  <p className="font-semibold text-foreground">
                    I bring tools, truth, and tough conversations that shift things fast.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/contact">
                    <Button variant="cta" size="lg">
                      Work With Me
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-in">
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

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every engagement and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <Card className="p-10 border-2 border-accent">
              <p className="text-xl leading-relaxed">
                To transform how leaders think, operate, and grow by providing the clarity, 
                systems, and strategies needed to build businesses that scale independently, giving
                founders the freedom to focus on what truly matters while their teams and operations thrive.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Businesses Transformed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Results-Focused Approach</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a Clarity Session and discover exactly what your business needs to thrive.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Book Your Clarity Session
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const clarityBenefits = [
    "Full clarity audit: where you are, what's blocking you, and what's possible next",
    "A customized next-step roadmap designed around your exact goals",
    "Guidance on skills, systems, and opportunities that fit your path",
    "Option to continue with one of the Growth & Structure Programs",
    "90 minutes of focused, strategic consultation",
    "Virtual or in-person session available"
  ];

  const whoItsFors = [
    {
      title: "Have an idea but don't know where to start",
      description: "Get a clear roadmap from concept to launch"
    },
    {
      title: "Trying to choose the right business or career path",
      description: "Make confident decisions with expert guidance"
    },
    {
      title: "Running a one-person business and feel stuck",
      description: "Break through to your next growth stage"
    },
    {
      title: "Not sure what's holding your growth back",
      description: "Identify and eliminate bottlenecks"
    }
  ];

  const approach = [
    {
      step: "1",
      title: "We Listen",
      description: "Deep dive into your current situation, challenges, and goals"
    },
    {
      step: "2",
      title: "We Analyze",
      description: "Identify what's working, what's not, and what opportunities exist"
    },
    {
      step: "3",
      title: "We Design",
      description: "Create a customized roadmap tailored to your specific needs"
    },
    {
      step: "4",
      title: "We Guide",
      description: "Provide clear next steps and ongoing support options"
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
              Our Services
            </h1>
            <p className="text-xl text-white/90">
              We don't train and walk away. We build, guide, and coach you until you can grow with structure and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every engagement begins with clarity and ends with measurable progress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approach.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Clarity Session */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-10 border-2 border-accent animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-6">
                TIER 1 - START HERE
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">The Clarity Session</h2>
              <p className="text-xl text-muted-foreground mb-8">
                This is where every transformation starts
              </p>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg">
                  Most people don't have business or leadership problems—they have clarity problems.
                  Before building or scaling anything, you need direction that actually makes sense for you.
                  This session gives you that direction.
                </p>
              </div>

              <div className="bg-primary/5 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Who It's For</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whoItsFors.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/5 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                <div className="space-y-3">
                  {clarityBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gradient-accent rounded-xl text-accent-foreground">
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-bold">₦50,000</span>
                    <span className="text-xl">($33)</span>
                  </div>
                  <p className="text-sm opacity-90">90-minute session | Virtual or In-Person</p>
                </div>
                <Link to="/contact">
                  <Button variant="default" size="xl" className="bg-white text-primary hover:bg-white/90">
                    Book Your Clarity Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Programs Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-6">
              TIER 2 - AFTER YOUR CLARITY SESSION
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Growth & Structure Programs
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Now that you know where you're going, how do you build it? Each program is designed 
              for a specific stage of your growth.
            </p>

            <Card className="p-8 text-left hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Available Programs:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">The Idea-to-Launch Path</h4>
                  <p className="text-muted-foreground text-sm">For those starting from zero</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">The Solopreneur-to-Company Shift</h4>
                  <p className="text-muted-foreground text-sm">Hire and build your first team</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">The Leader's Operating System</h4>
                  <p className="text-muted-foreground text-sm">Master delegation and leadership</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">The Scale Accelerator</h4>
                  <p className="text-muted-foreground text-sm">Systems for rapid growth</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">The Team Performance Reboot</h4>
                  <p className="text-muted-foreground text-sm">Fix underperforming teams</p>
                </div>
              </div>
              <Link to="/packages">
                <Button variant="hero" size="lg" className="w-full">
                  Explore All Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">How is this different from other business coaches?</h3>
                <p className="text-muted-foreground">
                  We don't just teach theory. We build alongside you, ensuring systems work, teams perform, 
                  and you gain real, measurable results. It's practical, hands-on coaching that gets implemented.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">What if I'm not ready to commit to a full program?</h3>
                <p className="text-muted-foreground">
                  That's exactly why we offer the Clarity Session. It's a single focused session with no long-term 
                  commitment. You get value immediately and can decide if you want to continue.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Do you work with businesses outside Nigeria?</h3>
                <p className="text-muted-foreground">
                  Yes! We work with clients globally. All sessions can be conducted virtually via video call, 
                  making it easy to work together regardless of location.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">What results can I expect in 3 months?</h3>
                <p className="text-muted-foreground">
                  Results depend on your starting point and commitment, but typical outcomes include: clear 
                  business strategy, functioning systems, confident delegation, and measurable revenue growth.
                </p>
              </Card>
            </div>
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
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Book Your Clarity Session - ₦50,000
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

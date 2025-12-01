import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Clock, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      id: "idea-to-launch",
      title: "The Idea-to-Launch Path",
      tagline: "From Concept to Your First Customer",
      price: "Custom Pricing",
      duration: "8-12 weeks",
      ideal: "Aspiring entrepreneurs with an idea but no clear execution plan",
      description: "Transform your business idea into a launched, revenue-generating reality with clear systems and strategy.",
      outcomes: [
        "Validated business idea with clear market fit",
        "Complete business model and revenue strategy",
        "Launch-ready brand, messaging, and positioning",
        "First customers and early revenue",
        "Operational systems to support growth",
        "Confidence to execute independently"
      ],
      includes: [
        "Weekly 1-on-1 strategy sessions",
        "Business model canvas and validation",
        "Go-to-market strategy development",
        "Launch plan and execution support",
        "Ongoing support via messaging",
        "Tools and templates library"
      ]
    },
    {
      id: "solo-to-company",
      title: "The Solopreneur-to-Company Shift",
      tagline: "Hire Right, Build Teams That Deliver",
      price: "Custom Pricing",
      duration: "12-16 weeks",
      ideal: "Solo business owners ready to hire their first team members",
      description: "Stop doing everything yourself. Build a team that actually works, with systems that ensure quality and consistency.",
      outcomes: [
        "Crystal-clear hiring strategy and role definitions",
        "Your first high-performing team members onboarded",
        "Delegation systems that maintain quality",
        "Standard operating procedures documented",
        "Performance management framework in place",
        "Freedom to focus on business growth"
      ],
      includes: [
        "Bi-weekly coaching sessions",
        "Hiring and interview frameworks",
        "Onboarding and training systems",
        "Delegation and accountability tools",
        "Team performance metrics",
        "Ongoing support and troubleshooting"
      ]
    },
    {
      id: "leaders-os",
      title: "The Leader's Operating System",
      tagline: "Lead Without Micromanaging",
      price: "Custom Pricing",
      duration: "12 weeks",
      ideal: "Team leads and managers who want to delegate effectively and build high-performing teams",
      description: "Master the art of leadership, delegation, and building teams that deliver without constant oversight.",
      outcomes: [
        "Team that operates independently with clarity",
        "Effective delegation systems in place",
        "Clear communication and accountability structures",
        "Performance management mastery",
        "Reduced time spent on operational tasks",
        "Confident, decisive leadership presence"
      ],
      includes: [
        "Weekly leadership coaching sessions",
        "Custom leadership operating system",
        "Delegation and decision-making frameworks",
        "Team communication protocols",
        "Performance review and feedback systems",
        "Crisis management playbooks"
      ]
    },
    {
      id: "scale-accelerator",
      title: "The Scale Accelerator",
      tagline: "Rapid Growth Without Breaking",
      price: "Custom Pricing",
      duration: "16 weeks",
      ideal: "Established businesses ready to scale operations 2-5x",
      description: "Build the systems, team, and strategy needed to scale rapidly without losing quality or burning out.",
      outcomes: [
        "Scalable systems that support 2-5x growth",
        "High-performing team structure",
        "Predictable revenue and growth metrics",
        "Automated processes and workflows",
        "Strategic growth roadmap executed",
        "Business that runs independently"
      ],
      includes: [
        "Intensive bi-weekly strategy sessions",
        "Complete systems audit and redesign",
        "Growth strategy and execution plan",
        "Team structure and hiring roadmap",
        "Process automation and optimization",
        "Monthly progress reviews and adjustments"
      ]
    },
    {
      id: "team-reboot",
      title: "The Team Performance Reboot",
      tagline: "Fix Underperforming Teams Fast",
      price: "Custom Pricing",
      duration: "8 weeks",
      ideal: "Leaders dealing with underperforming, unmotivated, or chaotic teams",
      description: "Diagnose what's broken and rebuild your team into a high-performing unit that delivers consistently.",
      outcomes: [
        "Clear diagnosis of team performance issues",
        "Accountability and communication systems fixed",
        "Team motivation and engagement restored",
        "Performance standards established",
        "Conflict resolution and alignment achieved",
        "Consistent delivery and quality maintained"
      ],
      includes: [
        "Intensive weekly team audits",
        "Individual team member assessments",
        "Communication and accountability reset",
        "Performance management overhaul",
        "Team culture and motivation work",
        "Ongoing monitoring and adjustment"
      ]
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
              Growth & Structure Programs
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive coaching programs designed to transform your business at every stage of growth
            </p>
            <p className="text-white/80">
              All programs begin with a Clarity Session (₦50,000) to ensure the perfect fit
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className="p-8 lg:p-10 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Package Info */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{pkg.title}</h2>
                      <p className="text-accent font-medium text-lg">{pkg.tagline}</p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold">Duration:</span>
                        <span className="text-muted-foreground">{pkg.duration}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-semibold block mb-1">Ideal For:</span>
                          <span className="text-muted-foreground">{pkg.ideal}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <div className="text-3xl font-bold mb-2">{pkg.price}</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Pricing customized based on your specific needs and scope
                      </p>
                      <Link to="/contact">
                        <Button variant="cta" size="lg" className="w-full">
                          Get Custom Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-lg">{pkg.description}</p>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-5 w-5 text-accent" />
                        <h3 className="text-xl font-semibold">What You'll Achieve</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {pkg.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {pkg.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
            
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Book Your Clarity Session</h3>
                    <p className="text-muted-foreground">
                      Start with a 90-minute Clarity Session (₦50,000) to understand your situation and goals.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Choose Your Program</h3>
                    <p className="text-muted-foreground">
                      Based on the Clarity Session, we'll recommend the best program for your stage and goals.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Get Custom Pricing</h3>
                    <p className="text-muted-foreground">
                      Receive a customized proposal with pricing tailored to your specific needs and scope.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Start Your Transformation</h3>
                    <p className="text-muted-foreground">
                      Begin your program with regular coaching sessions, ongoing support, and accountability.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every program begins with a Clarity Session to ensure we create the perfect solution for your business.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Book Your Clarity Session
            </Button>
          </Link>
          <p className="text-white/60 mt-4">₦50,000 ($33) | 90 Minutes | Virtual or In-Person</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;

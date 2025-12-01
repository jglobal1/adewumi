import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import founderImage from "@/assets/founder.png";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle2,
  ArrowRight,
  Building2,
  UserCircle,
  Briefcase
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Crystal-Clear Clarity",
      description: "Build clarity so you know exactly where to focus your energy and resources for maximum impact."
    },
    {
      icon: <Building2 className="h-8 w-8 text-accent" />,
      title: "Scalable Systems",
      description: "Transform ideas into systems and processes that run without you being involved in every decision."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "High-Performing Teams",
      description: "Build and lead teams that consistently deliver results without constant micromanagement."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Strategic Growth",
      description: "Scale your business from 'everything depends on me' to 'this runs independently.'"
    }
  ];

  const audiences = [
    {
      icon: <UserCircle className="h-12 w-12 text-accent" />,
      title: "Solo Entrepreneurs",
      description: "Ready to move from hustle to structured, scalable operations that don't require you 24/7."
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Founders & Team Leads",
      description: "Done with micromanaging, repeating instructions, and cleaning up after others."
    },
    {
      icon: <Briefcase className="h-12 w-12 text-accent" />,
      title: "New Leaders",
      description: "Need clarity, confidence, and a roadmap to lead effectively from day one."
    }
  ];

  const testimonials = [
    {
      name: "David Usman",
      role: "SaaS & E-commerce Copywriter",
      content: "Mr. Adewumi brings exceptional strategic clarity to every project. He has a rare ability to analyze complex situations, design actionable plans, and drive measurable results."
    },
    {
      name: "Onyinyechi Vivian Oleka",
      role: "Founder | Product & Brand Designer",
      content: "Working with him has been one of the best investments I've made in myself and in my business. He helped me strategize, structure, and stabilize my company."
    },
    {
      name: "Babatunde James",
      role: "AI-Powered Ghostwriter",
      content: "His clear and actionable guidance helps founders, solopreneurs, and business leaders build stronger systems, high-performing teams, and companies that truly scale."
    }
  ];

  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Large Heading */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Your Trusted Business & Leadership Partner
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Building businesses that work, teams that deliver, and leaders who inspire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button variant="cta" size="xl" className="group shadow-gold text-lg px-8 py-6">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="hero" size="xl" className="text-lg px-8 py-6 border-2 border-white/30 bg-white/10 hover:bg-white/20">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Image with Geometric Shape */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full h-[500px] lg:h-[600px]">
                {/* Geometric shape overlay - Parallelogram/polygon effect */}
                <div className="absolute inset-0" style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                }}>
                  <img 
                    src={founderImage} 
                    alt="Professional business team" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop';
                    }}
                  />
                </div>
                
                {/* Decorative geometric shapes - overlapping polygons */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20" style={{
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  transform: 'rotate(45deg)',
                  zIndex: -1
                }}></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/30" style={{
                  clipPath: 'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)',
                  transform: 'rotate(-12deg)',
                  zIndex: -1
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Who We Serve</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 mt-3">Who We Work With</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We help people grow: <span className="text-foreground font-semibold">personally, professionally, and in business.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {audiences.map((audience, index) => (
              <Card 
                key={index} 
                className="p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in border-2 hover:border-accent group bg-card hover:bg-accent/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{audience.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{audience.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Core Services</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 mt-3">What We Do Together</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              My clients don't just get guidance—they get <span className="text-foreground font-semibold">results: confidence, structure, 
              and freedom to grow without burnout.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in group border-2 hover:border-accent bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We don't train and walk away. We build, guide, and coach you until you can grow with structure and confidence.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Tier 1 */}
            <Card className="p-10 border-2 border-accent bg-gradient-to-br from-accent/10 via-accent/5 to-transparent shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-6 shadow-md">
                    TIER 1 - START HERE
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">The Clarity Session</h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    One focused <span className="font-semibold text-foreground">90-minute session</span> to define your next step. 
                    This is where every transformation starts.
                  </p>
                  <div className="flex items-baseline gap-3 mb-8">
                    <span className="text-5xl font-bold text-accent">₦50,000</span>
                    <span className="text-xl text-muted-foreground">($33)</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <span className="text-base leading-relaxed"><span className="font-semibold">Full clarity audit:</span> where you are, what's blocking you, what's possible next</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <span className="text-base leading-relaxed"><span className="font-semibold">Customized roadmap</span> designed around your exact goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <span className="text-base leading-relaxed"><span className="font-semibold">Strategic guidance</span> on skills, systems, and opportunities</span>
                    </li>
                  </ul>
                </div>
                <div className="md:text-right">
                  <Link to="/contact">
                    <Button variant="cta" size="lg" className="w-full md:w-auto text-lg px-8 py-6 shadow-gold">
                      Book Your Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Tier 2 */}
            <Card className="p-8 border-2 hover:border-accent transition-all duration-300">
              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
                TIER 2
              </div>
              <h3 className="text-3xl font-bold mb-3">Growth & Structure Programs</h3>
              <p className="text-muted-foreground mb-6">
                In-depth coaching programs designed to move you from idea to execution, solo to company, and company to scale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <Lightbulb className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">The Idea-to-Launch Path</p>
                    <p className="text-sm text-muted-foreground">Start your business right</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">The Solopreneur-to-Company Shift</p>
                    <p className="text-sm text-muted-foreground">Build your first team</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">The Leader's Operating System</p>
                    <p className="text-sm text-muted-foreground">Master delegation & leadership</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">The Scale Accelerator</p>
                    <p className="text-sm text-muted-foreground">Rapid growth systems</p>
                  </div>
                </div>
              </div>
              <Link to="/packages">
                <Button variant="hero" size="lg" className="w-full">
                  View All Programs
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Leaders Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real business leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" size="lg">
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(var(--accent),0.2),transparent_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-block">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase bg-accent/10 px-4 py-2 rounded-full border border-accent/30">
                Take The First Step
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ready to Transform<br />Your Business?
            </h2>
            <p className="text-2xl md:text-3xl text-white/95 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Start with a <span className="text-accent font-bold">Clarity Session</span> and discover exactly what your business needs to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="xl" className="text-lg px-12 py-8 shadow-gold">
                  Book Your Clarity Session Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/packages">
                <Button variant="hero" size="xl" className="text-lg px-12 py-8 border-2">
                  View All Programs
                </Button>
              </Link>
            </div>
            <div className="pt-8 space-y-3">
              <p className="text-white/90 text-xl font-semibold">
                Investment: <span className="text-accent">₦50,000 ($33)</span>
              </p>
              <p className="text-white/70 text-lg">
                Virtual or In-Person | 90 Minutes | Results Guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

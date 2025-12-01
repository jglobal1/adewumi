import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import founderImage from "@/assets/founder.png";
import { CheckCircle2, ArrowRight, BookOpen, ExternalLink, ShoppingBag } from "lucide-react";
import { CALENDLY_URL, SELAR_URL, SELAR_PRODUCTS } from "@/lib/constants";

const Index = () => {
  const whoWeServe = [
    "You have an idea but don’t know where to start.",
    "You’re trying to choose the right business or career path.",
    "You’re running a one-person business and feel stuck.",
    "You’re not sure what’s holding your growth back."
  ];

  const clarityBenefits = [
    "A full clarity audit: where you are, what’s blocking you, and what’s possible next.",
    "A customized next-step roadmap designed around your exact goals.",
    "Guidance on skills, systems, and opportunities that fit your path.",
    "Option to continue with one of the Growth & Structure Programs after the session."
  ];

  const priceSummary = [
    {
      tier: "Tier 1: Clarity Session",
      description: "₦50,000 ($33) – One-time session",
      bullets: [
        "90-minute 1-on-1 session (virtual or in-person)",
        "Your first step to direction and action"
      ]
    },
    {
      tier: "Idea to Execution (3-6 months)",
      description: "Validate your idea, define your offer, and design structure.",
      bullets: [
        "₦250,000 ($167) – Monthly",
        "₦700,000 ($467) – 3 Months",
        "₦1,300,000 ($867) – 6 Months"
      ]
    },
    {
      tier: "Solo to Company (3-6 months)",
      description: "Move from being the business to building one.",
      bullets: [
        "₦250,000 ($167) – Monthly",
        "₦600,000 ($400) – 3 Months",
        "₦1,200,000 ($800) – 6 Months"
      ]
    },
    {
      tier: "Team Alignment (3-6 months)",
      description: "Realign teams, roles, and accountability.",
      bullets: [
        "₦200,000 ($133) – Monthly",
        "₦600,000 ($400) – 3 Months",
        "₦1,000,000 ($667) – 6 Months"
      ]
    },
    {
      tier: "Team Building (3-6 months)",
      description: "Hire, onboard, and develop the right people.",
      bullets: [
        "₦270,000 ($180) – Monthly",
        "₦800,000 ($533) – 3 Months",
        "₦1,500,000 ($1,000) – 6 Months"
      ]
    },
    {
      tier: "Scale & Expansion (3-6+ months)",
      description: "Replicate success and expand sustainably.",
      bullets: [
        "₦335,000 ($223) – Monthly",
        "₦1,000,000 ($667) – 3 Months",
        "₦2,000,000 ($1,333) – 6 Months"
      ]
    }
  ];

  const howToBeginSteps = [
    "Book your Clarity Session: send a DM or message using the contact details, schedule a date, and confirm payment.",
    "Have your session: we’ll review your current stage, goals, and challenges so you walk away with a clear roadmap.",
    "Choose your program: if you want ongoing support, select the Growth & Structure Program that matches your journey."
  ];

  const growthPrograms = [
    {
      name: "Package 1: Idea to Execution",
      intro:
        "You’ve got the idea, but turning it into something real is where most people get stuck. This program helps you move from ‘thinking about it’ to ‘building it.’",
      who: [
        "You have a business idea but don’t know how to start.",
        "You’ve been planning for months but can’t seem to take action.",
        "You’ve tried to start before but got overwhelmed or unsure of the next steps."
      ],
      deliverables: [
        "Step-by-step guidance to move from concept to launch.",
        "Help identifying your best product or service offer.",
        "Business model and structure that fit your vision and lifestyle.",
        "Simple marketing and sales strategy for your first customers.",
        "Systems and tools set up for tracking progress and results.",
        "Optional support with hiring or partnerships if needed."
      ],
      duration: "3 or 6 months (depending on your pace and commitment).",
      delivery: [
        "Bi-weekly 1:1 strategy sessions.",
        "Access to templates, checklists, and launch frameworks.",
        "WhatsApp support between sessions.",
        "Monthly progress review and milestone tracking."
      ],
      outcomes: [
        "A fully structured and validated business.",
        "Systems ready for consistent operation.",
        "Clarity on your target market and customer approach.",
        "Confidence to operate and grow independently."
      ],
      pricing: [
        "₦250,000 ($167) – Monthly",
        "₦700,000 ($467) – 3 Months",
        "₦1,300,000 ($867) – 6 Months"
      ]
    },
    {
      name: "Package 2: Solo to Company",
      intro:
        "Running a one-person business is exhausting. This program helps you transition from being the business to building one.",
      who: [
        "You’re a freelancer, consultant, or agency owner doing everything alone.",
        "You’re making money but struggling to grow or take time off.",
        "You want to build a small team that can help you scale sustainably.",
        "You need structure, systems, and clear roles in your business."
      ],
      deliverables: [
        "Business structure setup for growth (departments, roles, and reporting lines).",
        "Help identifying the first key hires or outsourced roles.",
        "Delegation systems and management frameworks.",
        "Workflow and process documentation templates.",
        "Revenue planning and cash-flow structure for small teams.",
        "Performance tracking systems to measure progress."
      ],
      duration: "3 or 6 months (depending on your scale goal).",
      delivery: [
        "Bi-weekly private coaching sessions.",
        "Access to team structure and hiring templates.",
        "Systems and process setup sessions.",
        "Accountability and support through WhatsApp.",
        "Monthly business performance review."
      ],
      outcomes: [
        "A structured business that runs with or without you.",
        "A clear team setup and defined roles.",
        "Systems for accountability, performance, and results.",
        "More time to focus on growth instead of survival."
      ],
      pricing: [
        "₦250,000 ($167) – Monthly",
        "₦600,000 ($400) – 3 Months",
        "₦1,200,000 ($800) – 6 Months"
      ]
    },
    {
      name: "Package 3: Team Alignment",
      intro:
        "Your team isn’t broken, they’re just not aligned. This program brings everyone back to clarity, ownership, and results.",
      who: [
        "You lead a small or growing team but performance is inconsistent.",
        "Your team members are unclear about goals or priorities.",
        "Meetings end with talk, not execution.",
        "You want stronger ownership and accountability within your team."
      ],
      deliverables: [
        "A full team alignment audit uncovering where clarity and accountability are missing.",
        "Rebuilding your mission, goals, and key deliverables.",
        "Clear roles and responsibilities framework.",
        "Practical meeting structure for clarity and follow-through.",
        "Communication and reporting system setup.",
        "Leadership coaching for stronger direction and influence."
      ],
      duration: "3 or 6 months (depending on team size and complexity).",
      delivery: [
        "Team assessment and leadership onboarding.",
        "Bi-weekly team coaching and leader strategy sessions.",
        "Accountability check-ins with department heads or team leads.",
        "Communication and execution framework setup.",
        "Optional on-site team sessions for deeper culture reset."
      ],
      outcomes: [
        "Teams have clear direction and goals that drive results.",
        "They own their responsibilities without micromanagement.",
        "Communication and collaboration improve.",
        "Execution becomes consistent with stronger accountability."
      ],
      pricing: [
        "₦200,000 ($133) – Monthly",
        "₦600,000 ($400) – 3 Months",
        "₦1,000,000 ($667) – 6 Months"
      ]
    },
    {
      name: "Package 4: Team Building",
      intro:
        "Building a team is more than hiring people; it’s about putting the right people in the right seats. This program helps you build teams that actually work.",
      who: [
        "You’re ready to expand beyond yourself or your small core team.",
        "You want to build a leadership or departmental structure.",
        "You’ve hired people before but didn’t get the results you expected.",
        "You want systems that help new hires integrate fast and perform well."
      ],
      deliverables: [
        "Team structure design and role clarity framework.",
        "Recruitment guidance and interview frameworks for better hires.",
        "Leadership and onboarding process setup.",
        "Culture and performance standards definition.",
        "Accountability and feedback systems.",
        "Support in developing team leads and internal managers."
      ],
      duration: "3 or 6 months (depending on number of hires and goals).",
      delivery: [
        "Bi-weekly coaching and implementation sessions.",
        "Hiring and onboarding tools.",
        "Team lead and manager development sessions.",
        "Culture and performance workshops (virtual or on-site).",
        "Ongoing review and adjustment of structure as the team grows."
      ],
      outcomes: [
        "A complete team structure that supports your growth.",
        "Clarity on roles, expectations, and performance standards.",
        "A strong culture that drives collaboration and accountability.",
        "A team you can trust to deliver without constant supervision."
      ],
      pricing: [
        "₦270,000 ($180) – Monthly",
        "₦800,000 ($533) – 3 Months",
        "₦1,500,000 ($1,000) – 6 Months"
      ]
    },
    {
      name: "Package 5: Scale & Expansion",
      intro:
        "Growth is easy when it’s new. Scaling is where discipline begins. This program is for founders who are ready to multiply what’s already working.",
      who: [
        "You’ve built a functional business and want to expand to multiple outlets, cities, or regions.",
        "You want to grow output, revenue, or market share sustainably.",
        "You’re ready to build a second layer of leadership or management.",
        "You want to move from hands-on operation to strategic oversight."
      ],
      deliverables: [
        "Full business audit to identify what’s scalable and what’s not.",
        "Growth systems setup: marketing, operations, finance, and HR.",
        "Replication model for new locations or departments.",
        "Strategic plan and execution roadmap for scaling.",
        "Leadership and accountability structure for expansion.",
        "Performance metrics and dashboards to track progress."
      ],
      duration: "3 or 6 months (extendable to retainer).",
      delivery: [
        "Bi-weekly executive strategy sessions.",
        "Systems and process setup sessions.",
        "Growth mapping and scalability framework.",
        "Leadership team coaching.",
        "Optional on-site sessions for expansion rollout."
      ],
      outcomes: [
        "A clear expansion roadmap and strategy.",
        "A business model that can replicate without breaking.",
        "A team and structure that sustain growth.",
        "The confidence to scale without losing control."
      ],
      pricing: [
        "₦335,000 ($223) – Monthly",
        "₦1,000,000 ($667) – 3 Months",
        "₦2,000,000 ($1,333) – 6 Months"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SchemaMarkup />
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Large Heading */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/70">
                  Profile & Packages
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                THE <br />
                LEADERS’ <br />
                GUIDE
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 tracking-wide">
                Clarity. Structure. Growth.
              </p>
              <p className="text-lg text-white/80 max-w-2xl">
                All we do is simple: help people grow personally, professionally, and in business.
                This page is the exact profile and packages we use with every client.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="xl" className="group shadow-gold text-lg px-8 py-6">
                    Book Your Clarity Session
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
                <Link to="/services">
                  <Button variant="hero" size="xl" className="text-lg px-8 py-6 border-2 border-white/30 bg-white/10 hover:bg-white/20">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Image with Geometric Shape */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-full h-[500px] lg:h-[600px]">
                {/* Geometric shape overlay - Parallelogram/polygon effect */}
                <div className="absolute inset-0" style={{
                  clipPath: "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)"
                }}>
                  <img 
                    src={founderImage} 
                    alt="Adewumi Adeyanju leading a session" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop";
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

      {/* Who We Are / Approach / Offerings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-2">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Who We Are</p>
              <h3 className="text-2xl font-bold mb-4">The Leaders’ Guide</h3>
              <p className="text-muted-foreground leading-relaxed">
                We help people grow: personally, professionally, and in business. Individuals, founders,
                and organizations come to us when they want structure, clarity, and results that last.
              </p>
            </Card>
            <Card className="p-8 border-2">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Our Approach</p>
              <h3 className="text-2xl font-bold mb-4">Clarity → Structure → Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don’t train and walk away. We build, guide, and coach you until you can grow with structure
                and confidence. Every engagement begins with clarity and ends with measurable progress.
              </p>
            </Card>
            <Card className="p-8 border-2">
              <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Our Offerings</p>
              <h3 className="text-2xl font-bold mb-4">Two Coaching Tiers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tier 1 is a single Clarity Session. Tier 2 is a collection of Growth & Structure Programs that
                move you from idea to execution, solo to company, and company to scale.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="p-8 border-2">
              <h4 className="text-xl font-semibold mb-4">Who We Help</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you’re dreaming about a business, running everything alone, managing a team, or trying
                to scale what already works—you don’t have to figure it out alone.
              </p>
              <ul className="space-y-3">
                {whoWeServe.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8 border-2">
              <h4 className="text-xl font-semibold mb-4">How We Engage</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We offer two levels of coaching engagement:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg">Tier 1: The Clarity Session</p>
                  <p className="text-muted-foreground">
                    One focused session to define your next step.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Tier 2: Growth & Structure Programs</p>
                  <p className="text-muted-foreground">
                    In-depth coaching programs designed to move you from idea to execution, solo to company,
                    and company to scale.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Clarity Session */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center">
              <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">Tier One</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">The Clarity Session</h2>
              <p className="text-muted-foreground text-lg">
                Duration: 90 minutes (virtual/in-person) | Investment: ₦50,000 ($33)
              </p>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              This is where every transformation starts. Most people don’t have business or leadership problems,
              they have clarity problems. Before building or scaling anything, you need direction that actually
              makes sense for you. This session gives you that direction. It’s a focused deep dive into your goals,
              gaps, and next steps.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-2">
                <h3 className="text-xl font-semibold mb-4">Who It Is For</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {whoWeServe.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 border-2">
                <h3 className="text-xl font-semibold mb-4">What You’ll Get</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {clarityBenefits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="text-center space-y-4">
              <p className="text-muted-foreground text-lg">
                Contact: +234 706 053 5490 · theleadersguide123@gmail.com · @AdewumiAdeyanju
              </p>
              <Link to="/contact">
                <Button variant="cta" size="xl">
                  Book Your Clarity Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="p-10 border-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">What Happens Next?</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">Every Transformation Starts With Clarity</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ready to move from confusion to direction, or from direction to growth? Start with the Clarity Session.
                  We’ll uncover where you are, what’s blocking progress, and which program fits your goals best.
                </p>
              </div>
              <div className="space-y-4">
                {howToBeginSteps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Price Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">Price Summary</span>
            <h2 className="text-4xl font-bold mt-4">Transparent Investment Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {priceSummary.map((item) => (
              <Card key={item.tier} className="p-6 border-2">
                <h3 className="text-2xl font-semibold mb-2">{item.tier}</h3>
                <p className="text-accent font-semibold mb-4">{item.description}</p>
                <ul className="space-y-2 text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Structure Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          <div className="text-center">
            <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">Tier Two</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Growth & Structure Programs</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              After your clarity session, the question becomes: now that you know where you’re going, how do you build it?
              Each program below is designed for a specific stage of growth.
            </p>
          </div>

          <div className="space-y-10">
            {growthPrograms.map((program) => (
              <Card key={program.name} className="p-8 border-2 space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-accent mb-2">Tier Two</p>
                    <h3 className="text-3xl font-bold">{program.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-sm">Duration: {program.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg">{program.intro}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Who it’s for</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {program.who.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">What you’ll get</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {program.deliverables.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Delivery</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {program.delivery.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Expected outcome</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {program.outcomes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Investment</h4>
                  <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                    {program.pricing.map((price) => (
                      <span
                        key={price}
                        className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold text-accent"
                      >
                        {price}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selar Products Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <ShoppingBag className="h-8 w-8 text-accent" />
                <h2 className="text-4xl md:text-5xl font-bold">Digital Products & Resources</h2>
              </div>
              <p className="text-xl text-muted-foreground mb-4">
                Explore our collection of leadership guides, courses, and business resources
              </p>
              <a 
                href={SELAR_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline font-semibold"
              >
                View All Products on Selar
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SELAR_PRODUCTS.map((product, index) => (
                <a
                  key={index}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent h-full flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-4 group-hover:text-accent transition-colors text-sm leading-tight">
                        {product.title}
                      </h3>
                    </div>
                    <div className="mt-auto pt-4 border-t">
                      <div className="flex items-center gap-2">
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-bold text-accent">
                          {product.price}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-accent transition-colors">
                        <span>View</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(var(--accent),0.25),transparent_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-accent/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
          <span className="text-sm uppercase tracking-[0.3em] text-white/70">Ready?</span>
          <h2 className="text-5xl md:text-6xl font-bold">Start with a Clarity Session</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Your clarity session is the first step to everything you’ve been trying to figure out alone.
            Let’s help you build what’s next and build it right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl" className="px-10 py-6">
                Book Clarity Session
              </Button>
            </a>
            <Link to="/services">
              <Button variant="hero" size="xl" className="px-10 py-6 border-2">
                View Programs
              </Button>
            </Link>
          </div>
          <p className="text-white/80">+234 706 053 5490 · theleadersguide123@gmail.com</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CALENDLY_URL } from "@/lib/constants";

const Packages = () => {
  const packages = [
    {
      id: "idea-to-execution",
      title: "Package 1: Idea to Execution",
      duration: "3 or 6 months (depending on your pace and commitment)",
      whoIsItFor: [
        "You have a business idea but don't know how to start.",
        "You've been planning for months but can't seem to take action.",
        "You've tried to start before but got overwhelmed or unsure of the next steps."
      ],
      whatYouGet: [
        "Step-by-step guidance to move from concept to launch.",
        "Help identifying your best product or service offer.",
        "Business model and structure that fit your vision and lifestyle.",
        "Simple marketing and sales strategy for your first customers.",
        "Systems and tools setup for tracking progress and results.",
        "Optional support with hiring or partnerships if needed."
      ],
      delivery: [
        "Bi-weekly 1:1 strategy sessions.",
        "Access to templates, checklists, and launch frameworks.",
        "WhatsApp support between sessions.",
        "Monthly progress review and milestone tracking."
      ],
      expectedOutcome: [
        "A fully structured and validated business.",
        "Systems ready for consistent operation.",
        "Clarity on your target market and customer approach.",
        "Confidence to operate and grow independently."
      ],
      pricing: {
        monthly: "₦250,000 ($167)",
        threeMonths: "₦700,000 ($467)",
        sixMonths: "₦1,300,000 ($867)"
      },
      description: "You've got the idea. But turning it into something real is where most people get stuck. This program helps you move from 'thinking about it' to 'building it.' You'll define your business model, structure your plan, and set up the right systems to get started with confidence."
    },
    {
      id: "solo-to-company",
      title: "Package 2: Solo to Company",
      duration: "3 or 6 months (depending on your scale goal)",
      whoIsItFor: [
        "You're a freelancer, consultant, or agency owner doing everything alone.",
        "You're making money but struggling to grow or take time off.",
        "You want to build a small team that can help you scale sustainably.",
        "You need structure, systems, and clear roles in your business."
      ],
      whatYouGet: [
        "Business structure setup for growth (departments, roles, and reporting lines).",
        "Help identifying the first key hires or outsourced roles.",
        "Delegation systems and management frameworks.",
        "Workflow and process documentation templates.",
        "Revenue planning and cash flow structure for small teams.",
        "Performance tracking systems to measure progress."
      ],
      delivery: [
        "Bi-weekly private coaching sessions.",
        "Access to team structure and hiring templates.",
        "Systems and process setup sessions.",
        "Accountability and support through WhatsApp.",
        "Monthly business performance review"
      ],
      expectedOutcome: [
        "A structured business that runs with or without you.",
        "A clear team setup and defined roles.",
        "Systems for accountability, performance, and results.",
        "More time to focus on growth instead of survival."
      ],
      pricing: {
        monthly: "₦250,000 ($167)",
        threeMonths: "₦600,000 ($400)",
        sixMonths: "₦1,200,000 ($800)"
      },
      description: "Running a one-person business is exhausting. You do everything yourself; marketing, delivery, operations, finance and it works, until it doesn't. This program helps you transition from being the business to building one. You'll learn how to structure, delegate, and set up a small team that can help you grow without burning out"
    },
    {
      id: "team-alignment",
      title: "Package 3: Team Alignment",
      duration: "3 or 6 months (depending on team size and complexity)",
      whoIsItFor: [
        "You lead a small or growing team but performance is inconsistent.",
        "Your team members are unclear about goals or priorities.",
        "Meetings end with talk, not execution.",
        "You want stronger ownership and accountability within your team."
      ],
      whatYouGet: [
        "A full team alignment audit, uncovering where clarity and accountability are missing.",
        "Rebuilding your mission, goals, and key deliverables.",
        "Clear roles and responsibilities framework.",
        "Practical meeting structure for clarity and follow-through.",
        "Communication and reporting system setup.",
        "Leadership coaching for stronger direction and influence."
      ],
      delivery: [
        "Team assessment and leadership onboarding.",
        "Bi-weekly team coaching and leader strategy sessions.",
        "Accountability check-ins with department heads or team leads.",
        "Communication and execution framework setup.",
        "Optional on-site team sessions for deeper culture reset."
      ],
      expectedOutcome: [
        "Have clear direction and goals that drive results.",
        "Own their responsibilities without micromanagement.",
        "Communicate and collaborate with clarity",
        "Deliver consistently with improved accountability."
      ],
      pricing: {
        monthly: "₦200,000 ($133)",
        threeMonths: "₦600,000 ($400)",
        sixMonths: "₦1,000,000 ($667)"
      },
      description: "Your team isn't broken, they're just not aligned. Everyone's working, but not in the same direction. Meetings feel repetitive, communication breaks down, and execution drags. This program helps you bring your team back to clarity, ownership, and results. We realign goals, define accountability, and rebuild the culture that drives performance"
    },
    {
      id: "team-building",
      title: "Package 4: Team Building",
      duration: "3 or 6 months (depending on number of hires and goals)",
      whoIsItFor: [
        "You're ready to expand beyond yourself or your small core team.",
        "You want to build a leadership or departmental structure.",
        "You've hired people before but didn't get the results you expected.",
        "You want systems that help new hires integrate fast and perform well."
      ],
      whatYouGet: [
        "Team structure design and role clarity framework.",
        "Recruitment guidance and interview frameworks for better hires.",
        "Leadership and onboarding process setup.",
        "Culture and performance standards definition.",
        "Accountability and feedback systems.",
        "Support in developing team leads and internal managers."
      ],
      delivery: [
        "Bi-weekly coaching and implementation sessions.",
        "Hiring and onboarding tools.",
        "Team lead and manager development sessions.",
        "Culture and performance workshops (virtual or on-site).",
        "Ongoing review and adjustment of structure as the team grows."
      ],
      expectedOutcome: [
        "A complete team structure that supports your growth.",
        "Clarity on roles, expectations, and performance standards.",
        "A strong culture that drives collaboration and accountability.",
        "A team you can trust to deliver without constant supervision."
      ],
      pricing: {
        monthly: "₦270,000 ($180)",
        threeMonths: "₦800,000 ($533)",
        sixMonths: "₦1,500,000 ($1,000)"
      },
      description: "Building a team is more than hiring people, it's about putting the right people in the right seats. Many businesses rush to hire but forget to prepare for what comes after: structure, leadership, and growth. This program helps you build teams that actually work, aligned, capable, and accountable."
    },
    {
      id: "scale-expansion",
      title: "Package 5: Scale & Expansion",
      duration: "3 or 6 months (extendable to retainer)",
      whoIsItFor: [
        "You've built a functional business and want to expand to multiple outlets, cities, or regions.",
        "You want to grow output, revenue, or market share sustainably.",
        "You're ready to build a second layer of leadership or management.",
        "You want to move from hands-on operation to strategic oversight."
      ],
      whatYouGet: [
        "Full business audit to identify what's scalable and what's not.",
        "Growth systems setup: marketing, operations, finance, and HR.",
        "Replication model for new locations or departments.",
        "Strategic plan and execution roadmap for scaling.",
        "Leadership and accountability structure for expansion.",
        "Performance metrics and dashboards to track progress."
      ],
      delivery: [
        "Bi-weekly executive strategy sessions.",
        "Systems and process setup sessions.",
        "Growth mapping and scalability framework.",
        "Leadership team coaching.",
        "Optional on-site sessions for location or expansion rollout."
      ],
      expectedOutcome: [
        "A clear expansion roadmap and strategy.",
        "A business model that can replicate without breaking.",
        "A team and structure that sustain growth.",
        "The confidence to scale without losing control."
      ],
      pricing: {
        monthly: "₦335,000 ($223)",
        threeMonths: "₦1,000,000 ($667)",
        sixMonths: "₦2,000,000 ($1,333)"
      },
      description: "Growth is easy when it's new. Scaling is where discipline begins. This program is for founders and business owners who've built something that works and are now ready to multiply it. We focus on structure, systems, and strategy for expansion without chaos."
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
            <div className="inline-block px-4 py-2 bg-accent/20 text-white text-sm font-semibold rounded-full mb-6">
              TIER TWO
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Growth & Structure Programs
            </h1>
            <p className="text-xl text-white/90 mb-4">
              After your clarity session, the next question is simple:
            </p>
            <p className="text-xl text-white/90 mb-4">
              Now that you know where you're going, how do you build it?
            </p>
            <p className="text-lg text-white/80">
              That's where these programs come in. Each program is designed for a specific stage of your growth, 
              whether you're shaping an idea, building a team, or scaling a company. You choose based on where 
              you are and what outcome you want next.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
            
            <div className="space-y-4 mb-12">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Choose your program:</span> After your clarity session, we'll decide which one fits your current stage best.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Commit to your term:</span> 3 months, 6 months, or a retainer for ongoing support.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Work together closely:</span> We'll meet, review, and implement practical actions that create visible results.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-accent/5">
              <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Idea to Execution:</span> For those starting from scratch.</p>
                <p><span className="font-semibold text-foreground">Solo to Company:</span> For one-person businesses ready to grow into a team.</p>
                <p><span className="font-semibold text-foreground">Team Alignment:</span> For companies struggling with confusion, culture, or accountability.</p>
                <p><span className="font-semibold text-foreground">Team Building:</span> For leaders ready to build strong, performing teams.</p>
                <p><span className="font-semibold text-foreground">Scale & Expansion:</span> For established businesses aiming to multiply their reach and output.</p>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="font-semibold mb-2">Each program includes:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span>Personalized coaching and strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span>Accountability check-ins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span>Templates, frameworks, and tools to apply immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span>Access to Rework Leadership resources and guidance</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id}
                className="p-8 lg:p-10 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-3xl font-bold mb-4">{pkg.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{pkg.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Who is it for?</h3>
                      <ul className="space-y-2">
                        {pkg.whoIsItFor.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">What You'll get</h3>
                      <ul className="space-y-2">
                        {pkg.whatYouGet.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Duration</h3>
                      <p className="text-muted-foreground">{pkg.duration}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Delivery</h3>
                      <ul className="space-y-2">
                        {pkg.delivery.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Expected Outcome</h3>
                      <ul className="space-y-2">
                        {pkg.expectedOutcome.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent/5 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Investment</h3>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">{pkg.pricing.monthly} – Monthly</p>
                        <p className="text-muted-foreground">{pkg.pricing.threeMonths} – 3 Months</p>
                        <p className="text-muted-foreground">{pkg.pricing.sixMonths} – 6 Months</p>
                      </div>
                      <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="block mt-4">
                        <Button variant="cta" size="lg" className="w-full">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-10 bg-accent/5">
              <h2 className="text-3xl font-bold mb-4">Next Step!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Start with a Clarity Session (₦50,000 | $33). After that, we'll choose the right coaching 
                package for your stage and goals.
              </p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="xl">
                  Book Your Clarity Session
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </a>
            </Card>
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
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="xl">
                  Book Your Clarity Session
                </Button>
              </a>
          <p className="text-white/60 mt-4">₦50,000 ($33) | 90 Minutes | Virtual or In-Person</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;

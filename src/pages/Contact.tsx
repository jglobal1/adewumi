import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, MapPin, Clock, ArrowRight, Copy, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { CALENDLY_URL } from "@/lib/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Service mapping to display names
  const serviceMap: Record<string, string> = {
    "clarity-session": "Clarity Session (₦50,000)",
    "idea-to-launch": "The Idea-to-Launch Path",
    "solo-to-company": "Solopreneur-to-Company Shift",
    "leaders-os": "The Leader's Operating System",
    "scale-accelerator": "The Scale Accelerator",
    "team-reboot": "Team Performance Reboot",
    "not-sure": "Not Sure Yet"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Get service display name
    const serviceDisplayName = serviceMap[formData.service] || formData.service;

    // Construct WhatsApp message with all form data
    const messageParts = [
      "Hello! I'm interested in booking a session.",
      "",
      "MY DETAILS:",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Service Interest: ${serviceDisplayName}`,
      "",
      "ABOUT MY SITUATION:",
      formData.message,
      "",
      "I filled this form on your website and would like to proceed with booking."
    ];
    
    const whatsappMessage = messageParts.join('\n');
    
    // Store the message and show dialog
    setGeneratedMessage(whatsappMessage);
    setShowMessageDialog(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      toast.success("Message copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy message. Please select and copy manually.");
    }
  };

  const handleOpenWhatsApp = () => {
    const whatsappNumber = '2347060535490';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Open WhatsApp (empty, so they can paste)
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
    
    toast.success("Opening WhatsApp... Paste your message there!");
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Clarity Session Inquiry");
    const emailBody = encodeURIComponent(generatedMessage);
    const emailUrl = `mailto:theleadersguide123@gmail.com?subject=${subject}&body=${emailBody}`;
    window.location.href = emailUrl;
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us | Book Clarity Session | The Leaders' Guide"
        description="Contact The Leaders' Guide to book your Clarity Session. Get in touch via WhatsApp, email, or phone. We respond within 24 hours. Located in Abuja, Nigeria with virtual sessions available worldwide."
        url="https://reworkbusinesshub.com/contact"
        canonical="https://reworkbusinesshub.com/contact"
      />
      <SchemaMarkup 
        pageType="contact"
        pageTitle="Contact Us - Book Your Clarity Session"
        pageDescription="Contact The Leaders' Guide to book your Clarity Session and start your business transformation journey"
        pageUrl="https://reworkbusinesshub.com/contact"
      />
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90">
              Ready to transform your business? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Book Your Clarity Session</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours to schedule your session.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          maxLength={100}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          maxLength={255}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+234 XXX XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          maxLength={20}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest *</Label>
                        <Select 
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clarity-session">Clarity Session (₦50,000)</SelectItem>
                            <SelectItem value="idea-to-launch">The Idea-to-Launch Path</SelectItem>
                            <SelectItem value="solo-to-company">Solopreneur-to-Company Shift</SelectItem>
                            <SelectItem value="leaders-os">The Leader's Operating System</SelectItem>
                            <SelectItem value="scale-accelerator">The Scale Accelerator</SelectItem>
                            <SelectItem value="team-reboot">Team Performance Reboot</SelectItem>
                            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Situation *</Label>
                      <Textarea
                        id="message"
                        placeholder="What challenges are you facing? What are you hoping to achieve?"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        maxLength={1000}
                      />
                      <p className="text-xs text-muted-foreground text-right">
                        {formData.message.length}/1000 characters
                      </p>
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Submit Inquiry
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you'll see your message and can copy it to send via WhatsApp or email.
                      We respond to all inquiries within 24 hours.
                    </p>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+2347060535490" className="text-muted-foreground hover:text-accent transition-colors">
                          +234 7060535490
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:theleadersguide123@gmail.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                          theleadersguide123@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">
                          Abuja, Nigeria
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          (Virtual sessions available worldwide)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-muted-foreground">
                          Within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-accent/5">
                  <h3 className="text-xl font-semibold mb-2">Prefer WhatsApp?</h3>
                  <p className="text-muted-foreground mb-4">
                    Click the floating WhatsApp button at the bottom right to start a direct conversation.
                  </p>
                  <a
                    href="https://wa.me/2347060535490?text=Hi,%20I'd%20like%20to%20know%20more%20about%20your%20coaching%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      Message on WhatsApp
                    </Button>
                  </a>
                </Card>

                <Card className="p-6 bg-primary text-primary-foreground">
                  <h3 className="text-xl font-semibold mb-4">How to Begin!</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-bold mb-2">Book your Clarity Session</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• Send a DM or message using the contact details below.</li>
                        <li>• Schedule a date for your session.</li>
                        <li>• Pay the session fee to confirm your slot.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Have your session</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• We'll review your current stage, business goals, and challenges.</li>
                        <li>• You'll walk away with a clear roadmap for your next move.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Choose your program</h4>
                      <p className="ml-4">If you want ongoing support, pick from the Growth & Structure Programs that match your journey.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready?</h2>
            <Card className="p-10 bg-white/10 backdrop-blur-sm border-white/20">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                Your clarity session is the first step to everything you've been trying to figure out alone. 
                Let's help you build what's next and build it right.
              </p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="xl" className="bg-white text-primary hover:bg-white/90">
                  Book Your Clarity Session Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Message Dialog */}
      <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              Your Message is Ready!
            </DialogTitle>
            <DialogDescription>
              Copy the message below and paste it into WhatsApp, or send it via email. We'll respond within 24 hours.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4 border-2">
              <pre className="whitespace-pre-wrap font-sans text-sm text-foreground">
                {generatedMessage}
              </pre>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleCopyMessage}
                variant="default"
                className="flex-1"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Message
                  </>
                )}
              </Button>
              
              <Button
                onClick={handleOpenWhatsApp}
                variant="cta"
                className="flex-1"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Open WhatsApp
              </Button>
              
              <Button
                onClick={handleSendEmail}
                variant="outline"
                className="flex-1"
              >
                <Mail className="mr-2 h-4 w-4" />
                Send via Email
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              💡 Tip: Click "Copy Message" first, then "Open WhatsApp" and paste (Ctrl+V / Cmd+V) into the chat.
            </p>
          </div>
          
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setShowMessageDialog(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Contact;

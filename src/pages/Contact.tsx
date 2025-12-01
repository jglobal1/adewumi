import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
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

    // Construct WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `New Inquiry from Website:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Service Interest: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/2347060535490?text=${whatsappMessage}`, '_blank');

    // Show success message
    toast.success("Redirecting you to WhatsApp...");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
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
                      By submitting this form, you'll be redirected to WhatsApp to complete your booking.
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

      <Footer />
    </div>
  );
};

export default Contact;

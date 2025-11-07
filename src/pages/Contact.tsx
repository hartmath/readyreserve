import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    requestType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dealership: "",
    leadsPerMonth: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        requestType: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dealership: "",
        leadsPerMonth: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageLayout>
      <section className="py-16 sm:py-24 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-accent/30 bg-accent/5">
              <span className="text-xs sm:text-sm text-muted-foreground">Get started today</span>
              <div className="w-px h-4 sm:h-6 bg-accent/30" />
              <span className="font-semibold text-xs sm:text-sm">14-day free trial</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold px-4">
              Get Started with Genesis v3
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Book a demo, request pricing, or apply for our white-label program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card id="contact-form" className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Get in Touch</h2>
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We'll contact you within 24 hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="requestType">Request Type *</Label>
                    <Select
                      value={formData.requestType}
                      onValueChange={(value) => setFormData({ ...formData, requestType: value })}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a request type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Book a Live Demo</SelectItem>
                        <SelectItem value="pricing">Request Pricing PDF</SelectItem>
                        <SelectItem value="whitelabel">Apply for White-Label</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="dealership">Dealership Name *</Label>
                    <Input
                      id="dealership"
                      name="dealership"
                      value={formData.dealership}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="leadsPerMonth">Leads per Month *</Label>
                    <Input
                      id="leadsPerMonth"
                      name="leadsPerMonth"
                      type="number"
                      value={formData.leadsPerMonth}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Request
                  </Button>
                </form>
              )}
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Schedule a Demo?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">See It in Action</div>
                      <div className="text-sm text-muted-foreground">
                        Watch ReadyReserve™ handle live lead scenarios in real-time.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Personalized Setup</div>
                      <div className="text-sm text-muted-foreground">
                        Get a custom implementation plan for your dealership.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Ask Questions</div>
                      <div className="text-sm text-muted-foreground">
                        Speak directly with our sales team and get answers.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Start Free Trial</div>
                      <div className="text-sm text-muted-foreground">
                        Begin your 14-day trial with full support included.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <h4 className="font-semibold mb-4">Contact Information</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">1-800-DRIVE-AI</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">sales@dealershipaccel.com</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium">Business Hours</div>
                      <div className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</div>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;


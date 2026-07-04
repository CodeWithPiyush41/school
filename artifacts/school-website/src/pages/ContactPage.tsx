import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactPage() {
  const { toast } = useToast();
  const [fields, setFields] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<typeof EMPTY>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (key: keyof typeof EMPTY) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields(prev => ({ ...prev, [key]: e.target.value }));

  const validate = () => {
    const e: Partial<typeof EMPTY> = {};
    if (fields.name.trim().length < 2)      e.name    = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) e.email = "Invalid email address";
    if (fields.phone.trim().length < 10)    e.phone   = "Valid phone number required";
    if (!fields.subject)                    e.subject = "Please select a subject";
    if (fields.message.trim().length < 10)  e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "333bb23e-b580-4d00-821e-9f7974d0aa9c",
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          subject: `[Greenfield Academy] ${fields.subject} – ${fields.name}`,
          message: fields.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Message Sent Successfully!", description: "We will get back to you within 24–48 working hours." });
        setFields(EMPTY);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      toast({ title: "Failed to send message", description: "Please try again or contact us directly by phone.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] pt-[72px]">

      {/* Hero */}
      <div className="bg-primary py-16 md:py-20 text-white text-center">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or inquiries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 max-w-6xl mx-auto">

          {/* ── Contact Form ── */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-2">
                Send us a message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our administrative team will respond promptly.
              </p>
            </div>

            <Card className="border-none shadow-md bg-white dark:bg-card">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  {/* Row 1 — Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={fields.name}
                        onChange={set("name")}
                        required
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={fields.email}
                        onChange={set("email")}
                        required
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2 — Phone + Subject */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={fields.phone}
                        onChange={set("phone")}
                      />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        name="subject"
                        value={fields.subject}
                        onValueChange={val => setFields(prev => ({ ...prev, subject: val }))}
                      >
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Admission Enquiry">Admission Enquiry</SelectItem>
                          <SelectItem value="General Information">General Information</SelectItem>
                          <SelectItem value="Careers">Careers</SelectItem>
                          <SelectItem value="Feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                    </div>
                  </div>

                  {/* Row 3 — Message */}
                  <div className="space-y-1.5">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      className="min-h-[150px] resize-y"
                      value={fields.message}
                      onChange={set("message")}
                      required
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* ── Contact Info Sidebar ── */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-2 lg:hidden">
              Contact Information
            </h2>

            <div className="bg-primary/5 dark:bg-card p-6 rounded-2xl border border-border space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Campus Address</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    123 Greenfield Road,<br />
                    Safdarjung Enclave,<br />
                    New Delhi 110001, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Phone Numbers</h4>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Reception: <a href="tel:+917742484927" className="hover:text-primary">+91-77424-84927</a></p>
                    <p>Admissions: <a href="tel:+917742484927" className="hover:text-primary">+91-77424-84927</a></p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Email Addresses</h4>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p><a href="mailto:workwithpp46@gmail.com" className="hover:text-primary">workwithpp46@gmail.com</a></p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-accent">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Working Hours</h4>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p><span className="font-medium text-foreground">Mon–Fri:</span> 8:00 AM – 4:00 PM</p>
                    <p><span className="font-medium text-foreground">Saturday:</span> 9:00 AM – 1:00 PM</p>
                    <p className="text-destructive mt-1">Sunday Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-muted rounded-2xl h-[250px] flex flex-col items-center justify-center text-muted-foreground border border-border shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5" />
              <MapPin className="h-10 w-10 mb-2 text-primary/40 z-10" />
              <p className="font-medium z-10">Map View Placeholder</p>
              <Button variant="link" size="sm" className="z-10 mt-2">Get Directions</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

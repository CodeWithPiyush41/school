import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Simulated form submission
    console.log("Form data:", data);
    toast({
      title: "Message Sent Successfully",
      description: "We will get back to you within 24-48 working hours.",
      variant: "default",
    });
    form.reset();
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
          
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-2">Send us a message</h2>
              <p className="text-muted-foreground">Fill out the form below and our administrative team will respond promptly.</p>
            </div>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="admission">Admission Enquiry</SelectItem>
                                <SelectItem value="general">General Information</SelectItem>
                                <SelectItem value="careers">Careers</SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Type your message here..." 
                              className="min-h-[150px] resize-y"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-2 lg:hidden">Contact Information</h2>
            
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
                    <p><span className="font-medium text-foreground">Mon-Fri:</span> 8:00 AM - 4:00 PM</p>
                    <p><span className="font-medium text-foreground">Saturday:</span> 9:00 AM - 1:00 PM</p>
                    <p className="text-destructive mt-1">Sunday Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small map placeholder for sidebar */}
            <div className="bg-muted rounded-2xl h-[250px] flex flex-col items-center justify-center text-muted-foreground border border-border shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5 pattern-dots" />
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

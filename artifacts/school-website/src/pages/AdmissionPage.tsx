import { Download, FileText, CheckCircle2, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  { num: "01", title: "Download Form", desc: "Get the admission form from our website or collect it from the school office." },
  { num: "02", title: "Submit Documents", desc: "Submit the filled form along with necessary documents before the deadline." },
  { num: "03", title: "Entrance Test", desc: "A basic aptitude and language test for students seeking admission in Grade 2 and above." },
  { num: "04", title: "Interview", desc: "A brief interaction of the parents and child with the Principal." },
  { num: "05", title: "Offer Letter", desc: "Selected candidates will receive an admission offer via email." },
  { num: "06", title: "Fee Payment", desc: "Confirm the admission by paying the admission and first quarter fees." },
];

const DOCUMENTS = [
  "Birth Certificate (Original & Copy)",
  "Report Card of Previous Class",
  "4 Passport Size Photographs of Child",
  "Residential Proof of Parents",
  "Transfer Certificate (TC) from Previous School",
  "Medical Certificate indicating Blood Group & allergies"
];

export default function AdmissionPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] pt-[72px]">
      
      {/* Hero */}
      <div className="bg-primary py-16 md:py-24 text-white text-center">
        <div className="container px-4">
          <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 mb-6 text-sm px-4 py-1">
            Admissions 2025–26 Now Open
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Join Greenfield Academy</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Take the first step towards a bright future. Learn about our admission process and requirements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 space-y-24">
        
        {/* Process Timeline */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">Admission Process</h2>
            <p className="text-muted-foreground mt-4">A simple, transparent 6-step process</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="relative p-6 bg-card border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <span className="absolute -top-6 -left-2 text-6xl font-black text-primary/10 dark:text-primary/30 z-0 select-none">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents & Download split */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">Required Documents</h2>
            <div className="space-y-4">
              {DOCUMENTS.map((doc, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  <span className="text-foreground font-medium">{doc}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic">
              * Original documents are required for verification only and will be returned.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="p-8 text-center space-y-6">
                <FileText className="h-16 w-16 mx-auto text-accent" />
                <h3 className="text-2xl font-serif font-bold text-white">Download Admission Form</h3>
                <p className="text-primary-foreground/80">
                  Download the official admission form, fill it completely, and submit it to the office along with the required documents.
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold w-full sm:w-auto h-14 px-8">
                  <Download className="mr-2 h-5 w-5" /> Download PDF Form
                </Button>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-3 gap-4">
              <a href="mailto:admissions@greenfieldacademy.edu" className="block">
                <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Fee Enquiry</span>
                </Button>
              </a>
              <a href="tel:+911112345678" className="block">
                <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Call Us</span>
                </Button>
              </a>
              <a href="https://wa.me/911112345678" target="_blank" rel="noreferrer" className="block">
                <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2 border-green-500 hover:bg-green-50 dark:hover:bg-green-950">
                  <MessageSquare className="h-5 w-5 text-green-500" />
                  <span className="text-green-600 dark:text-green-500">WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}

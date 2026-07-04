import { Shield, Target, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TIMELINE = [
  { year: "1999", title: "Foundation", desc: "Greenfield Academy was established with a vision to provide quality education." },
  { year: "2005", title: "Secondary Wing Added", desc: "Expanded infrastructure to accommodate middle and secondary school students." },
  { year: "2010", title: "Science Wing Inaugurated", desc: "State-of-the-art laboratories opened to foster practical learning." },
  { year: "2018", title: "Digital Transformation", desc: "Smart classrooms and digital library rollout across the campus." },
  { year: "2024", title: "25 Years of Excellence", desc: "Celebrating a quarter-century of shaping future leaders." },
];

const VALUES = [
  { icon: Shield, title: "Integrity", desc: "Upholding honesty and strong moral principles in all endeavors." },
  { icon: Target, title: "Excellence", desc: "Striving for the highest standards in academics and character." },
  { icon: Heart, title: "Empathy", desc: "Fostering a compassionate and inclusive community." },
  { icon: Award, title: "Leadership", desc: "Empowering students to take initiative and lead by example." }
];

const FACULTY_STATS = [
  { dept: "Science", count: 12 },
  { dept: "Mathematics", count: 8 },
  { dept: "English", count: 6 },
  { dept: "Social Studies", count: 5 },
  { dept: "Computer Science", count: 4 },
  { dept: "Arts & Physical Ed", count: 8 },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] pt-[72px]">
      
      {/* Hero */}
      <div className="bg-primary py-16 md:py-24 text-white text-center">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Discover our history, our values, and the people dedicated to nurturing the next generation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 space-y-24">
        
        {/* Messages */}
        <section className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 bg-secondary/20 p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white border-b pb-4">Principal's Message</h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" 
                alt="Principal" 
                className="w-32 h-32 rounded-lg object-cover shadow-sm shrink-0"
              />
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "At Greenfield Academy, we believe that education is the most powerful tool to change the world. Our dedicated team works tirelessly to ensure that every student is equipped not just with academic knowledge, but with the moral compass required to navigate life."
                </p>
                <div>
                  <p className="font-bold text-foreground">Dr. Sarah Mitchell</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Principal</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 bg-secondary/20 p-8 rounded-2xl">
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white border-b pb-4">Chairman's Message</h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop" 
                alt="Chairman" 
                className="w-32 h-32 rounded-lg object-cover shadow-sm shrink-0"
              />
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Our vision 25 years ago was simple: create an institution that parents can trust implicitly. Today, seeing our alumni succeed globally, I am proud that we have stayed true to that vision while constantly evolving our methods."
                </p>
                <div>
                  <p className="font-bold text-foreground">Mr. Robert Greenfield</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Values */}
        <section className="text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">Vision & Mission</h2>
            <p className="text-lg text-muted-foreground">
              To inspire lifelong learning and cultivate responsible global citizens who will shape a better tomorrow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, i) => (
              <Card key={i} className="border-none shadow-sm bg-background">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/5 rounded-full text-primary dark:bg-primary/20 dark:text-accent">
                    <val.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg">{val.title}</h3>
                  <p className="text-sm text-muted-foreground">{val.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* History Timeline */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">Our Journey</h2>
          </div>
          <div className="max-w-4xl mx-auto relative border-l-2 border-primary/20 dark:border-primary/50 ml-4 md:ml-auto">
            {TIMELINE.map((item, i) => (
              <div key={i} className="mb-10 ml-8 relative">
                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-accent border-4 border-background shadow" />
                <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                  <span className="text-accent font-bold text-sm tracking-wider">{item.year}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faculty Summary */}
        <section className="bg-primary/5 dark:bg-card p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-4">Our Faculty</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strength lies in our team of 80+ highly qualified and dedicated educators.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {FACULTY_STATS.map((dept, i) => (
              <div key={i} className="bg-background p-4 rounded-xl shadow-sm flex items-center justify-between border border-border">
                <span className="font-medium text-foreground">{dept.dept}</span>
                <span className="bg-primary text-primary-foreground dark:bg-primary/50 px-3 py-1 rounded-full text-sm font-bold">
                  {dept.count}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

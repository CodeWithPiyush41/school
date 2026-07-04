import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  BookOpen, 
  MonitorPlay, 
  Users, 
  ShieldCheck, 
  HeartHandshake,
  MapPin
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const WHY_CHOOSE_US = [
  { icon: Award, title: "Excellence in Education", desc: "Rigorous academic curriculum designed to challenge and inspire." },
  { icon: HeartHandshake, title: "Holistic Development", desc: "Focusing on character, leadership, and emotional intelligence." },
  { icon: MonitorPlay, title: "Modern Infrastructure", desc: "State-of-the-art facilities and smart classrooms for digital learning." },
  { icon: Users, title: "Experienced Faculty", desc: "Dedicated educators who mentor and guide every student." },
  { icon: BookOpen, title: "Strong Alumni Network", desc: "Connect with graduates who are leaders across various industries." },
  { icon: ShieldCheck, title: "Safe Environment", desc: "Secure campus with round-the-clock monitoring and care." },
];

const FACILITIES = [
  { img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop", title: "Smart Classrooms", desc: "Equipped with interactive panels." },
  { img: "https://images.unsplash.com/photo-1571260899304-4250b537753b?w=400&h=300&fit=crop", title: "Computer Lab", desc: "High-speed internet & modern PCs." },
  { img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop", title: "Science Lab", desc: "Fully equipped for practicals." },
  { img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop", title: "Library", desc: "Vast collection of resources." },
  { img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop", title: "Sports Complex", desc: "Indoor & outdoor facilities." },
  { img: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=400&h=300&fit=crop", title: "Art Studio", desc: "Creative space for expression." },
];

const TESTIMONIALS = [
  { name: "Mrs. Sharma", relation: "Parent", rating: 5, quote: "Greenfield has transformed my daughter. The balance of academics and extracurriculars is exceptional.", avatar: "https://ui-avatars.com/api/?name=Mrs+Sharma&background=random" },
  { name: "Rahul Verma", relation: "Student, Grade 12", rating: 5, quote: "The teachers here genuinely care about our future. The smart classes make learning so much easier.", avatar: "https://ui-avatars.com/api/?name=Rahul+Verma&background=random" },
  { name: "Mr. Kapoor", relation: "Parent", rating: 4, quote: "Impressive infrastructure and a very safe environment for kids. Highly recommended.", avatar: "https://ui-avatars.com/api/?name=Mr+Kapoor&background=random" },
  { name: "Priya Singh", relation: "Alumni", rating: 5, quote: "The foundation I got at Greenfield helped me excel in college and my career.", avatar: "https://ui-avatars.com/api/?name=Priya+Singh&background=random" },
];


export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="flex flex-col min-h-[100dvh] pt-[72px]">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80" 
            alt="Students on campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 px-4 md:px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 mb-6 text-sm px-4 py-1">
            Admission Open 2025–26
          </Badge>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg text-white">
            Shaping Minds,<br />Building Futures
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 drop-shadow">
            A tradition of excellence meeting the ambition of tomorrow. Join a community dedicated to academic brilliance and holistic growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admission">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 h-14">
                Apply Now
              </Button>
            </Link>
            <Link href="/academics">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 border-white text-white hover:bg-white/10 dark:hover:bg-white/20">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
                  alt="Dr. Sarah Mitchell, Principal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">Welcome to Greenfield</h2>
              <blockquote className="text-xl italic text-muted-foreground border-l-4 border-accent pl-6 py-2">
                "Education is not just about academic excellence; it is about character building, empathy, and preparing students for the challenges of tomorrow. At Greenfield, we nurture every child's potential in a warm and stimulating environment."
              </blockquote>
              <div>
                <p className="font-bold text-lg text-foreground">Dr. Sarah Mitchell</p>
                <p className="text-muted-foreground">Principal, Greenfield Academy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground dark:bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-primary-foreground/20">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-accent">1500+</h3>
              <p className="text-sm uppercase tracking-wider font-medium text-white/80">Students</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-accent">80+</h3>
              <p className="text-sm uppercase tracking-wider font-medium text-white/80">Teachers</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-accent">25+</h3>
              <p className="text-sm uppercase tracking-wider font-medium text-white/80">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-accent">100%</h3>
              <p className="text-sm uppercase tracking-wider font-medium text-white/80">Board Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30 dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The Greenfield advantage combines tradition with modern educational practices to provide an unparalleled learning experience.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 text-primary dark:bg-primary/20 dark:text-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">Our Facilities</h2>
              <Link href="/about" className="text-primary hover:underline font-medium dark:text-accent">View All</Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {FACILITIES.map((fac, idx) => (
                <div key={idx} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img src={fac.img} alt={fac.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <h4 className="font-bold text-lg">{fac.title}</h4>
                    <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">{fac.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-primary/5 dark:bg-card border-y">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">What Our Community Says</h2>
          </div>
          <div className="max-w-4xl mx-auto overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((test, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                  <Card className="bg-background border-none shadow-md">
                    <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                      <div className="flex gap-1 text-accent">
                        {[...Array(test.rating)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl font-serif italic text-foreground max-w-2xl">
                        "{test.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4 mt-4">
                        <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                        <div className="text-left">
                          <p className="font-bold text-foreground">{test.name}</p>
                          <p className="text-sm text-muted-foreground">{test.relation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">Visit Our Campus</h2>
            <div className="bg-muted rounded-2xl h-[400px] flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed border-border shadow-sm">
              <MapPin className="h-16 w-16 mb-4 text-primary/50" />
              <h3 className="text-2xl font-bold mb-2">Map Placeholder</h3>
              <p className="text-lg">Google Maps integration goes here</p>
              <p className="text-sm mt-4">123 Greenfield Road, New Delhi 110001</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import { BookOpen, Monitor, FlaskConical, Library, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CLASSES = [
  { level: "Primary", grades: "Grades 1-5", desc: "Focusing on foundational skills, creativity, and exploration through play and structured learning." },
  { level: "Middle School", grades: "Grades 6-8", desc: "Encouraging critical thinking, independent study habits, and comprehensive subject understanding." },
  { level: "Secondary", grades: "Grades 9-12", desc: "Rigorous preparation for board exams, career counseling, and advanced analytical skills." },
];

const HUBS = [
  { title: "Smart Classrooms", icon: Monitor, img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop", desc: "Every classroom is equipped with interactive whiteboards and digital content to make learning engaging." },
  { title: "Science Labs", icon: FlaskConical, img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop", desc: "Dedicated Physics, Chemistry, and Biology labs complying with the highest safety and academic standards." },
  { title: "Computer Center", icon: Monitor, img: "https://images.unsplash.com/photo-1571260899304-4250b537753b?w=600&h=400&fit=crop", desc: "Over 50 modern workstations with high-speed internet and updated software for coding and research." },
  { title: "Library", icon: Library, img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop", desc: "A silent haven with over 10,000 volumes, periodicals, and a digital catalog accessible to all students." },
];

const SPORTS = [
  "Cricket", "Football", "Basketball", "Athletics", "Swimming", "Chess", "Music", "Dance", "Drama", "Debate"
];

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] pt-[72px]">
      
      {/* Hero */}
      <div className="bg-primary py-16 md:py-24 text-white text-center border-b-8 border-accent">
        <div className="container px-4 flex flex-col items-center">
          <GraduationCap className="h-16 w-16 mb-6 text-accent" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academics</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A comprehensive CBSE curriculum designed to challenge, inspire, and empower students.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 space-y-24">
        
        {/* Classes Offered */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-4">Classes Offered</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CLASSES.map((item, idx) => (
              <Card key={idx} className="h-full flex flex-col border-t-4 border-t-accent hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl font-serif">{item.level}</CardTitle>
                    <Badge variant="secondary">{item.grades}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between text-primary">
                    Curriculum Details <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Curriculum overview text */}
        <section className="bg-secondary/30 p-8 md:p-12 rounded-3xl max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary dark:text-white">Curriculum Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We follow the Central Board of Secondary Education (CBSE) curriculum. Our pedagogical approach integrates traditional learning with modern technology, focusing on continuous and comprehensive evaluation. We ensure a balanced ratio of formative and summative assessments to track true understanding rather than rote memorization.
          </p>
        </section>

        {/* Learning Hubs */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white">Learning Hubs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {HUBS.map((hub, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl bg-card border shadow-sm">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={hub.img} 
                    alt={hub.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary dark:bg-primary/30 dark:text-accent">
                      <hub.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{hub.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{hub.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sports & Activities */}
        <section className="border-t pt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white mb-4">Co-Curricular & Sports</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe a healthy body houses a healthy mind. Our students participate actively in various sports and arts.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {SPORTS.map((sport, i) => (
              <Badge key={i} variant="outline" className="text-base py-2 px-6 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {sport}
              </Badge>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

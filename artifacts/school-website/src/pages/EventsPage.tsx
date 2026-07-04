import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LATEST_NEWS = [
  { id: 1, date: "Nov 28, 2024", type: "Achievement", title: "Greenfield Wins Inter-School Debate", excerpt: "Our senior team secured first place in the National Sahodaya Debate Competition held in Mumbai." },
  { id: 2, date: "Nov 20, 2024", type: "Academics", title: "Science Fair 2024 Highlights", excerpt: "Over 200 projects were displayed. Congratulations to the Grade 9 team for their working model of a sustainable city." },
  { id: 3, date: "Nov 15, 2024", type: "Notice", title: "Winter Uniforms Mandatory", excerpt: "All students must switch to winter uniforms starting December 1st. Check the handbook for guidelines." },
  { id: 4, date: "Nov 02, 2024", type: "Sports", title: "Annual Sports Meet Concludes", excerpt: "Blue House takes the overall championship trophy this year. A spectacular display of athletic talent." },
];

const UPCOMING_EVENTS = [
  { date: "Dec 15", month: "DEC", title: "Annual Sports Day", time: "09:00 AM - 04:00 PM", location: "School Sports Ground" },
  { date: "Dec 20", month: "DEC", title: "Winter Concert & Art Exhibition", time: "05:00 PM - 08:00 PM", location: "Main Auditorium" },
  { date: "Jan 05", month: "JAN", title: "Parent-Teacher Meeting (Term 1)", time: "08:30 AM - 01:30 PM", location: "Respective Classrooms" },
  { date: "Jan 26", month: "JAN", title: "Republic Day Celebration", time: "08:00 AM - 10:00 AM", location: "Main Assembly Area" },
];

const HOLIDAYS = [
  { name: "Republic Day", date: "Jan 26, 2025", day: "Sunday" },
  { name: "Holi", date: "Mar 14, 2025", day: "Friday" },
  { name: "Eid-ul-Fitr", date: "Apr 10, 2025", day: "Thursday" },
  { name: "Summer Break", date: "May 20 – Jun 15, 2025", day: "Various" },
  { name: "Independence Day", date: "Aug 15, 2025", day: "Friday" },
  { name: "Diwali Break", date: "Oct 20 – Oct 22, 2025", day: "Mon-Wed" },
  { name: "Winter Break", date: "Dec 24 – Jan 01, 2026", day: "Various" },
];

const EXAMS = [
  { term: "Term 1 Exams", date: "Sep 1 – Sep 15", classes: "Grades 1 to 12" },
  { term: "Mid-term Assessments", date: "Nov 1 – Nov 7", classes: "Grades 6 to 12" },
  { term: "Pre-Boards", date: "Jan 10 – Jan 25", classes: "Grades 10 & 12" },
  { term: "Term 2 / Final Exams", date: "Feb 20 – Mar 10", classes: "Grades 1 to 9 & 11" },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] pt-[72px]">
      
      {/* Hero */}
      <div className="bg-primary py-16 md:py-20 text-white text-center">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">News & Events</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Stay updated with what's happening at Greenfield Academy.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 space-y-20">
        
        {/* Latest News & Upcoming Events Split */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          
          {/* Latest News */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white border-b pb-2">Latest News</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {LATEST_NEWS.map(news => (
                <Card key={news.id} className="h-full flex flex-col hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">{news.type}</Badge>
                      <span className="text-xs text-muted-foreground flex items-center"><Calendar className="h-3 w-3 mr-1" />{news.date}</span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3">{news.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0 text-primary group">
                      Read full story <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary dark:text-white border-b pb-2">Upcoming Events</h2>
            <div className="space-y-4">
              {UPCOMING_EVENTS.map((event, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border bg-card hover:bg-secondary/20 transition-colors">
                  <div className="bg-primary/10 dark:bg-primary/30 text-primary dark:text-white rounded-lg flex flex-col items-center justify-center p-2 min-w-[70px] shrink-0 border border-primary/20">
                    <span className="text-2xl font-bold font-serif leading-none">{event.date.split(' ')[1]}</span>
                    <span className="text-xs font-medium uppercase tracking-wider">{event.month}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground leading-tight">{event.title}</h4>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" /> {event.time}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" /> {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Academic Calendar Tables */}
        <section className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white flex items-center gap-2">
              <Calendar className="h-6 w-6 text-accent" /> Exam Schedule
            </h2>
            <Card className="overflow-hidden">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="font-bold text-foreground">Examination</TableHead>
                    <TableHead className="font-bold text-foreground">Dates</TableHead>
                    <TableHead className="font-bold text-foreground">Classes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {EXAMS.map((exam, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{exam.term}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell className="text-muted-foreground">{exam.classes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white">Holiday List 2024-25</h2>
            <Card className="overflow-hidden">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="font-bold text-foreground">Occasion</TableHead>
                    <TableHead className="font-bold text-foreground">Date(s)</TableHead>
                    <TableHead className="font-bold text-foreground hidden sm:table-cell">Day</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {HOLIDAYS.map((holiday, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium text-destructive">{holiday.name}</TableCell>
                      <TableCell>{holiday.date}</TableCell>
                      <TableCell className="text-muted-foreground hidden sm:table-cell">{holiday.day}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

        </section>

      </div>
    </div>
  );
}

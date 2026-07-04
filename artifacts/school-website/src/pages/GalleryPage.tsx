import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = [
  {
    id: "classroom",
    label: "Classroom Photos",
    description: "Learning in action — our smart classrooms and labs",
    color: "bg-blue-600",
    photos: [
      { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop", caption: "Smart Classroom" },
      { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=450&fit=crop", caption: "Group Study Session" },
      { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop", caption: "Science Lab" },
      { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=500&fit=crop", caption: "Library Reading" },
      { src: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=600&h=400&fit=crop", caption: "Computer Lab" },
      { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=450&fit=crop", caption: "Art Class" },
      { src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop", caption: "Library Study Hall" },
      { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=500&fit=crop", caption: "Interactive Board Session" },
    ],
  },
  {
    id: "sports",
    label: "Sports Photos",
    description: "Champions in the making — our sports teams and events",
    color: "bg-green-600",
    photos: [
      { src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop", caption: "Athletics Track" },
      { src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=450&fit=crop", caption: "Basketball Match" },
      { src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&h=400&fit=crop", caption: "Football Ground" },
      { src: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=500&fit=crop", caption: "Swimming Pool" },
      { src: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&h=400&fit=crop", caption: "Cricket Practice" },
      { src: "https://images.unsplash.com/photo-1574271143515-5cddf8da19be?w=600&h=450&fit=crop", caption: "Badminton Court" },
      { src: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&h=400&fit=crop", caption: "Chess Tournament" },
      { src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=500&fit=crop", caption: "Sports Day Awards" },
    ],
  },
  {
    id: "annual-function",
    label: "Annual Function",
    description: "Celebrating talent — our annual cultural extravaganza",
    color: "bg-purple-600",
    photos: [
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop", caption: "Stage Performance" },
      { src: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&h=450&fit=crop", caption: "Cultural Programme" },
      { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop", caption: "Dance Performance" },
      { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=500&fit=crop", caption: "Prize Distribution" },
      { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop", caption: "Music Concert" },
      { src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=450&fit=crop", caption: "Drama Play" },
      { src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop", caption: "Choir Performance" },
      { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=500&fit=crop", caption: "Closing Ceremony" },
    ],
  },
  {
    id: "independence-day",
    label: "Independence Day",
    description: "Honouring the nation — our Independence Day celebrations",
    color: "bg-orange-600",
    photos: [
      { src: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop", caption: "Flag Hoisting Ceremony" },
      { src: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=600&h=450&fit=crop", caption: "March Past" },
      { src: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=600&h=400&fit=crop", caption: "Cultural Display" },
      { src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=500&fit=crop", caption: "Patriotic Dance" },
      { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop", caption: "Student Assembly" },
      { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=450&fit=crop", caption: "Speech by Principal" },
    ],
  },
  {
    id: "republic-day",
    label: "Republic Day",
    description: "Pride and unity — our Republic Day parade and events",
    color: "bg-red-600",
    photos: [
      { src: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=600&h=400&fit=crop", caption: "Republic Day Parade" },
      { src: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=600&h=450&fit=crop", caption: "Guard of Honour" },
      { src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop", caption: "Tableau Display" },
      { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=500&fit=crop", caption: "Cultural Show" },
      { src: "https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=600&h=400&fit=crop", caption: "NCC Contingent" },
      { src: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=600&h=450&fit=crop", caption: "Award Ceremony" },
    ],
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [lightbox, setLightbox] = useState<{ catId: string; index: number } | null>(null);

  const activeCat = CATEGORIES.find(c => c.id === activeCategory)!;
  const lightboxCat = lightbox ? CATEGORIES.find(c => c.id === lightbox.catId)! : null;

  const handlePrev = () => {
    if (!lightbox || !lightboxCat) return;
    setLightbox({ catId: lightbox.catId, index: (lightbox.index - 1 + lightboxCat.photos.length) % lightboxCat.photos.length });
  };

  const handleNext = () => {
    if (!lightbox || !lightboxCat) return;
    setLightbox({ catId: lightbox.catId, index: (lightbox.index + 1) % lightboxCat.photos.length });
  };

  return (
    <div className="flex flex-col min-h-[100dvh] pt-[72px]">

      {/* Hero */}
      <div className="bg-primary py-16 md:py-20 text-white text-center">
        <div className="container px-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Images className="h-8 w-8 text-accent" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Photo Gallery</h1>
          </div>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A window into life at Greenfield — memories from classrooms, sports fields, and grand celebrations.
          </p>
        </div>
      </div>

      <div className="bg-muted/40 border-b border-border sticky top-[72px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                data-testid={`tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap border ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-1.5 h-10 rounded-full ${activeCat.color}`} />
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary dark:text-white">{activeCat.label}</h2>
            <p className="text-muted-foreground text-sm mt-0.5">{activeCat.description}</p>
          </div>
          <Badge variant="secondary" className="ml-auto">
            {activeCat.photos.length} Photos
          </Badge>
        </div>

        {/* Photo Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {activeCat.photos.map((photo, i) => (
            <div
              key={`${activeCategory}-${i}`}
              data-testid={`gallery-photo-${activeCategory}-${i}`}
              className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group relative shadow-sm hover:shadow-xl transition-shadow duration-300"
              onClick={() => setLightbox({ catId: activeCategory, index: i })}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Overview strip */}
      <div className="bg-muted/40 border-t border-border py-10">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-lg font-semibold text-primary dark:text-white mb-6 text-center">Browse All Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                data-testid={`overview-${cat.id}`}
                onClick={() => { setActiveCategory(cat.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`group relative overflow-hidden rounded-xl aspect-video border-2 transition-all duration-200 ${
                  activeCategory === cat.id ? "border-primary shadow-lg" : "border-transparent hover:border-primary/50"
                }`}
              >
                <img
                  src={cat.photos[0].src}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${cat.color} opacity-60`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-bold text-center px-2 leading-tight drop-shadow">
                    {cat.label}
                  </span>
                </div>
                {activeCategory === cat.id && (
                  <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-white shadow" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95 border-none shadow-2xl [&>button]:hidden">
          <DialogTitle className="sr-only">Image preview</DialogTitle>
          <div className="relative flex items-center justify-center min-h-[50vh] max-h-[90vh] p-2">
            {lightbox && lightboxCat && (
              <>
                <img
                  src={lightboxCat.photos[lightbox.index].src.replace('w=600', 'w=1200')}
                  alt={lightboxCat.photos[lightbox.index].caption}
                  className="max-w-full max-h-[80vh] object-contain rounded-md"
                />

                <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3">
                  <Badge className={`${lightboxCat.color} text-white border-0 text-xs`}>
                    {lightboxCat.label}
                  </Badge>
                  <span className="text-white/70 text-sm">
                    {lightbox.index + 1} / {lightboxCat.photos.length}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="lightbox-close"
                    className="text-white/70 hover:text-white hover:bg-white/20 rounded-full h-8 w-8"
                    onClick={() => setLightbox(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm font-medium">
                  {lightboxCat.photos[lightbox.index].caption}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="lightbox-prev"
                  className="absolute left-2 text-white hover:bg-white/20 rounded-full h-12 w-12"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="lightbox-next"
                  className="absolute right-2 text-white hover:bg-white/20 rounded-full h-12 w-12"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

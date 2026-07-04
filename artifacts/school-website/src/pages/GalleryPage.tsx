import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  { id: "classrooms", label: "Classrooms" },
  { id: "sports", label: "Sports" },
  { id: "events", label: "Annual Events" },
  { id: "celebrations", label: "Celebrations" }
];

const PHOTOS = {
  classrooms: [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=600&h=400&fit=crop",
  ],
  sports: [
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518659354019-354da22f4b4a?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&h=400&fit=crop",
  ],
  events: [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop",
  ],
  celebrations: [
    "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop",
  ]
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("classrooms");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const currentPhotos = PHOTOS[activeTab as keyof typeof PHOTOS] || [];

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % currentPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + currentPhotos.length) % currentPhotos.length);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] pt-[72px]">
      
      {/* Hero */}
      <div className="bg-primary py-16 md:py-20 text-white text-center">
        <div className="container px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Glimpses of life, learning, and celebration at Greenfield.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <Tabs defaultValue="classrooms" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <TabsList className="bg-muted">
              {CATEGORIES.map(cat => (
                <TabsTrigger key={cat.id} value={cat.id} className="text-base px-6">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {CATEGORIES.map(cat => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {PHOTOS[cat.id as keyof typeof PHOTOS].map((src, i) => (
                  <div 
                    key={i} 
                    className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group relative"
                    onClick={() => setSelectedImageIndex(i)}
                  >
                    <img 
                      src={src} 
                      alt={`Gallery ${cat.label} ${i+1}`} 
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && setSelectedImageIndex(null)}>
        <DialogContent className="max-w-5xl w-full p-1 bg-black/95 border-none shadow-2xl [&>button]:hidden">
          <DialogTitle className="sr-only">Image preview</DialogTitle>
          
          <div className="relative flex items-center justify-center min-h-[50vh] max-h-[90vh]">
            {selectedImageIndex !== null && (
              <>
                <img 
                  src={currentPhotos[selectedImageIndex].replace('w=400', 'w=1200').replace('w=600', 'w=1200')} 
                  alt="Enlarged view" 
                  className="max-w-full max-h-[85vh] object-contain rounded-md"
                />
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-2 right-2 text-white/70 hover:text-white hover:bg-white/20 z-50 rounded-full"
                  onClick={() => setSelectedImageIndex(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-2 md:left-4 text-white hover:bg-white/20 rounded-full h-12 w-12"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 md:right-4 text-white hover:bg-white/20 rounded-full h-12 w-12"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
                
                <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm">
                  {selectedImageIndex + 1} of {currentPhotos.length}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}

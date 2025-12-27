import { Calendar, Image } from "lucide-react";

const PastEditions = () => {
  return (
    <section id="past-editions" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-foreground">Past </span>
            <span className="text-primary">Editions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A look back at the incredible journeys and ideas shared at previous 
            TEDxNITSilchar events.
          </p>
        </div>

        {/* First Edition Notice */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Inaugural Edition
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            TEDxNITSilchar 2026 marks our first edition! Be part of history as we 
            launch this transformative platform for ideas worth spreading in 
            Northeast India.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span>February 8, 2026</span>
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span>Be Part of History</span>
          </div>
        </div>

        {/* Future Placeholder Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 opacity-30">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-card border border-border rounded-xl aspect-video flex items-center justify-center"
            >
              <div className="text-center">
                <Image className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <span className="text-muted-foreground text-sm">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEditions;

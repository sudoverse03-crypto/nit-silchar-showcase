import { User, Clock } from "lucide-react";

const Speakers = () => {
  const placeholderSpeakers = Array(6).fill(null);

  return (
    <section id="speakers" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Speakers</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Visionaries, innovators, and storytellers who will share their journeys of 
            turning lessons into legacies.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Coming Soon
          </h3>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're curating an incredible lineup of speakers who will inspire, challenge, 
            and transform the way you think. Stay tuned for the big reveal!
          </p>
        </div>

        {/* Placeholder Speaker Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderSpeakers.map((_, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-secondary rounded w-3/4 mb-2" />
                  <div className="h-3 bg-secondary rounded w-1/2" />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-3 bg-secondary rounded w-full" />
                <div className="h-3 bg-secondary rounded w-5/6" />
                <div className="h-3 bg-secondary rounded w-4/6" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-card/90 rounded-xl">
                <span className="text-primary font-heading font-semibold">
                  To Be Revealed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;

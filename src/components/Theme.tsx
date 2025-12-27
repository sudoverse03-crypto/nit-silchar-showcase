import { BookOpen, Heart, TrendingUp } from "lucide-react";

const Theme = () => {
  return (
    <section id="theme" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 100% 50%, hsl(var(--primary)) 0%, transparent 60%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-primary font-medium text-sm uppercase tracking-wide">
                Theme 2026
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              <span className="text-foreground">Turning</span>
              <br />
              <span className="text-foreground">Lessons into</span>
              <br />
              <span className="text-primary">Legacies</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every experience, challenge, and triumph carries within it a lesson waiting 
              to be discovered. But what separates a fleeting moment from an enduring 
              legacy is the wisdom to transform those lessons into lasting impact.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At TEDxNITSilchar 2026, we celebrate the stories of those who have taken 
              their personal journeys—their failures, breakthroughs, and revelations—and 
              turned them into beacons of inspiration for generations to come.
            </p>
          </div>

          {/* Right Content - Visual Cards */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Learn
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Embrace every experience as an opportunity to grow. The most profound 
                    lessons often come from unexpected places.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Lead
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    True leadership emerges when we use our experiences to guide and 
                    uplift others on their own journeys.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Legacy
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Create lasting impact by transforming personal wisdom into shared 
                    knowledge that transcends time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;

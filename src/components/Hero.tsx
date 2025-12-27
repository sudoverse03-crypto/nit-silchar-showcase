import { ArrowDown, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const scrollToRegister = () => {
    const element = document.querySelector("#register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, hsl(var(--primary)) 0%, transparent 50%)`,
            }}
          />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* TEDx Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="text-primary font-heading font-bold">TEDx</span>
            <span className="text-muted-foreground">NIT Silchar</span>
          </div>

          {/* Theme */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Turning Lessons</span>
            <br />
            <span className="text-primary">into Legacies</span>
          </h1>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>February 8, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Auditorium, NIT Silchar</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>6 Speakers</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CountdownTimer targetDate="2026-02-08T09:00:00" />
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToRegister}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg uppercase tracking-wide px-10 py-6 shadow-glow hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              Register Now
              <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

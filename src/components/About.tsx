import { MapPin, Users, Award, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "NIT Silchar",
    description: "Located in the serene landscapes of Assam, NIT Silchar stands as a beacon of technical education in Northeast India.",
  },
  {
    icon: Users,
    title: "3000+ Students",
    description: "A vibrant community of future engineers, innovators, and leaders shaping tomorrow's world.",
  },
  {
    icon: Award,
    title: "NIRF Ranked",
    description: "Consistently ranked among India's top engineering institutions for academic excellence.",
  },
  {
    icon: Lightbulb,
    title: "Ideas Worth Spreading",
    description: "Bringing transformative ideas to the Northeast, inspiring change through powerful storytelling.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            TEDxNITSilchar is an independently organized TED event, bringing together 
            thinkers, doers, and visionaries to share ideas that matter. Join us as we 
            explore the theme of turning life's lessons into lasting legacies.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                What is <span className="text-primary">TEDx</span>?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the spirit of ideas worth spreading, TED has created TEDx, a program 
                of local, self-organized events that bring people together to share a 
                TED-like experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At a TEDx event, TED Talks video and live speakers combine to spark 
                deep discussion and connection. These local, self-organized events are 
                branded TEDx, where x = independently organized TED event.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/40 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-primary">x</span>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Independently Organized
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

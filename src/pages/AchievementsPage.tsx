import { Award, Users, Droplets, Globe, Trophy, Star, TrendingUp, Building2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const stats = [
  { icon: Droplets, value: "50,000+", label: "Tanks Installed" },
  { icon: Users, value: "100,000+", label: "Happy Customers" },
  { icon: Globe, value: "25+", label: "Cities Covered" },
  { icon: TrendingUp, value: "99.9%", label: "Customer Satisfaction" },
];

const awards = [
  {
    icon: Trophy,
    title: "Best Innovation Award 2024",
    organization: "Water Tech Summit",
    description: "Recognized for breakthrough algae prevention technology",
  },
  {
    icon: Star,
    title: "Startup of the Year 2023",
    organization: "Clean Tech Awards",
    description: "Awarded for sustainable water management solutions",
  },
  {
    icon: Award,
    title: "Excellence in Engineering",
    organization: "National Engineering Council",
    description: "Honored for innovative smart tank sensor technology",
  },
  {
    icon: Building2,
    title: "Best B2B Solution 2024",
    organization: "Industry Excellence Awards",
    description: "Recognized for enterprise-grade water management systems",
  },
];

const milestones = [
  { year: "2021", title: "Company Founded", description: "Liminox was established with a vision to revolutionize water storage" },
  { year: "2022", title: "First Product Launch", description: "Launched our flagship smart water tank with algae prevention" },
  { year: "2023", title: "Series A Funding", description: "Raised significant funding to expand operations nationwide" },
  { year: "2023", title: "10,000 Installations", description: "Reached milestone of 10,000 smart tanks installed" },
  { year: "2024", title: "AI Integration", description: "Introduced AI-powered contamination detection system" },
  { year: "2024", title: "National Expansion", description: "Expanded operations to 25+ cities across the country" },
];

const AchievementsPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-water">
              Achievements
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones, awards, and the trust of thousands of customers 
            who chose Liminox for cleaner, safer water.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-water flex items-center justify-center">
                  <stat.icon className="text-primary-foreground" size={28} />
                </div>
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-water transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-water flex items-center justify-center flex-shrink-0">
                    <award.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {award.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {award.organization}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-2" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AchievementsPage;

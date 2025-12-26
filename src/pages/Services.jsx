import React from 'react';
import { Globe, Palette, Server, Settings, CheckCircle } from 'lucide-react';
import { services } from '../data/mock';

const Services = () => {
  const serviceDetails = [
    {
      icon: Globe,
      title: "Business Website Development",
      tagline: "Your website is often the first impression — we make sure it's unforgettable.",
      description: "We craft high-performance, beautifully structured websites that match your industry, style, and goals. Whether you need a minimalist portfolio, a bold business site, or a custom theme built from scratch, we design it to convert your visitors into customers.",
      features: [
        "Custom themes & design variations",
        "Responsive and mobile-first layouts",
        "Fast loading & SEO-friendly structure",
        "Modern animations, clean UI, and smooth UX",
        "E-commerce integration",
        "Content Management Systems"
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
    },
    {
      icon: Palette,
      title: "Brand Logo & Identity Design",
      tagline: "Your logo is your brand's heartbeat — driving recognition, trust, and recall.",
      description: "We create timeless, meaningful, and versatile logos that reflect your personality and values. Our process includes understanding your story, crafting multiple unique concepts, and selecting colors, shapes, and typography that match your essence.",
      features: [
        "Understanding your brand story",
        "Multiple unique logo concepts",
        "Color psychology and selection",
        "Typography that matches your essence",
        "Complete brand identity package",
        "Social media and print-ready files"
      ],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
    },
    {
      icon: Server,
      title: "Custom Domain, Hosting & Setup",
      tagline: "We handle the technical side so you can focus on your business.",
      description: "From choosing the perfect domain to setting up blazing-fast hosting, we ensure your site is secure, smooth, and always available. Your online identity starts with a strong foundation — we build it for you.",
      features: [
        "Premium domain options & registration",
        "Reliable hosting with top-tier performance",
        "Professional email setup (yourname@yourbrand.com)",
        "SSL certificates & security setup",
        "DNS configuration & management",
        "Regular backups & disaster recovery"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
    },
    {
      icon: Settings,
      title: "Website Maintenance & Support",
      tagline: "Your website shouldn't just exist — it should evolve.",
      description: "We offer continuous maintenance so your business stays updated, protected, and performing at its best. Think of us as your digital partners — your growth is ours too.",
      features: [
        "Regular updates & security patches",
        "Instant issue resolution",
        "Content updates whenever you need",
        "Security monitoring & threat protection",
        "Performance optimization",
        "24/7 technical support"
      ],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--vayora-text-secondary)] max-w-3xl mx-auto">
            Complete digital solutions to transform your business presence
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon === 'Globe' ? Globe : service.icon === 'Palette' ? Palette : service.icon === 'Server' ? Server : Settings;
              return (
                <div key={service.id} className="glass-card p-8 text-center card-glow">
                  <div className="w-16 h-16 bg-[var(--vayora-accent-sage)] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-[var(--vayora-bg-primary)]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--vayora-text-muted)] text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceDetails.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'md:col-start-2'}>
                    <div className="w-16 h-16 bg-[var(--vayora-accent-sage)] rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="text-[var(--vayora-bg-primary)]" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[var(--vayora-accent-sage)] font-medium mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-[var(--vayora-text-secondary)] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-lg mb-4">What You Get:</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-[var(--vayora-accent-sage)] flex-shrink-0 mt-1" size={20} />
                          <span className="text-[var(--vayora-text-secondary)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              From concept to launch, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your business, goals, and target audience" },
              { step: "02", title: "Design", description: "Creating beautiful, functional designs that reflect your brand" },
              { step: "03", title: "Development", description: "Building your website with clean code and modern technology" },
              { step: "04", title: "Launch", description: "Testing, optimization, and successful deployment" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-[var(--vayora-accent-sage)] opacity-20 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-[var(--vayora-text-muted)]">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
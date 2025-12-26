import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Globe, Palette, Server, Settings } from 'lucide-react';
import { portfolioProjects, services, testimonials, stats, companyInfo } from '../data/mock';

// Icon mapping
const iconMap = {
  Globe: Globe,
  Palette: Palette,
  Server: Server,
  Settings: Settings
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1549399905-5d1bad747576?w=1920&q=80)'
          }}
        >
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in-up">
            {companyInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gradient font-semibold mb-8 fade-in-up">
            {companyInfo.tagline}
          </p>
          <p className="text-xl text-[var(--vayora-text-secondary)] mb-12 max-w-3xl mx-auto fade-in-up">
            {companyInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Link to="/portfolio" className="btn-sage inline-flex items-center justify-center">
              View Our Work <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="btn-outline-sage inline-flex items-center justify-center">
              Get Started
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 floating">
          <div className="w-6 h-10 border-2 border-[var(--vayora-accent-sage)] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--vayora-accent-sage)] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="stat-number mb-2">{stat.value}</div>
                <p className="text-[var(--vayora-text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Provide
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              Complete digital solutions to elevate your business presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="glass-card p-8 card-glow">
                  <div className="w-12 h-12 bg-[var(--vayora-accent-sage)] rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="text-[var(--vayora-bg-primary)]" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--vayora-text-muted)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-sage inline-flex items-center">
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              Showcasing our best work across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.slice(0, 6).map((project) => (
              <div key={project.id} className="glass-card overflow-hidden hover-lift">
                <div className="image-overlay">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[var(--vayora-accent-sage)] text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[var(--vayora-text-muted)] text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-[var(--vayora-bg-elevated)] text-[var(--vayora-text-muted)] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-sage inline-flex items-center">
              View All Projects <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose VAYORA_WEB
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              We don't just create websites. We build trust, design identity, and craft presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Professional First Impressions",
                description: "Your customers judge your professionalism in seconds. We ensure your first impression is your strongest."
              },
              {
                title: "Brand That Wins Trust",
                description: "Be the brand people choose, not the one they scroll past. We turn your business into a trusted name."
              },
              {
                title: "Local Visibility",
                description: "We bring your neighborhood customers straight to you through strategic SEO and local optimization."
              },
              {
                title: "24/7 Digital Representative",
                description: "Your website works even when you sleep, bringing you inquiries, clients, and business opportunities."
              }
            ].map((item, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-[var(--vayora-accent-sage)]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[var(--vayora-text-muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              Real results from real businesses we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[var(--vayora-accent-sage)] text-[var(--vayora-accent-sage)]" />
                  ))}
                </div>
                <p className="text-[var(--vayora-text-secondary)] text-sm mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-[var(--vayora-text-muted)] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Your Digital Aura
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] mb-8 max-w-2xl mx-auto">
              Your business has potential. Your ideas have power. Your brand deserves to shine online.
            </p>
            <Link to="/contact" className="btn-sage inline-flex items-center">
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
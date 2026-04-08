"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, ShieldCheck, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Alarm Building"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Building Futures with Precision."
      description="Alarm Building delivers premium construction services with an unwavering commitment to quality, safety, and architectural excellence."
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/rear-view-male-architect-holding-blueprint-hard-hat-looking-construction-site_23-2148203954.jpg",
          imageAlt: "Modern architecture project exterior",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-136.jpg",
          imageAlt: "Professional construction management team",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/building-construction_1122-1179.jpg",
          imageAlt: "Architectural building site development",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-person-working-construction-industry_23-2151349688.jpg",
          imageAlt: "Construction workers at building site",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/architect-designing-new-project_23-2148242953.jpg",
          imageAlt: "Modern residential development construction",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-traffic-light-near-modern-corporate-building-against-blue-sky_23-2148140039.jpg",
          imageAlt: "Commercial infrastructure project",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Decades of Excellence"
      metrics={[
        {
          icon: Award,
          label: "Projects Completed",
          value: "150+",
        },
        {
          icon: Users,
          label: "Satisfied Clients",
          value: "120+",
        },
        {
          icon: ShieldCheck,
          label: "Safety Rating",
          value: "100%",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Residential Construction",
          descriptions: [
            "High-quality homes built with care.",
            "Modern and sustainable living spaces.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/two-architects-front-building-site_1398-1721.jpg",
          imageAlt: "Residential construction",
        },
        {
          id: "s2",
          title: "Commercial Development",
          descriptions: [
            "Professional office and retail spaces.",
            "Engineered for durability and growth.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-engineer-architect-looking-clipboard_23-2148233772.jpg",
          imageAlt: "Commercial development",
        },
        {
          id: "s3",
          title: "Structural Renovation",
          descriptions: [
            "Revitalizing historic and modern sites.",
            "Enhanced efficiency and modern aesthetics.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/silhouette-construction-workers-yard_482257-34184.jpg",
          imageAlt: "Structural renovation",
        },
      ]}
      title="Our Expertise"
      description="Comprehensive construction solutions tailored to meet the unique demands of your project."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alex Rivers",
          date: "Jan 2024",
          title: "Real Estate Developer",
          quote: "Alarm Building is the standard for quality in our city.",
          tag: "Commercial",
          avatarSrc: "http://img.b2bpic.net/free-photo/confident-handsome-middle-aged-entrepreneur_1262-4871.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/rear-view-male-architect-holding-blueprint-hard-hat-looking-construction-site_23-2148203954.jpg",
          imageAlt: "happy client portrait professional",
        },
        {
          id: "2",
          name: "Elena Moss",
          date: "Dec 2023",
          title: "Interior Designer",
          quote: "Collaborating with Alarm was seamless and efficient.",
          tag: "Renovation",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-men-working-project_23-2148920575.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-136.jpg",
          imageAlt: "happy client portrait professional",
        },
        {
          id: "3",
          name: "Marcus Chen",
          date: "Nov 2023",
          title: "CEO, TechNode",
          quote: "Reliable, on budget, and incredible craftsmanship.",
          tag: "Commercial",
          avatarSrc: "http://img.b2bpic.net/free-photo/positive-confident-businessman-posing-outside_74855-1183.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/building-construction_1122-1179.jpg",
          imageAlt: "happy client portrait professional",
        },
        {
          id: "4",
          name: "Sarah Jenkins",
          date: "Oct 2023",
          title: "Homeowner",
          quote: "Our dream home became a reality ahead of schedule.",
          tag: "Residential",
          avatarSrc: "http://img.b2bpic.net/free-photo/two-young-happy-women-using-smartphone-by-table_171337-14879.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-person-working-construction-industry_23-2151349688.jpg",
          imageAlt: "happy client portrait professional",
        },
        {
          id: "5",
          name: "David Thorne",
          date: "Sep 2023",
          title: "Architect",
          quote: "The most professional construction team I've worked with.",
          tag: "Development",
          avatarSrc: "http://img.b2bpic.net/free-photo/coworkers-doing-paperwork-office_273609-6924.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/architect-designing-new-project_23-2148242953.jpg",
          imageAlt: "happy client portrait professional",
        },
      ]}
      title="Trusted by Leaders"
      description="See why our clients recommend Alarm Building for their most critical projects."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Project"
      description="Ready to build? Send us a message and our team will get back to you within 24 hours."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Describe your construction project...",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/elegant-building-supervisor-talking-builders-outside_259150-60510.jpg"
      buttonText="Request Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/modern-tokyo-street-background_23-2149394930.jpg"
      logoText="Alarm Building"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Residential",
              href: "#services",
            },
            {
              label: "Commercial",
              href: "#services",
            },
            {
              label: "Renovation",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Get Quote",
              href: "#contact",
            },
            {
              label: "Support",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Alarm Building Company. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

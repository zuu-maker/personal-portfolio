"use client";
import { useState, useRef, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import FloatingElements from "@/components/FloatingElements";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observers = [];
    const refs = [
      { ref: homeRef, id: "home" },
      { ref: servicesRef, id: "services" },
      { ref: portfolioRef, id: "portfolio" },
      { ref: contactRef, id: "contact" },
    ];

    refs.forEach(({ ref, id }) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="relative bg-gray-950 text-white min-h-screen overflow-x-hidden">
      {/* Global styles */}
      <link rel="icon" href="/portfolio/favicon.ico" sizes="any" />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", sans-serif;
          cursor: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Space Grotesk", sans-serif;
        }

        @media (max-width: 1024px) {
          body {
            cursor: auto;
          }
        }

        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #14b8a6);
          border-radius: 4px;
        }
      `}</style>

      <CustomCursor />
      <FloatingElements />
      <Navigation activeSection={activeSection} />

      <main>
        <div ref={homeRef}>
          <HeroSection />
        </div>
        <ServicesSection servicesRef={servicesRef} />
        <PortfolioSection portfolioRef={portfolioRef} />
        <ContactSection contactRef={contactRef} />
      </main>
    </div>
  );
}

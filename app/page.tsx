"use client";

import { useState, useEffect } from "react";
import Sidebar, { Tab } from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Diagnostico from "@/components/Diagnostico";
import Metodologia from "@/components/Metodologia";
import ProyectosIniciales from "@/components/ProyectosIniciales";

export default function Home() {
  const [active, setActive] = useState<Tab>("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  const handleTabChange = (tab: Tab) => {
    setActive(tab);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar active={active} onChange={handleTabChange} />
      <main style={{ marginLeft: 240, flex: 1, minHeight: "100vh" }}>
        {active === "inicio"      && <Hero />}
        {active === "diagnostico" && <Diagnostico />}
        {active === "metodologia" && <Metodologia />}
        {active === "proyectos"   && <ProyectosIniciales />}
      </main>
    </div>
  );
}

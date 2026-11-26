"use client";

import { Capabilities } from "@/components/portfolio/Capabilities";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Studio } from "@/components/portfolio/Studio";

export function Portfolio() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Capabilities />
      <Services />
      <Studio />
      <Contact />
    </>
  );
}

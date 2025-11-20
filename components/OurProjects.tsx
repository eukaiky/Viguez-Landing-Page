"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function OurProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.6;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      const scrollWidth = scrollContainer.scrollWidth / 2;

      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const projects = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section id="projects">
      <div className="relative w-full bg-[#f2f2f2] py-10">
        <div className="absolute z-0 top-0 left-0 w-full h-full">
          <Image
            src="/bg-projects.svg"
            fill
            alt=""
            aria-hidden="true"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col px-8 py-16 items-center">
          <h1 id="projects-title" className="font-sans text-7xl">
            <span className="font-thin block text-left -ml-40">Nossos</span>
            <span className="font-semibold block text-right -mr-40 scale-y-110">
              Projetos
            </span>
          </h1>
        </div>
        <div className="relative z-10 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center gap-16 overflow-x-hidden"
          >
            {projects.map((project) => (
              <div
                key={`project-${project}`}
                className="bg-white w-[320px] h-[450px] shrink-0 shadow-2xl"
              ></div>
            ))}

            {projects.map((project) => (
              <div
                key={`project-duplicate-${project}`}
                className="bg-white w-[320px] h-[450px] shrink-0 shadow-2xl"
              ></div>
            ))}
          </div>
        </div>
          <div className="relative z-10 flex justify-center px-8 mt-12">
          <p className="text-lg font-sans text-center">
            Não apenas falamos, nós fazemos. Veja 
            <br />algumas das soluções que tiramos do papel 
            <br />e transformamos em realidade.
          </p>
        </div>
      </div>
    </section>
  );
}

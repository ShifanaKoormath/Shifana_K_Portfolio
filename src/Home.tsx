import { useState, useEffect } from "react";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "/images/helvra1.png";
import img2 from "/images/helvra2.png";
import img3 from "/images/helvra3.png";
import { websites } from "./websites";

// ---------- BASE COMPONENTS ----------

const Container = ({ children }: { children: ReactNode }) => (
  <div className="max-w-6xl mx-auto px-6">{children}</div>
);

import type { HTMLAttributes } from "react";

const Section = ({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>) => (
  <section className={`py-28 ${className}`} {...props}>
    {children}
  </section>
);

type ProjectCardProps = {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  images: string[];
};

const ProjectCard = ({ id, title, desc, tags, images }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${id}`)}
      className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition overflow-hidden"
    >
      <div className="h-56 overflow-hidden">
        <img src={images[0]} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>

        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map((t: string, i: number) => (
            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const PrimaryButton = ({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </button>
);

const SecondaryButton = ({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`px-6 py-3 rounded-xl border border-gray-300 text-black hover:bg-gray-100 transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Tag = ({ children }: { children: ReactNode }) => (
  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
    {children}
  </span>
);

// ---------- CAROUSEL ----------
const Carousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (!images.length) return;

    const i = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(i);
  }, [images.length]);

  return (
    <div className="relative h-80 overflow-hidden rounded-2xl shadow-md">
      {images.map((img: string, i: number) => (
        <img
          key={i}
          src={img}
          className={`absolute w-full h-full object-cover transition-all duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

// ---------- SCROLL REVEAL ----------
const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);
};



export default function Home() {
  const navigate = useNavigate();
    useReveal();

  return (
<div className="bg-[#F9FAFB] text-gray-900 font-sans overflow-x-hidden">

  {/* HERO */}
  <div className="relative min-h-screen flex items-center bg-[#F9FAFB]">

    {/* subtle soft glow (reduced intensity) */}
    <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-indigo-100 opacity-30 blur-3xl rounded-full"></div>
    <div className="absolute bottom-20 right-20 w-[260px] h-[260px] bg-purple-100 opacity-20 blur-3xl rounded-full"></div>

    <div className="max-w-4xl ml-10 reveal">

      {/* NAME + ROLE */}
      <p className="text-sm text-gray-500 mb-4 tracking-wide">
        Shifana K · Software Engineer
      </p>

      {/* HEADLINE */}
      <h1 className="text-6xl leading-[1.1] font-extrabold tracking-tight mb-8">
        I build systems that make
        <br />
        complex workflows actually work.
      </h1>

      {/* SUBTEXT */}
      <p className="text-lg text-gray-700 max-w-2xl mb-5">
        Focused on problem solving, system design, and building products that are clear, reliable, and usable in real-world scenarios.
      </p>

      {/* PROOF */}
      <p className="text-sm text-gray-500 mb-10">
        Built 20+ projects, including a full-stack SaaS product.
      </p>
          <div className="flex gap-4">
            <PrimaryButton
            onClick={() =>
                document.getElementById("work")?.scrollIntoView({
                behavior: "smooth"
                })
            }
            >
            View Work
            </PrimaryButton>

<a
  href="https://github.com/ShifanaKoormath"
  target="_blank"
  rel="noopener noreferrer"
>
  <SecondaryButton>GitHub</SecondaryButton>
</a>
          </div>
        </div>
      </div>

      {/* PROOF STRIP */}
      <div className="border-y border-gray-200 py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-4 gap-6 text-center text-sm text-gray-600">
            <div>20+ Projects Built</div>
            <div>Full-stack SaaS Built</div>
            <div>System Design Focus</div>
            <div>End-to-End Development</div>
          </div>
        </Container>
      </div>

      {/* HOW YOU THINK */}
      <Section>
        <Container>
          <h2 className="text-4xl font-bold mb-12 reveal">How I Approach Building Systems</h2>

          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">
            <div className="reveal">
              <b>Understanding Before Building</b>
              <p className="mt-2">I analyze requirements deeply and identify what actually matters before writing code.</p>
            </div>

            <div className="reveal">
              <b>Structured Decision Making</b>
              <p className="mt-2">Every feature is intentional and based on impact, not assumptions.</p>
            </div>

            <div className="reveal">
              <b>Designing for Real Use</b>
              <p className="mt-2">I model systems based on real workflows, not just technical ideas.</p>
            </div>
          </div>
        </Container>
      </Section>




    <>
      {/* HELVRA */}
<Section id="work" className="bg-white">
            <Container>
          <h2 className="text-5xl font-bold mb-10 leading-tight max-w-3xl reveal">
            A system I built to bring structure to chaos.
          </h2>

          <div className="grid md:grid-cols-5 gap-10 items-center">

            {/* LEFT - VISUAL */}
            <div className="col-span-3 reveal">
<Carousel images={[img1, img2, img3]} />            </div>

            {/* RIGHT - CONTENT */}
            <div className="col-span-2 reveal">
              <h3 className="text-2xl font-semibold mb-3">
                Helvra — OPD Management SaaS
              </h3>

              <p className="text-gray-600 mb-4">
                Built and deployed a full-stack OPD management SaaS that models real-world clinic workflows using a structured, token-based system.
              </p>

              <div className="flex gap-2 mb-6">
                <Tag>SaaS</Tag>
                <Tag>Real-time</Tag>
                <Tag>System Design</Tag>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 mt-4">
                <PrimaryButton onClick={() => navigate("/project/helvra")}>
                  Explore Project
                </PrimaryButton>
<a
  href="https://helvra-pilot-frontend.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  <SecondaryButton>View Live</SecondaryButton>
</a>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* OTHER PROJECTS */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-12 reveal">Other Systems</h2>

          <div className="grid md:grid-cols-2 gap-10">

            <ProjectCard
              id="acad"
              title="Academic Companion"
              desc="Academic insight and analysis system."
              tags={["Logic", "Analytics"]}
              images={[
  "/images/acadhome.png",
  "/images/acadhome2.png"
]}
            />

            <ProjectCard
              id="voice"
              title="Secure Voice System"
              desc="Encrypted AI voice pipeline."
              tags={["Security", "AI"]}
              images={["/images/voice1.png"]}
            />

          </div>
        </Container>
      </Section>
    </>
      {/* PRACTICAL WORK */}

<Section>
  <Container>

    <h2 className="text-3xl font-bold mb-12">
      Selected Work
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {websites.map((site, i) => (
        <a
          key={i}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
        >

          {/* IMAGE */}
          <div className="h-48 overflow-hidden">
            <img
              src={site.image}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="p-5">

            <h3 className="font-semibold mb-2">
              {site.name}
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              {site.description}
            </p>

            <span className="text-sm font-medium text-black">
              Visit Site →
            </span>

          </div>

        </a>
      ))}

    </div>

  </Container>
</Section>

      
 {/* CAPABILITIES */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold mb-10">Capabilities</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-3">Core</h3>
              <p className="text-gray-600 text-sm">
                System Design, Logic Modeling, Workflow Engineering
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-3">Development</h3>
              <p className="text-gray-600 text-sm">
                React, React Native, Node.js, FastAPI
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-3">Advanced</h3>
              <p className="text-gray-600 text-sm">
                Real-time Systems, AI Integration, Cryptography Basics
              </p>
            </div>
          </div>
        </Container>
      </Section>

     {/* FINAL SECTION */}
<Section className="pt-16 pb-24">
  <Container>

    {/* STATEMENT (clean, no fake card) */}
    <div className="max-w-2xl mb-12 border-l-4 border-gray-300 pl-6">
      <p className="text-lg text-gray-700 leading-relaxed">
        I focus on building systems that are structured, reliable, and meaningful — not just visually appealing.
      </p>
    </div>

    {/* CONTACT */}
    <div className="bg-white border border-gray-200 p-10 rounded-2xl shadow-sm max-w-3xl">

      <h2 className="text-2xl font-semibold mb-3 text-gray-900">
        Let’s Build Something Meaningful
      </h2>

      <p className="text-gray-500 mb-6 text-sm">
        Open to opportunities and collaborations.
      </p>

      <div className="space-y-2 text-sm mb-6">

        <a
          href="mailto:shifanakoormath11@gmail.com"
          className="block text-gray-700 hover:text-black transition"
        >
          shifanakoormath11@gmail.com
        </a>

        <a
          href="https://github.com/ShifanaKoormath/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-gray-700 hover:text-black transition"
        >
          github.com/ShifanaKoormath
        </a>

      </div>

      <a href="mailto:shifanakoormath11@gmail.com">
        <button className="px-5 py-2.5 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
          Get in Touch
        </button>
      </a>

    </div>

  </Container>
</Section>

      {/* ANIMATIONS */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </div>
  );
}

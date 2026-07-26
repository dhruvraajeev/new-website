import { useEffect } from "react";
import Ferrofluid from "./components/reactbits/Ferrofluid/Ferrofluid";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Scroll-reveal: flip .reveal -> .revealed the first time each element
  // enters the viewport. IntersectionObserver handles normal scrolling; the
  // scroll listener catches jump-scrolls (anchor links, fast wheels) where an
  // element can cross the whole viewport in one frame and IO never fires.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    const observed = new WeakSet<Element>();

    const watch = (el: Element) => {
      if (observed.has(el) || el.classList.contains("revealed")) return;
      observed.add(el);
      io.observe(el);
    };

    const scan = () => {
      document.querySelectorAll(".reveal").forEach(watch);
    };

    let ticking = false;
    const catchUp = () => {
      ticking = false;
      scan();
      for (const el of document.querySelectorAll(".reveal:not(.revealed)")) {
        // Anything whose top is already above ~90% of the viewport height
        // has been reached (or passed) — reveal it.
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.classList.add("revealed");
          io.unobserve(el);
        }
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(catchUp);
      }
    };

    scan();
    // Pick up .reveal nodes that mount later (e.g. mobile/desktop Projects swap).
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      mo.disconnect();
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Ferrofluid
          className="h-full w-full"
          colors={["#0284c7", "#6366f1", "#22d3ee"]}
          speed={0.6}
          glow={0.9}
          opacity={0.5}
        />
        {/* Fade so the fluid melts into ink and text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 45%, rgba(9,9,11,0.6) 80%, rgba(9,9,11,0.9) 100%)",
          }}
        />
      </div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

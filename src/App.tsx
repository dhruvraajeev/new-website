import { useEffect } from "react";
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
    const els = Array.from(document.querySelectorAll(".reveal"));
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
    els.forEach((el) => io.observe(el));

    let ticking = false;
    const catchUp = () => {
      ticking = false;
      for (const el of els) {
        if (el.classList.contains("revealed")) continue;
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
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
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

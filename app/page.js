import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <About />
      <Resume />
      <Projects />
      <section className="w-full min-h-[50vh] bg-foreground text-background flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-[#106c57] dark:text-emerald-400">Let's Connect</h2>
        <a href="mailto:devashishdhumal@gmail.com" className="text-xl md:text-3xl font-mono hover:underline">devashishdhumal@gmail.com</a>
        <p className="mt-4 font-mono opacity-80">+91-9881333770</p>
      </section>
    </main>
  );
}

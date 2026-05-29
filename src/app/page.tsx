import { GlowOrb } from "@/components/effects/glow-orb";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <GlowOrb className="left-0 top-0 h-72 w-72" />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-md">
              Elite Frontend Engineer
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              Building cinematic digital experiences with precision.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              I design and engineer premium frontend products with
              strong visual systems, scalable architecture, and
              intentional user experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/">
                View Projects
              </Button>

              <Button href="/">
                Contact Me
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
import type { CSSProperties } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { STATS, TABS } from "@/components/binder/content";
import { HERO_PHOTO } from "@/components/binder/photos";
import { slugify } from "@/lib/slug";
import { Reveal } from "./Reveal";
import { RoleCycler } from "./RoleCycler";

const firstProject = TABS.find((t) => t.id === "projects")?.sections[0];
const firstProjectPath = firstProject ? `/projects/${slugify(firstProject.heading)}` : "/about";

export function Hero({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section className="relative overflow-hidden px-4 pb-14 pt-14 sm:px-10 sm:pt-16">
      {/* soft ambient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-gold-soft/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <Reveal className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/55">
            <span className="h-px w-8 bg-gold" />
            Janya Phlaphongphanich
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-serif-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              I&apos;m a <RoleCycler /> building human potential in an AI-driven world.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              I'm a student founder, researcher, and creative leader exploring how young people can
              stay human, capable, and emotionally grounded — through work in AI education, digital
              wellbeing, and design.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => navigate(firstProjectPath)}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-card"
            >
              Get in touch
            </button>
          </Reveal>

          <Reveal
            delay={300}
            className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-ink/10 pt-6 sm:grid-cols-4 sm:gap-x-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif-display text-2xl text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase leading-snug tracking-[0.14em] text-foreground/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-ink/10 bg-card shadow-[0_30px_60px_-30px_rgba(60,30,30,0.25)]">
            <img
              src={HERO_PHOTO.src}
              alt={HERO_PHOTO.alt}
              fetchPriority="high"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div
            className="animate-float absolute -left-6 top-10 rounded-2xl border border-ink/10 bg-card/95 px-4 py-3 shadow-lg backdrop-blur sm:-left-10"
            style={{ "--float-rot": "-2deg" } as CSSProperties}
          >
            <p className="font-serif-display text-lg italic leading-snug text-foreground/80">
              &ldquo;Human, capable, grounded.&rdquo;
            </p>
          </div>

          <div
            className="animate-float absolute -bottom-6 right-2 flex items-center gap-2 rounded-full border border-ink/10 bg-card/95 px-4 py-2.5 shadow-lg backdrop-blur sm:right-6"
            style={{ "--float-rot": "1.5deg", animationDelay: "1.2s" } as CSSProperties}
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-medium tracking-wide">Bangkok, Thailand</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

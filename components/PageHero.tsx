import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-x py-16 lg:py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-3 max-w-3xl text-4xl !text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>}
        </Reveal>
      </div>
    </section>
  );
}

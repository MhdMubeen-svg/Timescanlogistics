import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug && (p.tag === post.tag || p.audience.some((a) => post.audience.includes(a)))).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Timescan Logistics Ltd" },
    publisher: { "@type": "Organization", name: "Timescan Logistics Ltd" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="bg-ink text-white">
          <div className="container-x max-w-4xl py-16 lg:py-20">
            <Reveal>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/blog" className="font-display text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-cargo">← Insights</Link>
                <span className="font-display text-xs font-bold uppercase tracking-widest text-cargo">{post.tag}</span>
                <time dateTime={post.date} className="text-xs text-white/60">
                  {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <h1 className="h-display mt-5 text-3xl leading-tight !text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-2" aria-label="Relevant for">
                {post.audience.map((a) => (
                  <span key={a} className="rounded-sm border border-white/25 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-white/80">{a}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </header>

        <div className="bg-white py-14 lg:py-20">
          <div className="container-x max-w-3xl">
            {post.body.map((para, i) => (
              <Reveal key={i} delay={Math.min(i * 40, 160)}>
                <p className="mb-6 leading-[1.85] text-ink/85">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={120} className="mt-10 rounded-sm border-l-2 border-cargo bg-fog p-6">
              <p className="text-sm leading-relaxed text-steel">
                General information, not advice for a specific transaction - trade rules change and details depend on your goods and lanes.{" "}
                <Link href="/contact" className="font-semibold text-cargo underline-offset-2 hover:underline">Ask our team</Link> about your situation, or{" "}
                <Link href="/quote" className="font-semibold text-cargo underline-offset-2 hover:underline">request a quote</Link>.
              </p>
            </Reveal>
          </div>
        </div>

        {related.length > 0 && (
          <section className="bg-fog py-16" aria-labelledby="related-h">
            <div className="container-x">
              <Reveal><h2 id="related-h" className="h-display text-2xl">Related reading</h2></Reveal>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {related.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 70}>
                    <Link href={`/blog/${p.slug}`} className="block h-full rounded-sm border border-ink/10 bg-white p-6 transition-colors hover:border-cargo">
                      <p className="font-display text-xs font-bold uppercase tracking-widest text-cargo">{p.tag}</p>
                      <p className="h-display mt-3 text-base leading-snug">{p.title}</p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
      <CTA />
    </>
  );
}

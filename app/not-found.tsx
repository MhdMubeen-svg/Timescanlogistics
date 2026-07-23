import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-28">
      <div className="container-x max-w-xl text-center">
        <p className="font-display text-6xl font-extrabold text-cargo">404</p>
        <h1 className="h-display mt-4 text-3xl">This route doesn't exist.</h1>
        <p className="mt-4 text-steel">The page may have moved. Head back to the homepage or track a shipment.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="btn-primary">Homepage</Link>
          <Link href="/tracking" className="btn-ghost">Track a shipment</Link>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdSlot } from "@/components/AdSlot";
import { GEAR_ITEMS } from "@/lib/data/gear";

export const metadata: Metadata = {
  title: "Gear",
  description:
    "Curated Amazon affiliate ideas for match-day comfort—replace links with your Associates tags before launch.",
};

export default function GearPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gear" }]} />
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Fan gear picks
        </h1>
        <p className="max-w-2xl text-slate-600 dark:text-slate-400">
          Affiliate placeholders only—swap each URL for your Amazon Associates tracking ID. We stay clear of
          official FIFA marks and merchandising claims.
        </p>
      </header>

      <AdSlot variant="top" />

      <div className="grid gap-6 md:grid-cols-2">
        {GEAR_ITEMS.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div
              className="aspect-video w-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700"
              role="img"
              aria-label={item.imageAlt}
            />
            <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{item.title}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">{item.priceLabel}</p>
            <a
              href={item.href}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-4 inline-flex rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              View on Amazon
            </a>
          </article>
        ))}
      </div>

      <AdSlot variant="inline" label="Gear mid-page advertisement" />

      <AdSlot variant="bottom" />
    </div>
  );
}

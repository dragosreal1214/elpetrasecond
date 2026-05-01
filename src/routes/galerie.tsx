import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import beef from "@/assets/wolt-shawarma-beef.avif";
import mix from "@/assets/wolt-shawarma-mix.avif";
import chicken from "@/assets/wolt-shawarma-chicken.avif";
import menuMix from "@/assets/wolt-meniu-mix.avif";
import menuPui from "@/assets/wolt-meniu-pui.avif";
import menuVita from "@/assets/wolt-meniu-vita.avif";
import fries from "@/assets/wolt-fries.avif";
import foodHq from "@/assets/wolt-food-hq.avif";
import rotisserie from "@/assets/rotisserie.jpg";
import interior from "@/assets/interior.jpg";
import ambient1 from "@/assets/ambient-1.jpg";
import ambientPetra from "@/assets/ambient-petra.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — El Petra Shawarma Iași" },
      {
        name: "description",
        content: "Galerie foto El Petra: preparate autentice, interior cu murale Petra, ambianță orientală în centrul Iașului.",
      },
      { property: "og:title", content: "Galerie El Petra Shawarma" },
    ],
  }),
  component: GalleryPage,
});

type Cat = "all" | "food" | "interior" | "ambient";

const photos: { src: string; alt: string; cat: Exclude<Cat, "all"> }[] = [
  { src: beef, alt: "Shaorma de vită la lipie", cat: "food" },
  { src: interior, alt: "Interior cu mural Petra", cat: "interior" },
  { src: mix, alt: "Shaorma mix la lipie", cat: "food" },
  { src: ambientPetra, alt: "Mural Petra Jordan", cat: "ambient" },
  { src: chicken, alt: "Shaorma de pui la lipie", cat: "food" },
  { src: ambient1, alt: "Mural cort beduin cu cer înstelat", cat: "ambient" },
  { src: menuMix, alt: "Meniu shaorma mix", cat: "food" },
  { src: foodHq, alt: "Preparate El Petra", cat: "food" },
  { src: menuPui, alt: "Meniu shaorma de pui", cat: "food" },
  { src: rotisserie, alt: "Rotisor cu carne marinată", cat: "food" },
  { src: menuVita, alt: "Meniu shaorma de vită", cat: "food" },
  { src: fries, alt: "Cartofi garnitură", cat: "food" },
];

const tabs: { id: Cat; label: string }[] = [
  { id: "all", label: "Toate" },
  { id: "food", label: "Preparate" },
  { id: "interior", label: "Interior" },
  { id: "ambient", label: "Ambianță" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<Cat>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = filter === "all" ? photos : photos.filter((p) => p.cat === filter);

  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + items.length) % items.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % items.length : null));

  return (
    <div className="pt-28 pb-0 bg-background">
      {/* Header */}
      <div className="bg-gold py-16 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative">
          <p className="font-sans text-black/50 text-xs tracking-[0.4em] uppercase mb-2">El Petra Shawarma</p>
          <h1
            className="font-display text-black leading-none"
            style={{ fontSize: "clamp(4rem, 15vw, 11rem)" }}
          >
            GALERIE
          </h1>
          <p className="font-sans italic text-black/60 mt-2">
            Shawarma autentică, ambianță orientală, experiențe memorabile.
          </p>
        </div>
      </div>

      <svg viewBox="0 0 1440 60" className="w-full block" style={{ fill: "#E8720E", marginTop: "-1px" }}>
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
      </svg>

      {/* Filter tabs */}
      <div className="flex justify-center gap-3 flex-wrap px-6 py-8">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className="font-display tracking-wider transition-all"
            style={{
              fontSize: "1rem",
              padding: "0.5rem 1.5rem",
              borderRadius: "4px",
              border: "2px solid",
              borderColor: filter === t.id ? "var(--gold)" : "rgba(255,255,255,0.1)",
              background: filter === t.id ? "var(--gold)" : "transparent",
              color: filter === t.id ? "#0A0A0A" : "rgba(255,255,255,0.6)",
              cursor: "pointer",
            }}
          >
            {t.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 px-2 pb-2 [column-fill:_balance]">
        {items.map((p, i) => (
          <button
            key={p.src + i}
            onClick={() => setLightbox(i)}
            className="block w-full mb-2 break-inside-avoid group relative overflow-hidden img-zoom"
            style={{ borderRadius: "4px" }}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div
              className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}
            >
              <span className="font-display text-white tracking-wider" style={{ fontSize: "1.1rem" }}>
                {p.alt.toUpperCase()}
              </span>
            </div>
            <div
              className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderRadius: "4px", pointerEvents: "none" }}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 p-2 hover:scale-110 transition-transform"
            style={{ color: "var(--gold)" }}
            onClick={() => setLightbox(null)}
            aria-label="Închide"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 hover:scale-110 transition-transform"
            style={{ color: "var(--gold)", background: "rgba(0,0,0,0.5)", borderRadius: "50%" }}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 hover:scale-110 transition-transform"
            style={{ color: "var(--gold)", background: "rgba(0,0,0,0.5)", borderRadius: "50%" }}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Următor"
          >
            <ChevronRight size={28} />
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].alt}
            className="max-w-full max-h-[88vh] object-contain"
            style={{ borderRadius: "4px", border: "1px solid rgba(232,114,14,0.2)" }}
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display tracking-widest text-center"
            style={{ color: "var(--gold)", fontSize: "1rem" }}
          >
            {items[lightbox].alt.toUpperCase()}
            <span style={{ color: "rgba(255,255,255,0.3)", marginLeft: "1rem", fontSize: "0.85rem" }}>
              {lightbox + 1} / {items.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/wolt-hero-hq.avif";
import beefImg from "@/assets/wolt-shawarma-beef.avif";
import mixImg from "@/assets/wolt-shawarma-mix.avif";
import menuImg from "@/assets/wolt-meniu-mix.avif";
import chickenImg from "@/assets/wolt-shawarma-chicken.avif";
import friesImg from "@/assets/wolt-fries.avif";
import foodHqImg from "@/assets/wolt-food-hq.avif";
import interiorImg from "@/assets/interior.jpg";
import { Star } from "lucide-react";

const WOLT_URL =
  "https://wolt.com/ro/rou/iasi/restaurant/el-petra-shawarma-69ccfdd5844ce44e47771616";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Shawarma autentică El Petra"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

        {/* Main brand */}
        <div className="relative z-10 text-center px-4">
          <h1
            className="font-display text-white leading-none tracking-wider"
            style={{ fontSize: "clamp(4rem, 15vw, 15rem)", textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}
          >
            EL PETRA
          </h1>
          <div
            className="font-display text-gold leading-none tracking-[0.2em] -mt-2 md:-mt-4"
            style={{ fontSize: "clamp(1.8rem, 5vw, 5rem)", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            SHAWARMA
          </div>
        </div>

        {/* Scroll badge */}
        <a
          href="#specialitati"
          className="scroll-badge relative z-10 mt-14 no-underline"
          aria-label="Scroll jos"
        >
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}>SCROLL</span>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}>JOS BOSS</span>
          <span className="text-lg mt-1">↓</span>
        </a>
      </section>

      {/* ─── WAVE + STATS ─────────────────────────────────────── */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" className="w-full block" style={{ marginBottom: "-2px", fill: "#E8720E" }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
        <div className="bg-gold py-12 px-6">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: "7.0", label: "Rating Wolt" },
              { value: "#1", label: "Shawarma Iași" },
              { value: "2026", label: "Deschis din" },
            ].map((s) => (
              <div key={s.label} className="badge-stat shadow-lg">
                <span
                  className="font-display text-gold leading-none"
                  style={{ fontSize: "2.4rem" }}
                >
                  {s.value}
                </span>
                <span className="text-white/70 text-xs tracking-widest uppercase font-sans mt-1 font-semibold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <svg viewBox="0 0 1440 80" className="w-full block" style={{ marginTop: "-2px", fill: "#E8720E" }}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* ─── SPECIALITATI ─────────────────────────────────────── */}
      <section id="specialitati" className="py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 items-start">
          {/* Vertical label */}
          <div className="hidden lg:flex items-center justify-center self-stretch shrink-0 w-16">
            <span className="section-label-vertical opacity-20 select-none">
              MENIU
            </span>
          </div>

          <div className="flex-1">
            <div className="mb-10">
              <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-2">
                ★ Specialitățile casei ★
              </p>
              <h2
                className="font-display text-white leading-none"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                CELE MAI<br />
                <span className="text-gold">COMANDATE</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  img: beefImg,
                  title: "Shaorma de Vită",
                  sub: "la lipie · 400g",
                  desc: "Carne de vită marinată tradițional, servită în lipie caldă.",
                  price: "43 RON",
                  badge: "POPULAR",
                },
                {
                  img: mixImg,
                  title: "Shaorma Mix",
                  sub: "la lipie · 400g",
                  desc: "Combinația perfectă de vită și pui în lipie caldă.",
                  price: "43 RON",
                  badge: null,
                },
                {
                  img: menuImg,
                  title: "Meniu Shaorma",
                  sub: "arăbesc · 650g",
                  desc: "Shaorma completă cu garnitură și băutură la alegere.",
                  price: "50 RON",
                  badge: "BEST DEAL",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group bg-surface rounded-lg overflow-hidden card-lift border border-white/5"
                >
                  <div className="relative aspect-[4/3] img-zoom">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 bg-gold text-black font-display text-xs tracking-widest px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="text-gold/60 font-sans text-xs tracking-widest uppercase">{item.sub}</div>
                    <h3 className="font-display text-white text-2xl mt-1">{item.title}</h3>
                    <p className="text-white/50 text-sm mt-2 font-sans leading-relaxed">{item.desc}</p>
                    <div className="flex items-center justify-between mt-5">
                      <span className="font-display text-gold text-3xl">{item.price}</span>
                      <a
                        href={WOLT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold text-sm px-4 py-2"
                        style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem" }}
                      >
                        Comandă →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link to="/meniu" className="btn-gold">
                Vezi meniul complet
              </Link>
              <a href={WOLT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold-outline">
                Comandă pe Wolt
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────── */}
      <section className="relative bg-gold overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch min-h-[520px]">
          <div className="flex flex-col justify-center py-16 pr-0 md:pr-12">
            <p className="text-black/60 font-sans text-xs tracking-[0.4em] uppercase mb-4">
              Povestea noastră
            </p>
            <h2
              className="font-display text-black leading-none"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6.5rem)" }}
            >
              NU E<br />SHAORMA.<br />
              <span style={{ WebkitTextStroke: "2px black", color: "transparent" }}>
                E ARTĂ.
              </span>
            </h2>
            <p className="text-black/70 font-sans mt-6 max-w-md leading-relaxed text-base">
              El Petra aduce în Iași autenticitatea shawarma-ului iordanian — preparat
              după rețete tradiționale, cu carne marinată lent și condimentată cu
              mirodenii din Orient. Un gust pe care nu l-ai mai simțit până acum.
            </p>
            <p className="text-black/50 font-sans italic mt-3 text-sm">
              Sute de cozi în prima zi de la lansare. Iașul a vorbit.
            </p>
            <a
              href={WOLT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex"
              style={{
                background: "#0A0A0A",
                color: "#E8720E",
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                padding: "0.85rem 2rem",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textTransform: "uppercase",
                transition: "transform 180ms ease",
                alignSelf: "flex-start",
              }}
            >
              Comandă acum
            </a>
          </div>

          <div className="relative min-h-[360px] md:min-h-0 img-zoom">
            <img
              src={interiorImg}
              alt="Interior El Petra — mural Petra Jordan"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </div>
      </section>

      {/* ─── PHOTO STRIP ──────────────────────────────────────── */}
      <section className="bg-black py-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { src: chickenImg, alt: "Shaorma de pui" },
            { src: friesImg, alt: "Cartofi garnitură" },
            { src: foodHqImg, alt: "Preparate El Petra" },
            { src: menuImg, alt: "Meniu complet" },
          ].map((p) => (
            <div key={p.alt} className="relative aspect-square img-zoom group">
              <img src={p.src} alt={p.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="font-display text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest">
                  {p.alt.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 items-start">
          <div className="hidden lg:flex items-center justify-center self-stretch shrink-0 w-16">
            <span className="section-label-vertical opacity-20 select-none">
              REVIEWS
            </span>
          </div>
          <div className="flex-1">
            <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-2">Ce spun clienții</p>
            <h2
              className="font-display text-white leading-none mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              IAȘUL A<br />
              <span className="text-gold">VORBIT.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  quote: "Am comandat o shaorma de vită, meniu. Geniala. Cea mai bună shaorma pe care am mâncat-o. Carnea are un gust genial și porția e generoasă.",
                  author: "Raluca",
                  stars: 5,
                },
                {
                  quote: "În sfârșit o shaorma adevărată — este o operă de artă, gustul este rafinat. Continuați tot așa!",
                  author: "Client verificat",
                  stars: 5,
                  meta: "Mâncare 5 · Servire 5 · Ambianță 5",
                },
                {
                  quote: "Cea mai bună shaorma arabească mix din Iași. Preț corect, 20–40 lei per persoană.",
                  author: "Ionuț-Alexandru B.",
                  stars: 5,
                  meta: "Mâncare 5 · Servire 5",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-background border border-white/6 rounded-lg p-7 card-lift"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-white/75 leading-relaxed font-sans text-sm">"{t.quote}"</p>
                  <div className="mt-6 pt-4 border-t border-white/6">
                    <div className="font-display text-gold text-lg tracking-wider">{t.author}</div>
                    {t.meta && <div className="text-white/40 text-xs mt-1 font-sans">{t.meta}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-gold py-24 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <h2
            className="font-display text-black leading-none"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            FOAME?
          </h2>
          <p className="text-black/60 font-sans text-lg mt-2 mb-8">
            Livrare rapidă în tot Iașul prin Wolt.
          </p>
          <a
            href={WOLT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#0A0A0A",
              color: "#E8720E",
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              letterSpacing: "0.1em",
              padding: "1rem 3rem",
              borderRadius: "4px",
              textTransform: "uppercase",
              transition: "transform 180ms ease, box-shadow 180ms ease",
            }}
          >
            COMANDĂ PE WOLT →
          </a>
        </div>
      </section>
    </>
  );
}

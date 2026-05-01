import { createFileRoute, Link } from "@tanstack/react-router";

const WOLT_URL =
  "https://wolt.com/ro/rou/iasi/restaurant/el-petra-shawarma-69ccfdd5844ce44e47771616";

export const Route = createFileRoute("/meniu")({
  head: () => ({
    meta: [
      { title: "Meniu — El Petra Shawarma Iași" },
      {
        name: "description",
        content:
          "Meniul El Petra: shaorma de vită, pui și mix, meniu arăbesc, garnituri, băuturi și sosuri. Prețuri corecte în centrul Iașului.",
      },
      { property: "og:title", content: "Meniu El Petra Shawarma" },
      {
        property: "og:description",
        content: "Shaorma la lipie, meniuri arăbești, garnituri și sosuri tradiționale.",
      },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; price: string; tag?: string; desc?: string };

function Section({ icon, title, items }: { icon: string; title: string; items: Item[] }) {
  return (
    <div className="mb-14">
      <div className="flex items-end gap-4 mb-6">
        <span className="text-3xl">{icon}</span>
        <h2
          className="font-display text-gold leading-none"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {title}
        </h2>
        <div className="flex-1 h-px" style={{ background: "rgba(232,114,14,0.15)", marginBottom: "6px" }} />
      </div>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.name}>
            <div className="flex items-baseline gap-2">
              <div className="font-sans text-white text-base font-medium">
                {it.name}
                {it.tag && (
                  <span
                    className="ml-3 font-display tracking-widest"
                    style={{ fontSize: "0.7rem", color: "var(--gold)", background: "rgba(232,114,14,0.1)", padding: "2px 8px", borderRadius: "20px" }}
                  >
                    ★ {it.tag}
                  </span>
                )}
              </div>
              <span className="menu-leader" />
              <span className="font-display text-gold whitespace-nowrap" style={{ fontSize: "1.2rem" }}>
                {it.price}
              </span>
            </div>
            {it.desc && (
              <div className="text-white/40 text-sm font-sans italic mt-1 pl-0">{it.desc}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuPage() {
  return (
    <div className="pt-28 pb-20 bg-background relative">
      {/* Header */}
      <div className="bg-gold py-16 px-6 text-center relative overflow-hidden" style={{ marginTop: "-1px" }}>
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
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}
          >
            MENIU
          </h1>
          <p className="font-sans italic text-black/60 mt-2 text-base">
            Rețete iordaniene autentice, pregătite cu mirodenii din Orient.
          </p>
        </div>
      </div>

      <svg viewBox="0 0 1440 60" className="w-full block" style={{ fill: "#E8720E", marginTop: "-1px" }}>
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
      </svg>

      {/* Menu content */}
      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Section
          icon="🥙"
          title="SHAORMA ARĂBEASCĂ LA LIPIE"
          items={[
            { name: "Shaorma la lipie de vită 400g", price: "43 RON", tag: "Popular" },
            { name: "Shaorma la lipie Mix 400g", price: "43 RON", desc: "Vită + pui" },
            { name: "Shaorma la lipie de pui 420g", price: "41 RON", tag: "Popular" },
          ]}
        />

        <Section
          icon="🍽️"
          title="MENIU SHAORMA ARĂBEASCĂ"
          items={[
            { name: "Meniu Shaorma de Pui 650g", price: "50 RON", tag: "Popular", desc: "Shaorma + garnitură + băutură" },
            { name: "Meniu Shaorma De Vită 650g", price: "50 RON", tag: "Popular", desc: "Shaorma + garnitură + băutură" },
            { name: "Meniu Shaorma Mix 650g", price: "50 RON", tag: "Popular", desc: "Shaorma + garnitură + băutură" },
          ]}
        />

        <Section
          icon="🥗"
          title="GARNITURI"
          items={[
            { name: "Cartofi 150g + sos la alegere", price: "15 RON" },
          ]}
        />

        <Section
          icon="🥤"
          title="BĂUTURI RĂCORITOARE"
          items={[
            { name: "Coca-Cola Gust Original 500ml", price: "10 RON" },
            { name: "Coca-Cola Zero Zahăr 500ml", price: "10 RON" },
            { name: "Fanta Portocale 500ml", price: "10 RON" },
            { name: "Fanta Struguri 500ml", price: "10 RON" },
            { name: "Sprite 500ml", price: "10 RON" },
            { name: "Schweppes Tonic Water 500ml", price: "10 RON" },
            { name: "Schweppes Bitter Lemon 500ml", price: "9,50 RON" },
            { name: "Cappy 330ml", price: "10 RON" },
            { name: "Fuze Tea lămâie și mentă 500ml", price: "10 RON" },
            { name: "Ayran", price: "12 RON" },
            { name: "Apă plată Dorna 500ml", price: "8 RON" },
            { name: "Apă minerală Dorna 500ml", price: "8 RON" },
          ]}
        />

        <Section
          icon="🫙"
          title="SOSURI"
          items={[
            { name: "Sos Toum de usturoi 60ml", price: "5 RON" },
            { name: "Sos Tahina 60ml", price: "5 RON" },
            { name: "Sos de Rodie 60ml", price: "5 RON" },
            { name: "Sos Amba 60ml", price: "5 RON" },
            { name: "Sos picant 60ml", price: "5 RON" },
            { name: "Ketchup dulce 60ml", price: "5 RON" },
          ]}
        />

        <div className="text-center mt-6 pb-4">
          <p className="font-sans italic text-white/40 text-sm mb-6">
            Meniu complet disponibil pe Wolt pentru comandă online cu livrare.
          </p>
          <a href={WOLT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Comandă pe Wolt
          </a>
        </div>
      </div>
    </div>
  );
}

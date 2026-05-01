import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const WOLT_URL =
  "https://wolt.com/ro/rou/iasi/restaurant/el-petra-shawarma-69ccfdd5844ce44e47771616";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Acasă" },
    { to: "/meniu", label: "Meniu" },
    { to: "/galerie", label: "Galerie" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 300ms ease, border-color 300ms ease",
        background: scrolled || open ? "rgba(10,10,10,0.97)" : "transparent",
        borderBottom: scrolled || open ? "1px solid rgba(232,114,14,0.15)" : "1px solid transparent",
        backdropFilter: scrolled || open ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
<div className="flex flex-col leading-none">
            <span
              className="font-display text-gold tracking-wider"
              style={{ fontSize: "1.6rem", lineHeight: 1 }}
            >
              EL PETRA
            </span>
            <span
              className="font-sans text-white/40 tracking-[0.35em]"
              style={{ fontSize: "0.55rem", marginTop: "2px", textTransform: "lowercase" }}
            >
              shawarma
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-white/70 hover:text-gold transition-colors"
              style={{ fontSize: "1.05rem", letterSpacing: "0.08em" }}
              activeProps={{
                style: { color: "var(--gold)", fontSize: "1.05rem", letterSpacing: "0.08em" },
              }}
              activeOptions={{ exact: true }}
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
          <a href={WOLT_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Comandă pe Wolt
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--gold)" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Meniu navigare"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          style={{ background: "#0A0A0A", borderTop: "1px solid rgba(232,114,14,0.1)" }}
          className="md:hidden px-6 py-8 flex flex-col gap-5"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-white/80 hover:text-gold transition-colors"
              style={{ fontSize: "2rem", letterSpacing: "0.06em" }}
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
          <a
            href={WOLT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-2 text-center"
            onClick={() => setOpen(false)}
          >
            Comandă pe Wolt
          </a>
        </nav>
      )}
    </header>
  );
}

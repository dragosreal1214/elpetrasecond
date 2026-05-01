import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import logoImg from "@/assets/wolt-logo.avif";

export default function Footer() {
  const links = [
    { to: "/", label: "Acasă" },
    { to: "/meniu", label: "Meniu" },
    { to: "/galerie", label: "Galerie" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(232,114,14,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <img src={logoImg} alt="El Petra" style={{ width: "52px", height: "52px", objectFit: "contain" }} />
            <div>
              <div className="font-display text-gold tracking-wider" style={{ fontSize: "1.9rem", lineHeight: 1 }}>
                EL PETRA
              </div>
              <div className="font-sans text-white/40 tracking-[0.35em] text-xs lowercase">shawarma</div>
            </div>
          </div>
          <p className="font-sans italic text-white/50 mt-5 text-sm leading-relaxed max-w-xs">
            „Gustul Orientului, în inima Iașului."
          </p>
          <a
            href="https://instagram.com/elpetrashawarma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-white/50 hover:text-gold transition-colors text-sm font-sans"
          >
            <Instagram size={16} />
            @elpetrashawarma
          </a>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-display text-gold tracking-widest mb-5" style={{ fontSize: "1.1rem" }}>
            NAVIGARE
          </h4>
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="font-sans text-white/50 hover:text-gold transition-colors text-sm tracking-wide"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-gold tracking-widest mb-5" style={{ fontSize: "1.1rem" }}>
            CONTACT
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/50 text-sm font-sans">
              <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
              <span>Str. Vasile Alecsandri 7-11, Iași 700054</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-gold shrink-0" />
              <a href="tel:+40790915977" className="text-white/50 hover:text-gold transition-colors text-sm font-sans">
                +40 790 915 977
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/50 text-sm font-sans">
              <Clock size={15} className="text-gold mt-0.5 shrink-0" />
              <div>
                <div>Luni–Joi & Duminică: 10:00–22:00</div>
                <div>Vineri–Sâmbătă: 11:00–23:00</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(232,114,14,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-white/25 text-xs font-sans tracking-wider">
            © 2026 El Petra Shawarma. Toate drepturile rezervate.
          </span>
          <span className="text-gold/40 font-display tracking-widest text-sm">EL PETRA</span>
        </div>
      </div>
    </footer>
  );
}

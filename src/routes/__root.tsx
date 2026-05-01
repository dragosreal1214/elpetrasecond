import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WoltFloat from "@/components/WoltFloat";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gold">404</h1>
        <h2 className="mt-4 font-serif text-xl text-wheat">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-wheat/70">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold">
            Înapoi acasă
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "El Petra Shawarma — Gustul Orientului, în inima Iașului" },
      {
        name: "description",
        content:
          "Shawarma arabescă autentică în Iași — rețete iordaniene tradiționale, carne marinată lent. Comandă pe Wolt sau vino în centrul Iașului.",
      },
      { name: "author", content: "El Petra Shawarma" },
      { property: "og:title", content: "El Petra Shawarma — Iași" },
      {
        property: "og:description",
        content: "Shawarma arabescă autentică, rețete iordaniene, în centrul Iașului.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WoltFloat />
    </>
  );
}

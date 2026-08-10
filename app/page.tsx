const reviews = [
  {
    name: "Zorya",
    meta: "Local Guide",
    quote: "Lekker brood en gebak en aardige bediening.",
    tilt: "tilt-1",
  },
  {
    name: "H. Coolen",
    meta: "Local Guide",
    quote:
      "Beste bakkersproducten van de omgeving, betaalbare kwaliteitsproducten, heerlijk brood en vriendelijke bediening.",
    tilt: "tilt-2",
  },
  {
    name: "edd1961",
    meta: "Local Guide",
    quote: "Fijne bakker. Lekker brood.",
    tilt: "tilt-3",
  },
  {
    name: "Gerrit Arts",
    meta: "Local Guide",
    quote: "Vlak bij en goed brood.",
    tilt: "tilt-4",
  },
  {
    name: "Sander Heesmans",
    meta: "Klant",
    quote: "Zeer goede producten.",
    tilt: "tilt-5",
  },
  {
    name: "Tim Verberne",
    meta: "Klant",
    quote: "Goeie bakker.",
    tilt: "tilt-6",
  },
  {
    name: "Świat jest...",
    meta: "Local Guide · vertaald uit het Pools",
    quote: "Het beste Poolse brood uit de streek.",
    tilt: "tilt-7",
  },
    {
    name: "Patrick Verberne",
    meta: "Eigenaar",
    quote: "Heel lekker brood.",
    tilt: "tilt-8",
  },
];

function Stamp() {
  return (
    <div className="stamp w-14 h-14 flex-shrink-0">
      <span className="font-hand text-lg leading-none text-center">★★★★★</span>
    </div>
  );
}

function Ticket({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className={`ticket ${r.tilt} p-6 pt-7`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="font-display text-lg text-crust">{r.name}</p>
          <p className="text-xs text-fade">{r.meta}</p>
        </div>
        <Stamp />
      </div>
      <div className="rule-honey mb-4" />
      <p className="text-crust/90 leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between py-7">
        <a href="#top" className="font-display text-xl text-crust">
          Het Bakkershuys
        </a>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-crust/70">
          <a href="#overzicht" className="hover:text-rye transition-colors">
            Overzicht
          </a>
          <a href="#reviews" className="hover:text-rye transition-colors">
            Reviews
          </a>
          <a href="#over" className="hover:text-rye transition-colors">
            Over
          </a>
          <a href="#contact" className="hover:text-rye transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero / Overzicht */}
      <section id="overzicht" className="max-w-6xl mx-auto px-6 md:px-10 pt-8 pb-20">
        <p className="fade-up font-hand text-2xl text-honey mb-2">Dagvers uit Deurne</p>
        <h1 className="fade-up fade-up-delay-1 font-display text-4xl md:text-6xl leading-[1.1] text-crust max-w-2xl">
          Brood zoals het <em className="italic text-rye">hoort te smaken.</em>
        </h1>
        <p className="fade-up fade-up-delay-2 text-crust/70 text-base md:text-lg max-w-xl mt-6 leading-relaxed">
          het lekkerste brood is van het bakkershuys
        </p>

        <div className="fade-up fade-up-delay-3 flex flex-wrap items-center gap-4 mt-9">
          <div className="flex items-center gap-2 bg-kraft border border-kraftline rounded-sm px-4 py-2">
            <span className="font-display text-lg text-crust">4,6</span>
            <span className="font-hand text-honey text-xl leading-none">★★★★★</span>
            <span className="text-sm text-fade">· 14 reviews</span>
          </div>
          <a
            href="#reviews"
            className="text-sm text-rye border-b border-rye/40 hover:border-rye transition-colors"
          >
            Lees wat klanten zeggen →
          </a>
        </div>
      </section>

      {/* Over */}
      <section id="over" className="max-w-6xl mx-auto px-6 md:px-10 py-16 border-t border-kraftline">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <p className="font-hand text-xl text-honey mb-3">Over ons</p>
            <h2 className="font-display text-2xl md:text-3xl text-crust mb-5">
              Een echte buurtbakker.
            </h2>
            <p className="text-crust/70 leading-relaxed max-w-xl">
              Het Bakkershuys is de vertrouwde bakker van Deurne: vers brood,
              gebak en lekkernijen, elke dag met de hand gemaakt. Geen
              kunstjes, geen poespas — gewoon goed brood, gebakken door mensen
              die het vak verstaan.
            </p>
          </div>
          <div className="md:col-span-2 bg-kraft border border-kraftline rounded-sm p-6 h-fit">
            <p className="font-hand text-lg text-honey mb-4">Waarom klanten terugkomen</p>
            <ul className="space-y-3 text-sm text-crust/80">
              <li className="flex gap-2">
                <span className="text-rye">—</span> Elke ochtend vers gebakken
              </li>
              <li className="flex gap-2">
                <span className="text-rye">—</span> Vriendelijke, persoonlijke bediening
              </li>
              <li className="flex gap-2">
                <span className="text-rye">—</span> Vaste kwaliteit, al jaren
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-kraftline">
        <p className="font-hand text-xl text-honey mb-3">Wat klanten zeggen</p>
        <h2 className="font-display text-2xl md:text-3xl text-crust mb-12 max-w-xl">
          Rechtstreeks van Google, opgeprikt aan de muur.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reviews.map((r, i) => (
            <Ticket key={i} r={r} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-kraftline">
        <div className="bg-kraft border border-kraftline rounded-sm p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-hand text-xl text-honey mb-3">Kom langs</p>
            <h2 className="font-display text-2xl md:text-3xl text-crust mb-6">
              Geijzerstraat 1N, Deurne
            </h2>
            <p className="text-crust/70 leading-relaxed mb-1">Geijzerstraat 1N</p>
            <p className="text-crust/70 leading-relaxed mb-6">5753 RP Deurne</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Geijzerstraat+1N+5753+RP+Deurne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rye border-b border-rye/40 hover:border-rye transition-colors text-sm"
            >
              Bekijk route op Google Maps →
            </a>
          </div>
          <div>
            <p className="font-hand text-xl text-honey mb-3">Online</p>
            <a
              href="http://www.hetbakkershuys.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl text-crust hover:text-rye transition-colors block mb-2"
            >
              hetbakkershuys.nl
            </a>
            <p className="text-sm text-fade">
              Openingstijden en actuele informatie: vul aan zodra bekend.
            </p>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 md:px-10 pb-10 pt-4 flex items-center justify-between text-xs text-fade">
        <span>© {new Date().getFullYear()} Het Bakkershuys</span>
        <span>Deurne</span>
      </footer>
    </main>
  );
}

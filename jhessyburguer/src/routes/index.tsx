import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star, Truck, ShoppingBag, CupSoda, IceCreamCone, Tv, Baby, Dog, Zap, Beef, Sandwich,
  MapPin, Clock, Instagram, MessageCircle, Phone, Quote, Bike,
} from "lucide-react";
import heroImg from "@/assets/hero-burger.jpg";
import acaiImg from "@/assets/acai.jpg";
import hotdogImg from "@/assets/hotdog.jpg";
import friesImg from "@/assets/fries.jpg";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";
import { site, menu, testimonials, waLink, instaLink, mapsLink, mapsEmbed } from "@/config/site";

const title = "Jhessy Burguer | Hamburgueria em Ribeirão das Neves - MG";
const description =
  "Peça seu hambúrguer, hot dog, açaí e muito mais na Jhessy Burguer. Delivery e retirada no Florença, Ribeirão das Neves - MG.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Jhessy Burguer - Hamburgueria",
  servesCuisine: "Hamburgueria",
  priceRange: "R$ 20–40",
  telephone: "+55 31 98026-9266",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Ida Jubeline, 1058 - Florença",
    addressLocality: "Ribeirão das Neves",
    addressRegion: "MG",
    postalCode: "33823-730",
    addressCountry: "BR",
  },
  openingHours: "Tu-Su 18:00-23:30",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "218" },
  sameAs: ["https://instagram.com/jhessyburguer"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

const perks = [
  [Beef, "Hambúrguer artesanal"], [Truck, "Delivery"], [ShoppingBag, "Retirada no local"],
  [Sandwich, "Hot Dog"], [CupSoda, "Bebidas geladas"], [IceCreamCone, "Açaí"],
  [Tv, "Bom lugar para assistir esportes"], [Baby, "Cardápio infantil"],
  [Dog, "Permite a entrada de cães"], [Zap, "Entrega rápida"],
] as const;

function SectionTitle({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <Reveal className="mb-10 text-center md:mb-14">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-accent">{kicker}</p>
      <h2 className="font-display text-4xl leading-none md:text-6xl">{children}</h2>
    </Reveal>
  );
}

function Index() {
  const [cat, setCat] = useState(menu[0]!.id);
  const current = menu.find((c) => c.id === cat)!;

  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[100svh] items-end pt-20 md:items-center">
        <img src={heroImg} alt="Hambúrguer artesanal da Jhessy Burguer" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10 md:bg-gradient-to-r md:from-background md:via-background/75 md:to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 md:px-8 md:pb-0">
          <Reveal className="max-w-2xl">
            <a href={site.googleReviewsUrl || "#avaliacoes"} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Star className="h-4 w-4 fill-cheese text-cheese" /> {site.rating}/5 no Google
              <span className="text-muted-foreground">· +{site.reviews} avaliações</span>
            </a>
            <h1 className="font-display text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-9xl">
              O melhor <span className="text-fire">Burguer</span> do Florença 🍔🔥
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground md:text-xl">
              Sabor de verdade, ingredientes caprichados e aquele lanche que dá vontade de pedir de novo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-fire px-8 py-4 text-base">Pedir agora</a>
              <a href="#cardapio" className="btn-ghost px-8 py-4 text-base">Ver cardápio</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE strip */}
      <div className="bg-fire py-3">
        <p className="text-center font-display text-lg text-primary-foreground md:text-2xl">
          Delivery · Retirada · Terça a domingo · 18h às 23h30
        </p>
      </div>

      {/* PERKS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionTitle kicker="Diferenciais">Por que pedir na <span className="text-fire">Jhessy?</span></SectionTitle>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {perks.map(([Icon, label], i) => (
            <Reveal key={label} delay={i * 50}>
              <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary">
                <Icon className="mb-4 h-8 w-8 text-accent transition-transform group-hover:scale-110" />
                <p className="font-semibold leading-tight">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="cardapio" className="bg-card/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle kicker="Cardápio">Escolha seu <span className="text-fire">favorito</span></SectionTitle>
          <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:justify-center md:px-0">
            {menu.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  cat === c.id ? "bg-fire text-primary-foreground shadow-glow" : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.emoji} {c.label}
              </button>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {current.products.map((p, i) => (
              <Reveal key={cat + p.name} delay={i * 80}>
                <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/60">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur">Exemplo</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-display text-xl text-accent">{p.price}</span>
                      <a href={waLink(`Olá! Gostaria de fazer um pedido na Jhessy Burguer: ${p.name}`)} target="_blank" rel="noreferrer" className="btn-fire px-5 py-2.5 text-sm">Pedir</a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">* Produtos e preços ilustrativos. Consulte o cardápio completo pelo WhatsApp.</p>
        </div>
      </section>

      {/* ACAI */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <Reveal>
          <img src={acaiImg} alt="Açaí da Jhessy Burguer" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-3xl object-cover shadow-card" />
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-accent">Sobremesa</p>
          <h2 className="font-display text-5xl leading-none md:text-7xl">Nosso açaí também é uma <span className="text-fire">delícia!</span> 🍓🍦</h2>
          <p className="mt-6 text-lg text-muted-foreground">Perfeito para acompanhar seu lanche ou matar aquela vontade de um doce.</p>
          <a href={waLink("Olá! Gostaria de pedir um açaí na Jhessy Burguer. 🍦")} target="_blank" rel="noreferrer" className="btn-fire mt-8 px-8 py-4">Pedir açaí</a>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="bg-card/40 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-5 md:px-8">
          <Reveal className="md:col-span-3">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-accent">Sobre nós</p>
            <h2 className="font-display text-5xl leading-none md:text-6xl">A casa do burguer no <span className="text-fire">Florença</span></h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Jhessy Burguer é uma hamburgueria localizada no bairro Florença, em Ribeirão das Neves - MG. Com atendimento presencial, retirada e delivery, a casa busca oferecer lanches saborosos, bebidas geladas e uma experiência descontraída para toda a família.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {["Atendimento presencial", "Delivery", "Retirada", "Cardápio infantil", "Ambiente pet friendly", "Espaço para assistir esportes"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-semibold"><span className="h-2 w-2 rounded-full bg-fire" />{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-3 md:col-span-2">
            <img src={hotdogImg} alt="Hot dog" loading="lazy" width={1024} height={1024} className="aspect-[3/4] w-full rounded-2xl object-cover" />
            <img src={friesImg} alt="Batata e bebida" loading="lazy" width={1024} height={1024} className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover" />
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="avaliacoes" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <SectionTitle kicker="Avaliações">Quem experimenta, <span className="text-fire">recomenda</span> ❤️</SectionTitle>
        <Reveal className="mb-12 text-center">
          <p className="font-display text-8xl text-fire md:text-9xl">{site.rating}</p>
          <div className="mt-2 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-cheese text-cheese" />)}
          </div>
          <p className="mt-3 font-semibold text-muted-foreground">{site.reviews} avaliações no Google</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t} delay={i * 100}>
              <blockquote className="h-full rounded-3xl border border-border bg-card p-8">
                <Quote className="mb-4 h-8 w-8 text-primary" />
                <p className="text-lg font-medium">"{t}"</p>
                <div className="mt-4 flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-cheese text-cheese" />)}</div>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={site.googleReviewsUrl || mapsLink} target="_blank" rel="noreferrer" className="btn-ghost px-8 py-4">Ver todas as avaliações</a>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-card/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionTitle kicker={`@${site.instagram}`}>Siga a Jhessy <span className="text-fire">Burguer</span> 📸</SectionTitle>
          <p className="-mt-6 mb-10 text-center text-muted-foreground">Acompanhe nossos lançamentos, promoções e novidades.</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[heroImg, hotdogImg, acaiImg, friesImg].map((src, i) => (
              <a key={i} href={instaLink} target="_blank" rel="noreferrer" className="group relative aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt="Foto do Instagram" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100"><Instagram className="h-8 w-8" /></span>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={instaLink} target="_blank" rel="noreferrer" className="btn-fire px-8 py-4"><Instagram className="h-5 w-5" /> Seguir no Instagram</a>
          </div>
        </div>
      </section>

      {/* DELIVERY CTA */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-fire p-10 text-center shadow-glow md:p-16">
          <Bike className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
          <h2 className="font-display text-5xl leading-none text-primary-foreground md:text-7xl">Bateu aquela fome? Peça agora! 🍔🔥</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/90">Escolha seus favoritos e faça seu pedido de forma rápida e fácil.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-wa px-8 py-4"><MessageCircle className="h-5 w-5" /> Pedir pelo WhatsApp</a>
            <a
              href={site.ifoodUrl || "#"}
              target={site.ifoodUrl ? "_blank" : undefined}
              rel="noreferrer"
              aria-disabled={!site.ifoodUrl}
              className={`inline-flex items-center justify-center rounded-full bg-background px-8 py-4 font-extrabold uppercase tracking-wider text-foreground transition-transform hover:-translate-y-0.5 ${site.ifoodUrl ? "" : "pointer-events-none opacity-70"}`}
            >
              Pedir pelo iFood {site.ifoodUrl ? "" : "(em breve)"}
            </a>
          </div>
        </Reveal>
      </section>

      {/* LOCATION + HOURS + CONTACT */}
      <section id="localizacao" className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
        <SectionTitle kicker="Localização">Onde <span className="text-fire">estamos?</span></SectionTitle>
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="overflow-hidden rounded-3xl border border-border lg:col-span-2">
            <iframe title="Mapa Jhessy Burguer" src={mapsEmbed} className="h-80 w-full md:h-full md:min-h-[420px]" loading="lazy" />
          </Reveal>
          <div className="flex flex-col gap-5">
            <Reveal className="rounded-3xl border border-border bg-card p-7">
              <MapPin className="mb-3 h-7 w-7 text-accent" />
              <p className="font-semibold">{site.address}</p>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="btn-fire mt-5 w-full px-6 py-3 text-sm">Como chegar</a>
            </Reveal>
            <Reveal delay={100} className="rounded-3xl border border-border bg-card p-7">
              <Clock className="mb-3 h-7 w-7 text-accent" />
              <h3 className="font-display text-2xl">Horário de funcionamento</h3>
              {site.hours.map((h) => (
                <div key={h.days} className="mt-3 flex justify-between border-b border-border pb-3">
                  <span className="font-semibold">{h.days}</span><span className="text-accent">{h.time}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-5 grid gap-5 rounded-3xl border border-border bg-card p-7 md:grid-cols-3">
          <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-4"><span className="rounded-full bg-whatsapp p-3"><Phone className="h-5 w-5 text-whatsapp-foreground" /></span><div><p className="text-sm text-muted-foreground">WhatsApp</p><p className="font-bold">{site.phone}</p></div></a>
          <a href={instaLink} target="_blank" rel="noreferrer" className="flex items-center gap-4"><span className="rounded-full bg-fire p-3"><Instagram className="h-5 w-5 text-primary-foreground" /></span><div><p className="text-sm text-muted-foreground">Instagram</p><p className="font-bold">@{site.instagram}</p></div></a>
          <div className="flex items-center gap-4"><span className="rounded-full bg-secondary p-3"><MapPin className="h-5 w-5 text-accent" /></span><div><p className="text-sm text-muted-foreground">Endereço</p><p className="font-bold">Florença, Ribeirão das Neves - MG</p></div></div>
        </Reveal>
      </section>

      <footer className="border-t border-border py-10 pb-28 text-center md:pb-10">
        <p className="font-display text-3xl">Jhessy <span className="text-fire">Burguer</span></p>
        <p className="mt-2 text-sm text-muted-foreground">O melhor Burguer do Florença · © {new Date().getFullYear()}</p>
      </footer>

      {/* Mobile sticky order bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={waLink()} target="_blank" rel="noreferrer" className="btn-fire w-full py-3.5 pr-16">Pedir agora 🍔</a>
      </div>

      {/* Floating WhatsApp */}
      <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Pedir pelo WhatsApp" className="animate-wa fixed bottom-3 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:scale-110 md:bottom-6 md:right-6 md:h-16 md:w-16">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

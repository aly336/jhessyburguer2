// Edite aqui as informações do site: contatos, horários, links e produtos.
import burger from "@/assets/hero-burger.jpg";
import hotdog from "@/assets/hotdog.jpg";
import fries from "@/assets/fries.jpg";
import acai from "@/assets/acai.jpg";

export const site = {
  name: "Jhessy Burguer",
  phone: "(31) 98026-9266",
  whatsappNumber: "5531980269266",
  instagram: "jhessyburguer",
  address: "Av. Ida Jubeline, 1058 - Florença, Ribeirão das Neves - MG, 33823-730",
  rating: "4,9",
  reviews: 218,
  priceRange: "R$ 20–40",
  hours: [{ days: "Terça a domingo", time: "18:00 às 23:30" }],
  closed: "Segunda-feira",
  ifoodUrl: "", // cole aqui o link oficial do iFood
  googleReviewsUrl: "", // cole aqui o link do perfil no Google
};

export const waLink = (msg = "Olá! Vim pelo site da Jhessy Burguer e gostaria de fazer um pedido. 🍔🔥") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
export const instaLink = `https://instagram.com/${site.instagram}`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

export type Product = { name: string; description: string; price: string; image: string };
export type Category = { id: string; label: string; emoji: string; products: Product[] };

// PRODUTOS DE EXEMPLO — substitua pelos nomes, descrições e preços reais.
const demo = (name: string, image: string): Product => ({
  name,
  description: "Produto de exemplo — descrição a ser editada pelo proprietário.",
  price: "A definir",
  image,
});

export const menu: Category[] = [
  { id: "burgers", label: "Hambúrgueres", emoji: "🍔", products: [demo("BURGUER EXEMPLO 1", burger), demo("Burguer Exemplo 2", burger), demo("Burguer Exemplo 3", burger)] },
  { id: "hotdogs", label: "Hot Dogs", emoji: "🌭", products: [demo("Hot Dog Exemplo 1", hotdog), demo("Hot Dog Exemplo 2", hotdog)] },
  { id: "sides", label: "Acompanhamentos", emoji: "🍟", products: [demo("Porção Exemplo 1", fries), demo("Porção Exemplo 2", fries)] },
  { id: "drinks", label: "Bebidas", emoji: "🥤", products: [demo("Bebida Exemplo 1", fries)] },
  { id: "acai", label: "Açaí", emoji: "🍦", products: [demo("Açaí Exemplo 1", acai), demo("Açaí Exemplo 2", acai)] },
  { id: "kids", label: "Infantil", emoji: "👧", products: [demo("Combo Infantil Exemplo", burger)] },
];

export const testimonials = [
  "Lugar top de mais..... e a melhor comida da região.",
  "Lanche uma delícia, bebida bem gelada e entrega rápida.",
  "Experimentamos o pão com linguiça, macarrão e açaí!",
];

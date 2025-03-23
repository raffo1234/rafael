/* empty css                                    */
import { c as createComponent, f as createAstro, r as renderTemplate, b as renderComponent, g as renderScript, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_ComAydu-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DV-gdNZe.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_SbOHXrXW.mjs';
import { t as tiger, c as cancino, r as renta2014, a as travelmax, y as yachay, g as grupon, l as laive, b as yachayDashboard, d as goldenpalace } from '../chunks/goldenpalace_CfO6T-XE.mjs';
import { $ as $$Logo, a as $$MenuAndTitle } from '../chunks/Logo_41r3PMkT.mjs';
import { s as supabase } from '../chunks/supabase_BHY3KBkp.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const rafael = new Proxy({"src":"/_astro/rafael.DkUy9AVz.png","width":2579,"height":1678,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/github/rafael/src/assets/portfolio/rafael.png";
							}
							
							return target[name];
						}
					});

const libertad = new Proxy({"src":"/_astro/libertad.BcCvlvJQ.png","width":2000,"height":1221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/github/rafael/src/assets/portfolio/libertad.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const images = [
    {
      src: libertad,
      year: 2024,
      alt: "Libertad",
      focus: "Focus on: CSS, Javascript, GSAP, AstroJS",
      href: "https://libertad-six.vercel.app/",
      buttonText: "View Online"
    },
    {
      src: rafael,
      year: 2025,
      alt: "Rafael Meza",
      focus: "Focus on: AstroJS, Supabase, CSS, Javascript, GSAP ",
      href: "https://github.com/raffo1234/rafael",
      buttonText: "View on Github"
    },
    {
      src: tiger,
      year: 2015,
      alt: "Tiger",
      focus: "Focus on: CSS, Javascript, GSAP",
      href: "https://rafaelmeza.com/portfolio/tiger/index.html",
      buttonText: "View Online"
    },
    {
      src: cancino,
      year: 2016,
      alt: "Cancino",
      focus: "Focus on: CSS, Javascript, GSAP",
      href: "https://rafaelmeza.com/portfolio/cancino/index.html",
      buttonText: "View Online"
    },
    {
      src: renta2014,
      year: 2014,
      alt: "SUNAT Renta 2014",
      focus: "Focus on: CSS, Javascript, GSAP",
      buttonText: "View Online"
    },
    {
      src: travelmax,
      year: 2016,
      alt: "TravelMax",
      focus: "Focus on: CSS, Javascript, GSAP, Jquery",
      href: "https://rafaelmeza.com/portfolio/travelmax/index.html",
      buttonText: "View Online"
    },
    {
      src: yachay,
      year: 2016,
      alt: "Yachay",
      focus: "Focus on: CSS, Javascript, GSAP, Angular",
      buttonText: "View Online"
    },
    {
      src: grupon,
      year: 2015,
      alt: "Grupon",
      focus: "Focus on: CSS, Javascript, GSAP, Jquery",
      href: "https://rafaelmeza.com/portfolio/alignet/flujo_pago_1.html",
      buttonText: "View Online"
    },
    {
      src: laive,
      year: 2015,
      alt: "Laive",
      focus: "Focus on: CSS, Javascript, GSAP, Jquery",
      href: "https://rafaelmeza.com/portfolio/laive/index.html",
      buttonText: "View Online"
    },
    {
      src: yachayDashboard,
      year: 2016,
      alt: "Yachay Dashboard",
      focus: "Focus on: CSS, Javascript, GSAP, Angular",
      buttonText: "View Online"
    },
    {
      src: goldenpalace,
      year: 2015,
      alt: "Golden Palace",
      focus: "Focus on: CSS, Javascript, GSAP",
      href: "https://rafaelmeza.com/portfolio/goldenpalace/index.html",
      buttonText: "View Online"
    }
  ];
  let { data } = await supabase.from("user").select("*");
  return renderTemplate`${data?.map((user) => {
    return renderTemplate`${maybeRenderHead()}<div data-astro-cid-hcjuqwdu><h1 data-astro-cid-hcjuqwdu>Username: ${user.username}</h1><p data-astro-cid-hcjuqwdu>Email: ${user.email}</p></div>`;
  })}${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-hcjuqwdu": true })}${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Projects", "data-astro-cid-hcjuqwdu": true }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "MenuAndTitle", $$MenuAndTitle, { "title": "Portfolio", "data-astro-cid-hcjuqwdu": true })}<section id="smooth-wrapper" class="w-full projects overflow-hidden min-h-lvh p-4 md:p-6 flex flex-col lg:block" data-astro-cid-hcjuqwdu>${images.map(({ src, focus, alt, href, year, buttonText }, index) => {
    return renderTemplate`<article${addAttribute(`w-full h-lvh project project${index + 1} flex flex-col md:flex-row relative`, "class")} data-astro-cid-hcjuqwdu>${renderComponent($$result2, "Image", $$Image, { "src": src, "class": `project-image  project-${index}-image ${index === 0 ? "!opacity-100" : ""} w-[80%] md:w-1/2 max-w-full md:aspect-square transition-all ease-in-out duration-700 object-contain mx-auto`, "alt": `${alt} - Rafael Meza | Portfolio`, "data-astro-cid-hcjuqwdu": true })}<div${addAttribute(`relative project-info project-${index}-info md:opacity-0 transition-all duration-700 ease-in-out w-full md:w-0 relative md:h-full flex items-center`, "class")} data-astro-cid-hcjuqwdu><div class="md:w-[300px] md:absolute left-0 top-1/2 md:-translate-y-1/2" data-astro-cid-hcjuqwdu><p class="text-white bg-green-800 p-2 rounded-sm text-xs inline-block" data-astro-cid-hcjuqwdu>${year}</p><h2 class="font-cinzel leading-tight nowrap mb-6"${addAttribute({
      fontSize: "clamp(20px, 3vw + .4rem, 80px)"
    }, "style")} data-astro-cid-hcjuqwdu>${alt}</h2><p class="text-sm md:text-xl lg:text-2xl font-nixie-one leading-relaxed" data-astro-cid-hcjuqwdu>${focus}</p>${href ? renderTemplate`<a target="_blank" title="Portfolio - View Online - Rafael Meza" rel="noopener noreferrer"${addAttribute(href, "href")} class="font-cinzel group mt-12 inline-block"${addAttribute({
      fontSize: "clamp(16px, 2vw + .4rem, 24px)"
    }, "style")} data-astro-cid-hcjuqwdu>${buttonText}<span class="h-[2px] transition-all duration-700 ease-in-out mt-2 group-hover:w-full w-12 bg-black block" data-astro-cid-hcjuqwdu></span></a>` : null}</div></div></article>`;
  })}</section>` })}${renderScript($$result, "C:/github/rafael/src/pages/portfolio.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/github/rafael/src/pages/portfolio.astro", void 0);

const $$file = "C:/github/rafael/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Portfolio,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

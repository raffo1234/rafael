import { c as createComponent, f as createAstro, r as renderTemplate, d as addAttribute, g as renderScript, a as renderSlot, h as renderHead, b as renderComponent } from './astro/server_ComAydu-.mjs';
import 'kleur/colors';
/* empty css                            */
import 'clsx';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/github/rafael/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/github/rafael/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><meta name="author" content="Rafael Meza"><meta name="keywords" content="Web developer, Frontend developer, Expert in web layout, React.js developer, Responsive web development, HTML/CSS layout, Web design, Professional web layout, Custom web development, React programmer, Expert frontend developer, Interactive web design, UI/UX developer, Interface developer, Website optimization, React.js, Advanced JavaScript, HTML5 layout, CSS3 and Sass, Responsive design with React, React hooks, Redux for React, Reusable React components, React and Next.js, Frontend frameworks, Modern web development, Frontend with React, Professional website creation, Web application development, Web layout services, Fast and scalable website development, Custom user interface development, Web development for businesses, React.js consulting, Custom frontend design and development, Optimized website development, Freelance web developer, Web developer in Lima, Peru, Freelance programmer in Lima, Peru, React.js consulting in Lima, Peru"><meta name="description" content="Rafael Meza - Web Developer specializing in ReactJS. Building modern, scalable, and efficient web applications. Turn your ideas into reality with custom tech solutions. Expert in front-end development and JavaScript frameworks."><meta name="robots" content="index, follow "><link rel="canonical" href="https://www.rafaelmeza.com/"><meta property="og:title" content="Rafael Meza"><meta property="og:description" content="Rafael Meza is a skilled web developer specializing in responsive web design, advanced CSS techniques, and building powerful user interfaces with React.js and JavaScript. Offering custom web development solutions that are fast, scalable, and tailored to your needs."><meta property="og:image" content="https://www.rafaelmeza.com/rafael.png"><title>\n      ', "\n      ", "\n      Rafael Meza | Web Developer\n    </title>", "", '</head> <body id="app" class="opacity-0 bg-[#FEF8DD] transition-opacity duration-700 ease-in-out"> ', ' <script>\n      document.addEventListener("astro:page-load", () => {\n        const app = document.getElementById("app");\n        if (app) {\n          app.classList.remove("opacity-0");\n        }\n\n        document.querySelectorAll("a").forEach((link) => {\n          link.addEventListener("click", (event) => {\n            if (event.currentTarget.getAttribute("target") !== "_blank") {\n              event.preventDefault();\n              const path = event.currentTarget.getAttribute("href");\n\n              document.body.classList.add("opacity-0");\n              setTimeout(() => {\n                window.location.href = path;\n              }, 700);\n            }\n          });\n        });\n      });\n    <\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), pageTitle, pageTitle ? " | " : "", renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/github/rafael/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

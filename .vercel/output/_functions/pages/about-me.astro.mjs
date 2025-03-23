/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_ComAydu-.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../chunks/Icon_C9VKj_bM.mjs';
import { $ as $$Layout } from '../chunks/Layout_DV-gdNZe.mjs';
import { $ as $$Container } from '../chunks/Container_Bj2YchR7.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("keyup", function (event) {\n    if (event.key === "Escape") {\n      const closeButton = document.getElementById("close-button-js");\n      if (closeButton) {\n        closeButton.click();\n      }\n    }\n  });\n\n  document.addEventListener("keyup", function (event) {\n    if (event.key === "Escape") {\n      window.location.href = "/";\n    }\n  });\n\n  document.addEventListener("astro:page-load", () => {\n    const closeButton = document.getElementById("close-button-js");\n    if (closeButton) {\n      const classes = ["!opacity-100", "!translate-y-0"];\n      setTimeout(() => closeButton.classList.add(...classes), 300);\n    }\n\n    const sliderContainer = document.getElementById("logo-js");\n    if (!sliderContainer) return;\n    const classes = ["!translate-y-0", "!opacity-100"];\n    sliderContainer.classList.add(...classes);\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "pageTitle": "About Me" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1250px] p-4 bg-purple w-full mx-auto rounded-[32px] lg:rounded-[52px] flex justify-center items-center relative"${addAttribute(renderTransition($$result3, "ejuthe5l", "", "about"), "data-astro-transition-scope")}> <a href="/" id="close-button-js" class="opacity-0 translate-y-2 transition duration-700 tran w-[62px] h-[62px] flex items-center justify-center text-white top-[30px] right-[30px] bg-orange absolute rounded-full"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols-light:arrow-back-rounded", "size": "62", "class": "-rotate-45" })} </a> <div id="logo-js" class="opacity-0 translate-y-4 transition-all duration-700"> <div class="flex items-center mb-6 space-x-5"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols-light:award-star-rounded", "size": "96", "class": "text-orange" })} <h1 class="text-orange font-nixie-one" style="font-size:clamp(18px, 4vw + 1rem, 60px)">
RAFAEL MEZA
</h1> </div> </div> </div> ` })} ` }));
}, "C:/github/rafael/src/pages/about-me.astro", "self");

const $$file = "C:/github/rafael/src/pages/about-me.astro";
const $$url = "/about-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutMe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

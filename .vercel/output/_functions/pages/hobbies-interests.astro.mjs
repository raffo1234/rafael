/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_ComAydu-.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../chunks/Icon_C9VKj_bM.mjs';
import { $ as $$Layout } from '../chunks/Layout_DV-gdNZe.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_SbOHXrXW.mjs';
import { c as cancino, t as tiger, r as renta2014, a as travelmax, y as yachay, g as grupon, l as laive, b as yachayDashboard, d as goldenpalace } from '../chunks/goldenpalace_CfO6T-XE.mjs';
import { $ as $$Container } from '../chunks/Container_Bj2YchR7.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HobbiesInterests = createComponent(($$result, $$props, $$slots) => {
  const images = [
    cancino,
    tiger,
    renta2014,
    travelmax,
    yachay,
    grupon,
    laive,
    yachayDashboard,
    goldenpalace
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("keyup", function (event) {\n    if (event.key === "Escape") {\n      window.location.href = "/";\n    }\n  });\n\n  document.addEventListener("astro:page-load", () => {\n    const sliderContainer = document.getElementById("slider-container-js");\n    if (!sliderContainer) return;\n    const classes = ["!translate-y-0", "!opacity-100"];\n    sliderContainer.classList.add(...classes);\n\n    let currentSlide = 0;\n\n    const showNextSlide = (slides) => {\n      for (const el of slides) {\n        el.classList.remove("!opacity-100");\n      }\n      slides[currentSlide].classList.add("!opacity-100");\n      currentSlide = (currentSlide + 1) % slides.length;\n    };\n\n    const slides = document.querySelectorAll(".slide-js");\n    if (slides.length > 0) {\n      setInterval(showNextSlide, 1200, slides);\n    }\n  });\n\n  document.addEventListener("astro:page-load", () => {\n    const closeButton = document.getElementById("close-button-js");\n    if (closeButton) {\n      const classes = ["!opacity-100", "!translate-y-0"];\n      setTimeout(() => closeButton.classList.add(...classes), 300);\n    }\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Hobbies & Interests" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-[1250px] bg-orange mx-auto rounded-[32px] lg:rounded-[52px] flex relative"${addAttribute(renderTransition($$result3, "w6pxvct5", "", "hobbies-interests"), "data-astro-transition-scope")}> <div class="relative opacity-0 transition-all translate-y-4 ease-in-out duration-700 flex w-full" id="slider-container-js"> <a href="/" id="close-button-js" class="opacity-0 translate-y-2 transition duration-700 w-[62px] flex items-center justify-center h-[62px] absolute rounded-full top-[30px] z-20 right-[30px] bg-purple"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "material-symbols-light:arrow-insert-rounded", "size": "62", "class": "text-orange -rotate-90" })} </a> ${images.map((image, index) => {
    return renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": image, "class": `${index === 0 ? "!opacity-100" : ""}  slide-js opacity-0 transition-opacity ease-in-out duration-1000 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 object-contain w-[95%] h-[95%]`, "alt": "Rafael Meza | Portfolio" })}`;
  })} </div> </div> ` })} ` }));
}, "C:/github/rafael/src/pages/hobbies-interests.astro", "self");

const $$file = "C:/github/rafael/src/pages/hobbies-interests.astro";
const $$url = "/hobbies-interests";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HobbiesInterests,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

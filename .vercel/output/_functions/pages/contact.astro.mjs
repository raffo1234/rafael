/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_ComAydu-.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../chunks/Icon_C9VKj_bM.mjs';
import { $ as $$Layout } from '../chunks/Layout_DV-gdNZe.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_SbOHXrXW.mjs';
import { $ as $$Logo, a as $$MenuAndTitle } from '../chunks/Logo_41r3PMkT.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const me = new Proxy({"src":"/_astro/rafael.BP9kYHHk.png","width":1576,"height":1580,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/github/rafael/src/assets/rafael.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " ", ' <script>\n  document.addEventListener("keyup", function (event) {\n    if (event.key === "Escape") {\n      window.location.href = "/";\n    }\n  });\n\n  document.addEventListener("astro:page-load", () => {\n    const classes = ["!opacity-100", "!translate-y-0"];\n\n    const boxes = document.querySelectorAll(".box-js");\n    if (!boxes.length === 0) return;\n\n    boxes.forEach((box, index) => {\n      setTimeout(() => {\n        box.classList.add(...classes);\n      }, index * 85);\n    });\n  });\n<\/script>'])), renderComponent($$result, "Logo", $$Logo, {}), renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Get in touch" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuAndTitle", $$MenuAndTitle, { "title": "Contact" })} ${maybeRenderHead()}<div class="max-w-[1250px] px-4 md:px-20 py-16 mx-auto h-full flex justify-center items-center relative w-full"${addAttribute(renderTransition($$result2, "fzbhkv3r", "", "contact"), "data-astro-transition-scope")}> <div class="w-full"> <div class="mb-6"> <div class="flex items-center mb-6 space-x-5"> <h1 class="font-cinzel text-green-800" style="font-size:clamp(18px, 4vw + 1rem, 60px)">
Get in touch
</h1> </div> </div> <div class="grid gap-4 w-full"${addAttribute({
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))"
  }, "style")}> <div class="overflow-hidden box-js flex delay-500 opacity-0 translate-y-96 transition-all duration-700 ease-in-out aspect-square rounded-[30px] relative w-full items-center justify-between"> ${renderComponent($$result2, "Image", $$Image, { "src": me, "class": "absolute object-cover object-top w-full h-full", "alt": "Rafael Meza" })} <p class="absolute text-white opacity-60 text-[40px] text-nowrap -mb-8 bottom-4 font-cinzel">
Available
</p> </div> <a href="mailto:rafaelmezac@gmail.com" target="_blank" rel="noreferrer" title="Email | Rafael Meza | rafaelmezac@gmail.com" class="group text-white hover:text-purple bg-green-800 text-xl box-js delay-500 opacity-0 translate-y-96 transition-all duration-700 drop-shadow-xl hover:drop-shadow-2xl ease-in-out overflow-hidden aspect-square flex items-center justify-center rounded-[30px] relative"> <span> EMAIL </span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols-light:mark-email-read-outline", "size": "48", "class": "text-orange transition-colors duration-700 absolute left-2 bottom-2" })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols-light:arrow-back-rounded", "size": "48", "class": "text-orange transition-colors duration-700 ease-in-out absolute right-0 top-0 rotate-[135deg]" })} </a> <a href="https://github.com/raffo1234" target="_blank" rel="noreferrer" title="Github | Rafael Meza | raffo1234" class="group text-white bg-green-800 text-xl box-js delay-500 opacity-0 translate-y-96 transition duration-700 drop-shadow-xl hover:drop-shadow-2xl ease-in-out aspect-square rounded-[30px] relative w-full flex items-center justify-center overflow-hidden"> <span> GITHUB </span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols-light:code-blocks-outline", "size": "48", "class": "transition-colors duration-700 absolute left-3 bottom-3" })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols-light:arrow-back-rounded", "size": "48", "class": "transition-colors duration-700 absolute right-0 top-0 rotate-[135deg]" })} </a> <a href="https://wa.me/+51997258592" title="Whatsapp | Rafael Meza | +51 997258592" target="_blank" rel="noreferrer" class="group text-white bg-green-800 text-xl box-js delay-500 opacity-0 translate-y-96 transition duration-700 drop-shadow-xl hover:drop-shadow-2xl ease-in-out aspect-square rounded-[30px] relative w-full flex items-center justify-center overflow-hidden"> <span> WHATSAPP </span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols-light:mark-unread-chat-alt-outline", "size": "48", "class": "transition-colors duration-700 absolute left-3 bottom-3" })} ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols-light:arrow-back-rounded", "size": "48", "class": "group-hover:text-purple transition-colors duration-700 absolute right-0 top-0 rotate-[135deg]" })} </a> </div> </div> </div> ` }));
}, "C:/github/rafael/src/pages/contact.astro", "self");

const $$file = "C:/github/rafael/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

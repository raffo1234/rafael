/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_ComAydu-.mjs';
import 'kleur/colors';
import { $ as $$Logo, a as $$MenuAndTitle } from '../chunks/Logo_41r3PMkT.mjs';
import { $ as $$Layout } from '../chunks/Layout_DV-gdNZe.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuAndTitle", $$MenuAndTitle, { "title": "Rafael Meza", "description": "I am a freelance web developer, dedicated to creating an online presence that meets business objectives and boosts conversions." })} ` })}`;
}, "C:/github/rafael/src/pages/index.astro", void 0);

const $$file = "C:/github/rafael/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

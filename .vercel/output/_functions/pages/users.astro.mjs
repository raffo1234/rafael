/* empty css                                    */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_ComAydu-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DV-gdNZe.mjs';
import { s as supabase } from '../chunks/supabase_BHY3KBkp.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let { data } = await supabase.from("user").select("*");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Users" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Users</h1> <section> ${data?.map((user) => {
    return renderTemplate`<div> <h1>Username: ${user.username}</h1> <p>Email: ${user.email}</p> </div>`;
  })} </section> ` })}`;
}, "C:/github/rafael/src/pages/users/index.astro", void 0);

const $$file = "C:/github/rafael/src/pages/users/index.astro";
const $$url = "/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

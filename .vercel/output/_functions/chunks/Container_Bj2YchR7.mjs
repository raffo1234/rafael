import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderSlot } from './astro/server_ComAydu-.mjs';
import 'kleur/colors';
import 'clsx';

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="p-2 md:p-6 lg:p-9 flex w-full"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "C:/github/rafael/src/components/Container.astro", void 0);

export { $$Container as $ };

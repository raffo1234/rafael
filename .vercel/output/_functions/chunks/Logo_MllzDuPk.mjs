import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, b as renderComponent } from './astro/server_fnSuBzlO.mjs';
import 'kleur/colors';
import 'clsx';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const options = [
    {
      id: "option-portfolio",
      text: "Portfolio",
      href: "/portfolio"
    },
    {
      id: "option-contact",
      text: "Contact",
      href: "/contact"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="menu-js" class="z-40 fixed w-full left-0 bottom-0 right-0 overflow-hidden h-0 delay-700 transition-all duration-700 ease-in-out bg-green-800 flex flex-col justify-center"> <ul class="font-cinzel leading-[1]"${addAttribute({
    fontSize: "clamp(20px, 13vw + .5rem, 200px)"
  }, "style")}> ${options.map(({ text, href, id }) => renderTemplate`<li class="w-full"> <a${addAttribute(href, "href")} class="hover:translate-x-6 transition-all duration-500 ease-in-out w-full overflow-hidden flex space-x-1 justify-center text-yellow-100 items-center"> <span class="flex w-full"${addAttribute(id, "id")}> ${text.split("").map((letter) => renderTemplate`<span class="opacity-0 block translate-y-96 transition-all ease-in-out duration-700"> ${letter} </span>`)} </span> </a> </li>`)} </ul> </nav>`;
}, "C:/github/rafael/src/components/Navigation.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro();
const $$MenuAndTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenuAndTitle;
  const { title, description } = Astro2.props;
  const titleArray = title.split("");
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<button id="menu-button-js" type="button" class="flex transition-all duration-500 ease-in-out flex-col space-y-2 w-12 h-12 group justify-center fixed right-6 top-6 z-50"> <span class="w-12 group-hover:w-9 transition-all duration-500 ease-in-out h-0.5 block bg-black"></span> <span class="w-9 h-0.5 group-hover:w-12 transition-all duration-500 ease-in-out block bg-black"></span> </button> ', ' <div class="p-6 w-full min-h-lvh flex justify-center items-center"> <div> <h1 id="title-js" class="opacity-0 h-full transition-opacity duration-500 ease-in-out w-full overflow-hidden flex space-x-1 justify-center text-green-800 font-cinzel items-center leading-tight"', "> ", " </h1> ", ' </div> </div> <script>\n  document.addEventListener("astro:page-load", () => {\n    const classes = ["!opacity-100", "!translate-y-0"];\n\n    const title = document.getElementById("title-js");\n\n    if (title) {\n      title.classList.add("!opacity-100");\n\n      const letters = document.querySelectorAll("h1 span");\n      letters.forEach((letter, index) => {\n        setTimeout(() => {\n          letter.classList.add(...classes);\n        }, index * 85);\n      });\n    }\n\n    const menuButton = document.getElementById("menu-button-js");\n    if (menuButton) {\n      menuButton.addEventListener("click", () => {\n        const menu = document.getElementById("menu-js");\n        const lines = menuButton.querySelectorAll("span");\n        const letters = document.querySelectorAll("h1 span");\n        const menuPortfolio = document.getElementById("option-portfolio");\n        const portfolioLetters = menuPortfolio.querySelectorAll("span");\n        const menuContact = document.getElementById("option-contact");\n        const contactLetters = menuContact.querySelectorAll("span");\n\n        if (!menuButton.classList.contains("active")) {\n          setTimeout(() => {\n            menuButton.classList.add("hover:scale-150");\n            menuButton.classList.add("active");\n            lines.forEach((line) => {\n              line.classList.add("bg-yellow-100");\n              line.classList.add("!w-12");\n            });\n            lines[0].classList.add("rotate-45");\n            lines[0].classList.add("translate-y-[4.5px]");\n            lines[1].classList.add("-rotate-45");\n            lines[1].classList.add("-translate-y-[4.5px]");\n          }, 700);\n\n          letters.forEach((letter, index) => {\n            setTimeout(() => {\n              letter.classList.remove("!opacity-100");\n              letter.classList.remove("!translate-y-0");\n              letter.classList.remove("translate-y-96");\n              letter.classList.add("-translate-y-96");\n            }, index * 85);\n          });\n\n          menu.classList.add("!h-full");\n\n          if (portfolioLetters) {\n            portfolioLetters.forEach((letter, index) => {\n              setTimeout(() => {\n                letter.classList.add("!opacity-100");\n                letter.classList.add("!translate-y-0");\n              }, index * 85);\n            });\n          }\n\n          if (contactLetters) {\n            contactLetters.forEach((letter, index) => {\n              setTimeout(\n                () => {\n                  letter.classList.add("!opacity-100");\n                  letter.classList.add("!translate-y-0");\n                },\n                index * 100 + 1200\n              );\n            });\n          }\n        } else {\n          if (contactLetters) {\n            contactLetters.forEach((letter, index) => {\n              setTimeout(() => {\n                letter.classList.remove("!opacity-100");\n                letter.classList.remove("!translate-y-0");\n              }, index * 100);\n            });\n          }\n\n          if (portfolioLetters) {\n            portfolioLetters.forEach((letter, index) => {\n              setTimeout(() => {\n                letter.classList.remove("!opacity-100");\n                letter.classList.remove("!translate-y-0");\n              }, index * 100);\n            });\n          }\n\n          setTimeout(() => menu.classList.remove("!h-full"), 500);\n\n          letters.forEach((letter, index) => {\n            setTimeout(\n              () => {\n                letter.classList.add("!opacity-100");\n                letter.classList.add("!translate-y-0");\n                letter.classList.add("translate-y-96");\n                letter.classList.remove("-translate-y-96");\n              },\n              index * 85 + 700\n            );\n          });\n\n          setTimeout(() => {\n            menuButton.classList.remove("hover:scale-150");\n            menuButton.classList.remove("active");\n            lines.forEach((line) => {\n              line.classList.remove("bg-yellow-100");\n              line.classList.remove("!w-12");\n            });\n            lines[0].classList.remove("rotate-45");\n            lines[0].classList.remove("translate-y-[4.5px]");\n            lines[1].classList.remove("-rotate-45");\n            lines[1].classList.remove("-translate-y-[4.5px]");\n          }, 1000);\n        }\n      });\n    }\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Navigation", $$Navigation, {}), addAttribute({
    fontSize: "clamp(20px, 13vw + .5rem, 200px)"
  }, "style"), titleArray.map((title2) => {
    if (title2 === "") return " ";
    return renderTemplate`<span class="opacity-0 block translate-y-96 transition-all duration-700 ease-in-out -ml-[2px] md:-ml-1"> ${title2} </span>`;
  }), description ? renderTemplate`<p class="text-center text-2xl max-w-lg mx-auto mt-4 text-gray-800 font-nixie-one leading-relaxed"> ${description} </p>` : null);
}, "C:/github/rafael/src/components/MenuAndTitle.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<a id="logo-js" href="/" title="Rafael Meza - Frontend Developer Portfolio - Responsive & Modern Designs" class="z-40 font-cinzel text-3xl opacity-0 w-16 fixed left-6 top-8 block -translate-y-10 transition-all delay-700 duration-1000 ease-in-out">\nRM\n</a> <script>\n  document.addEventListener("astro:page-load", () => {\n    const logoClasses = ["!opacity-100", "!translate-y-0"];\n    const logo = document.getElementById("logo-js");\n    if (logo) logo.classList.add(...logoClasses);\n  });\n<\/script>'])), maybeRenderHead());
}, "C:/github/rafael/src/components/Logo.astro", void 0);

export { $$Logo as $, $$MenuAndTitle as a };

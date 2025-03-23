/* empty css                                       */
import { c as createComponent, f as createAstro, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_ComAydu-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DV-gdNZe.mjs';
import { s as supabase } from '../../chunks/supabase_BHY3KBkp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  async function fetchData() {
    const { data: users2 } = await supabase.from("user").select("*").order("created_at", { ascending: false });
    return users2;
  }
  async function insertData(data) {
    const { error } = await supabase.from("user").insert([data]);
    if (error) {
      console.error("Error inserting data:", error);
      return { success: false, error: error.message };
    }
    return { success: true };
  }
  const users = await fetchData();
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const newUser = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
    };
    const insertResult = await insertData(newUser);
    if (insertResult.success) {
      await fetchData();
    }
  }
  if (!users) return null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`${users.map(({ username, email }) => renderTemplate`${maybeRenderHead()}<div> <h1>Username: ${username}</h1> <p>Email: ${email}</p> </div>`)}<form method="post" action="/users/add"> <label for="username">Username</label> <input type="text" id="username" name="username" required> <label for="email">Email</label> <input type="email" id="email" name="email" required> <label for="password">Password</label> <input type="password" id="password" name="password" required> <button type="submit">Add User</button> </form> ` })}`;
}, "C:/github/rafael/src/pages/users/add.astro", void 0);

const $$file = "C:/github/rafael/src/pages/users/add.astro";
const $$url = "/users/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Add,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

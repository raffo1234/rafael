import type { FormEvent } from "react";
import { supabase } from "../lib/supabase";

interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
  created_at?: string;
}

export default function UserEditForm({ user }: { user: User }) {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const eventTarget = event.target as typeof event.target & {
      username: { value: string };
      email: { value: string };
    };

    const formData = {
      username: eventTarget.username.value,
      email: eventTarget.email.value,
    } as User;

    const { error } = await supabase
      .from("user")
      .update(formData)
      .eq("id", user.id);

    if (!error) {
      window.location.href = "/users";
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4 mt-16">
        <fieldset>
          <label
            htmlFor="username"
            className="block font-bold mb-2 font-manrope"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            defaultValue={user.username}
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          />
        </fieldset>
        <fieldset>
          <label
            htmlFor="email"
            className="block mb-2.5 font-manrope font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user.email}
            required
            className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          />
        </fieldset>
      </div>
      <footer className="mt-10">
        <a
          href="/users"
          className="inline-block text-center font-bold text-sm flex-grow px-6 py-2 border-gray-200 bg-white border-width-2 border rounded-md"
        >
          Cancel
        </a>
        <button
          type="submit"
          className="inline-block ml-4 px-6 flex-grow font-bold text-sm py-2 bg-blue-500 text-white rounded-md"
        >
          Edit User
        </button>
      </footer>
      {/* <!-- {
            success === false && (
              <div
                role="alert"
                className="mb-4 mt-10 relative flex w-full p-3 text-sm text-white bg-red-600 rounded-md"
              >
                {error}
                <button
                  className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )
          } --> */}
    </form>
  );
}

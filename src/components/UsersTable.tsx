import { supabase } from "../lib/supabase";

export default async function UsersTable() {
  let { data: users } = await supabase
    .from("user")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <table className="w-full text-md mb-4">
      <thead className="text-left uppercase font-normal text-xs">
        <tr>
          <th className="text-left p-3 px-5">Username</th>
          <th className="text-left p-3 px-5">Email</th>
          <th className="text-left p-3 px-5 w-50">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users?.map(({ username, email, id }, index) => {
          return (
            <tr
              className={`hover:bg-emerald-50  ${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              <td className="p-3 px-5">{username}</td>
              <td>{email}</td>
              <td className="text-center">
                <div className="flex gap-2">
                  <a
                    href={`/users/edit/${id}`}
                    className="inline-block text-500 hover:text-blue-500 py-2 px-5 text-sm"
                  >
                    Edit
                  </a>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

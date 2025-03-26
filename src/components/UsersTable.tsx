import { supabase } from "../lib/supabase";
import TableSkeleton from "./TableSkeleton";
import useSWR from "swr";

interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
  created_at?: string;
}

const fetchUsers = async () => {
  const { data, error } = await supabase.from("user").select("*");
  if (error) throw error;
  return data;
};

export default function UsersTable() {
  const {
    data: users = [],
    error,
    isLoading,
    mutate,
  } = useSWR("users", fetchUsers);

  const onDelete = async (id: string | undefined) => {
    const confirmationMessage = confirm(
      "Are you sure you want to delete this item?",
    );
    if (!confirmationMessage) return;

    try {
      await supabase.from("user").delete().eq("id", id);
      const updatedUsers = users.filter((user) => user.id !== id);
      mutate(updatedUsers, false);
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  if (error) return null;

  return (
    <>
      {isLoading ? (
        <TableSkeleton cols={3} rows={3} />
      ) : (
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
                  key={id}
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
                      <button
                        onClick={() => onDelete(id)}
                        type="button"
                        className="inline-block text-500 hover:text-red-500 py-2 px-5 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

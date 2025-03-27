import { Button, Modal } from "antd";
import { supabase } from "../lib/supabase";
import { mutate } from "swr";
import { useState } from "react";

export default function DeleteUser({ userId }: { userId: string }) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const deleteUser = async () => {
    try {
      await supabase.from("user").delete().eq("id", userId);
      mutate("users");
      // hideModal();
    } catch (error) {
      console.error("Error deleting user", error);
      hideModal();
    }
  };

  return (
    <>
      <button
        onClick={showModal}
        type="button"
        className="inline-block text-500 hover:text-red-500 py-2 px-5 text-sm"
      >
        Delete
      </button>
      <Modal
        title="Delete User"
        open={open}
        onCancel={hideModal}
        destroyOnClose
        onOk={deleteUser}
        okText="Delete"
      >
        Do you want to delete this user?
      </Modal>
    </>
  );
}

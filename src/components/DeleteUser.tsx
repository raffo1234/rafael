import { Button, message, Modal } from "antd";
import { supabase } from "../lib/supabase";
import { mutate } from "swr";
import { useState } from "react";

export default function DeleteUser({ userId }: { userId: string }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: "User deleted successfully!",
    });
  };

  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: "There was an error when deleting the user",
    });
  };

  const deleteUser = async () => {
    try {
      await supabase.from("user").delete().eq("id", userId);
      mutate("users");
      successMessage();
      hideModal();
    } catch (error) {
      console.error("Error deleting user", error);
      errorMessage();
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
      {contextHolder}
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

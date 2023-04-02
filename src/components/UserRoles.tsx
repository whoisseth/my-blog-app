/** @format */

import { useRouter } from "next/router";
import { userRoleStore } from "@/store/userStore";
import { users } from "@/store/userStore";
import Modal from "./Modal";
import { useState } from "react";

const UserRoles = ({ btnClassName }: { btnClassName: string }) => {
  const { userRole } = userRoleStore();
  const [showModal, setModal] = useState(false);

  const router = useRouter();

  const handleSubmit = () => {
    if (userRole.role !== "") {
      // Redirect to home page
      //   router.push("/");
      closeModal();
    }
  };

  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <button className={btnClassName} onClick={openModal}>
        Select Role
      </button>

      <Modal
        title="Select role"
        closeModal={closeModal}
        showModal={showModal}
        // className=""
      >
        <div className="  flex flex-col justify-center py-2 sm:px-6 lg:px-8">
          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Select your user role
                </h2>
              </div>
              {/* <p> {JSON.stringify(userRole)}</p> */}
              <div className="mt-6">
                <div className="space-y-2">
                  {users.map(({ userName, role }, index) => (
                    <RadioInput key={index} {...{ role, userName }} />
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserRoles;

interface RadioInputType {
  role: string;
  userName: string;
}

function RadioInput({ role, userName }: RadioInputType) {
  const { userRole, setUserRole } = userRoleStore();

  const handleRoleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRole({ userName: userName, role: event.target.value });
  };

  return (
    <div className=" flex items-center h-10  gap-2">
      <input
        checked={userRole.role === role && userRole.userName === userName}
        type="radio"
        id={userName + role}
        name="role"
        value={role}
        onChange={handleRoleSelect}
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 cursor-pointer"
      />

      <label
        htmlFor={userName + role}
        className="cursor-pointer block text-sm font-medium text-gray-700 capitalize"
      >
        <span>{userName}</span> <span>-</span> <span>{role}</span>
      </label>
    </div>
  );
}

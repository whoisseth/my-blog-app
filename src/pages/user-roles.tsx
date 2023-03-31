/** @format */

import { useRouter } from "next/router";
import { userRoleStore } from "@/store/userStore";

const UserRolesPage = () => {
  const { userRole } = userRoleStore();

  const router = useRouter();

  const handleSubmit = () => {
    if (userRole !== "") {
      // Redirect to home page
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Select your user role
            </h2>
          </div>
          <div className="mt-6">
            <div className="space-y-4">
              <RadioInput role="admin" />
              <RadioInput role="author" />
              <RadioInput role="reader" />
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
  );
};

export default UserRolesPage;

interface RadioInputType {
  role: string;
}

function RadioInput({ role }: RadioInputType) {
  const { userRole, setUserRole } = userRoleStore();

  const handleRoleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRole(event.target.value);
  };

  return (
    <div className="">
      <label
        htmlFor="admin"
        className="cursor-pointer block text-sm font-medium text-gray-700 capitalize"
      >
        {role}
      </label>
      <div className="mt-1">
        <input
          checked={userRole === role}
          type="radio"
          id={role}
          name="role"
          value={role}
          onChange={handleRoleSelect}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 cursor-pointer"
        />
      </div>
    </div>
  );
}

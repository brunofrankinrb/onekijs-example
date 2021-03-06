import React from "react";
import Link from "next/link";
import MainLayout from "../mainLayout";
import { layout } from 'onekijs';

const SsrUsersLayout = ({ children }) => {
  return (
    <>
      <div className="flex mb-4">
        <div className="w-2/3 h-12">
          <Link href="/ssrusers">
            <h1 className="text-2xl text-gray-900 font-semibold cursor-pointer">Server rendered Users</h1>
          </Link>
        </div>
        <div className="w-1/3 h-12">
          <Link href="/ssrusers/new">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">Add user</button>
          </Link>
        </div>
      </div>

      <div>{children}</div>
      
    </>
  );
};


export default layout(SsrUsersLayout, MainLayout);

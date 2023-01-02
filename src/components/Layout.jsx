import React from "react";
import { RiDashboardFill } from "react-icons/ri";

export default function Layout() {
  return (
    <div className="min-h-screen min-w-screen mx-8 my-8 ">
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <div className="text-center p8">
            <h1 className="uppercase font-bold"> tu logo</h1>
          </div>
        </div>
        <div className="col-span-5">hola2</div>
      </div>
    </div>
  );
}

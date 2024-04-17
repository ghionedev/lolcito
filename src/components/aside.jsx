import { useState } from "react";
import lolIcon from "/src/assets/lolIcon.png";

export const Aside = () => {
    
const [sideBar, setSideBar] = useState(false);

const toggleSideBar = () => {
  setSideBar(!sideBar)
}

  return(
  <aside
    className={`fixed top-0 left-0 h-full duration-100 flex items-center justify-center side ${
      sideBar === true ? "sidebar-open" : "sidebar-closed"
    } opacity-95`}
  >
    <div className="h-full py-4 overflow-y-auto bg-indigo-950 px-24">
      <ul className="space-y-2 font-medium">
        <li className="p-2 rounded-lg text-white hover:bg-gray-100 hover:bg-indigo-900 group">
          <div className="flex items-center pl-2 pt-1">
            <img
              src={lolIcon}
              className="h-8 w-8 flex"
              alt="Icono de League of Legends"
            ></img>
            Lolcito
          </div>
        </li>
        <li className="flex items-center">
          <span className="pb-2 text-indigo-400">________________</span>
        </li>
      </ul>
    </div>
    <button
      className="text-yellow-500 text-6xl"
      onClick={() => toggleSideBar(sideBar)}
    >{`>`}</button>
  </aside>
  )
}
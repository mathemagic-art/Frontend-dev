import React from "react";
import { useState, useRef } from "react";
import { ReactComponent as Fx } from "../Files/svgs/fx.svg";
import { ReactComponent as Search } from "../Files/svgs/search.svg";
import PagesRoute from "./PageRoutes";
import PagesRoutes from "../Data/Pages.json";

const SearchMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);

  const catMenu = useRef(null);

  const toggleFunctions = () => {
    setShow(!show);
  };

  const closeOpenMenus = (e) => {
    if (catMenu.current && show && !catMenu.current.contains(e.target)) {
      setShow(!show);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  return (
    <div className="flex flex-col m-auto justify-center bg-transparent mt-10 laptop:-mt-6 laptop:pt-20 text-dark dark:text-white text-xl mb-52 z-10 w-2/3 relative">
      <div className="flex justify-center items-center border-2 rounded-lg border-blue-500">
        <input
          type="text"
          className="dark:bg-black py-4 inline-block w-full pl-5 ml-1 rounded-l-lg"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search for a method..."
          onFocus={toggleFunctions}
        />
        {show ? (
          <ul
            className="absolute top-40  w-full h-full rounded-md z-10"
            ref={catMenu}
          >
            {PagesRoutes.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((value, key) => {
              return (
                <li
                  className="dark:bg-dark bg-slate-100 p-5 rounded-md "
                  key={key}
                >
                  <PagesRoute text={value.name} route={value.route} />
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
        <button className="border-l-2 border-r-2 border-blue-500 p-4 ">
          <Fx className="dark:fill-white fill-black" />
        </button>
        <button className="px-4 py-4" onClick={toggleFunctions}>
          <Search className="dark:fill-white fill-black" />
        </button>
      </div>
    </div>
  );
};

export default SearchMenu;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import { navigation } from "./../constants/index";

const Nav = () => {
  // const [navi, setNavi] = useState(navigation);

  // const newItem = navi.filter((item) => item.id === "4");

  // setNavi((prev) => {
  //   newprev: prev.filter((item) => item.id === "4");
  // });
  const location = useLocation();

  return (
    <div>
      <div className="sm:block  bg-desktopbg bg-center bg-cover bg-no-repeat w-[250px] h-full rounded-[12px] pt-8 pl-7 hidden">
        {navigation.map((navi) => (
          <div className="flex items-center mb-[25px]" key={navi.id}>
            <Link to={`${navi.lead}`}>
              <div
                className={`${
                  location.pathname === navi.lead
                    ? " bg-Light text-Marine font-semibold"
                    : "bg-transparent"
                } text-white border-[1px] border-white py-1 px-2.5 rounded-[50%] mr-4 cursor-pointer `}
              >
                <p className={`w-[10px]  `}>{navi.id}</p>
              </div>
            </Link>
            <div className="leading-[15px]">
              <div className=" text-[12px] text-Coolg font-medium">
                {navi.step}
              </div>
              <div className="text-[14px] font-semibold text-Alabaster">
                {navi.title}
              </div>
            </div>
          </div>
        ))}
        {/* <Link to='/Thanks'>
        Thanks
      </Link> */}
      </div>

      {/* Mobile View */}

      <div className="flex justify-center items-start   bg-mobilebg bg-center bg-contain bg-no-repeat w-[full] h-[200px]  rounded-[0px] pt-10 sm:hidden">
        {navigation.map((navi) => (
          <div className="flex justify-center  mb-[0] " key={navi.id}>
            <Link to={`${navi.lead}`}>
              <div
                className={`${
                  location.pathname === navi.lead
                    ? " bg-Light text-Marine font-semibold"
                    : "bg-transparent"
                } text-white border-[1px] border-white py-1 px-2.5 rounded-[50%] mr-4 cursor-pointer`}
              >
                <p className="w-full">{navi.id}</p>
              </div>
            </Link>
          </div>
        ))}
        {/* <Link to='/Thanks'>
        Thanks
      </Link> */}
      </div>
    </div>
  );
};

export default Nav;

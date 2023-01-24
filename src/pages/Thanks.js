import React from "react";
import checkMark from "../assets/thankyou.svg";

const Thanks = () => {
  return (
    <div>
      <div className="flex flex-col sm:bg-transparent absolute left-[7.5%] top-[15%] sm:left-0 sm:top-0 sm:relative bg-White justify-center text-center items-center w-[85%] h-[550px] sm:h-[100%] sm:w-[100%] rounded-xl  p-4  pt-10 sm:pr-0  ">
        {/* <div> */}
        <img className="w-20" src={checkMark} alt="mark" />
          <h3 className=" text-Marine font-bold t text-[25px] ">Thank you!</h3>
          <p className="text-Coolg text-[13px]">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to emaol us
            at support@loremgaming.com
          </p>
      </div>
    </div>
  );
};

export default Thanks;

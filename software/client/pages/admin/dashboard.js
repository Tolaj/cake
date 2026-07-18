import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";
import Esp from "components/EspTest/esp";
export default function Dashboard() {
  return (
    <>
    
    <div className="flex flex-wrap relative items-center z-0 justify-center ">
      <img src="/img/display.png" className="blur-sm z-0 w-2/4" alt="" />
      <div className="h-full w-full absolute z-20 top-0">

        
        <Esp />

      </div>
    </div>
    

      {/* <div className="flex flex-wrap pt-6">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div> */}
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}


Dashboard.layout = Admin;

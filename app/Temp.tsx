"use client";
import Script from "next/script";
import React from "react";


const Temp = () => {
  return (
    <head>
      <Script src='https://cdn.botpress.cloud/webchat/v1/inject.js'></Script>
      <Script
        src='https://mediafiles.botpress.cloud/c186d77b-c522-4fbe-8e50-0f49517b346c/webchat/config.js'
        defer
      ></Script>
    </head>
  );
};

export default Temp;

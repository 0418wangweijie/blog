import React, { useEffect } from "react";
import "../styles/components/backgroundBody.css";
import { Background } from "./background";

export default () => {
  useEffect(() => {
    Background();
  }, []);

  return <div className="particle-network-animation"></div>;
};

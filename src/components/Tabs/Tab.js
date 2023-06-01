import React, { useState } from "react";
import "./tab.css";
import { Link } from "react-router-dom";
import Mountains from "../Mountains/Mountains";
import Mountain2 from "../Mountains/Mountain2";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("MOUNTAIN 1");

  const handleTabClick = (mountain) => {
    setActiveTab(mountain);
  };

  const renderTabContent = () => {
    if (activeTab === "MOUNTAIN 1") {
      return <div><Mountains /></div>;
    } else if (activeTab === "MOUNTAIN 2") {
      return <div><Mountain2 /></div>;
    }
  };

  return (
    <div>
      <div className="root-tab">
        <span
          className={activeTab === "MOUNTAIN 1" ? "active-tab" : ""}
          onClick={() => handleTabClick("MOUNTAIN 1")}
        >
          <Link className="active">MOUNTAIN 1</Link>
        </span>
        <span
          className={activeTab === "MOUNTAIN 2" ? "active-tab" : ""}
          onClick={() => handleTabClick("MOUNTAIN 2")}
        >
          <Link>MOUNTAIN 2</Link>
        </span>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Tab;
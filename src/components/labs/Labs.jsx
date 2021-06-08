import React from "react";
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
import "./Labs.css";
import PageTitle from "../PageTitle/PageTitle";
import LabTera from "./LabTera";
import LabPhoto from "./LabPhoto";
import LabSleep from "./LabSleep";

class Labs extends React.Component {
  render() {
    return (
      <>
        <PageTitle title="Лаборатории"></PageTitle>
        <div className="page">
          <div className="container">
            <TabBar>
              <TabBarItem
                label="Лаборатория «Дистанционно управляемые
            системы для тераностики»"
              >
                <LabTera />
              </TabBarItem>
              <TabBarItem label="Лаборатория биомедицинской фотоакустики">
                <LabPhoto />
              </TabBarItem>
              <TabBarItem label="Лаборатория «умного сна»">
                <LabSleep />
              </TabBarItem>
            </TabBar>
          </div>
        </div>
      </>
    );
  }
}
export default Labs;

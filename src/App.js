import React from "react";
import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import { ContextMenuTrigger } from "react-contextmenu";
import MainCard from "./components/MainCard";
import CardContextMenu from "./components/CardContextMenu";

export default function App() {
  return (
    <div className="App">
      <div className="site-card-wrapper">
        <Row gutter={12} align="center">
          <Col span={12} style={{ marginTop: 30 }}>
            <ContextMenuTrigger id="same_unique_identifier">
              <MainCard />
            </ContextMenuTrigger>
            <CardContextMenu />
          </Col>
        </Row>
      </div>
    </div>
  );
}

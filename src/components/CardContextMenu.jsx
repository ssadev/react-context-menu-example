import React from "react";
import { ContextMenu } from "react-contextmenu";
import { Menu } from "antd";
import {
  SettingOutlined,
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
const { SubMenu } = Menu;
function handleClick(e, data) {
  console.log(data.foo);
}

function CardContextMenu() {
  return (
    <ContextMenu id="same_unique_identifier">
      <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
        <Menu.Item key="mmi1" icon={<EditOutlined />}>
          Edit
        </Menu.Item>
        <Menu.Item
          key="mmi2"
          icon={<DeleteOutlined />}
          style={{ color: "red" }}
        >
          Delete
        </Menu.Item>
        <SubMenu key="mmi3" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </ContextMenu>
  );
}

export default CardContextMenu;

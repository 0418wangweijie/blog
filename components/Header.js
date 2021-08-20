import React, { useState, useEffect } from "react";
import "../styles/components/header.css";
import { Row, Col, Menu, Button, Drawer, Input, Popover } from "antd";
import {
  HomeOutlined,
  createFromIconfontCN,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Router from "next/router";
import axios from "axios";
import servicePath from "../config/apiUrl";
import Link from "next/link";
import Author from "./Author";
import Advert from "./Advert";
import { increment } from "../store/routerQuery";
import { useDispatch } from "react-redux";

export default (props) => {
  const [navArray, setNavArray] = useState();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fecthData = async () => {
      const resType = await axios(servicePath.type)
        .then((res) => {
          setNavArray(res.data.data);
          return res.data.data;
        })
        .catch((error) => {
          return error;
        });
      setNavArray(resType);
    };
    fecthData();
  }, []);

  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push("/");
    } else {
      Router.push({
        pathname: "/list",
        query: {
          id: e.key,
        },
      });
    }
  };
  const onSearch = (e) => {
    Router.push({ pathname: "/", query: { title: e?.target?.value } });
    // 将值存放到状态管理中
    dispatch(increment(e?.target?.value));
  };

  const IconFont = createFromIconfontCN({
    scriptUrl: "http://at.alicdn.com/t/font_2273731_8niql81e7d3.js",
  });
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  // 查询弹出层
  const searchInput = <Input allowClear onPressEnter={onSearch}></Input>;
  return (
    <div>
      {/* <span style={{ display }} className="header-weather"><Weather /></span> */}
      <div className="header">
        <Row type="flex" justify="cneter">
          <Col xs={20} sm={20} md={10} lg={15} xl={12}>
            <span className="header-logo">
              <Link href="/">{`王沧海`}</Link>
            </span>
            <span className="header-txt">前端小蜜蜂</span>
          </Col>
          <Col xs={0} sm={0} md={14} lg={9} xl={12}>
            <div>
              <div style={{ display: "inline-block", marginRight: 5 }}>
                <Popover
                  placement="bottom"
                  content={searchInput}
                  trigger="click"
                >
                  <Button shape="circle" icon={<SearchOutlined />}></Button>
                </Popover>
              </div>
              <div style={{ display: "inline-block" }}>
                <Menu mode="horizontal" onClick={handleClick}>
                  <Menu.Item key="0">
                    <HomeOutlined />
                    首页
                  </Menu.Item>
                  {navArray?.map((item, index) => {
                    return (
                      <Menu.Item key={item._id}>
                        <IconFont type={item.icon} />
                        {item.typeName}
                      </Menu.Item>
                    );
                  })}
                </Menu>
              </div>
            </div>
          </Col>
          <Col xs={4} sm={4} md={0} lg={0} xl={0} className="header-menu">
            <div>
              <div>
                <MenuOutlined onClick={showDrawer} />
              </div>
              <Drawer
                // title="个人信息"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
              >
                <Author />
                <Advert />
              </Drawer>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

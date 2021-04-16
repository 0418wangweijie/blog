import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import "../styles/components/learning.css";
import Axios from "axios";
import servicePath from "../config/apiUrl";
import Router from "next/router";

export default (props) => {
  const [arrayType, setArrayType] = useState();
  useEffect(() => {
    getType();
  }, []);
  const getType = async () => {
    const resType = await Axios(servicePath.type)
      .then((res) => {
        setArrayType(res.data.data);
        return res.data.data;
      })
      .catch((error) => {
        return error;
      });
    setArrayType(resType);
  };
  const onClick = (e) => {
    console.log(e);
    // arrayType.forEach(item=>{
    //     // if()
    // })
  };
  return (
    <div>
      <Row
        type="flex"
        justify="space-between"
        gutter={[0, 12]}
        style={{ marginBottom: 0 }}
      >
        <Col xs={11} sm={11} md={24} lg={24} xl={24}>
          <div
            className="learning-card"
            onClick={() => {
              arrayType?.forEach((item) => {
                if (item?.typeName === "学习计划") {
                  Router?.push("/list?id=" + item._id);
                }
              });
            }}
          >
            <img alt="example" className="learning-img" src="/learning.jpg" />
            <div className="learning-shade" />
          </div>
        </Col>
        <Col xs={11} sm={11} md={24} lg={24} xl={24}>
          <div
            className="learning-card"
            onClick={() => {
              arrayType?.forEach((item) => {
                if (item?.typeName === "游戏") {
                  Router?.push("/list?id=" + item._id);
                }
              });
            }}
          >
            <img alt="example" className="learning-img" src="/libai.jpg" />
            <div className="learning-shade" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

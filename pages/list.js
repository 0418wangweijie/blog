import { List, Col, Row, Breadcrumb, Spin, Card } from "antd";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import router from "next/router";
import { CalendarOutlined, FireOutlined } from "@ant-design/icons";
import Author from "../components/Author";
import Advert from "../components/Advert";
import axios from "axios";
import servicePath from "../config/apiUrl";
import Link from "next/link";
import moment from "moment";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { scrollTo } from "../utils/scroll-to";

export default function ArticleList(props) {
  const { data } = props;
  const [myList, setMyList] = useState(data?.data);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setMyList(data?.data);
    setPage(Number(window.location.search.split("=")[1]));
  });

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
  const onLonging = () => {
    setisLoading(true);
  };
  const onChange = (page, pageSize) => {
    if (page) {
      setPage(page);
    }
    if (pageSize) {
      setPageSize(pageSize);
    }
    scrollTo(0, 2000);
    router.push({
      pathname: "/list",
      query: { id: props?.id, page: page, limit: pageSize },
    });
  };
  return (
    <div>
      <Head>
        <title>列表页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <BackgroundBody style={{ width: '100%' }} /> */}
      <Spin tip="Loading..." spinning={isLoading}>
        <Row
          className="comm-main"
          type="flex"
          justify="center"
          style={{ marginTop: "3.5rem" }}
        >
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link href="/">首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>列表页</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              header="最新日志"
              dataSource={myList}
              itemLayout="vertical"
              pagination={{
                onChange,
                total: data?.totle,
                current: page,
                defaultCurrent: page,
                pageSize: pageSize,
                defaultPageSize: pageSize,
              }}
              renderItem={(item) => (
                <Card hoverable>
                  <List.Item>
                    <div className="list-title">
                      <Link
                        href={{
                          pathname: "/detailes",
                          query: { id: item._id },
                        }}
                      >
                        <a onClick={onLonging}>{item?.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span>
                        <CalendarOutlined />
                        {moment(item.createTime).format("YYYY-MM-DD")}
                      </span>
                      <span>
                        <FireOutlined />
                        {item.visitCount}
                      </span>
                    </div>
                    <div
                      className="list-context"
                      dangerouslySetInnerHTML={{
                        __html: marked(item.introduce),
                      }}
                    ></div>
                  </List.Item>
                </Card>
              )}
            />
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
          </Col>
        </Row>
      </Spin>
    </div>
  );
}

export async function getServerSideProps(context) {
  let id = context.query.id;
  const options = {
    page: 1,
    limit: 10,
    id: context.query.id,
  };
  if (context.query.page) {
    options.page = Number(context.query.page);
  }
  if (context.query.limit) {
    options.limit = Number(context.query.limit);
  }
  const res = await axios({ url: servicePath.list, data: options });
  const data = res?.data;

  return {
    props: {
      data,
      id,
    },
  };
}

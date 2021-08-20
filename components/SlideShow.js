import BannerAnim, { Element } from "rc-banner-anim";
import React, { useEffect, useState } from "react";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
import "../styles/components/slideshow.css";
import servicePath from "../config/apiUrl";
import axios from "axios";
import router from "next/router";
const BgElement = Element.BgElement;

export default () => {
  const [slideShow, setSlideShow] = useState();
  useEffect(() => {
    getSlideShow();
  }, []);
  const getSlideShow = () => {
    axios({ url: servicePath.getSildeShow, method: "GET" })
      .then((res) => {
        if (res?.data?.data) {
          setSlideShow(res?.data?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClick = (val, text) => {
    console.log(val, text);
  };
  return (
    <BannerAnim
      style={{ height: "23vw", minHeight: 210, borderRadius: "0.6rem" }}
      prefixCls="banner-user"
      autoPlay
    >
      <Element prefixCls="banner-user-elem" key="0">
        <BgElement
          key="bg"
          className="bg"
          style={{
            background: "url('/slide.jpg') no-repeat",
            backgroundSize: "cover",
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
            style={{ marginTop: "20%" }}
          >
            仅供观赏无内容
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            For viewing only without content
          </TweenOne>
        </BgElement>
      </Element>
      {slideShow?.map((item, index) => {
        return (
          <Element
            prefixCls="banner-user-elem"
            key={index + item._id}
            onClick={() => {
              if (item?.article_id) {
                router.push({
                  pathname: "/detailes",
                  query: { id: item.article_id },
                });
              }
            }}
          >
            <BgElement
              key="bg"
              className="bg"
              style={{
                background: `url(${item?.files_url}) no-repeat`,
                backgroundSize: "cover",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                cursor: "pointer",
              }}
            >
              <TweenOne
                className="banner-user-title"
                animation={{ y: 30, opacity: 0, type: "from" }}
                style={{ marginTop: "20%" }}
              >
                {item?.name}
              </TweenOne>
            </BgElement>
          </Element>
        );
      })}
    </BannerAnim>
  );
};

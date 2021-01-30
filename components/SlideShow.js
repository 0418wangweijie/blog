import BannerAnim, { Element } from 'rc-banner-anim';
import React, { useEffect, useState } from 'react'
// import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

export default () => {

  return (
    <BannerAnim style={{ height: '23vw', minHeight: 210, borderRadius: '0.6rem' }} prefixCls="banner-user" autoPlay>
      <Element
        prefixCls="banner-user-elem"
        key="0"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            background: "url('https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png') no-repeat",
            backgroundSize: 'cover',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
          }}
        />
        {/* <img
          alt="example"
          className="learning-img"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        /> */}
        {/* <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne> */}
      </Element>
      <Element
        prefixCls="banner-user-elem"
        key="1"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            background: '#64CBCC',
            width: '100%',
            height: '100%'
          }}
        />
        {/* <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne> */}
      </Element>
    </BannerAnim>);
}
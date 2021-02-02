import BannerAnim, { Element } from 'rc-banner-anim';
import React from 'react'
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import '../styles/components/slideshow.css'
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
            background: "url('/slide.jpg') no-repeat",
            backgroundSize: 'cover',
            overflow: 'hidden',
            width: '100%',
            height: '100%'
          }}
        />
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
            height: '100%',
          }}
        />
        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          仅供观赏无内容
          </TweenOne>
        <TweenOne className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
        >
          For viewing only without content
          </TweenOne>
      </Element>
    </BannerAnim>);
}
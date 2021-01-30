import { List, Col, Row, Spin, Card } from 'antd'
import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { CalendarOutlined, FireOutlined } from '@ant-design/icons';
import Author from '../components/Author';
import Advert from '../components/Advert'
import axios from 'axios'
import moment from 'moment'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import servicePath from '../config/apiUrl'
import Learning from '../components/Learning'
// import SlideShow from '../components/SlideShow'
const Image = dynamic(import('../components/Image'), {
  ssf: false
})
const SlideShow = dynamic(import('../components/SlideShow'), {
  ssf: false
})
// const Music = dynamic(import('../components/Music'), {
//   ssr: false
// })

export default function Home(props) {
  const { data } = props

  const [myList, setMyList] = useState(data?.data)
  const [isLoading, setisLoading] = useState(false)
  const renderer = new marked.Renderer()


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
    }

  });

  const onLonging = () => {
    setisLoading(true)
  }
  return (
    <div>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heard-background">
        <Image />
      </div>

      {/* <BackgroundBody style={{ display: 'none', width: '100%' }} /> */}
      <Row type="flex" justify="center" style={{ marginTop: '1.5rem' }} gutter={[10, 10]}>
        <Col xs={23} sm={23} md={16} lg={12} xl={12}>
          <SlideShow />
        </Col>
        <Col flex={2} xs={23} sm={23} md={6} lg={6} xl={5.1}>
          <Learning />
        </Col>
      </Row>

      <Spin spinning={isLoading}>
        <Row className="comm-main" type='flex' justify='center'>
          <Col className="comm-left" xs={23} sm={23} md={16} lg={18} xl={14}>
            <List
              header='最新日志'
              dataSource={myList}
              itemLayout="vertical"
              renderItem={item => {
                return (
                  <List.Item>
                    <div className="list-title">
                      <Link href={{ pathname: '/detailes', query: { id: item._id } }}><a onClick={onLonging}>{item?.title}</a></Link>
                    </div>
                    <div className="list-icon">
                      <span><CalendarOutlined />{moment(item?.createTime).format("YYYY-MM-DD")}</span>
                      <span><FireOutlined />{item?.visitCount}</span>
                    </div>
                    <div className="list-context" dangerouslySetInnerHTML={{ __html: marked(item?.introduce) }}></div>
                  </List.Item>
                )
              }}
            />
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
          </Col>
        </Row>
      </Spin>

    </div >
  )
}

export async function getServerSideProps() {
  const res = await axios(servicePath.article)
  const data = res?.data;

  return {
    props: {
      data
    }
  }
  // return '1'
}

import { List, Col, Row, } from 'antd'
import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import { CalendarOutlined, FireOutlined } from '@ant-design/icons';
// import '../styles/pages/index.css'
import Author from '../components/Author';
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import moment from 'moment'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import servicePath from '../config/apiUrl'
import Image from '../components/Image'
import BackgroundBody from '../components/BackgroundBody'
// import Music from '../components/Music'
// import document from 'next/document'
const Music = dynamic(import('../components/Music'), {
  ssr: false
})

export default function Home(props) {
  const { data } = props

  const [myList, setMyList] = useState(data)
  const renderer = new marked.Renderer()

  // console.log(document)
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

  return (
    <div>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="heard-background">
        <Header className="header-index" />
        <Image />
      </div>
      <BackgroundBody />

      <Row className="comm-main" type='flex' justify='center'>
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header='最新日志'
            dataSource={myList}
            itemLayout="vertical"
            renderItem={item => {
              return (
                <List.Item>
                  <div className="list-title">
                    <Link href={{ pathname: '/detailes', query: { id: item._id } }}>{item?.title}</Link>

                  </div>
                  <div className="list-icon">
                    <span><CalendarOutlined />{moment(item?.createTime).format("YYYY-MM-DD hh:mm")}</span>
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
      <Music />
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    axios(servicePath.article)
      .then(
        res => {
          resolve(res.data)
        }
      )
      .catch(
        error => {
          reject(error)
        }
      )
  })

  return await promise
}

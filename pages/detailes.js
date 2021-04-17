import { Breadcrumb, Col, Row, Affix } from 'antd'
import Head from 'next/head'
import React from 'react'
import Author from '../components/Author';
import Advert from '../components/Advert'
import '../styles/pages/detailed.css'
import { CalendarOutlined, FireOutlined } from '@ant-design/icons';
import '../node_modules/markdown-navbar/dist/navbar.css'
import axios from 'axios';
import moment from 'moment'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl'
import Link from 'next/link';

export default function Detailes(props) {
    const { data } = props?.data
    const tocify = new Tocify()
    const renderer = new marked.Renderer()

    renderer.heading = function (text, level, raw) {
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" ><h${level}>${text}</h${level}></a>\n`
    }
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


    let content = data?.content
    let html = marked(content)

    return (
        <div>
            <Head>
                <title>详情页</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Row className="comm-main" type='flex' justify='center' style={{ marginTop: '3.5rem' }}>

                <Col className="comm-left" xs={23} sm={23} md={16} lg={18} xl={14}>

                    <div className="bread-div">
                        <Breadcrumb>
                            <Breadcrumb.Item><Link href="/">首页</Link></Breadcrumb.Item>
                            <Breadcrumb.Item disabled href='/list'>列表页</Breadcrumb.Item>
                            <Breadcrumb.Item>详情页</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className='detailed-title'>
                            {data?.title}
                        </div>
                        <div className="list-icon center">
                            <span><CalendarOutlined />{moment(data?.createTime).format('YYYY-MM-DD')}</span>
                            <span><FireOutlined />{data?.visitCount}</span>
                        </div>
                        <div className='detailed-content'
                            dangerouslySetInnerHTML={{ __html: html }}
                        >
                        </div>
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>

                    <Author />
                    <Advert />
                    <Affix offsetTop={50}>
                        <div className='detailed-nav comm-box' style={{ marginTop: '0.5rem' }}>

                            <div className='nav-title'>文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>
                        </div>
                    </Affix>
                </Col>
            </Row>
        </div >
    )
}

export async function getServerSideProps(context) {
    let id = context.query.id

    const res = await axios(servicePath.details + id)
    const data = res?.data;

    return {
        props: {
            data
        }
    }
}

import React, { useState, useEffect } from 'react'
import '../styles/components/header.css'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, createFromIconfontCN } from '@ant-design/icons'
import Router from 'next/router'
// import Link from "next/link";
import axios from "axios";
import servicePath from '../config/apiUrl';
import dynamic from 'next/dynamic'
import Link from 'next/link'
const Weather = dynamic(import('./Weather'), {
    ssf: false
})

export default (props) => {
    const [navArray, setNavArray] = useState()
    const [display, setDisplay] = useState('binline-block')
    useEffect(() => {
        if (window.outerWidth <= 1024) {
            setDisplay('none')
            document.body.style.backgroundColor = "#fff";
        } else {
            setDisplay('inline-block')
        }
    }, [])
    console.log(navArray)

    useEffect(() => {
        const fecthData = async () => {
            const resType = await axios(servicePath.type)
                .then(
                    res => {
                        setNavArray(res.data.data)
                        return res.data.data;
                    }
                )
                .catch(
                    error => {
                        return error
                    }
                )
            setNavArray(resType)
        }
        fecthData()
    }, [])

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/list?id=' + e.key)
        }
    }

    const IconFont = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_2273731_7do9v58oe9p.js'
    })
    return (
        <div>
            {/* <span style={{ display }} className="header-weather"><Weather /></span> */}
            <div className="header">
                <Row type="flex" justify='cneter'>
                    <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                        <span className="header-logo"><Link href="/">王沧海</Link></span>
                        <span className='header-txt'>前端小蜜蜂</span>

                    </Col>
                    <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                        <Menu mode='horizontal'
                            onClick={handleClick}
                        >
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
                                )
                            })}
                        </Menu>

                    </Col>
                </Row>
            </div>
        </div>
    )
}


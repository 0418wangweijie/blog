import React from 'react'
import { Card, Col, Row } from 'antd'
import '../styles/components/learning.css'

export default () => {
    return <div>
        <Row type="flex" justify="space-between" gutter={[0, 12]} style={{ marginBottom: 0 }}>
            <Col xs={11} sm={11} md={24} lg={24} xl={24}>
                <div
                    className="learning-card"
                ><img
                        alt="example"
                        className="learning-img"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <div className="learning-shade" />
                </div>
            </Col>
            <Col xs={11} sm={11} md={24} lg={24} xl={24}>
                <div
                    className="learning-card"
                ><img
                        alt="example"
                        className="learning-img"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    <div className="learning-shade" />
                </div>
            </Col>
        </Row>

    </div>
}
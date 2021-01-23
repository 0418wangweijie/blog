import React from 'react'
import '../styles/components/footer.css'
import { CopyrightOutlined } from '@ant-design/icons'
import { Footer } from 'antd/lib/layout/layout'

export default () => {
    return (
        //     // <div className="footer-div">

        //         {/* <a href="https://beian.miit.gov.cn"><CopyrightOutlined />备案号2021000232</a> */ }
        // {/* </div> */ }
        <Footer style={{ textAlign: 'center', backgroundColor: '#000', opacity: '0.5', color: '#eee' }}>备案号2021000232</Footer>
    )
}
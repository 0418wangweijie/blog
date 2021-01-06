import React from 'react'
import '../styles/components/footer.css'
import { CopyrightOutlined } from '@ant-design/icons'

export default () => {
    return (
        <div className="footer-div">
            <a href="https://beian.miit.gov.cn"><CopyrightOutlined />备案号2021000232</a>
        </div>
    )
}
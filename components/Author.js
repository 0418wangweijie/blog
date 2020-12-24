import React from 'react'
import { Divider } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import '../styles/components/author.css'


export default (props) => {
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://res-dev.totemtec.com/image/2020-12-07/2rKoJ0qKVbG9FVdJtbbvYp.jpg" />
                <div className="author-intriduction">
                    头发茂密程序员，前端小蜜蜂
                    <Divider>社交账号</Divider>
                    <Avatar size={28} icon={<GithubOutlined />} className='account' />
                    <Avatar size={28} icon={<QqOutlined />} className='account'></Avatar>
                    <Avatar size={28} icon={<WechatOutlined />} className='account'></Avatar>
                </div>
            </div>
        </div>
    )
}
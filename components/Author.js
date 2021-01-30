import React, { useEffect, useState } from 'react'
import { Divider, Tag, Tooltip } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import '../styles/components/author.css'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css'


export default (props) => {

    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://res-dev.totemtec.com/image/2020-12-07/2rKoJ0qKVbG9FVdJtbbvYp.jpg" />
                <div className="author-intriduction">
                    <div className="texty-demo" style={{ marginTop: 64 }}>
                        <Texty>热爱生活，动漫，游戏忠实爱好者。人生不要留有遗憾</Texty>
                    </div>
                    <div>
                        <Tag color='green'>王者荣耀</Tag><Tag color='orange'>英雄联盟</Tag><Tag color='yellow'>穿越火线</Tag>
                    </div>
                    <Divider>社交账号</Divider>
                    <Tooltip title="https://github.com/0418wangweijie"><Avatar size={28} icon={<GithubOutlined />} className='account' /></Tooltip>
                    <Tooltip title="2212186540"><Avatar size={28} icon={<QqOutlined />} className='account'></Avatar></Tooltip>
                    <Tooltip title="wangweijie418"><Avatar size={28} icon={<WechatOutlined />} className='account'></Avatar></Tooltip>

                </div>
            </div>
        </div>
    )
}
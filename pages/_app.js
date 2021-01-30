import 'antd/dist/antd.css'
import dynamic from 'next/dynamic'
import '../styles/pages/comm.css'
const Music = dynamic(import('../components/Music'), {
    ssr: false
})
const BackgroundBody = dynamic(import('../components/BackgroundBody'), {
    ssf: false
})
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BackTop, Row, Col } from 'antd'
import { RocketOutlined } from '@ant-design/icons'

function MyApp({ Component, pageProps }) {
    const style = {
        textAlign: 'center',
        color: '#ee18d4d1',
        fontSize: 29,
    }
    return (
        <>
            <Header {...pageProps} />
            <BackgroundBody style={{ width: '100%' }} />
            <main><Component {...pageProps} /></main>
            <BackTop style={style}><RocketOutlined /></BackTop>
            <Music />
            <Row className="comm-main" type='flex' justify='center'>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Footer />
                </Col>
            </Row>

        </>
    )
}


export default MyApp

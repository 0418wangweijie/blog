import 'antd/dist/antd.css'
import App from 'next/app'
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

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header {...pageProps} />
            <BackgroundBody style={{ width: '100%' }} />
            <main><Component {...pageProps} /></main>
            <Music />
            <Footer />
        </>
    )
}


export default MyApp

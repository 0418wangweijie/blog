import React, { useState, useEffect } from 'react'
import '../styles/components/backgroundBody.css'
import $ from 'jquery'
import { Background } from './background'

export default () => {
    const [display, setDisplay] = useState('block')
    useEffect(() => {
        Background();
        if (window.outerWidth <= 1024) {
            setDisplay('none')
            document.body.style.backgroundColor = "#fff";
        } else {
            setDisplay('block')
        }
    }, [])


    // console.log($('.particle-network-animation'))



    return (<div className='particle-network-animation'></div>)
}
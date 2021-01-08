import React, { useState, useEffect } from 'react'
import '../styles/components/backgroundBody.css'

export default () => {
    const [display, setDisplay] = useState('block')
    useEffect(() => {
        if (window.outerWidth <= 1024) {
            setDisplay('none')
        } else {
            setDisplay('block')
        }
    }, [])
    return (<div style={{ position: 'absolute', display }}>
        <ul className="ul1">
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
            <li className="li1"></li>
        </ul>
        <div className="wrap"></div>
        <div className="wrap2">
            <ul className="ul2">
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
                <li className="li2"></li>
            </ul>
        </div>
        <div className="wrap3">
            <ul className="ul3">
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
                <li className="li3"></li>
            </ul>
        </div>
    </div>)
}
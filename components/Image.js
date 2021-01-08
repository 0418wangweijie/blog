import React, { useEffect, useState } from 'react'

export default () => {
    const [display, setDisplay] = useState('block')
    useEffect(() => {
        if (window.outerWidth <= 1024) {
            setDisplay('none')
        } else {
            setDisplay('block')
        }
    }, [])
    return <img style={{ width: '100%' }} src="/newbackground.jpg" />
}
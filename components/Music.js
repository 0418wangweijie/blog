import React from 'react';
import ReactAplayer from 'react-aplayer';
import servicePath from '../config/apiUrl';
import Axios from 'axios'

export default () => {
    // event binding example
    const onPlay = () => {
        console.log('on play');
    };

    const onPause = () => {
        console.log('on pause');
    };

    // example of access aplayer instance
    const onInit = async ap => {
        //在使用这个组件时候，由于它子判别的是在第一次是否含有数值，而不会多次渲染，所以请求不能写在外部，不能用useEffect
        // 因为useEffect是在浏览器将所有变化渲染到屏幕后才会执行，所以请求要写在Init函数中，来利用组件函数添加
        const resMusic = await Axios(servicePath.getMusic)
            .then(res => {
                return res.data.data
            })
            .catch(
                error => {
                    return error
                }
            )
        ap.list.add(resMusic);
    };

    const config = {
        theme: '#F57F17',
        fixed: true,
        mini: true,
    };

    return (
        <div>
            <ReactAplayer
                {...config}
                onInit={onInit}
                onPlay={onPlay}
                onPause={onPause}
            />
        </div>
    );

}
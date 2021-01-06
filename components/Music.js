import React from 'react';
import ReactAplayer from 'react-aplayer';

export default class App extends React.Component {
    // event binding example
    onPlay = () => {
        console.log('on play');
    };

    onPause = () => {
        console.log('on pause');
    };

    // example of access aplayer instance
    onInit = ap => {
        this.ap = ap;
    };

    render() {
        const props = {
            theme: '#F57F17',
            fixed: true,
            mini: true,
            audio: [
                {
                    name: '后继者',
                    artist: '任然',
                    url: 'http://music.163.com/song/media/outer/url?id=442314990.mp3',
                    cover: 'https://p2.music.126.net/9RQepityGQUfi5Rbcz7xCQ==/18747772766555079.jpg?param=90y90'
                },
                {
                    name: '산책',
                    artist: 'On.U',
                    url: 'http://music.163.com/song/media/outer/url?id=5322745.mp3',
                    cover: 'https://p1.music.126.net/aZnv7q8YeMqGs0lq9rcQwg==/17985811207420353.jpg?param=34y34'
                },
                {
                    name: '无人之岛',
                    artist: '任然',
                    url: 'http://music.163.com/song/media/outer/url?id=493735012.mp3',
                    cover: 'https://p1.music.126.net/mIUtHBPTJ52H78_FhHzcWg==/19188676928210304.jpg?param=90y90'
                },
                {
                    name: '我很好',
                    artist: '刘大壮',
                    url: 'http://music.163.com/song/media/outer/url?id=1491221473.mp3',
                    cover: 'https://p1.music.126.net/qGIzwzf05taTVfk9PSnSiw==/109951165424768428.jpg?param=90y90'
                },
                {
                    name: '难生恨',
                    artist: 'DAWN',
                    url: 'http://music.163.com/song/media/outer/url?id=1501715251.mp3',
                    cover: 'https://p1.music.126.net/cK8xCxcftxTQZsCJwnnV0A==/109951165541618408.jpg?param=90y90'
                },
                {
                    name: '四季予你',
                    artist: '程响',
                    url: 'http://music.163.com/song/media/outer/url?id=1807537867.mp3',
                    cover: 'https://p2.music.126.net/sUvayue0mxrlcOTFecOXJA==/109951165584924210.jpg?param=90y90'
                },
                {
                    name: '即兴',
                    artist: '小咪',
                    url: 'http://music.163.com/song/media/outer/url?id=1325896149.mp3',
                    cover: 'http://p2.music.126.net/Ep6JjLUcSOXBeCwncZUoRA==/109951163676599392.jpg?param=130y130'
                },
                {
                    name: '勇气',
                    artist: '棉子',
                    url: 'http://music.163.com/song/media/outer/url?id=1411358329.mp3',
                    cover: '/images/5.jpg',
                },
                {
                    name: "星星",
                    artist: '张杰',
                    url: 'http://music.163.com/song/media/outer/url?id=1399004693.mp3',
                    cover: '/images/xingxing.jpg',
                },
                {
                    name: '大眠 (完整版)原唱：王心凌',
                    artist: '小乐哥',
                    url: 'http://music.163.com/song/media/outer/url?id=3778678.mp3',
                    cover: '/images/2.jpg',
                },
                {
                    name: '世间美好与你环环相扣',
                    artist: '柏松',
                    url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
                    cover: '/images/3.jpg',
                },
                {
                    name: '飞',
                    artist: '王恩信Est / 二胖u',
                    url: 'http://music.163.com/song/media/outer/url?id=1386259535.mp3',
                    cover: '/images/4.jpg',
                }
            ]
        };

        return (
            <div>
                <ReactAplayer
                    {...props}
                    onInit={this.onInit}
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                />
            </div>
        );
    }
}
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
                    url: 'https://m10.music.126.net/20210105192321/b0106eb478b7c410bb17606c3ee0850f/ymusic/5a4a/354b/ad1b/a7b375a51c09456a93b420f0ed8e376a.mp3',
                    cover: 'https://p2.music.126.net/9RQepityGQUfi5Rbcz7xCQ==/18747772766555079.jpg?param=90y90'
                },
                {
                    name: '산책',
                    artist: 'On.U',
                    url: 'http://m801.music.126.net/20210105191906/f88b6850b22cbef1b4f9614a0672a8c1/jdyyaac/0752/0e09/0609/08ec9ec1aa9c83cf13d61cb9f8dc15fd.m4a',
                    cover: 'https://p1.music.126.net/aZnv7q8YeMqGs0lq9rcQwg==/17985811207420353.jpg?param=34y34'
                },
                {
                    name: '无人之岛',
                    artist: '任然',
                    url: 'https://m10.music.126.net/20210105191559/ed77ecc210244c3d13cdd53c818f64f7/ymusic/8a5a/b457/1f24/510fed872bac7ef4ff07e8c8ebbfc303.mp3',
                    cover: 'https://p1.music.126.net/mIUtHBPTJ52H78_FhHzcWg==/19188676928210304.jpg?param=90y90'
                },
                {
                    name: '我很好',
                    artist: '刘大壮',
                    url: 'https://m801.music.126.net/20210105184834/7e6f956a8d5160ffc4ca637165d344b9/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/4630533576/ce22/a810/baf0/8113e950d8f3a654917fd33d3cfd081d.mp3',
                    cover: 'https://p1.music.126.net/qGIzwzf05taTVfk9PSnSiw==/109951165424768428.jpg?param=90y90'
                },
                {
                    name: '难生恨',
                    artist: 'DAWN',
                    url: 'https://m801.music.126.net/20210105184619/bdae23d0a03b2f53d43f3c9be593293f/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5184017470/1eb1/e1d5/6461/8c3aa04528f804e37054950435b7bf2c.mp3',
                    cover: 'https://p1.music.126.net/cK8xCxcftxTQZsCJwnnV0A==/109951165541618408.jpg?param=90y90'
                },
                {
                    name: '四季予你',
                    artist: '程响',
                    url: 'https://m801.music.126.net/20210105184117/c361e5fee4e16ead8afeed8c3bf05dbb/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5473405221/2466/c6b2/5bb0/d2ed93b8db16409a6c4f0e5aa9d8ee77.mp3',
                    cover: 'https://p2.music.126.net/sUvayue0mxrlcOTFecOXJA==/109951165584924210.jpg?param=90y90'
                },
                {
                    name: '即兴',
                    artist: '小咪',
                    url: 'https://m10.music.126.net/20210105183817/a3d0260b9a68eb9ba519612a84b7eb89/ymusic/33a4/631c/2ec6/a6c009d5c2971fb594eb3f651874ba01.mp3',
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
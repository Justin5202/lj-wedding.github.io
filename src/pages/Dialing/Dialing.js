/**
 * Created by brickspert on 2016/12/24.
 */
/*拨号页*/
import React, {Component} from 'react';
import './Dialing.scss';
import {autoPlay} from 'util/audioAutoPlay'

import {hashHistory} from 'react-router';
import Back from '../../components/Back/Back';
import BgImg from '../../components/BgImg/BgImg';

const bgImg = require('./images/bg.jpg');
const itemImg = require('./images/phone-item.jpg');
const returnImg = require('../../asset/images/return.png');

const audioMp3 = require('./audio/dong.mp3');

export default class Dialing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        /*音频延迟0.1秒播放*/
        this.audioTimer = setTimeout(()=> {
            autoPlay('dialing-audio');
            document.getElementById('dialing-audio').play();
        }, 100);
    }

    componentWillUnmount() {
        this.audioTimer && clearTimeout(this.audioTimer);
    }

    _goBack() {
        hashHistory.goBack(-1);
    }

    render() {
        return (
            <div className="full-page dialing-page">
                <BgImg src={bgImg} animate={false} fillAll={true}/>
                <a className="dialing-item dialing-item-1" href="tel:15334698443">
                    <img src={itemImg}/>
                    <p>侯小兵</p>
                </a>
                <a className="dialing-item dialing-item-2" href="tel:13330243233">
                    <img src={itemImg}/>
                    <p>刘佳</p>
                </a>
                <Back />
                <img className="return" src={returnImg} onClick={()=>this._goBack()}/>
                <audio className="hidden" id="dialing-audio">
                    <source src={audioMp3} type="audio/mpeg"/>
                </audio>
            </div>
        )
    }
}
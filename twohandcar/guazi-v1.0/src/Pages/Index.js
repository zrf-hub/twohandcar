import React, { useState,useEffect } from 'react'
import Header from '../Pages/Header'
import '../static/css/sousuo.css'
import BuySell from './BuySell'
import Hot from './Hot'
import Footer from './Footer'

// import {Affix, Space, Tag, Card, Carousel} from 'antd'
// const {Meta} = Card

function Index(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="header-container">
                <Header currentParams="main" props={props}></Header>
                <div className="sousuo-container">
                    <div className="sousuo-title">
                        <span className="sousuo-brand">优选二手车</span>
                        车源有保障 价格有优惠
                    </div>
                    <div className="sousuo-input">
                        <input className="sousuo-search" type="text" placeholder="请输入关键词"/>
                        <button type="button" className="sousuo-btn">搜索</button>
                    </div>
                </div>
            </div>
            <BuySell props={props}></BuySell>
            <Hot props={props}></Hot>

            {/* 写到这里了 */}
            <div className="index-foot-buysell">
                <div className="index-foot-container">
                    <p className="index-foot-tel">
                        <p className="index-foot-title">
                            让每个家庭都拥有<span>更好的车</span> 
                        </p>
                        免费咨询电话：400-069-7982
                    </p>
                    <div className="index-foot-btn">
                        <a href="javascript:void(0)" onClick={()=>props.history.push('/buy')} className="index-foot-btn-all index-foot-btn-buy">
                            我要买车
                        </a>
                        <a href="javascript:void(0)" onClick={()=>props.history.push('/sell')} className="index-foot-btn-all index-foot-btn-sell">
                            我要卖车
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Index
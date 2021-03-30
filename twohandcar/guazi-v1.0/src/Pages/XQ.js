import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../static/css/xq.css'
import {message, Tooltip, Descriptions} from 'antd'

import {createFromIconfontCN} from '@ant-design/icons'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2114991_uuidyyx54d9.js'
})

function XQ(props) {

    useEffect(()=>{
        document.documentElement.scrollTop = document.body.scrollTop = 0
    },[])

    const success = function () {
        message.success("预约成功")
    }

    return (
        <div>
            <div className="buy-container">
                <Header props={props}></Header>
            </div>
            {
                console.log(props)
            }
            <div className="xq-detail">
                <div className="xq-main">
                    <div className="xq-image">
                        <img src="https://image.guazistatic.com/gz01190506/15/50/25f80b2b06fe7b99c568e8d06027d41c.jpg@base@tag=imgScale&w=600&h=400&c=1&m=2&q=88" alt=""/>
                    </div>
                    <div className="xq-textbox">
                        <h2 className="xq-textbox-titlebox">
                            纳智捷 优6 SUV 2017款 改款 1.6T 新创型 
                            <span className="xq-textbox-labels">严选车</span>
                        </h2>
                        <ul className="xq-textbox-assort">
                            <li className="xq-textbox-assort-one">
                                <span>2018-03</span>
                                上牌时间
                            </li>
                            <li className="xq-textbox-assort-two">
                                <span>1.53万公里</span>
                                表显里程
                            </li>
                            <li className="xq-textbox-assort-three">
                                <span>1.6T</span>
                                排量
                            </li>
                            <li className="xq-textbox-assort-last">
                                <span>自动</span>
                                变速箱
                            </li>
                        </ul>
                        <div className="xq-textbox-pricebox">
                            <div className="xq-textbox-pricebox-title">
                                优惠后
                            </div>
                            <div className="xq-textbox-pricebox-main">
                                <span className="xq-textbox-pricebox-num">
                                    {(85100/10000*0.945).toFixed(2)}万
                                </span>
                                <div className="xq-textbox-pricebox-origin">
                                    原价{85100/10000}万
                                </div>
                            </div>
                        </div>
                        <div className="xq-textbox-protect">
                            <div className="xq-textbox-protect-title">
                                <i className="xq-textbox-protect-text">三包服务</i>
                            </div>
                            <ul className="xq-textbox-protect-list">
                                <li>
                                    <span>30天保修</span>
                                </li>
                                <li>
                                    <span>1年售后</span>
                                </li>
                                <li>
                                    <span>专业整备</span>
                                </li>
                                <li>
                                    <span>过户服务</span>
                                </li>
                                <li>
                                    <span>259项检测</span>
                                </li>
                                <li>
                                    <span>调表车垫付</span>
                                </li>
                                <li>
                                    <span>拒收盗抢查封车</span>
                                </li>
                                <li>
                                    <span>精选车源</span>
                                </li>
                            </ul>
                        </div>
                        <div className="xq-textbox-btnbox">
                            <a href="javascript:void(0)" className="xq-textbox-btnbox-orgbtn" onClick={success}>
                                预约看车
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xq-infor">
                    <h2 className="xq-infor-titlediv">
                        纳智捷 优6 SUV 2017款 改款 1.6T 新创型 基本信息
                    </h2>
                    <dl className="xq-infor-people">
                        <dt>
                            <span className="xq-infor-people-name">
                                车主：杨女士
                            </span>
                            <Tooltip placement="bottomRight" align="right" title={<span className="xq-infor-people-tooltip">咨询电话：<i className="xq-infor-people-tooltip-phone">400-069-7982</i></span>} arrowPointAtCenter="true" color="white">
                                <a href="javascript:void(0)" className="xq-infor-people-ask">
                                    <IconFont type="icondianhua" />
                                    咨询看车
                                </a>
                            </Tooltip>
                        </dt>
                        <dd> 
                            <span className="type-gray">倒车影像</span>
                            <span className="type-gray">LED大灯</span>
                            <span className="type-gray">发动机自动启停</span>
                        </dd>
                    </dl>
                    <ul className="xq-infor-param xq-textbox-assort">
                        <li className="xq-textbox-assort-one">
                            <span>2018-03</span>
                            上牌时间
                        </li>
                        <li className="xq-textbox-assort-two">
                            <span>1.53万公里</span>
                            表显里程
                        </li>
                        <li className="xq-textbox-assort-three">
                            <span>1.6T</span>
                            排量
                        </li>
                        <li className="xq-textbox-assort-last">
                            <span>自动</span>
                            变速箱
                        </li>
                        <li className="xq-textbox-assort-three">
                            <span>国五</span>
                            迁入地标准
                        </li>
                        <li className="xq-textbox-assort-three">
                            <span>1次过户</span>
                            登记证为准
                        </li>
                        <li className="xq-textbox-assort-three">
                            <span>到店服务</span>
                            看车方式
                        </li>
                    </ul>
                    <Descriptions bordered title="基本参数">
                        <Descriptions.Item label="厂商">东风裕隆</Descriptions.Item>
                        <Descriptions.Item label="级别">紧凑型SUV</Descriptions.Item>
                        <Descriptions.Item label="发动机">1.6T/167马力/L4</Descriptions.Item>
                        <Descriptions.Item label="变速箱">6挡手自一体</Descriptions.Item>
                        <Descriptions.Item label="车身结构">5门5座SUV</Descriptions.Item>
                        <Descriptions.Item label="长/宽/高(mm)">4628/1825/1637</Descriptions.Item>
                        <Descriptions.Item label="轴距(mm)">2720</Descriptions.Item>
                        <Descriptions.Item label="行李箱容积(L)">-</Descriptions.Item>
                        <Descriptions.Item label="整备质量(kg)">东风裕隆</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
            <div className="sell-qa" style={{marginTop:"20px"}}>
                <div className="sell-qa-box">
                    <div className="sell-qa-con">
                        <p>购车问答</p>
                        <i></i>
                    </div>
                    <ul className="sell-qa-list">
                        <li>
                            <div className="sell-qa-list-pic"></div>
                            <div className="sell-qa-list-con">
                                <p className="sell-qa-list-t">
                                    Q1：如何在优选买车？
                                    <i></i>
                                </p>
                                <p className="sell-qa-list-txt">
                                    1、拨打看车电话400-069-7982或在线预约登记。
                                    <br/>
                                    2、由优选二手车购车顾问陪您上门看车。
                                    <br/>
                                    3、看车满意，签署二手车买卖合同及居间服务合同。
                                    <br/>
                                    4、优选协助过户，支付款项完成交易，好车开回家。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="sell-qa-list-pic pic2"></div>
                            <div className="sell-qa-list-con">
                                <p className="sell-qa-list-t">
                                    Q2：为何选择优选二手车？
                                    <i></i>
                                </p>
                                <p className="sell-qa-list-txt">
                                    1、靠谱车况：专业检测师团队，259项检测，拒收重大事故车、火烧车、水浸车，全程服务。
                                    <br/>
                                    2、轻松买车：专业购车顾问陪您看车，协助过户，买车放心不被蒙。
                                    <br/>
                                    3、售后保障：为你的爱车保驾护航。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="sell-qa-list-pic"></div>
                            <div className="sell-qa-list-con">
                                <p className="sell-qa-list-t">
                                    Q1：拍照能过户吗？
                                    <i></i>
                                </p>
                                <p className="sell-qa-list-txt">
                                    根据《机动车登记规定》法规，二手车拍照是不能过户的。
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="sell-qa-list-pic pic2"></div>
                            <div className="sell-qa-list-con">
                                <p className="sell-qa-list-t">
                                    Q1：车辆怎么过户？
                                    <i></i>
                                </p>
                                <p className="sell-qa-list-txt">
                                    车辆过户需关注车辆是否符合上牌地的迁入标准，具体的过户流程在买车过程中我平台提供过户服务。
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default XQ
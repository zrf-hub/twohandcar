import React,{useEffect} from "react"
import Header from './Header'
import Footer from "./Footer"
import '../static/css/sell.css'

function Sell(props) {

    useEffect(()=>{
        document.documentElement.scrollTop = document.body.scrollTop = 0
    },[])

    return (
        <div className="sell-container">
            <Header currentParams="sell" props={props}></Header>

            <div className="sell-main">
                <div className="sell-area">
                    <div className="sell-area-title">
                        优选二手车&nbsp;&nbsp;二手车行业领军者
                    </div>
                    <div className="sell-area-phone">
                        <input type="text" className="sell-area-phone-input" maxLength="11" placeholder="请输入手机号码" />
                        <button className="sell-area-phone-btn">预约卖车</button>
                    </div>
                </div>
                <div className="sell-inc">
                    <p className="sell-inc-tit">优选保卖服务</p>
                    <ul className="sell-inc-li">
                        <li>
                            <div className="sell-inc-icon">
                                <img src="http://localhost:8001/image/sell-inc-icon1.png" alt=""/>
                            </div>
                            <p className="sell-inc-tip">当天拿钱</p>
                            <p className="sell-inc-desc">
                                最低可得50%
                                <br/>
                                过户得余款
                            </p>
                        </li>
                        <li>
                            <div className="sell-inc-icon">
                                <img src="http://localhost:8001/image/sell-inc-icon2.png" alt=""/>
                            </div>
                            <p className="sell-inc-tip">快速高价</p>
                            <p className="sell-inc-desc">
                                面向全国买家
                                <br/>
                                锁定最优价格
                            </p>
                        </li>
                        <li>
                            <div className="sell-inc-icon">
                                <img src="http://localhost:8001/image/sell-inc-icon3.png" alt=""/>
                            </div>
                            <p className="sell-inc-tip">托管省心</p>
                            <p className="sell-inc-desc">
                                专人帮你卖车
                                <br/>
                                省时省力
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="sell-qa">
                    <div className="sell-qa-box">
                        <div className="sell-qa-con">
                            <p>优选问答</p>
                            <i></i>
                        </div>
                        <ul className="sell-qa-list">
                            <li>
                                <div className="sell-qa-list-pic"></div>
                                <div className="sell-qa-list-con">
                                    <p className="sell-qa-list-t">
                                        Q1：卖车流程是怎样的？
                                        <i></i>
                                    </p>
                                    <p className="sell-qa-list-txt">
                                        1、在本页填写卖车信息或拨打400-069-7982联系我们。
                                        <br/>
                                        2、由检测师进行车辆信息收集，并经过优选评估，给出优选价参考，由车主确定发布报价。
                                        <br/>
                                        3、达成交易合同，支付车款并过户。
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="sell-qa-list-pic pic2"></div>
                                <div className="sell-qa-list-con">
                                    <p className="sell-qa-list-t">
                                        Q2：卖车需要准备什么？
                                        <i></i>
                                    </p>
                                    <p className="sell-qa-list-txt">
                                        1、身份证；2、环保标；3、购置税本；4、行驶证；5、检字标；6、购置税发票；7、车辆登记证；8、交强险标；9、购车发票/最近一次过户发票；10、交强险单。
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer props={props}></Footer>
        </div>
    )
}

export default Sell
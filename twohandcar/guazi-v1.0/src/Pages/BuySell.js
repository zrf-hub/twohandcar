import React, { useState } from "react";
import "../static/css/buysell.css";

function BuySell({ props }) {
  const brandArr = [
    "大众",
    "本田",
    "别克",
    "丰田",
    "福特",
    "日产",
    "现代",
    "奔驰",
    "宝马",
    "奥迪",
    "雪佛兰",
    "吉利",
    "哈弗",
    "海马",
    "红旗",
    "Jeep",
    "凯迪拉克",
    "马自达",
    "玛莎拉蒂",
    "福特",
    "长安",
    "北汽",
    "阿斯顿·马丁",
    "江南",
  ];
  const [brand, setBrand] = useState(brandArr);
  return (
    <div className="buysell">
      <div className="buysell-buy">
        <div className="buysell-buy-title">
          <a
            href="javascript:void(0)"
            className="buysell-buy-link"
            onClick={() => props.history.push("/buy")}
          >
            我要买车
          </a>
        </div>
        <div className="buysell-buy-content">
          {brand.map((item, index) => {
            return (
              <span className="buysell-buy-brand" key={item + index}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="buysell-sell">
        <div className="buysell-buy-title buysell-sell-title">
          <a
            href="javascript:void(0)"
            className="buysell-buy-link"
            onClick={() => props.history.push("/sell")}
          >
            我要卖车
          </a>
        </div>
        <div className="buysell-sell-box">
          <div className="buysell-sell-phone">
            <input
              type="text"
              className="buysell-sell-phone-input"
              maxLength="11"
            />
            <div className="buysell-sell-phone-btn">预约卖车</div>
            <button className="buysell-sell-btn buysell-sell-btn-left">
              当天拿钱
            </button>
            <button className="buysell-sell-btn buysell-sell-btn-right">
              全程服务
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuySell;

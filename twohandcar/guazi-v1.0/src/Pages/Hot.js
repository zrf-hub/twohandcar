import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "../static/css/hot.css";

function Hot({ props }) {
  const tagName = [
    "猜你喜欢",
    "严选车",
    "最新上架",
    "降价急售",
    "准新车",
    "练手车",
    "SUV",
  ];
  const [tag, useTag] = useState(tagName);

  const carlist = [
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
    { title: "哈弗H6", price: 45000 },
  ];
  const [carContent, setCardContent] = useState(carlist);

  const [listIndex, setListIndex] = useState(0);

  useEffect(() => {
    var hotTagItem = document.getElementsByClassName("hot-tag-item");
    for (var i = 0; i < hotTagItem.length; i++) {
      hotTagItem[i].className = "hot-tag-item";
    }
    hotTagItem[listIndex].className += " active";
  }, [listIndex]);

  return (
    <div className="hot-container">
      <div className="hot-title">热卖车型</div>
      <ul className="hot-tag hot-w1200">
        {tag.map((item, index) => {
          return (
            <li
              className="hot-tag-item"
              key={index + item}
              listindex={index}
              onMouseOver={(e) => {
                // console.log(e.currentTarget.getAttribute("listIndex"))
                setListIndex(e.currentTarget.getAttribute("listindex"));
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="hot-carlist hot-w1200">
        {carContent.map((item, index) => {
          return (
            <Card
              key={index + "2"}
              hoverable
              style={{ width: 285, marginRight: 15, marginBottom: 15 }}
              cover={
                <img
                  alt="example"
                  src="https://image.guazistatic.com/gz01190506/15/50/25f80b2b06fe7b99c568e8d06027d41c.jpg@base@tag=imgScale&w=287&h=192&c=1&m=2&q=88"
                />
              }
            >
              <Link to="/xq/1">
                {/* <Meta title={item.title} description={(item.price/10000).toFixed(2)+"万"} /> */}
                <h2 className="hot-cardlist-title">
                  纳智捷 优6 SUV 2017款 改款 1.6T 新创型
                </h2>
                <div className="hot-cardlist-secondTitle">
                  2018年
                  <span className="hot-cardlist-icon">|</span>
                  1.5万公里
                  <span className="hot-cardlist-icon">|</span>
                  到店服务
                </div>
                <div className="hot-cardlist-price">
                  <p>
                    8.04
                    <span>万</span>
                  </p>
                  <i className="hot-cardlist-red">急售</i>
                  <i className="hot-cardlist-blue">严选车</i>
                  <em className="hot-cardlist-oldPrice">14.09万</em>
                </div>
              </Link>
            </Card>
          );
        })}
        <div className="hot-cardlist-cardmore">
          <a
            href="javascript:void(0)"
            className="hot-cardlist-cardmore-link"
            onClick={() => props.history.push("/buy")}
          >
            更多车辆 &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hot;

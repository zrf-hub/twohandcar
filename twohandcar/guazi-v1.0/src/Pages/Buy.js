import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../static/css/buy.css";

import { Tag, Descriptions, Card, Pagination } from "antd";
const { CheckableTag } = Tag;

const brandData = [
  "不限",
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
  "马自达",
  "起亚",
  "海马",
  "红旗",
  "Jeep",
  "凯迪拉克",
  "玛莎拉蒂",
  "长安",
  "北汽",
  "阿斯顿·马丁",
];

const seriesData = ["不限", "朗逸", "速腾", "大众POLO", "高尔夫", "宝来", "捷达", "迈腾", "福克斯", "轩逸"];

function Buy(props) {
  const [selectedBrandTag, setSelectedBrandTag] = useState("不限");
  const [selectedSeriesTag, setSelectedSeriesTag] = useState("不限");

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

  useEffect(() => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }, []);

  const handleChangeBrandTag = function (tag, checked) {
    // console.log(checked, tag)

    // const nextSelectedTag = checked ? tag : ""
    // setSelectedTag(nextSelectedTag)

    setSelectedBrandTag(tag);
  };

  const handleChangeSeriesTag = function (tag, checked) {
    setSelectedSeriesTag(tag);
  };

  return (
    <div>
      {/* {console.log(selectedTag)} */}
      <div className="buy-container">
        <Header currentParams="buy" props={props}></Header>
      </div>

      <div className="buy-list-wrap">
        <div className="buy-list-header">
          <span className="buy-list-title">优选二手车</span>
        </div>
        <Descriptions bordered>
          <Descriptions.Item label="品牌">
            {brandData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedBrandTag === tag}
                onChange={(checked) => handleChangeBrandTag(tag, checked)}
                style={{ fontSize: "16px", margin: 5 }}
              >
                {tag}
              </CheckableTag>
            ))}
          </Descriptions.Item>
        </Descriptions>
        <Descriptions bordered>
          <Descriptions.Item label="车系">
            {seriesData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedSeriesTag === tag}
                onChange={(checked) => handleChangeSeriesTag(tag, checked)}
                style={{ fontSize: "16px", margin: 5 }}
              >
                {tag}
              </CheckableTag>
            ))}
          </Descriptions.Item>
        </Descriptions>
        <div className="buy-carlist">
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
                  <h2 className="hot-cardlist-title">纳智捷 优6 SUV 2017款 改款 1.6T 新创型</h2>
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
        </div>
        <div className="buy-pagination">
          <Pagination
            total={85}
            defaultPageSize={12}
            showSizeChanger={false}
            onChange={(page, pageSize) => {
              console.log(page, pageSize);
            }}
          />
        </div>
      </div>

      {/* <span style={{ marginRight: 8 }}>Categories:</span>
            <Descriptions bordered>
                <Descriptions.Item label="product">
                    {tagsData.map(tag => (
                        <CheckableTag
                            key={tag}
                            checked={selectedTag.indexOf(tag) > -1}
                            onChange={checked => handleChange(tag, checked)}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                </Descriptions.Item>
            </Descriptions> */}

      <Footer props={props}></Footer>
    </div>
  );
}

export default Buy;

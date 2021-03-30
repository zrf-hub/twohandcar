import React, { useEffect, useState } from "react";
import { Col, Row, Button, Menu, Modal, message } from "antd";
import "../static/css/header.css";
import Cookies from "js-cookie";

// 发起请求
import axios from "axios";
import servicePath from "../config/apiUrl";

import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2114991_uuidyyx54d9.js",
});

function Header({ props, currentParams }) {
  // console.log(props)
  const [current, setCurrent] = useState(currentParams);
  const [visible, setVisible] = useState(false);
  const [loginName, setLoginName] = useState("登录");
  console.log(document.cookie, Cookies.get("user"), "打印cookie");

  useEffect(() => {
    // if (localStorage.getItem("loginName")) {
    //   setLoginName(localStorage.getItem("loginName"));
    // } else {
    //   setLoginName("登录");
    // }
    if (Cookies.get("user")) {
      setLoginName("退出登录");
    } else {
      setLoginName("登录");
    }
  }, []);

  function handleClick(e) {
    setCurrent(e.key);
    switch (e.key) {
      case "main":
        props.history.push("/");
        break;
      case "buy":
        props.history.push("/buy");
        break;
      case "sell":
        props.history.push("/sell");
        break;
    }
  }

  function showModal() {
    if (loginName === "登录") {
      setVisible(true);
    } else if (loginName === "退出登录") {
      // localStorage.removeItem("loginName");
      Cookies.remove("user");
      setLoginName("登录");
    }
  }

  function handleOk() {
    setVisible(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  function checkNumber(num) {
    // var reg = new RegExp(/^[0-9]+\.?[0-9]*$/)    // 匹配一个字符串是否为数字，包含小数
    const reg = /^[0-9]{11}$/;
    // console.log("正则表达式")
    return reg.test(num);
  }

  function checkLogin() {
    const tel = document.getElementsByClassName("header-login-phone-tel")[0];
    const loginErr = document.getElementsByClassName(
      "header-login-errorBox"
    )[0];
    const password = document.getElementsByClassName(
      "header-login-phone-tel"
    )[1];
    let telValue = tel.value;
    let passwordValue = password.value;
    if (!checkNumber(telValue)) {
      loginErr.innerHTML = "请输入正确的手机号码";
    } else {
      if (passwordValue.length === 0) {
        loginErr.innerHTML = "请输入密码";
      } else {
        axios({
          method: "post",
          // url: 'http://localhost:8001/checkLogin',
          url: servicePath.checkLogin,
          data: { telphone: telValue, password: passwordValue },
          withCredentials: true,
        }).then((res) => {
          console.log(res, "返回的内容");
          if (res.data.success) {
            message.success(res.data.message);
            localStorage.setItem("loginName", "退出登录");
            setLoginName(localStorage.getItem("loginName"));
            setVisible(false);
          } else {
            message.error(res.data.message);
          }
        });
      }
    }
  }

  return (
    <div className="header">
      <div className="header-center">
        <Row className="header-main" type="flex" justify="center">
          {/* <Button type="primary">
                        wo 傻子
                    </Button> */}
          <Col xs={24} sm={12} md={8}>
            <div className="header-icon">优选</div>
          </Col>
          <Col xs={0} sm={12} md={10}>
            <Menu
              className="header-menu"
              onClick={handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <Menu.Item className="header-menuitem" key="main">
                首页
              </Menu.Item>
              <Menu.Item className="header-menuitem" key="buy">
                我要买车
              </Menu.Item>
              <Menu.Item className="header-menuitem" key="sell">
                我要卖车
              </Menu.Item>
            </Menu>
          </Col>
          <Col xs={0} sm={0} md={6}>
            <span className="header-tel">热线电话 400-069-7982</span>
            <span className="header-login" onClick={showModal}>
              <IconFont
                type="icondenglu"
                style={{
                  fontSize: "20px",
                  verticalAlign: "text-top",
                  marginRight: "5px",
                }}
              ></IconFont>
              {loginName}
            </span>
          </Col>
          <Modal
            // title="优选二手车直卖网"
            visible={visible}
            centered
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            // closable={false}
            footer={null}
            width="800px"
            destroyOnClose={true}
          >
            {/* <form action="https://127.0.0.1:8001/login" method="post"> */}
            <p className="header-login-title">优选二手车直卖网</p>
            <ul className="header-login-phone">
              <li>
                <p className="header-login-phone-title">手机号码</p>
                <input
                  type="text"
                  name="phone"
                  className="header-login-phone-tel"
                  maxLength="11"
                />
              </li>
              <li>
                <p className="header-login-phone-title">密码</p>
                <input
                  type="password"
                  name="password"
                  className="header-login-phone-tel"
                />
              </li>
            </ul>
            <p className="header-login-errorBox">
              {/* 这里写的是填错信息后的警告消息 */}
            </p>
            <button
              type="submit"
              className="header-login-btn"
              onClick={() => checkLogin()}
            >
              登录
            </button>
            <p className="header-login-freePhone">免费咨询电话：400-069-7982</p>
            <p className="header-login-warn">
              注意：首次登录会自动注册，请谨慎填写
            </p>
            {/* </form> */}
          </Modal>
        </Row>
      </div>
    </div>
  );
}

export default Header;

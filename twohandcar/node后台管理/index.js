const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const mysql = require("mysql");
const url = require("url");

var mysql_config = {
  host: "127.0.0.1",
  user: "root",
  password: "zhangrufu",
  database: "twohandcar",
};
var connection;
function handleDisconnection() {
  connection = mysql.createConnection(mysql_config);
  connection.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(() => {
        handleDisconnection();
      }, 2000);
    }
  });

  connection.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("db error执行重连:" + err.message);
      handleDisconnection();
    } else {
      throw err;
    }
  });
}
handleDisconnection();

app.use(express.static("./static", { index: false }));

app.all("*", function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // console.log(req.headers.origin);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );

  res.header("Access-Control-Allow-Credentials", true); // cookie跨域
  next();
});

app.post("/checkLogin", jsonParser, async function (req, res) {
  console.log(req.body);
  let { telphone, password } = req.body;
  let data = {};
  connection.query(
    `select * from user where telphone = ${telphone}`,
    function (err, result) {
      console.log(result);
      if (result.length) {
        const findRes = result.find((item) => item.password === password);
        if (findRes) {
          data = {
            telphone: findRes.telphone,
            message: "登录成功",
            success: true,
          };
          // console.log(url.parse(req.headers.origin).host);
          res.cookie("user", findRes.telphone, {
            maxAge: 259200000,
            // httpOnly: false,
            // sameSite: "Lax",
            // secure: false
          });
        } else {
          data = { message: "密码错误", success: false };
          res.clearCookie("user");
        }
      } else {
        connection.query(
          `insert into user(telphone,password) values(${telphone}, '${password}')`,
          function (err, final) {
            data = { message: "账号不存在，已为您自动注册", success: true };
            res.cookie("user", telphone, { maxAge: 259200000 });
          }
        );
      }
      res.status(200).send(data);
    }
  );
});

app.get("/logout", function (req, res) {
  res.clearCookie("user");
  res.status(200).send("退出登录成功");
});

app.get("/checkLogin", function (req, res) {
  console.log("1111");
});

app.listen(8001);

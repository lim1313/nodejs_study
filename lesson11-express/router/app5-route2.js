import express from "express";
import postRouter from "./route/post.js";
import useRouter from "./route/user.js";

const app = express();

app.use(express.json()); // REST API -> Body를 parsing할 때 사용

// HTML Form -> Body : from submit할 때 전달된 데이터를 body로 parsing
// 꼭 옵션을 주어야 한다( ex){extended : false} )
app.use(express.urlencoded({ extended: false }));

const options = {
  dotfiles: "igonre",
  etag: false,
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Data.now());
  },
};
//public 리소스 접근 가능하도록 함 (옵션 선택)
app.use(express.static("public", options));

app.use("/posts", postRouter);
app.use("/users", useRouter);

app.listen(8080);

import express from "express";
const app = express();

// app.use를 사용해서 모든 request에
// 요청이 들어오는 body부분을 parsing해서 보여준다
app.use(express.json());

app.post("/", (req, res, next) => {
  console.log(req.body);
});

//app.listen(8080);

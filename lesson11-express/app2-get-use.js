import express from "express";
const app = express();

// 미들웨어는 설정된 순서가 매울 중요
// next()로 하여 다음으로 넘어가든지 res.send('hello!') 등으로 처리를 해주여야 한다.
// 한번 처리를 하게되면 다음에 나오는 미들웨어는 호출되지 않는다.
//-> res.send('hello!')로 response하게 되면 그 다음에 나오는 first2, second는 호출되지 않는다.

//all -> /api에서만 가능 /api/doc 경로라면 처리 안된다.
app.all("./api", (req, res, next) => {
  console.log("all");
  next();
});
//use -> /sky 뿐 아니라 /sky/doc 등, /sky 경로에 대한 처리 가능
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    if (true) {
      return res.send("hello");
    }
    res.send("hi");
    // 한 경로에 여러 미들웨어가 있다면 send 혹은 next 등을 통해 처리해 주어야 한다.
    // res.send('hello!')
    next(new Error("error"));
    // next("route"); //-> first2는 점프
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  res.status(404).send("not avaiable");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("sorry, try later!");
}); //에러 핸들러 - 어떤 경로인지 상관없이 에러 발생시 이걸로 error를 handle한다.
//app.listen(8080);

import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json());

// 미들웨어 콜백함수에서 예상되는 에러에 대해서는 에러처리를 적절하게 해주어야 한다
app.get("/file", (req, res) => {
  fs.readFile("/file1.txt", (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

app.get("/file1", (req, res) => {
  try {
    const data = fs.readFileSync("/file1.txt");
    res.send(data);
  } catch {
    res.sendStatus(404);
  }
});

//promies 에서 발생한 에러는 node 서버를 중지하기 때문에, 에러처리해야 한다!!
app.get("/file2", async (req, res) => {
  fsAsync
    .readFile(".file2.txt")
    .then(data => res.send(data))
    .catch(error => res.sendStatus(404));
});

app.get("/file3", async (req, res) => {
  try {
    const data = await fsAsync.readFile("/file2.txt");
    res.send(data);
  } catch (error) {
    res.status(404).send("sorry");
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "something went wrong" });
});

//app.listen(8080);

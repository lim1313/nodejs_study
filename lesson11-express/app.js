import express from "express";
const app = express();

app.get("/sky/:id", (req, res, next) => {
  console.log(req.path);
  console.log(req.headers);
  //*request
  //ex) http://localhost:8080/sky/ha/?keyword=bts
  console.log(req.params); // { id: 'ha' }
  console.log(req.params.id); // ha
  console.log(req.query); //{ keyword: 'bts' }
  console.log(req.query.keyword); // bts

  //*response
  // res.send("hi!");
  // res.json({name: 'hahaha'})
  // res.sendStatus(400)
  res.setHeader("key", "valuehead"); //key 와  value를 설정 가능
  res.status(201).send("created");
  console.log("get");
});

//app.listen(8080);

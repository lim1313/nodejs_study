import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("GET: /psots");
});

router.post("/", (req, res) => {
  res.status(201).send("POST: /psots");
});

router.put("/:id", (req, res) => {
  res.status(201).send("PUT: /psots/:id");
});

router.delete("/:id", (req, res) => {
  res.status(201).send("DELETE: /posts/:id");
});

export default router;

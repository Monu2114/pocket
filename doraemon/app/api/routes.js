const express = require("express");
const router = express.Router();

const app = express();
const port = 3001;

app.use(express.json());
router.get("/gadgets", (req, res) => {
  res.send("Hello World");
});

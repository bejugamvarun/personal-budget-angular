const express = require("express");
const app = express();
const port = 3000;

const budget = {
  myBudget: [
    {
      title: "Eat out",
      budget: 25,
    },
    {
      title: "Rent",
      budget: 375,
    },
    {
      title: "Groceries",
      budget: 110,
    },
    {
      title: "Utilities",
      budget: 150,
    },
    {
      title: "Gas",
      budget: 100,
    },
  ],
};

app.use("/", express.static("public"));

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/budget", (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

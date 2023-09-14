const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/hetMyHeaderLinks", (req, res) => {
  res.json({
    headerLinks: [
      {
        link: "/",
        text: "My Home",
      },
      {
        link: "/help",
        text: "Help",
      },
      {
        link: "/policy",
        text: "Policy",
      },
      {
        link: "/newemp",
        text: "Add New Employee",
      },
      {
        link: "/emplist",
        text: "My Employees",
      },
    ],
  });
});

const empRouter = require("./routes/employee");
app.use("/api/employees", empRouter);

app.listen(7777);

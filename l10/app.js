const express = require("express");
const app = express();
const port = 8001;

//app.get
//app.post
//app.put
//app.patch
//app.delete
app.get("/", function (req, res) {
  res.send("<h1>Home Page 🏠</h1>");
});

app.get("/api/v1/about", function (req, res) {
  res.send("<h1>About Page 🏢</h1>");
});

app.get("/api/v1/user/profile", function (req, res) {
  res.status(200).json({
    success: true,
    user: { name: "John Doe", age: 30, email: "johndoe@example.com" },
  });
});

//req.params
app.get("/api/v1/user/:id", function (req, res) {
  //const userId = req.params.id;
  const {id} = req.params; //better way
  console.log('Req. Param:',id);
  res.status(200).json({
    success: true,
    user: {
      id: id,
      name: "Soumadip Banerjee",
      age: 29,
      email: "johndoe@example.com",
    },
  });
});

app.listen(port, function () {
  console.log(`Serving listening on port ${port}`);
});

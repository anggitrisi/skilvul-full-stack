const express = require("express");
const database = require("./database");
const middlewares = require("./middlewares");

const app = express();
const PORT = 3000;

app.use(express.json());
// middlewareLogger digunakan disemua endpoint
app.use(middlewares.logger);

app.get("/hewan", (req, res) => {
  const hewan = database.getHewan();
  res.send({
    message: "succes get data pet",
    hewan,
  });
});

app.post(
  "/hewan",
  (req, res, next) => {
    const validSpesies = ["kucing", "anjing", "kelinci"];
    const { spesies } = req.body;
    if (!validSpesies.includes(spesies)) {
      res.status(400).send({
        error: "spesies is not valid",
      });
      return;
    }
    next();
  },
  (req, res) => {
    const hewan = database.createHewan(req.body);

    res.send({
      message: "success adding one pat",
      hewan,
    });
  }
);

app.get("/hewan/:id", (req, res) => {
  const id = req.params.id;
  res.send(hewan.filter((h) => h.id == id));
});

app.put("/hewan/:id", (req, res) => {
  const id = Number(req.params.id);
  const form = req.body;

  const updatedData = {
    id: id,
    nama: form["nama"],
    spesies: form["spesies"],
  };

  const findIndex = hewan.findIndex((element) => element.id === id);
  hewan[findIndex] = updatedData;

  res.send({
    message: "data berhasil diupdate",
    hewan: hewan,
  });
});

app.delete("/hewan/:id", (req, res) => {
  const id = Number(req.params.id);
  const findIndex = hewan.findIndex((element) => element.id === id);
  hewan.splice(findIndex, 1);
  res.send({
    message: "data berhasil dihapus",
    hewan: hewan,
  });
});

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});

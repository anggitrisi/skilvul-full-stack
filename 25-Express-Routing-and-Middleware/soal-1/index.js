const express = require("express");
const database = require("./database");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const hewan = database.getHewan();
  res.send(hewan);
});

app.post("/hewan", (req, res) => {
  const form = req.body;
  const newData = {
    id: form["id"],
    nama: form["nama"],
    spesies: form["spesies"],
  };
  hewan.push(newData);
  res.send({
    message: "data berhasil ditambahkan",
    hewan: hewan,
  });
});

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

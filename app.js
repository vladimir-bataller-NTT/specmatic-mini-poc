import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/pets/:id", (req, res) => {
  const token = req.get("Authorization");
  console.log('----->', token);
  if (!token) {
    res.status(403);
    res.send('Unauthorized');
    return;
  }
  res.json({
    id: parseInt(req.params.id),
    name: 'Scooby',
    type: 'Golden Retriever',
    status: 'Adopted'
  });
});

app.listen(3000, () => console.log('EXPRESS STARTED ON PORT 3000'));

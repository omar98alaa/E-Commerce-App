import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ message: "Hello from the backend" });
});

app.listen(port, () => {
  console.log(`Server started and running on port ${port}`);
});

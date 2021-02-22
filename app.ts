import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Hello World We Lit"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
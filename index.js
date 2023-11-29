import express from "express";
import router from "./routes/routes.js";
import authRouter from "./routes/auth.js";

const app = express();

const port = 3000;

app.use(express.json({ extended: false }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", router);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

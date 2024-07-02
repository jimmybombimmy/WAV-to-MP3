import express from "express";
import router from "./routes/index.js";
const app = express();
app.use(express.json());
const port = 9090;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
app.use(router);
export default app;

import { createTableFornecedor } from "./models/fornecedoresModel.js";
import cors from "cors";
import express from "express";
import router from "./routes.js"

const app = express();
app.use(express.json());

app.use(cors());

app.use(router);

createTableFornecedor();

app.listen(3000, () => {
    console.log("Api rodando.")
});

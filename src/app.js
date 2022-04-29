import cors from "cors";
import express from "express";
import router from "./routes.js"
import DatabaseMetodosFornecedores from "./DAO/DatabaseMetodosFornecedores.js";

const app = express();
app.use(express.json());

app.use(cors());

app.use(router);

app.listen(3000, () => {
    console.log("Api rodando.")
});

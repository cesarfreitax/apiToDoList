import { Router } from "express";
import { testApi, insertFornecedor,sltFornecedor, sltFornecedores, uptFornecedor, delFornecedor } from "./controllers/Fornecedor.js";

const router = Router();

router.get('/', testApi);
router.post('/fornecedor', insertFornecedor);
router.get('/fornecedor/:id', sltFornecedor);
router.get('/fornecedores', sltFornecedores);
router.put('/fornecedor/:id', uptFornecedor);
router.delete('/fornecedor/:id', delFornecedor);

export default router;
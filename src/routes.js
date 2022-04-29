import { Router } from "express";
import {
    testApi,
    insertFornecedor,
    selectFornecedor,
    selectFornecedores,
    updateFornecedor,
    deleteFornecedor
} from "./controllers/Fornecedor.js";

const router = Router();

router.get('/', testApi);
router.post('/fornecedor', insertFornecedor);
router.get('/fornecedor', selectFornecedor);
router.get('/fornecedores', selectFornecedores);
router.put('/fornecedor', updateFornecedor);
router.delete('/fornecedor', deleteFornecedor);

export default router;
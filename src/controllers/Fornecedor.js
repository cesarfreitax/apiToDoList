import DatabaseMetodosFornecedores from "../DAO/DatabaseMetodosFornecedores.js"
import FornecedoresModel from "../models/FornecedoresModel.js"

export async function insertFornecedor(req, res) {
    try {
        const tabela = await DatabaseMetodosFornecedores.tableFornecedores();
        const fornecedor = new FornecedoresModel(...Object.values(req.body));
        const response = await DatabaseMetodosFornecedores.inserirFornecedor(fornecedor)
        res.status(201).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message });
    }
}

export async function uptFornecedor(req, res) {
    try {
        const fornecedor = req.body;
        const response = await DatabaseMetodosFornecedores.updateFornecedorId(fornecedor, req.params.id)
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json(e.message)
    }
}

export async function sltFornecedor(req, res) {
    
    try {
        const response = await DatabaseMetodosFornecedores.selecionarFornecedor(req.params.id);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ erro: e.message })
    };
}

export async function sltFornecedores(req, res) {
    try {
        const response = await DatabaseMetodosFornecedores.selecionarFornecedores();
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ erro: e.message })
    };
}

export async function delFornecedor(req, res){
    try{
        const response = await DatabaseMetodosFornecedores.deletaFornecedor(req.params.id);
        res.status(200).json(response);
    } catch (e){
        res.status(400).json({erro: e.message})
    }
};

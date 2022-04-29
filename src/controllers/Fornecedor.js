import { openDb } from "../infra/configDB.js";
import { ValidacoesFornecedores } from "../services/validacoesFornecedores.js";

export async function testApi(req, res){
    res.status(200).json({"Mensagem": "Tudo certo!"})
}

export async function insertFornecedor(req, res) {
    try {
        if(ValidacoesFornecedores.validaInsertAndUpdate(req.body.nome, req.body.ramo, req.body.cnpj)){
        let fornecedor = req.body;
        openDb().then(db => {
            db.run(`INSERT INTO Fornecedor (nome, ramo, cnpj) VALUES (?, ?, ?)`, [fornecedor.nome, fornecedor.ramo, fornecedor.cnpj]);
            res.status(201).json({"Mensagem": "Fornecedor adicionado com sucesso!"})
        })
    } else {
        throw new Error(`CNPJ precisa ter 14 números.`)
    }
    } catch (e) {
        res.status(400).json(e.message)
    }
}

export async function updateFornecedor(req, res) {
    let fornecedor = req.body;
    openDb().then(db => {
        db.run(`UPDATE Fornecedor SET nome=?, ramo=?, cnpj=? WHERE id=?`, [fornecedor.nome, fornecedor.ramo, fornecedor.cnpj, fornecedor.id]);
        res.status(200).json({"Mensagem": "Fornecedor atualizado com sucesso!"})
    })
}

export async function selectFornecedores(req, res) {
    openDb().then(db => {
        db.all(`SELECT * FROM Fornecedor`).then(fornecedores => res.json(fornecedores));
    })
}

export async function selectFornecedor(req, res) {
    let id = req.body.id;
    openDb().then(db => {
    db.get(`SELECT * FROM Fornecedor WHERE id=?`, [id]).then(fornecedor => res.json(fornecedor));
    })
}

export async function deleteFornecedor(req, res) {
    let id = req.body.id;
    openDb().then(db => {
    db.get(`DELETE FROM Fornecedor WHERE ID=?`, [id]).then(res => res);
    })
    res.status(200).json({"Mensagem": "Fornecedor deletado com sucesso!"})
}
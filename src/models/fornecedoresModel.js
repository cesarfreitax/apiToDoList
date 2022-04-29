import { openDb } from "../infra/configDB.js"

export async function createTableFornecedor() {
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS Fornecedor (
            id INTEGER PRIMARY KEY,
            nome TEXT,
            ramo TEXT,
            cnpj INTEGER
        )`)
    })
}

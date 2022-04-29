export class ValidacoesFornecedores {
    static validaInsertUpdate(cnpj, nome, ramo){
        const cnpjNum = parseInt(cnpj)
        if(cnpj.length == 14 && cnpjNum == cnpj && nome.length >= 3 && ramo.length >= 3){
            return true
        } else {
            return false
        }
    }

    // static validaNomeRamo(nome, ramo){
    //     if(nome.length >= 3 && ramo.length >= 3){
    //         return true
    //     } else {
    //         return false
    //     }
    // }

}

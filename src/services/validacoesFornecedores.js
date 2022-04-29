export class ValidacoesFornecedores {
    static validaInsertAndUpdate(nome, ramo, cnpj){
        const cnpjNum = parseInt(cnpj)
        if(nome.length >= 3 && ramo.length >= 3 && cnpj.length == 14 && cnpjNum == cnpj){
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

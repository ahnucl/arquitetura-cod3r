/**
 * Código totalmente amarrado - não há como personalizar a persistência e a criptografia
 */

export class RegistrarUsuario {

    usuarios: any[] = []

    executar(nome: string, email: string, senha: string) {
        const senhaCripto = senha.split('').reverse().join('')
        const usuario = {
            id: Math.random(),
            nome,
            email,
            senha: senhaCripto 
        }
        this.usuarios.push(usuario)
        return usuario
    }
}
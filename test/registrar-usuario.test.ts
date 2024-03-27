import { RegistrarUsuario } from "../src/registrar-usuario";

test('Deve registrar um usuário', () => {
    const casoDeUso = new RegistrarUsuario()
    const usuario = casoDeUso.executar('João', 'jjjoao@zmail.com.br', '123456')

    expect(usuario).toHaveProperty('id')
    expect(usuario.nome).toBe('João')
})
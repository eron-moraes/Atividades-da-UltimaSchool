#encoding: UTF-8
# language: pt

Funcionalidade: Login
Como usuário do sistema XPTO
Ao acessar a pagina de login 
Quando inserir usuários e senha válidos
Deve apresentar a página inicial com sucesso

Cenario: login valido

Dado que o usuario tem contas no sistema
E ele insere os dados de "usuario" e "senha" validos
Quando ele aciona o botão logar
Então ele será redirecionado para a pagina inicial

Esquema do Cenario: Login valido com diversos usuarios

Dado que o <usuario> tem contas no sistema
E ele insere os dados de "usuario" e "senha" validos
Quando ele aciona o botão logar
Então ele será redirecionado para a pagina inicial

Exemplos: 
| usuario |
| Eron    |
| Jose    |

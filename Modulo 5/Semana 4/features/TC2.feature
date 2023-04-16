Feature: UC001 - Cadastrar usuário com exemplos
	O usuário preencher os campos: Nome, e-mail, senha e confirmação de senha.
	O usuário clica no botão 'Cadastrar'.
    O sistema exibe uma mensagem de sucesso.

    Scenario Outline: Fluxo Principal com exemplos

    Given usuario acessa menu de cadastro novamente, "<browser>"
    When preenche campos com exemplos "<nome>","<email>","<senha>" e confirmacao
    Then o sistema exibe uma mensagem de sucesso para cada exemplo

    Examples:
    | nome          | email         | senha         | browser   |
    | Carlos        | ca@ca.com     | 12345         | chrome    |
    | Joao          | ja@ca.com     | 1234565       | chrome    |
    | Carlos        | ca@ca.com     | 12345         | firefox   |
    | Joao          | ja@ca.com     | 1234565       | firefox   |

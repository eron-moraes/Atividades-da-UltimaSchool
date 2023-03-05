#encoding: UTF-8



Feature: Criação de conta
Como um usuário
Eu quero criar uma nova conta
Para que eu possa acessar o sistema

Scenario: Criar nova conta com sucesso
Given que estou na página de criação de conta
When eu preencher o campo "Nome de Usuário" com "usuario123"
And eu preencher o campo "Senha" com "senha123"
And eu clicar no botão "Criar Conta"
Then eu devo ser redirecionado para a página de login
And devo ver a mensagem "Conta criada com sucesso"
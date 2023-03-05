#encoding: UTF-8

Feature: Processo de login

Scenario: Usuario valido acessando a pagina principal

Given um usuario valido acessa a pagina principal
When ele insere usuario e senha validos <user> e <password>
Then ele recebe a mensagem de usuario valido

Examples: 

| user | password |
| jose | 123      |
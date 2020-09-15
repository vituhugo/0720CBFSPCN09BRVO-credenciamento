# Sistema de credenciamento

## exercício 1
Em UserController, na função guardar, que é chamada quando enviamos os dados do formulário de cadastro de usuário, vamos pegar os dados desse formulário que foram enviados e gravaremos dentro do arquivo usuarios.json localizado na pasta data na raiz do projeto.

Os dados novos precisam ser adicionados a esse arquivo e não deve subistituir o conteúdo que já tem dentro dele.

## exercício 2
Beleza, nossos dados já estão salvando no usuarios.json, mas vamos reparar em algo estranho... nos conseguimos ver a senha do usuário... isso não é estranho?

Para resolver vamos ter que escondela através da Criptografia, vulgo Hashing! Para isso utilizaremos a função bcrypt.

A criptografia acontecera no momento que formos inserir novos dados no nosso arquivo.(Não precisa se preocupar com os dados já inseridos)


## exercício 3
Vamos dificultar um pouco as coisas... Que tal a gente subir uma imagem de avatar no formulário?

Para isso precisaremos usar um input do tipo file e guardar a imagem no servidor com a ajuda do fileSystem(fs).

Não é necessário salvar a imagem inteira no arquivo json, isso causaria uma bagunça! Ao invés disso, vamos salvar ela em uma pasta "imagens" dentro de public e armazenaremos no arquivo JSON apenas o caminho dela! Dessa forma ele ficará limpo e muito mais charmoso.
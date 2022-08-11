/* 1 - Git

Git é um repositório para controle de versões, bastante utilizado por desenvolvedores, afim de evitar que haja conflito de entre uma atualização ou outra, através de um histórico de versões, criado pelo próprio git. Sempre que um código é atualizado, para que um dev possa atualizar o código novamente, será necessário o download da versão atual, e a partir dessa versão, será possível fazer alterações no código.
    
    *Comandos Git bash:
    
    - ls: serve para verificarmos os arquivos na pasta (git bash)
    - git init: Faz com que o git inicie e utilize o local desejado como um repositório
    - git status: Faz uma verificação no repositório dos arquivos que constam dentro dele, como por exemplo, se os arquivos já foram atualizados ou não 
    - git add: Adiciona arquivos para serem monitorados pelo git. Se utilizarmos um git status agora, após adicionarmos novos arquivos, o git irá nos mostrar esses arquivos para serem "comitados". Caso haja mais de 1 arquivo para ser adicionado, podemos colocar um ponto após o comando(git add .), assim, todos os arquivos dentro do repositório serão adicionados.
    - git commit: Salva os arquivos adicionados no git. O termo "commit" é utilizado justamente para isso, para dizermos que nesse ponto do código, houve uma alteração. Para isso, podemos adicionar uma mensagem com o parâmetro "-m", lembrando que essa mensagem deve estar entre "". É uma boa prática colocarmos uma mensagem descritiva, mas não muito longa, o ideal é que seja uma frase, específicando a modificação realizada.

Ao executar o comando git status, recebemos algumas informações que talvez não estejam tão claras, principalmente quando nos deparamos com termos como HEAD, working tree, index, etc.

Apenas para esclarecer um pouco, visto que entenderemos melhor o funcionamento do Git durante o treinamento, seguem algumas definições interessantes:

HEAD: Estado atual do nosso código, ou seja, onde o Git os colocou
Working tree: Local onde os arquivos realmente estão sendo armazenados e editados
index: Local onde o Git armazena o que será commitado, ou seja, o local entre a working tree e o repositório Git em si.
Além disso, os possíveis estados dos nossos arquivos são explicados com detalhes neste link: <https://git-scm.com/book/pt-br/v2/Fundamentos-de-Git-Gravando-Altera%C3%A7%C3%B5es-em-Seu-Reposit%C3%B3rio.

Acredite, embora pareça confuso agora, durante o treinamento tudo fará muito mais sentido! :-D

    * Comandos Git bash:
    
    - git log: Para verificarmos o nosso histórico de commits, podemos utilizar o comando git log. Ele irá mostrar os commits com alguns detalhes. Esses detalhes que aparecem, podem ser mostrados ou não, basta adicionar parâmetros ao comando git log. Vamos ver agora um pouco dessas informações:

    miche@DESKTOP-3SLMLNN MINGW64 ~/Desktop/Preto/git-e-github (master)
    $ git log -> (comando utilizado)
    commit ad6300e79b3bd7eae508a90ab1c4e3703cdf8c7a -> (Hash gerado de identificação do commit. O hash nunca se repete em outro commit) (HEAD -> master) -> (branch ou ramo do nosso repositório. Head: é como se fosse onde estamos no nosso código, no nosso caso, todas alterações serão feitas no Head. master: é no nosso branch, mais pra frente iremos abordar esse termo especificamente.)
    Author: Ulisses <ulissesfsr@gmail.com> -> o criador desse commit
    Date:   Wed Aug 10 07:08:02 2022 -0300 -> data que o commit foi criado

        Acento adicionado em Integração Contínua -> mensagem descritiva do commit

    Ainda sobre o git log: existem uma infinidade de paramentros que podemos utilizar para visualizarmos nosso histórico, dentre eles, um dos comandos mais comuns seria: "git log --oneline". Ele serve para visualizarmos todas as informações de cada commit em apenas uma linha. Outro comando interessante seria o -p. Esse comando permite ver as alterações no código. Para sair da visualização do comando, basta digitar "q". Para ver mais tipos de visualização do git, segue o link: https://devhints.io/git-log

    - git config: Com esse comando podemos configurar as informações do nosso projeto. Através do comando --local, podemos fazer modificações apenas no nosso repositório, ou se for o caso, podemos utilizar o comando --global, para modificar configurações na máquina como um todo. Após definir aonde irá ocorrer a configuração, colocamos o que iremos alterar. Exemplo:

        git config --local user.name "Ulisses Fernandes"

    Para mais configurações do git, https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration

< .gitignore >

Existem alguns arquivos aos quais não é interessante que o git monitore, sendo assim, é melhor que o git ignore a existencia dos mesmos. Para fazer isso precisamos criar um arquivo dentro do nosso repositório chamado de ".gitignore". Dentro desse arquivo, iremos apenas colocar o nome do arquivo ou pasta ao qual não queremos que o git monitore, apenas isso. Dessa forma, quando dermos um "git status", irá constar no git apenas o ".gitignore", e ai precisamos apenas adicionar e comitar para que o git ignore os arquivos.

< Quando utilizar o commit? >

Dentro desse assusnto, existem varias opiniões diferentes, mas o recomendado é, sempre que houver uma alteração relevante, um código que atribua algo importante ao código, devemos commitar. Caso o código esteja incompleto, ou com algum erro, não comite. Devemos gerar um commit sempre que a nossa base de código está em um estado do qual gostaríamos de nos lembrar. Nunca devemos ter commits de códigos que não funcionam, mas também não é interessante deixar para commitar apenas no final de uma feature.

< Criando um servidor para repositório git >

Vamos criar um servidor para o nosso código, afim de que outras pessoas também possam utilizar e atualizar o mesmo sempre que necessário. Para isso, vamos criar uma pasta fora do nosso repositório local.

    Comandos git bash:
        
        mkdir: Cria uma pasta no local.
        cd ..: Volta para a pasta anterior
        cd: muda para o diretório desejado.

Após a criação dessa nova pasta(servidor), vamos dar o seguinte comando:
    
    git init --bare: esse paramentro "bare" significa que, esse repositório é puro, e contem as alterações dos arquivos, não contendo uma cópia de cada um deles física, dificultando o acesso dos mesmos. Isso traz algumas facilidades, e nos permite que adicionemos esse repositório como remoto em outro.
    
Bem, agora com o nosso repositório servidor criado, vamos voltar ao nosso repositório local. Já temos o nosso repositório local e o repositório servidor, precisamos fazer com que, o nosso repositório local conheça o nosso servidor. Para isso faremos o seguinte:
    
    git remote: quando utilizamos esse comando, o git irá listar todos os repositórios remotos que temos disponíveis, que o nosso repositório local conhece, no caso, ele não listará nada, pelo fato do nosso repositório local não conhecer nenhum ainda.

    git remote add: com esse comando, iremos adicionar um novo caminho para o nosso repositório local ter acesso ao repositório servidor. Podemos dar um nome para esse repositório e em seguida, iremos informar o caminho para ele. Daremos o nome de local, pois o nosso servidor se encontra dentro da nossa máquina, mas ele pode estar em outro lugar, como em um servidor remoto, em um link remoto, fora desse computador. 
        
        git remote add local C:/Users/miche/Desktop/Preto/git-e-github/Servidor/

    Vale lembrar que esse caminho pode ser qualquer coisa, desde um caminho em nossa maquina, a uma url para um servidor.

    git remote -v: serve para mostrar se o endereço do servidor está correto, além de mostrar onde ele irá buscar dados(fetch), e onde irá enviar dados(push)
    
Ok, já temos o nosso servidor remoto, agora imagine que temos a Claudia, que irá trabalhar conosco no mesmo projeto. Como ela faria para acessar aos dados e baixa-los na sua máquina? Vamos ver:
    
    git clone: Quando iremos trazer pela primeira vez, todos os dados de um repositório remoto para um repositório local. Exemplo
      
        git clone /c/Users/miche/Desktop/Preto/git-e-github/Servidor/ projeto
    
    Esse formato pode variar dependendo do terminal que você utiliza, no nosso caso, o git bash.

O que está acontecendo afinal? Estamos trazendo(clonando), pela primeira vez os dados da pasta servidor para a pasta Claudia, assim, criando dentro da pasta Claudia uma pasta servidor, que no caso, estamos renomeando para "projeto".

Mas nosso repositório está vazio, pois o nosso servidor não puxou as informações do nosso repositório local. Logo a Claudia não tem os dados para começar a trabalhar.

< Sincronizando dados >

No momento, temos o Ulisses, que agora poderá enviar os dados para o servidor, e temos a Claudia, e ambos se conectarão ao mesmo servidor. Estes também são os nomes das nossas pastas, uma para representar cada usuário, além do próprio servidor. Então, agora precisaremos fazer com que o Ulisses envie os seus dados para o servidor.

No Git Bash, digitaremos cd ../Ulisses/ e, depois, git remote para confirmarmos a existência de local — mas como será que incluímos o repositório nele? Empurraremos as modificações, portanto usaremos o comando git push, que não é o suficiente por si só, uma vez que não estamos sendo explícitos.
    
    git push (para onde enviar) (de onde enviar)

    git push local master

O comando será git push local master, e assim, serão enviados todos os dados por todos os códigos e alterações feitas até então para nosso repositório que chamamos de "local", dentro de "servidor". Após pressionarmos "Enter", teremos a mensagem de que uma nova branch (ramo) foi criada em "servidor", chamada master.

Vamos nos logar como Claudia, digitando cd ../Claudia/projeto/, e executar ls para verificar se o arquivo HTML está contido ali, o que não acontece, pois o usuário Ulisses enviou os dados para o servidor, mas a Claudia não os trouxe para o seu próprio repositório. Para isso, executaremos o comando git pull, mas se digitarmos git remote, teremos origin. O que é isso? De onde ele vem?

    git remote rename (nome atual) (novo nome)

    git remote rename origin local

Iremos renomeá-la de local também, por meio de git remote rename origin local. Assim, manteremos a paridade com a nomenclatura do Vinicius. Em seguida, executaremos git pull local master para trazermos os dados. Ainda falaremos melhor sobre branches, no entanto sabemos que estamos trabalhando com master por ora. Desta vez, com ls teremos index.html listado, como gostaríamos.

    git pull (de onde queremos trazer dados) (para onde traremos dados)

    git pull local master

Para garantir que o conteúdo está igual, no VS Code adicionaremos uma pasta da Ana no projeto, chamada "projeto". Com isto, passaremos a ter a pasta "vinicius" e "projeto", e o index.html é igual para ambos, isto é, os conteúdos estão sincronizados. Além disso, o "ide-config" que adicionamos em ".gitignore" não foi enviado, pois configuramos para que fosse assim, lembra?

Assim, conseguimos começar a sincronizar os dados do Ulisses e da Claudia; se ela atualizar algo em alguma parte do código, uma vez estando logados como Ana, utilizaremos git status, teremos o aviso de que a modificação foi realizada, executaremos git add index.html, seguido por git commit -m "Renomeando curso de Integração Contínua".

Será que se logarmos como Vinicius conseguiremos verificar esta alteração?

Ainda não, pois não enviamos os dados; faremos isto com git push local master. Nos logaremos como Vinicius e, antes de mais nada, se executarmos git status, teremos que não há nada a ser enviado, mas que teremos o que trazer de volta. Vamos executar git pull local master. É exibido que houve uma única alteração, a remoção de uma linha e adição de outra.

Ao executarmos git log -p, veremos as modificações realizadas, e se abrirmos o arquivo HTML no VS Code, teremos a alteração implementada no arquivo da pasta do Vinicius também. Agora, passamos a sincronizar os dados e modificações entre os integrantes da nossa equipe.

E se não quisermos criar um servidor, ou se não pudermos criar um servidor local, muito menos compartilhar uma pasta no computador? E se quisermos colocar o conteúdo em algum servidor online? Será que existe um serviço que nos permita um repositório Git online?

*/
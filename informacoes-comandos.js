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

< Git Hub >

Anteriormente, fizemos a sincronização do conteúdo dos arquivos da Ana e do Vinicius, no entanto, surgiu um questionamento: precisaremos realmente ter um servidor na nossa rede, ou uma pasta compartilhada com nossos arquivos? Será que existem alternativas para criarmos servidores remoto gratuitamente, compartilhável pela internet?

Se você já sabe onde quero chegar, você provavelmente já ligou um ponto a outro; existem vários serviços do tipo, mas aqui, trataremos do GitHub que, dentre outras características, é um serviço que fornece a possibilidade de se criar repositórios Git. Acessaremos o site oficial que, diga-se de passagem, é da Microsoft.

Nele, poderemos criar uma conta, e a partir daí passar a criar repositórios Git de forma muito simples. Feito o login, independentemente do quão familiar você esteja com o site, é possível clicar no símbolo de + localizado no canto superior direito para criar um novo repositório, por meio da opção "New repository".

Na nova página, poderemos definir o criador do repositório (Owner) e o seu nome (Repository name), que pode ser qualquer um. Neste caso, será "alura-git". Daremos uma descrição (Description), "Lista de cursos para controlar no GIT". O repositório pode ser configurado como público ou privado, dependendo da conta que tivermos. Normalmente, os repositórios privados só ficam disponíveis para usuários pagantes. Caso você seja usuário de plano grátis, será possível apenas criar repositórios públicos.

Após clicarmos no botão "Create repository" no fim da página, seremos redirecionados a outra, com dicas sobre como poderemos criar um novo repositório por linhas de comando, entre outras. No nosso caso, já temos um repositório local, arquivos commitados, e tudo o mais, então optaremos pelo envio deste repositório, com git remote add origin git@github.com:CViniviusSDias/alura-git.git, uma sintaxe talvez não muito familiar, para o qual precisaríamos definir chave de acesso, algo mais seguro, porém complicado.

Na parte superior desta página, onde se lê "Quick setup — if you've done this kind of thing before", selecionaremos "HTTPS" em vez de "SSH", de forma que, toda vez que precisarmos enviar os dados ou adicionar um repositório durante envio ou quando formos trazê-lo de volta, precisaremos digitar uma senha.

No Git Bash, logaremos como Vinicius e colaremos o comando, feito isso, no site do GitHub é indicado que devemos enviar os dados do repositório com git push -u origin master, cujo -u define que, sempre que usarmos git push e estivermos na master, o envio seja feito para origin. Ou seja, a partir de então poderemos executar simplesmente git push.

Atenção: eu particularmente prefiro não seguir esta abordagem, e sempre digitar qual o repositório e qual branch quero enviar, para manter um controle maior do meu lado. Sendo assim, no meu caso executo git push origin master.

Ao executarmos o comando, será aberta uma janela de login para o GitHub, após o qual os dados serão enviados adequadamente. Caso você não esteja utilizando o Windows, a senha será solicitada diretamente via Terminal. Então, quando atualizarmos nossa página no GitHub, teremos os nossos códigos disponíveis, incluindo uma lista de commits, com as alterações feitas em cada um deles, e suas autorias.

Lidamos, assim, com uma interface bem interessante para o gerenciamento do nosso projeto. O GitHub é uma plataforma muito poderosa, e faz muito mais do que simplesmente disponibilizar repositórios remotos: conseguimos configurar colaboradores no projeto, para que outros usuários de GitHub possam fazer commits diretamente, entre outras vantagens. Neste curso não entraremos em detalhes, continuaremos utilizando nosso repositório local, mas já entendemos como enviar um dado para o GitHub.

Continuando, existem formas mais rebuscadas, um pouco mais profissionais de organizar nosso sistema de controle de versão, e começaremos a falar sobre branches, por exemplo, a seguir!

< Branches >

Sobre este trabalho compartilhado, temos dois usuários, Vinicius e Ana, desenvolvendo o mesmo projeto, e normalmente duas pessoas diferentes trabalham em partes diferentes de um projeto. Sabemos, no entanto, que este tal de master está sendo compartilhado entre eles, então, para evitarmos complicações e, enquanto o Vinicius estiver trabalhando no cabeçalho da página, por exemplo, e a Ana na lista de cursos, seria interessante termos uma maneira de separar os ramos de desenvolvimento para sabermos exatamente no que cada um está mexendo, e para que não haja interferências no código compartilhado.

Talvez isto não tenha ficado tão claro, mas consideremos o seguinte: o Vinicius passará a trabalhar em tudo que estiver contido entre as tags <head> do arquivo index.html. Então, informaremos ao nosso controle de versões que, a partir de um determinado commit, um dos usuários alterará apenas um trecho específico, enquanto o outro usuário informará do seu trecho em desenvolvimento, também.

Estas ramificações do trabalho são uma das formas de com que podemos trabalhar, em relação aos branches do Git. Por padrão, se executarmos git branch no Git Bash, teremos um único branch, master, e é exatamente isto que o Git Bash nos mostra ao fim da linha. No entanto, poderemos criar outros. No caso de trabalharmos somente no título, por exemplo, utilizaremos o comando git branch titulo, que criará este branch, embora tenhamos que mudar para ela manualmente, com git checkout titulo.

A partir daí, estaremos trabalhando na linha de desenvolvimento titulo. Para isso ficar um pouco mais claro, utilizaremos uma ferramenta chamada Visualizing Git. Do lado esquerdo da página digitaremos os comandos, e o resultado destes serão exibidos do lado direito. Em se tratando do trabalho conjunto de Ana e Vinicius, teremos duas linhas de desenvolvimento distintas e independentes entre si.

Abriremos o VS Code e alteraremos o título, de <title>Cursos da Alura</title> para <title>Cursos de DevOps da Alura</title>. No Git Bash, estamos logados como Vinicius, e em titulo. Executaremos git status, verificaremos que há uma alteração, que adicionaremos com git add index.html, seguido de git commit -m "Alterando título da página".

Desta vez, se utilizarmos git log, dentre as informações que o comando nos traz, estão todos os commits realizados, incluindo o último, que é indicado como sendo o último commit realizado na master. O commit do título alterado só aparece na branch titulo, e se fizermos outra alteração no mesmo título, e refizermos todo o processo de adição, commit e verificação do log, teremos que até a mensagem "Renomeando curso de Integração Contínua" é feito na master.

Assim, somente a branch titulo possui as alterações feitas a partir de "Alterando título da página". Se precisarmos alterar algo no commit de "Renomeando curso de Integração Contínua", que não é influenciado pelo título, basta utilizarmos git checkout master para retornarmos à branch correspondente.

Feito isso, ao executarmos git log, não teremos acesso àqueles commits em titulo. Isso é bem interessante! Usaremos git checkout titulo para voltarmos, e passaremos a lidar com a Ana, que trabalhará com as listas de cursos. Criaremos, portanto, um branch com git branch lista, e depois faremos o checkout para a lista.

Entretanto, existe um atalho que cria um branch e já passar para ele: git checkout -b lista, que usaremos. Com isso, a Ana está na branch lista, então poderemos abrir o projeto da Ana no VS Code e adicionar um curso em uma nova lista, como <li>Kubernetes</li>, junto aos demais. No Git Bash, digitaremos git status, verificaremos que há uma modificação, adicionaremos todas elas com git add ., e commitaremos com git commit -m "Adicionando curso de kubernetes".

Assim, a Ana e o Vinicius estão trabalhando ao mesmo tempo em branches independentes de um mesmo projeto. Mas sabemos que em nosso repositório chamado local, por enquanto, temos apenas a branch master. Isso nos leva a assumir que esta branch é a nossa linha de desenvolvimento padrão, ou seja, nosso ramo principal, onde os códigos devem estar quando estiverem prontos, certo?

Então, como será que fazemos para trazer os dados das branches titulo e lista para a master?

< Unindo o trabalho >

Estamos entendendo como trabalhar com linhas de desenvolvimento diferentes, mas como é que conseguiremos trazer o trabalho que fizemos em uma delas para outra? Porque, recapitulando, eu, como Vinicius, tenho duas branches, titulo e master, e trabalhamos na primeira. Porém, no repositório que se encontra na pasta "servidor", só temos a branch master, então sabemos que esta linha é a principal, onde queremos depositar o código que funciona.

Iremos trabalhar na titulo, mas em algum momento precisaremos trazê-la para a master. Na ferramenta Visualizing Git criaremos a branch titulo e passaremos a trabalhar nela, com git checkout -b titulo. Faremos um commit com git commit -m "Editando título", e outro, com git commit -m "Adicionando lista no título".

Temos um problema: reparem que nosso curso de Docker na listagem de index.html está com este nome, mas deveria estar como "Docker: Criando containers sem dor de cabeça", e precisaremos corrigir isto. Isso, porém, não tem nada a ver com nossas alterações de títulos, que não está finalizada. Então precisaremos retornar à master e, a partir daí, corrigir o bug.

Utilizaremos git checkout master, e depois git commit -m "Corrigindo bug". Agora, sim, poderemos voltar à branch titulo e finalizá-lo. Analisando com calma, porém, entendemos que esta branch já está finalizada. Então, de que forma trazemos este trabalho, os dados desta linha em específico, para a que contém head e master?

Ou seja, queremos unificar estas duas linhas, portanto usaremos o comando git merge titulo, e isto fará com que o Git automaticamente crie um commit com o branch atual e todo o conteúdo de nossa branch titulo. Na prática, estando logados como Vinicius, o que acontece é que, ao surgimento de um bug, as alterações de titulo não podem influenciar nesta correção de bug.

Sendo assim, retornaremos à master, branch que não contém as alterações referentes a titulo. Após a alteração no projeto, faremos a adição e o commit normalmente, no Git Bash, e por fim executaremos git merge titulo, como visto anteriormente. Quando dermos um "Enter", será criado um commit de merge, ou seja, de junção de duas branches. Poderemos editar a mensagem exibida, mas caso não queiramos, para salvarmos e confirmarmos a mensagem, pressionaremos ":x + Enter" no editor Vim.

Feita a junção, passamos a ter, na branch master, os dados do título alterado. Porém, se executarmos git log, não teremos os dois commits separadamente, e sim um referente ao merge. O Git cria isto para nós. Então, como será que poderemos fazer com que, em vez do Git criar este commit, ele pegue os dois commits e os adicione em nossa branch master?

Como faremos com que ele mova estas branches e atualize a master apenas com os dois commits, sem criar um de merge? Veremos isto a seguir!

< Atualizando a branch >

Anteriormente, vimos como unir o trabalho de duas branches desenvolvidas separadamente. No entanto, não queremos gerar um commit a mais, de merge, dependendo da estratégia utilizada para gerar os commits, isto pode acabar atrapalhando ou "poluindo" o log. Assim, o que queremos é atualizar a branch master com os commits da branch titulo, de modo a termos cada commit específico na linha de desenvolvimento master.

Na ferramenta Visualizing Git executaremos clear para limparmos a tela, e repetiremos o processo com git checkout -b titulo para gerarmos dois commits (git commit duas vezes). Na branch master, corrigimos um bug, portanto geraremos outro commit. E então, da branch titulo, queremos trazer os demais commits para antes de master atualizando as duas branches.

Para isto, estando na master, queremos basear esta branch em titulo, assim, executaremos git rebase titulo, e o Git pegará os commits na branch titulo, atualizando master, que possui todos os commits contidos em titulo, além do commit que havia nela mesma. Deste modo, geramos uma única linha, sem confusões.

No Git Bash, executaremos git log novamente, e teremos a informação de commit de merge; de que forma conseguiremos visualizar isso de forma mais interessante? Se digitarmos git log --graph, serão exibidas linhas específicas representando o desenvolvimento, uma boa alternativa ao Visualizing Git.

Vamos fazer uma alteração na branch titulo, com git checkout titulo, e no VS Code alteraremos a primeira letra de "Cursos" para que fique em maiúscula. Adicionaremos o arquivo e o commitaremos, e depois iremos à branch master para trazermos os commits de titulo para ela, por meio de git rebase titulo.

Ao executarmos git log mais uma vez, teremos o commit "Corrigindo nome do curso de Docker" acima de "Cursos com letra maiúscula", porque ele foi adicionado logo antes. Isto é, o commit que fizemos na branch titulo foi adicionado logo antes do commit feito em master, exatamente como vimos no Visualizing Git.

Ou seja, o rebase atualiza a branch, mantendo o trabalho dela como sendo o último, para que não se gere este tipo de confusão. Com isso, temos as correções realizadas tanto no título quanto na lista, e poderemos fazer o git push local master, logados como Vinicius. Tudo está atualizado! Podemos, então, nos logar como Ana, usar git checkout master e git pull local master para atualizar os dados também.

Mas lembram que a Ana estava trabalhando em lista? Voltaremos para lá com git checkout lista para atualizarmos os dados, no caso, o título do curso de Docker. Commitaremos, faremos git log -p para garantir que a atualização foi feita, faremos um checkout para master. Teremos que houve uma alteração feita pelo Vinicius, e outra feita pela Ana, na mesma linha. O que será que acontecerá se tentarmos juntar o trabalho deles?

< Resolvendo conflitos >

Vimos um caso interessante acontecer: o Vinicius corrigiu um bug, isto é alterou um determinado trecho de código, porém a mesma tarefa foi executada também pela Ana. O que será que irá acontecer se juntarmos estes trabalhos? Dentre merge e rebase optaremos pelo primeiro, embora o resultado deles seja o mesmo.

Logados como Ana, utilizaremos git merge lista, e o Git nos informa que existe um conflito, e que houve falha no merge automático. É recomendado que corrijamos os conflitos primeiro, e depois commitemos o resultado. Ao voltarmos ao arquivo no VS Code, há indicações coloridas referenciando o conflito do Git, mas para o caso do uso de um editor de texto que não as tenha, focaremos somente no texto, ignorando as cores.

Entre as linhas <<<<<<< HEAD (Current Change) e =======, estão os dados do commit atual, na master. E entre as linhas ======= e >>>>>>> lista (Incoming Change), são os dados que estamos tentando trazer da branch lista. Ou seja, é exibida exatamente a diferença entre ambos. E tudo que precisamos fazer para corrigir este conflito é remover as informações indesejadas, sem que haja duplicação.

Editaremos e salvaremos o arquivo, retornaremos ao Git Bash e executaremos git status, e teremos a informação de que houve uma modificação em dois lugares, na branch atual e aquela que estamos tentando unificar. Feita a correção, simplesmente utilizaremos git add index.html, e então git commit para que o commit de merge seja realizado. Desta vez, se executarmos git log --graph, teremos a indicação do merge de lista. Em seguida, poderemos usar git push local master.

Vamos imaginar que o Vinicius corrija o título do curso de Vagrant para "Vagrant: Gerenciando máquinas virtuais", e nos logar como Vinicius, solicitar status, adicionar e commitar a alteração. Enviaremos as informações, e o que acontece é que enquanto o Vinicius estava trabalhando, a Ana enviou outra informação, o commit de merge.

É necessário, então, antes de enviarmos quaisquer dados e alterações, garantir que estamos trabalhando com a versão mais recente do código. Isso significa que, antes do envio, precisaremos trazer este código de volta (git pull local master). Agora, sim, será feito o merge da master que está no "servidor" com esta.

Assim, poderemos confirmar que tudo está como gostaríamos no VS Code, e depois enviar a alteração, com git push local master. Sempre que formos iniciar um desenvolvimento novo, sabemos que precisaremos verificar se há alguma alteração lá antes de enviarmos os dados. Antes da Ana continuar e fazer alguma alteração nova, ela sabe que é necessário verificar se não há nenhuma alteração ali, com git pull local master.

As informações são trazidas conforme esperado pelo Git Bash. Deste modo evitamos maiores conflitos, mas se acontecer, já vimos que conseguimos resolvê-los tranquilamente. Entendemos como trabalhar com repositórios remotos, em equipe, com branches independentes, e como uni-las, seja por meio do merge ou do rebase.

Existem estratégias bem específicas de quando e como criar uma branch, e podem surgir dúvidas quanto à criação de uma branch para cada funcionalidade ou feature nova. Sem entrar em detalhes — por não ser o foco deste curso — sabemos que branches são linhas de desenvolvimento, e aprendemos a lidar com elas.

Considerando estes aprendizados, como será que poderemos navegar no histórico do nosso projeto? E desfazer uma alteração?

< Crtl + Z no Git >

Conseguimos nos conectar com repositórios remotos, adicionar mais de um deles, conseguimos compartilhar o código com colegas de equipe, organizar nosso versionamento em branches, linhas de desenvolvimento distintos, e antes de continuarmos com este aprendizado — no repositório da Ana não fizemos aquela configuração para definir que o nome de quem faz o commit é o dela, para mantermos o histórico correto.

Vamos criar a configuração com git config --local user.name "Ana", a partir do qual todos os commits que forem feitos neste repositório irão pertencer a ela. Continuando, é muito comum começarmos a desenvolver e fazer testes e termos que desfazer estas alterações. De que forma será que conseguimos desfazê-las com o Git? Será que ele possui alguma espécie de atalho "Ctrl + Z"?

No VS Code, passaremos a trabalhar com o projeto do Vinicius. Na lista de cursos, trocaremos "Ansible" por "Ansible: Infraestrutura como código". Salvaremos o arquivo index.html, visualizaremos a página e acharemos que não ficou tão interessante. Reparem que não fizemos o commit, a adição, nem nada disso, apenas editamos o código.

Por se tratar de um único arquivo, a alteração em uma linha poderia ser desfeita com "Ctrl + Z", mas imaginemos um projeto grande, em que fazemos várias alterações, e só então entendemos que não está como queremos. Teríamos que ir desfazendo-as arquivo por arquivo, ou que só percebemos que não gostamos da alteração após ter passado um dia inteiro, impossibilitando o uso do atalho?

No Git Bash, logados como Vinicius, usaremos git status, o que nos traz algumas informações. É identificado que houve modificações no arquivo, que ainda não foram commitadas. Para isso, precisaríamos chamar o git add, no entanto, é indicado que, se quiséssemos descartar as alterações, poderemos chamar git checkout -- seguido do que queremos desfazer.

O git checkout, portanto, serve para navegarmos em estados do repositório, seja por meio de branches ou desfazendo modificações no arquivo. Sendo assim, neste caso é possível executarmos git checkout -- index.html. Se executarmos git status novamente, não teremos nada a ser commitado, e se abrirmos o arquivo no VS Code, verificaremos que o teste foi realmente desfeito.

Porém, e se depois da alteração no título do curso no VS Code fossemos diretamente ao Git Bash e usássemos git add index.html, mas antes do commit, testássemos e víssemos que não ficou como gostaríamos? Queremos desfazer uma alteração que já foi marcada para ser commitada, então usaremos git status para verificar se o próprio Git nos traz alguma ajuda.

É exibido que há mudanças a serem commitadas, e que poderemos utilizar git reset HEAD seguido do nome do arquivo a ser desmarcado como algo que precisa passar pelo commit. Vamos fazer isso! Para este reset, é preciso enviar um estado, e como ele voltará para o HEAD, para o local de trabalho, isto é, o estado em que ainda estaremos trabalhando.

Feito isto, com git status confirmaremos que as alterações continuam ali, porém não estão mais marcadas para serem commitadas. Sendo assim, basta utilizarmos git checkout -- index.html, o que fará com que não tenhamos mais nada a ser commitado, uma vez que a alteração foi desfeita com sucesso.

Agora, imaginemos o pior dos casos: após fazermos a alteração no título do curso, a adição e o commit do arquivo, acabamos verificando que introduzimos um bug, e que este código não podia ter sido commitado. Como será que desfazemos um commit já realizado? Usando git log, teremos o hash do commit, certo?

Iremos copiá-lo, colar na linha de comando, juntamente com git revert. Isso fará com que o commit informado seja desfeito, criando outro. Ao ser rodado, portanto, ele irá gerar um commit cuja mensagem pode ser alterada, usaremos ":x" para salvarmos e sairmos da tela. Ao fazermos git log mais uma vez, teremos dois commits, um com a alteração do nome do curso, e outro com a reversão deste.

No VS Code, teremos a versão inicial, conforme gostaríamos. Desta forma, conseguimos desfazer nossos trabalhos e eventuais descuidos, e permite testes.

Prosseguindo, imaginemos um código que ainda não está pronto para ser commitado por estar em um estágio não funcional, mas que não queremos desfazê-lo. Há uma nova demanda, uma tarefa a ser feita; será que conseguimos salvar o arquivo temporariamente, com o Git? Veremos isto a seguir!

< Guardando pra depois >

E se quisermos guardar uma parte de uma alteração para depois, como faremos? Alguma modificação no código, para voltarmos a trabalhar nela depois, sem que precisemos commitá-la ou desfazê-la?

Alteraremos novamente o título do curso de Ansible para "Ansible: Infraestrutura como código", no entanto, ainda precisaremos confirmar se este é o nome exato do curso, com mais calma, depois, pois fomos interrompidos por uma nova tarefa mais urgente. No Git, existe um conceito denominado Stash, e por meio de git stash conseguimos salvar todas as alterações, no caso, somente o arquivo index.html, para um local temporário, sem necessidade de um commit ou de se gerar um commit para isto.

Se, após git stash executarmos git stash list, teremos uma lista de tudo que estiver salvo nestas condições. Vamos, então, alterar o nome do curso de Kubernetes, para "Kubernetes: Introdução a orquestração de containers". Executaremos, então, git status, seguido de git add index.html, git commit -m "Alterando o nome do curso de Kubernetes".

Feito isto, queremos voltar a trabalhar com as alterações no curso de Ansible. No VS Code, teremos que as alterações em relação ao título do Kubernetes já foram realizados, porém os de Ansible, não. Queremos trazer os dados armazenados pelo git stash ao diretório de trabalho. Há duas opções: executarmos git stash list, e em seguida passarmos o número da stash em git stash apply 0, aplicaremos estas modificações, porém elas continuarão na stash. Para a remoção, poderemos usar git stash drop.

No caso de querermos fazer ambas as ações ao mesmo tempo, ou seja, pegar a última alteração adicionada à stash, e já removê-la de lá, utilizaremos git stash pop que, ao ser executado, realiza o merge com as modificações que já temos e aplica aquelas que já estavam salvas lá. Desta vez, ao consultarmos o VS Code, teremos o código atualizado adequadamente, com o trecho alterado e salvo temporariamente sem necessidade de commit.

Vamos alterar mais uma vez o título do curso de Ansible, para "Ansible: Sua infraestrutura como código", e no Git Bash faremos a adição e commit. Feito isso, realizaremos o envio, pois é sempre importante manter o nosso repositório remoto atualizado. Executaremos o comando git log --oneline, e perceberemos que temos vários commits, dentre os quais um de merge, Merge branch 'lista'.

Veremos a seguir como fazemos com que o nosso código volte para o estado em que estava no momento em que aplicamos este commit!

< Viajando no tempo >

Queremos observar o projeto como um todo no momento em que aplicamos um determinado merge, ou então um pouco antes, em outro commit. Executamos o git revert anteriormente com aquele commit e o hash, mas poderemos executar as manipulações em um commit com os seus primeiros caracteres. O comando git log --oneline, por exemplo, nos traz os hashs com apenas os sete primeiros caracteres, o suficiente para identificá-los de forma única.

No caso, queremos navegar ao commit de hash ea539b3. Já conversamos que o comando git checkout muda o estado da aplicação, seja desfazendo alterações, navegando entre branches ou commits. Assim, é possível utilizarmos git checkout ea539b3, e com isso a mensagem que se exibe indica que estamos em um estado de cabeça (HEAD) desanexado (detached) do controle de versões.

Isto é, não estamos mais em nenhum branch, e sim em um commit específico. Não estamos em uma linha bem definida de commit, uma linha de trabalho bem definida do Git. Então, poderemos fazer algumas modificações experimentais, mas também descartar qualquer elemento deste branch sem fazer mais nada. Isto quer dizer que se voltarmos à master, tudo que commitarmos aqui será ignorado.

Se quisermos manter os commits feitos a partir deste ponto, será necessário criar uma nova branch. Reabriremos a ferramenta Visualizing Git para executarmos três git commit seguidos. Para verificarmos como estava o projeto durante o segundo commit, usaremos git checkout 54727de. Isto fará com que HEAD se locomova até ali, no lado direito da tela, e o estado do código esteja sendo exibido no segundo commit.

Se realizarmos qualquer alteração, incluindo outro git commit, o HEAD se locomoverá para um lugar sem nome, uma branch inexistente. E se fizermos git checkout master nunca mais conseguiremos acessar o commit em que estávamos anteriormente, que fica desanexado das linhas de desenvolvimento.

Repetiremos o comando git checkout 54727de e, se quisermos fazer alterações que sejam salvas a partir daqui, será necessário criar uma branch antes, a ser modificado a partir deste commit. Usaremos git checkout -b novo-branch, de forma a não estarmos mais desassociados da linha de desenvolvimento, o que se confirma se realizarmos um novo commit.

Poderemos fazer o git checkout master, mas se em algum momento quisermos voltar a trabalhar em novo-branch, basta usarmos o git checkout. Assim, conseguimos navegar entre os estados da nossa aplicação, de fato, "viajar no tempo" no projeto. Temos bastante conhecimento e poderemos fazer praticamente tudo o que é necessário para um trabalho do dia a dia, com o sistema de gerenciamento de versões.

Mas como informamos que temos uma versão pronta do sistema, um "entregável"? Será que o Git nos ajuda a gerar este tipo de projeto pronto para ser lançado?

< Vendo Alterações >

Temos um projeto finalizado, com todas as alterações necessárias no conteúdo entre tags <titulo>, todos os nomes da listagem de cursos estão corretos, já vimos como trabalhar em equipe, com repositórios remotos, branches independentes, corrigindo conflitos, alocando dados, atualizando branches, enfim, vimos bastante conteúdo.

Entretanto, no momento de finalizarmos, queremos verificar o que houve em cada commit, para garantir que nenhum bug foi adicionado no projeto, e entender o que de fato cada commit gerou no código. Como conferiremos as diferenças entre commits?

Logados como Vinicius, já entendemos que, se utilizarmos git log -p, conseguiremos ver o que foi alterado em código commit a commit. Existe um comando do Git, bem interessante e poderoso, que é o git diff, capaz de exibir estas diferenças. Ao tentarmos executá-lo, porém, nada é exibido.

Isso porque por enquanto não há nada alterado no nosso código, que não tenha sido salvo. Então, para entendermos as diferenças entre dois commits, precisaremos informar quais são, no caso, ea539b3 até (..) 6ca12ac. Por meio deste comando, visualizamos todas as alterações feitas, marcadas em cores diferentes.

Além disso, caso estejamos modificando algo, como acresentando um novo curso na listagem, no código, e queiramos verificar o que foi alterado, poderemos simplesmente usar o git diff, que nos mostra o que foi alterado e que ainda não foi adicionado para commit. Mas a partir do momento em que adicionamos o arquivo, este comando não nos mostra mais o que existe de diferente.

Traremos o arquivo de volta após git status com git reset HEAD index.html, e com git status conferiremos que ele está pronto para ser adicionado ao commit. Vamos desfazer as alterações com git checkout -- index.html. Desta forma, conseguimos começar a analisar com maior controle todas as alterações que foram adicionadas durante o desenvolvimento de um projeto.

Após termos visto as alterações e garantido que realmente não há bugs, de que forma poderemos gerar uma versão, por exemplo, 0.1? Como será possível definirmos isto com o Git? Vamos conversar sobre isso adiante.

*/
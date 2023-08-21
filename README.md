# DesafioSerasa
    Este projeto foi criado para resolver 3 exercíos propostos pelo time de autenticação 
# 1 - Doc-tipografia e cores

    Na pasta assets, foram criados 2 arquivos scss, um destinado a cor(colors.scss) e outra a tipografia(typography.scss).

    O arquivo das cores deve ser usado em qualquer scss que você queria utilizar cores. O processo é muito simples, basta importar no scss do seu componente novo, entrar no colors.scss e verificar qual atribuição foi dada a cor que deseja usar e por fim só escrever essa atribuição como valor da cor no seu scss, caso você queria uma diferente, basta criar no mesmo padrão.

    O arquivo da Tipografia foi importado na style.css, então por padrão o projeto inteiro tem a fonte Roboto.
    Sobre os diferentes tamanhos de fonte foi organizado da seguinte forma:
        Foram criadas classes de estilização chamadas:
            Diplay, HeadingL, HeadingM, HeadingS, HeadingXS, Subheading, BodyM.
    
    No arquivo foi definido uma variável para escolher uma cor padrão importada da classe color, se quiser mudar esta cor padrão de texto, só será necessário mudar o $colorFont.

# 3 - Arquitetura

    Acredito que a forma ideal da arquitetura seria para o projeto frontend, utilizar o Angular para construção do app web. Utilizando o padrão de micro frontend, fazendo assim alterações serem menos impactantes no sistema como um todo. 

    Bootstrap é uma boa opção para agilizarmos alguns componentes genéricos.

    Como usaremos o Angular. O time deverá estudar mais sobre typescript, pois embora tenha semelhanças com o Js, ela tem suas característica próprias.

    Utilizaria o Docker para mantermos nossos ambientes da aplicação mais estáveis.

    Git é essencial para um time com mais de 20 devs frontend.

    Jasmine e Karma para testes do desenvolvedor. E os QAs fariam testes automatizados com o Cypress.

    Ao final do desenvolvimento de uma task, o Dev deve fazer uma documentação de como utilizar o componente, para que caso no futuro alguém tenha que modificar o código, tenha menos tempo perdido tentando ler o código.
    
    Clean Code, Nada de console logs jogados ou comentários desnecessários. Deixe tudo limpo e simples de ler.

    Faça codigos "burros", todos devem entender o que você escreveu sem dificuldade, sem metódos gigantes ou algo do tipo, mantenha simples 


# DesafioSerasa
    Este projeto foi criado para resolver 3 exercíos propostos pelo time de autenticação 
# 1 - Doc-tipografia e cores

    Na pasta assets, foram criados 2 arquivos scss, um destinado a cor(colors.scss) e outra a tipografia(typography.scss).

    O arquivo das cores deve ser usado em qualquer scss que você queria utilizar cores. O processo é muito simples, basta importar no scss do seu componente novo, entrar no colors.scss e verificar qual atribuição foi dada a cor que deseja usar e por fim só escrever essa atribuição como valor da cor no seu scss, caso você queria uma diferente, basta criar no mesmo padrão.

    O arquivo da Tipografia foi importado na style.css, então por padrão o projeto inteiro tem a fonte Roboto.
    Sobre os diferentes tamanhos de fonte foi organizado da seguinte forma:
        Foram criadas classes de estilização chamadas:
            Diplay, HeadingL, HeadingM, HeadingS, HeadingXS, Subheading, BodyM.
        Cada uma tem seu font-size, font-weight e letter-spacing específicos. Para facilitar o desenvolvimento algumas tags já recebem o valor dessas classes e portanto não precisam ser especificadas em classes no HTML: 
            h1->Diplay
            h2->HeadingL
            h3->HeadingM
            h4->HeadingS
            h5->HeadingXS
            h6->Subheading
            label->BodyM
    No arquivo foi definido uma variável para escolher uma cor padrão importada da classe color, se quiser mudar esta cor padrão de texto, só será necessário mudar o $colorFont.


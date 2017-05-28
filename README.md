# Projeto-integrador
Site sobre empresa de jogo nintendo, trabalho da faculdade semestral ciência da computação 
Documentação Projeto Integrador – site “one page”
para o uso de manutenção e desenvolvimento
O arquivo index.html contém estrutura esquelética, ele instancia links para
hiperlinks(links de referências e documentações) e arquivos externos
(style.css,onepagFAM.js) ;
O arquivo style.css contém arquivos de estilos chamados pelo arquivo
index.html ;
O arquivo onepagFAM.js contém arquivos de scripts chamados pelo arquivo
index.html;
O arquivo Mapa_projeto_site.html contém informações de cada chamada
interna e externa do arquivo index.html;
O arquivo FLUXOGRAMA.html contém todas as etapas principais no
desenvolvimento do projeto;
1. Arquivos.
VISIO(Microsoft VISIO)
• O arquivo FLUXOGRAMA.visio, contém blocos necessários para adicionar novas cargas de trabalho;
• O arquivo Mapa_projeto_site.visio, contém informações detalhadas sobre redirecionamento de links internos
e externos [1 nível], posicionamento[Radial], roteamento[Ângulo Reto], atributos
[HREF,SRC,BACKGROUND,ACTION,CODE,CLASS,ID,DIV], Consolidado com arquivos não expansíveis.
2. Arquivos. Docx , pdf e jpg Os arquivos FLUXOGRAMA.pdf, FLUXOGRAMA.jpg, Mapa_projeto_site.pdf e Mapa_projeto_site.jpg, possuem o
mesmo conteúdo dos arquivos FLUXOGRAMA.visio, Mapa_projeto_site.visio , utilize caso não possua Microsoft Visio
ou semelhante instalado em seu ambiente de desenvolvimento.
1 Arquitetura de
Software 
3. Biblioteca de Imagens Na pasta raiz, contém o diretório principal [Imagens] onde contém diretórios para cada elemento gráfico, os diretórios
internos são classificados por [Background] arquivos: bck_blue.jpg e mario_super.jpg, [Gráficos] arquivos: gráfico.jpg
e gráficosa.jpg, [Icones] arquivos: favicon.ico, ico_controle.png, ico_estrela.png, ico_flor.png, ico_inte.png,
ico_luigi.png, ico_mario.png, ico_vida.png, ico_wario.png, ico_wigi.png, PaperMario.ico e
Super_Nintendo_Entertainment.png, [Logos] arquivos: Nintendo_logo_red.png, nintendo_swift.png e
nintendo_swift1.png e [Produtos] arquivos: DSLite.png, n_64.jpg, n_gmc.jpg, n_snes.jpg, Nintendo_Enter_ System.jpg,
Nintendo_tvgame.jpg e wii_u.jpg.
Para Manutenção ou Desenvolvimento utilize qualquer editor de texto, porém
sua visualização não será organizada e a chance de editar algo errado é
incalculável, mitigue essa situação fazendo o uso de IDES, como por exemplo:
Visual Code, Notpad++ , Sublime e Atom
1. Navegadores Suportados [WEBKIT] Safari, Google Chrome e [GECKO] Firefox, Mozilla, Camino.
2. Navegadores não
suportados [Trident] Internet Explorer 4 ao 9 e Microsoft Edge e [PRESTO] Opera 7 ao 10.
2 Requisitos 
O site possui eventos controlados por index.html interno e externo
onepagFAM.js
1. Menu - efeitos O menu possui a propriedade de fixo e possui uma função chamada pelo evento scroll, quando esse evento é
acionado o menu diminui e aumenta a propriedade transparência do mesmo;
Se você estiver usando o Project Professional, clique em Criar Equipe a partir de Empresa no menu Ferramentas para
adicionar recursos do pool de recursos da empresa.
2. Menu -
redirecionamento
No menu é possível saltar para a região desejada configurado no arquivo index.html na parte comentada por “MENU
SUPERIOR FIXO COM REDIRECIONAMENTO”
3. Slide Na região produtos, identificada pelo comentário “BLOCO DE PRODUTOS ANIMADO POR JS EXTERNO”, possui a
funcionalidade dos cliques retroceder (<) e avançar (>) e transição automática dos slides caso não ocorra um evento.

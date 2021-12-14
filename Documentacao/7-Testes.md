# Avaliação da Aplicação

<span style="color:red">Pré-requisitos: <a href="6-Implementação.md"> Projeto da Solução</a></span>


> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

> Realizamos dois tipos de testes em nossa aplicação, uma Avaliação Heurística e também um plano
> de teste de software, utilizando como base os requisitos funcionais apresentados anteriormente. 
> Iremos detalhar inicialmente o plano de teste dos requisitos funcionais:
  ### Plano de teste requisitos funcionais
|Caso de Teste    | Requisitos Associados  | Objetivo do Teste | Passos | Critérios de Êxito|
|-----------------|------------------------|-------------------|--------|-------------------|
|CT-01 - Visualizar artigo|RF-01 - O site deve conter matérias a fim de tratar e explicar os impactos negativos das redes sociais.<br>RF-02 - O site deve destacar também os pontos positivos e boas práticas das redes sociais.| Verificar se os artigos estão carregando corretamente | 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Entre na guia de artigos<br>4) Selecione um artigo para leitura |•	O artigo será carregado, trazendo consigo uma imagem, texto, autor e data.<br>•	Os artigos devem trazer imagens visíveis associadas ao assunto do artigo
|CT-02 – Cadastrar Relato|RF-03 - O site deverá disponibilizar uma guia de relatos para que possam ser escritos relatos por pessoas acometidas de problemas advindo das redes sociais.<br>RF-06 - Entrevistas com pessoas acometidas de transtornos mentais possivelmente derivados do uso das redes sociais, que estão sob e/ou precisam de orientação psicológica.| Cadastrar um relato para teste | 1) Acessar o Navegador<br>2) Informar o endereço do Site<br>3) Fazer o cadastro ou login na plataforma<br>4) Selecionar a opção de cadastro de relato<br>5)Cadastrar Relato |•	A página deve enviar o relato para os moderadores para que possa ser avaliado e decidido se deve ou não ser inserido no site


> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Avaliação

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.

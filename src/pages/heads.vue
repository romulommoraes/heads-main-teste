<template>
  <q-page>
    <q-page-container>
<div class="text-center cima">
<h2 class="text-center q-pt-xl">HEADS</h2>
<p class="q-pa-lg ">O que é a Equipe HEADS? O que é o Projeto EcoProd e qual o propósito
  dessa iniciativa?<br> Essa página é reservada exclusivamente para atender estas dúvidas.</p>
</div>
  <div class="conteudo">
<header>
<h3><i>Equipe Heads</i></h3>
</header>
<div class=equipe-heads>
<q-img src="../assets/logobig.png" class="float-right" width="25%" heigh="250px" />
<p>A HEADS é uma equipe formada por alunos da FICR - <i>Faculdade Imaculada da Conceição do Recife</i>, do curso de Análise e Desenvolvimento de Sistemas, é composta pelos membros <i>Edgar Batista, Erica Flávia, Renata Casanova, Ivirto Ferrari</i> e <i>Rômulo Maciel</i>. Após várias pesquisas feitas para a iniciativa do projeto, escolhemos o tema ambiental, focando específicamente em produtos orgânicos. Ao realizar estudos e consultar opiniões de diversas pessoas, percebemos que há uma grande dificuldade sobre a acessibilidade dos usuários com esses produtos, assim nasceu o Projeto EcoProd.</p>
</div>
</div>
  <div class="conteudo">
<header>
<h3><i>Projeto EcoProd</i></h3>
</header>
<div class=projeto-ecoprod>
<q-img src="../assets/ecoprod.png" class="float-right" width="30%" />
<p>EcoProd se trata de um projeto de <i>WebSite</i> pensado, criado e testado pela HEADS como um projeto acadêmico, visando transformá-lo em um produto comercial no futuro. A ideia desta iniciativa consiste em facilitar a procura de produtos 100% orgânicos e de pontos comerciais que os vendem, além de guiar e informar diversas curiosidades. No <i>site</i> será possível definir uma rota até o comércio de orgânicos mais próximo ou no local desejado, saber o horário de funcionamento dos pontos, procurar produtos e pontos comerciais disponibilizados, os vendedores poderão se cadastrar e expor seus produtos para os usuários, entre outras funcionalidades.</p>
</div>
</div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style type="text/css">

.cima h2{
  padding-top:5%;
  margin-bottom: 5%;
  font-family: 'Libre Baskerville', serif;
  letter-spacing: 0.2em;
  font-size: 4em;
  color:#4a3a3a;
  text-shadow: 2px 2px 5px #135a05;
}

.cima p{
  font-size: 20px;
}

.conteudo{
  padding-bottom:110px;
  margin-left:5%;
  margin-right:5%;
}

.conteudo h3{
  margin-top: 12%;
  margin-left:10%;
}

.conteudo p{
  margin-top:5%;
  margin-left:7%;
  margin-right:7%;
  text-indent:2em;
  text-align:justify;
  font-size:17px;
}

.float-right{
  margin-right:7%;
  margin-left: 2%;
}

</style>

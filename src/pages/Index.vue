<template>
  <q-page>
    <q-page-container>
<div class="topo">
<h2 class="titulo">Produtos Orgânicos</h2>
<p>Aqui você saberá o que são Produtos Orgânicos, porque consumir e seus benefícios, como são produzidos, quem produz e onde encontrar.</p></div>
<div class="conteudo">
<p>São orgânicos os produtos de origem vegetal e animal, produzidos apenas com base em insumos de origem
natural. </p>
<p>Em um meio de produção orgânico, não é permitido o uso de substâncias que coloquem em risco a saúde
humana, dos animais e do meio ambiente. Desta forma, não são utilizados fertilizantes sintéticos, agrotóxicos,
hormônios que favoreçam o crescimento de forma não natural ou organismos geneticamente modificados.</p>
<p> No caso dos animais, sua criação é feita sem o uso de hormônios de crescimento, anabolizantes ou
outras drogas como os antibióticos.</p>
<p> Para ser considerado orgânico, um produto deve receber um selo de certificação emitido por órgãos competentes que
verificam se a sua produção está de acordo com os princípios agroecológicos que contemplam o uso responsável do
solo, da água, do ar e dos demais recursos naturais. Desta forma toda a cadeia produtiva dos produtos orgânicos
é comprometida com a manutenção da harmonia entre os setores social, ambiental e econômico, além de
cumprir as exigências da legislação sanitária, fazer a correta disposição do lixo e promover o
bem-estar dos animais e dos trabalhadores envolvidos em sua rede de produção.</p>
</div>

<div class="cartoes q-pa-md row items-start q-gutter-md">
<q-card class="my-card .col-md-12 .offset-md-6 shadow-9">
  <q-img src="../assets/vegetais.jpg"  />
  <q-card-section>
    <div class="text-h5 q-mt-sm q-mb-xs conceitos "><strong><h6>PRODUTOS VEGETAIS</h6></strong></div>
      </q-card-section>
      <q-card-section class="q-pt-none descricao">
        {{ vegetais }}
      </q-card-section>
    </q-card>

<q-card class="my-card .col-md-12 .offset-md-6 shadow-9">
  <q-img src="../assets/animal.jpg" />
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs conceitos "><strong><h6>PRODUTOS ANIMAIS</h6></strong></div>
      </q-card-section>
      <q-card-section class="q-pt-none descricao">
        {{ animais }}
      </q-card-section>
    </q-card>

    <q-card class="my-card .col-md-12 .offset-md-6 shadow-9">
      <q-img src="../assets/mercado.jpg"  />
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs conceitos "><strong><h6>PRODUTOS INDUSTRIAIS</h6></strong></div>
      </q-card-section>
      <q-card-section class="q-pt-none descricao">
        {{ industriais }}
      </q-card-section>
    </q-card>
    </div>
      <router-view />
      </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      vegetais: 'São produzidos sem o uso de agrotóxicos, fertilizantes químicos, ou organismos geneticamente modificados, mantendo também altos padrões sanitários para garantir sua qualidade e a segurança do consumidor e também dos produtores.',
      animais: 'São produzidos levando em consideração o bem estar animal e o manejo ético, além do não uso de hormônios para aceleração do crescimento também de antibióticos nas rações e o fornecimento de alimentação orgânica. Desta maneira propõem-se a melhorar as condições de vida, não somente dos produtores rurais, mas também dos consumidores ao produzir alimentos sadios, isentos de resíduos tóxicos e de melhor qualidade nutricional, visando gerar benefícios ambientais locais, regionais e globais.',
      industriais: 'São oriundos do processamento de produtos vegetais e animais de origem orgânica. Esse processamento é feito sem o inclusão de aditivos e conservantes de potencial tóxico e são feitos por meios tradicionais para aumentar a durabilidade e segurança alimentar dos produtos. Assim como os produtos para consumo in natura, todo o processo da produção de orgânicos industriais deve ser ecologicamente correto e sustentável, desde o armazenamento, o transporte até a sua comercialização.'
    }
  }
}
</script>

<style>

.topo{
  background-image: url("../assets/fundo-verde.jpg");
  background-repeat: no-repeat;
  height: 400px;
}

h2.titulo{
  font-size: 50px;
  text-align: center;
  margin-top:80px;
  font-family: 'Libre Baskerville', serif;
   text-shadow: 2px 2px 5px #135a05;
    letter-spacing: 0.2em;
 padding-top:10%;
}

.topo p{
  text-align: center;
  color:#4a3a3a;
    font-size: 1.3em;
    margin-left:20%;
    margin-right:20%;
}

.conteudo {
  margin-left:7%;
    margin-right:7%;
    text-align: justify;
    text-indent: 2em;
    padding-bottom:130px;
    margin-top:30px;
}

.conteudo p {
  font-size: 18px;
  color:#4a3a3a;
}

.cartoes{
    margin-left:5%;
    margin-right:5%;
}

.my-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-left:1%;
  }

.conceitos{
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color:rgb(64, 94, 51);
}

.descricao{
  font-size:14px;
}

h1 {
  font-size: 23px;
  }

p {
  font-size: 14px;
  }

@media screen and (min-width: 900px) {
  .my-card {
  width: 30%;
}
}

h6{
  font-size:70%;
}
</style>

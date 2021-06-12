/*eslint-disable */
<template>
  <q-page>
    <q-page-container>
      <div>
        <q-btn flat to="/pontocomercial"><q-icon  size="100px" name="keyboard_arrow_left" />
        </q-btn>
      </div>
      <div class="q-pa-md">
        <q-form style="width:80%"
          @submit="onSubmit"
          class="q-gutter-md formulario"
        >
      <div class="q-pa-md q-mb-xl" style="border: 1px solid grey">
        <p style="font-size:30px;">Dados Cadastrais</p>
      <div class="justify-between row ">
      <q-input style="width:71%"
        filled
        v-model="dadpes.nome"
        label="Nome / Razão Social"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
      <q-input style="width:25%"
        filled
        label="Telefone"
        v-model="dadpes.codigo"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
    </div>
    <div class="justify-between row">
      <q-input style="width:50%"
      class=""
        filled
        label="Rua, Avenida, Praça, etc... (ou Somente o CEP)"
        v-model="dadpes.logradoro"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
      <q-input style="width:15%"
        filled
        label="Número"
        v-model="dadpes.numero"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />

      <q-input style="width:29%"
        filled
        label="Complemento"
        v-model="dadpes.complemento"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
</div>
<div class="justify-between row">
  <q-input style="width:33%"
        filled
        label="Bairro"
      v-model="dadpes.bairro"
      lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
      <q-input style="width:20%"
        filled
        label="CEP"
        v-model="dadpes.cep"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />

      <q-input style="width:29%"
        filled
        v-model="dadpes.cidade"
        label="Cidade"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />

      <q-input style="width:10%"
        filled
        v-model="dadpes.uf"
        label="UF"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
</div>
</div>

 <div class="q-pa-md q-mb-xl" style="border: 1px solid grey">
      <p style="font-size:30px;">Documentação</p>
      <p class="q-ma-xs" style="font-size:20px;">Pessoa</p>
      <q-radio class="q-mr-sm" color="green" val="line" v-model="dadpes.shape" label="Fisica" />
      <q-radio color="green" v-model="dadpes.shape" label="Juridica" />

  <div v-if="dadpes.shape" class="fisica row justify-between q-mt-lg" >
    <q-input  style="width:25%"
          filled
          label="CPF"
          v-model="dadpes.cpf"
          lazy-rules
          :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
        />
    <q-input style="width:20%"
        filled
        label="Reg. Identidade"
        v-model="dadpes.rg"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
    <q-input style="width:25%"
        filled
        label="Org. Expeditor"
        v-model="dadpes.orgao"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
    <q-input style="width:20%"
        filled
        v-model="dadpes.expedicao"
        type="date"
        label="Data Exp."
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
  </div>

<div v-else class="q-mt-lg pessoa-juridica " >
  <div class="row">
    <q-input style="width:100%" class=""
        filled
        v-model="dadpes.responsavel"
        label="Nome Completo do Responsável"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
  </div>

  <div class="justify-between row">
    <q-input  style="width:34%"
      filled
      label="CNPJ"
      v-model="dadpes.cnpj"
      lazy-rules
      :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
    />
    <q-input style="width:30%"
      filled
      label="Inscrição Estadual"
      v-model="dadpes.inscEst"
      lazy-rules
      :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
    />
    <q-input style="width:30%"
      filled
      label="Inscrição Municipal"
      v-model="dadpes.inscMun"
      lazy-rules
      :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
    />
  </div>
</div>
</div>

<div class="q-pa-md" style="border: 1px solid grey">
  <p style="font-size:30px;">Login</p>
      <div class="justify-between row ">
        <q-input style="width:47%"
        filled
        label="Email"
        :value="email"
        v-model="dadpes.email"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
        <q-input style="width:47%"
        filled
        class=""
        label="Repetir email"
        :value="email"
        v-model="dadpes.email2"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Campo Obrigatório']"
      />
      </div>

      <div class="justify-between row">
      <q-input style="width:47%"
        filled
        v-model="dadpes.senha"
        label="Senha"
        type="password"
        lazy-rules
        :rules="[
          val => !!val || 'Campo Obrigatório',
          val => val.length >= 6 || 'Mínimo de 6 caracteres',
        ]"
        />

      <q-input style="width:47%"
        filled
        v-model="dadpes.senha2"
        label="Repetir Senha"
        type="password"
        lazy-rules
        :rules="[
          val => !!val || 'Campo Obrigatório',
          val => val.length >= 6 || 'Mínimo de 6 caracteres',
        ]"
        />
    </div>
</div>
      <div align="center">
        <q-btn class="botao-cadastrar" label="CADASTRAR" type="submit"/>
      </div>
    </q-form>

  </div>
    </q-page-container>
  </q-page>
  </template>

<script>
export default {
  data () {
    return {
      dadpes: {
        nome: '',
        telefone: '',
        codigo: '',
        logradoro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        cidade: '',
        uf: '',
        cpf: '',
        rg: '',
        orgao: '',
        expedicao: '',
        responsavel: '',
        cnpj: '',
        inscEst: '',
        inscMun: '',
        email: '',
        email2: '',
        senha: '',
        senha2: '',
        shape: 'line'
      }
    }
  },
  // data () {
  //   return {
  //     name: null,
  //     telefone: null,
  //     endereco: null,
  //     numeroEndereco: null,
  //     bairro: null,
  //     cep: null,
  //     cidade: null,
  //     estado: null,
  //     cpf: null,
  //     identidade: null,
  //     responsavel: null,
  //     cnpj: null,
  //     email: null,
  //     email2: null,
  //     senha: '',
  //     senha2: '',
  //     accept: false,
  //     shape: 'line'
  //   }
  // },
  methods: {
    reset () {
      this.$refs.input.resetValidation()
    },
    onSubmit () {
      // var dsp = document.getElementById('PesFis').style.display
      // if (dsp === 'block') {
      //   this.dadpes.cnpj = ''
      // } else {
      //   this.dadpes.cpf = ''
      // }
      this.$axios.post('http://localhost:5000/pes', this.dadpes).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="stylus">
.formulario{
  margin:8%;
}
.dados{
  width:98%;
}
.forms{
  width 45% ;
}
.botao-cadastrar{
  width: 260px;
    height: 56px;
    background-color: #2e4e06 ;
    border-radius: 8px;
    color:white;
    font-size: 18px;
    border:0;
    margin-top: 40px;
    transition:background-color 400ms;
}
</style>

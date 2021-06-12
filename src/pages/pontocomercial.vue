<template>
    <q-page>
        <q-page-container>
        <div class="row" align ="center">
        <div class="col">
            <q-input
            class="campopesquisa"
            color="black"
            bg-color="white"
        v-model="search"
        debounce="500"
        outlined
        placeholder="Pesquisar"
      >
        <template v-slot:append>
          <q-btn
          color="green-10"
          class="cursor-pointer botaolupa" icon="search"  />
        </template>
      </q-input>
      </div>
      <div class="col">
            <template>
            <div class="div-botoes">
            <q-btn to="/cadastro" class="botoesauxiliares" color="green-10" style=" color: white; margin-right:30px;" label="CADASTRE-SE" />
            <q-btn  @click="entrar = true" class="botoesauxiliares" color="green-10" style="color: white" label="entrar" />
            </div>
<q-dialog v-model="entrar">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
              <q-img src="..//assets/ecoprod.png" width="130px" />
          </div>
          <q-space />
          <q-btn  icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
        <q-input square filled
        bottom-slots
        v-model="text"
        :rules="[val => !!val || 'Campo Obrigatório']"
        label="Nome do Usuario"
        :dense="dense">
        <template v-slot:prepend>
          <q-icon name="perm_identity" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>

      <q-input square filled bottom-slots type="password" v-model="password" label="Senha" :dense="dense"
      lazy-rules
        :rules="[
          val => !!val || 'Campo Obrigatório']">
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
        <template v-slot:append>
          <q-icon name="close"
          @click="password = ''" class="cursor-pointer" />
        </template>
      </q-input>
      <div class="text-right">
          <q-btn
       style="width:100%; background: #2e4e06; color: white" label="Entrar" />
      </div>
      </q-card-section>
      </q-card>
    </q-dialog>
      </template>
      </div>
      </div>
      </q-page-container>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      entrar: false
    }
  }
}
</script>
<style lang="stylus">

.campopesquisa{
    margin-top 100px;
    margin-left 150px;
    width 80%;
    }

.botaolupa{
    height 40px;
    }

.div-botoes{
    margin-top 105px;
    }

.botoesauxiliares{
    width 130px;
    height 45px;
    margin-right 150px;
    }

</style>

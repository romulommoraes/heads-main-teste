<template>
    <q-page>
        <q-page-container>
          <div class="row justify-between">
            <div class="campodepesquisa col-5">
                <q-input
                class=""
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
            <div class="botao-radio q-mt-xl col-4">
                <q-option-group
                  :options="options"
                  label="Notifications"
                  type="radio"
                  v-model="group"
                />
            </div>
          </div>
  </q-page-container>
</q-page>
</template>
<script>
export default {
  data () {
    return {
      group: null,
      options: [
        { label: 'Produto', value: 'bat', color: 'green' },
        { label: 'Local', value: 'friend', color: 'green' },
        { label: 'Categoria', value: 'upload', color: 'green' }
      ]
    }
  }
}
</script>
<style lang="stylus">

.campodepesquisa{
  margin-top 200px;
  margin-left 150px;
  width 80%;
    }

.botaolupa{
    height 40px;
    }

.botao-radio{
  margin-top: 170px;
}
</style>

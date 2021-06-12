<template>
  <q-layout view="lHh Lpr lFf"  >
    <q-layout-header  >
      <q-toolbar class="bg-primary text-white"
        color="secundary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
      <q-toolbar-title>
          <q-btn to="/"><q-img src="..//assets/ecoprod.png" width="170px" />
</q-btn>
</q-toolbar-title>
<div class="gt-sm menu-topicos">
<q-btn to="/produtos" flat color="neutral" label="Produtos" />
<q-btn to="/local" flat color="neutral" label="Local" />
<q-btn to="/pontocomercial" flat color="neutral" label="Ponto Comercial" />
<q-btn to="/heads" flat color="neutral" label="Heads" />
<q-btn to="/dados" flat color="neutral" label="Dados" />

</div>
<div class="lt-md">
  <q-btn flat dense @click="leftDrawerOpen = !leftDrawerOpen"
    icon="menu"
    aria-label="Menu" />
</div>
      </q-toolbar>
    </q-layout-header>
    <div class="meio shadow-9">
    <q-page-container>
      <router-view />
    </q-page-container>
    </div>
      <div class="footer">
<q-footer class="bg-accent" elevated>
        <q-toolbar >
          <q-toolbar-title class="rodape">Criado por HEADS</q-toolbar-title>
        </q-toolbar>
      </q-footer>
      </div>
</q-layout>
      </template>
<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  methods: {
    openURL
  }
}
</script>

<style>

.meio{
  background-image: url("../assets/folhas.jpg");
    margin-left:8%;
    margin-right:8%;
    padding-bottom:5%;
    background-repeat: no-repeat;
    background-size: cover;
    height:100%;
    margin-top: 100px;
    margin-bottom: 150px;
}

.menu-topicos{
  font-size: 20px;
  font-weight: 400;
  color:#ffff;
  letter-spacing: 1px;
}

.header-image{
  height:100%;
  z-index: -1;
  width: 50%;
}

.rodape{
  font-size:18px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-left: 100px;
}

</style>

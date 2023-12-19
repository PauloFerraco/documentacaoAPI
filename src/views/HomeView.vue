<template>
  <div class="container">
    <div class="title">Bem vindo a Documentação das API's</div>
    <div class="list">
      <div>API's Gratuitas</div>
      <span>Status do Streaming</span>
      
      <div>API's Pagas</div>
      <span>Emblemas</span>
      <span>Mobs</span>
      <span>Perfil do usuário</span>
      <span>Cores</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>

.title {
    width: 100%;
    height: 40px;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
}

.list {
    float: left;
    width: 50%;
    height: auto;
    margin: 30px 0 0 40px
}

.list div {
    float: left;
    width: 100%;
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    margin-top: 20px;
}

.list span {
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    display: inline-block;
    margin-top: 6px;
}


</style>
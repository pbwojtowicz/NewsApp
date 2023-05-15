<template>
  <div class="root d-flex">
    <p>User: aaaa@gmail.com</p>
    <router-link class ="bttn" to="/fav-list">Ulubione artykuły</router-link>


  </div>

</template>

<script>
export default {
  name: "Profil"
}
</script>

<style scoped>

.bttn{
  color: #111111 ;
  background-color: #f1c50e ;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 20px auto 0;
  display: table;
  padding: 10px 30px;

}
</style>

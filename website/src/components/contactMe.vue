<template>
  <div class="more-info">
    <div class="container">
        <h3>{{title}}</h3>
        <router-link to="/aboutus"
                         tag="button"
                         class="btn btn-template-outlined-white"
                         active-class="active">
                         <i class="fab fa-wpforms"></i> Contactenos
        </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Quiere obtener mas informacion sobre nosotros?',
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.more-info {
  background: #3386ff;
  color: #FFF;
  padding: 50px 0;
}
h3 {
  margin-right: 20px;
}
i {
  margin-right: 5px;
}

footer {
  margin-top: 0;
}
</style>

<template>
  <div class="container">
    <b-navbar toggleable="md" type="dark" variant="info" class="navbar">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand><img src="../assets/logo_mutual.jpeg" width="40px"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="navbar-section">
            <router-link to="/"
                         tag="b-nav-item"
                         class="navbar-section__item"
                         active-class="active"> <a>Home</a> </router-link>
            <router-link to="/convenios"
                         tag="b-nav-item"
                         class="navbar-section__item"
                         active-class="active"> <a>Convenios</a> </router-link>
            <router-link to="/aboutus"
                         tag="b-nav-item"
                         class="navbar-section__item"
                         active-class="active"> <a>Contacto</a> </router-link>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
@import '../styles/imports/colors';

  .container {
    margin: 0px;
    padding: 0px;
    width: 100%;
    max-width: 100%;
    position: fixed;
    z-index: 5;
    opacity: 0.85;
    border-bottom: 1px solid rgba($color: $light-blue-borders, $alpha: 1.0);
  }

  .navbar-nav .router-link-exact-active.active {
    border-bottom: 5px solid #1986ff;
  }
</style>

<template>
  <div class="container">
    <b-navbar toggleable="md" type="dark" variant="info" class="navbar">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand><img src="../assets/logo_mutual.jpeg" width="40px"></b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="navbar-section">
          <b-nav-item class="navbar-section__item">
            <router-link to="/">Home </router-link>
          </b-nav-item>
          <b-nav-item class="navbar-section__item">
            <router-link to="/convenios">Convenios</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
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

</style>


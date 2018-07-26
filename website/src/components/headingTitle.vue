<template>
  <div id="heading-breadcrumbs">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    title: '',
  },
};
</script>
<style lang="scss" scoped>
  #heading-breadcrumbs {
    padding: 2rem 0;
    border-top: none !important;
    border-bottom: none !important;
    background: url(../assets/texture-bw.png) center center repeat;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
  }
  .container h1 {
    text-transform: uppercase;
  }
</style>

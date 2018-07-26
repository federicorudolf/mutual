<template>
  <div class="top">
    <div>
      <app-head v-bind:title="title"></app-head>
    </div>
    <div class="container">
      <app-fields></app-fields>
    </div>
  </div>
</template>
<script>
import fields from '../components/fields';
import headingTitle from '../components/headingTitle';

export default {
  data() {
    return {
      title: 'Convenios',
    };
  },
  components: {
    appFields: fields,
    appHead: headingTitle,
  },
};
</script>
<style lang="scss" scoped>
  .top {
    padding-top: 55px;
  }
  .container {
    padding-top: 65px;
  }
</style>

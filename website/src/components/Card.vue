<template>
  <div>
    <b-card :title="title"
            :img-src="imgSrc"
            img-top>
            <b-badge class="cardBadge">{{ field }}</b-badge>
        <p class="card-text">
            {{ description }}
        </p>
        <div slot="footer">
            <small class="text-muted">{{ location }}</small>
        </div>
    </b-card>
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
    imgSrc: '',
    description: '',
    location: '',
    field: '',
  },
};
</script>
<style lang="scss" scoped>

</style>

<template>
  <div>
    <div class="container">
      <b-row>
        <b-col class="img-c">
          <img :src="imgSrc"/>
        </b-col>
        <b-col>
          <h2>{{ title }}</h2>
          <blockquote class="blockquote blockquote-reverse">
            <p>{{ description }}</p>
            <h4>Beneficios</h4>
            <ul>
              <li v-for="(beneficio, index) in beneficios" :key="index">
                <p class="b-number">{{beneficio.number}}<label>{{beneficio.text}}</label></p>
              </li>
            </ul>
          </blockquote>
          <div class="direction">
            <div><i class="fas fa-map-marker-alt"></i>{{ location }}</div>
            <div><i class="fas fa-phone"></i>{{ phone }}</div>
            <div><i class="fab fa-facebook"></i>{{facebook}}</div>
            <div><i class="fab fa-firefox"></i>{{page}}</div>
          </div>
        </b-col>
      </b-row>
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
    imgSrc: '',
    description: '',
    location: '',
    phone: '',
    facebook: '',
    page: '',
    beneficios: [],
    field: '',
    id: '',
  },
};
</script>
<style lang="scss" scoped>
i {
  color: #3386ff;
  margin-right: 5px;
}

.direction {
  background: #f3f3f3;
  padding: 15px;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
}

.blockquote-footer {
  text-transform: uppercase;
  text-align: justify;
}

.b-number {
  color: #3386ff;
  text-transform: uppercase;
}

.b-number label {
  color: #000;
  margin-left: 3px;
}
</style>

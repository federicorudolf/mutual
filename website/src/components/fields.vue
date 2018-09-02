<template>
  <b-container class="bv-example-row">
    <b-row>
        <b-col class="box-field" @click="navigateToField('gastronomia')">
          <h2>Gastronomia</h2>
          <div class="box-image">
            <div class="image">
              <img class="img-fluid" src="https://www.viajejet.com/wp-content/viajes/los-ingredientes-basicos-de-la-gastronomia-espanola-1440x810.jpg" />
            </div>
            <div class="overlay d-flex align-items-center justify-content-center">
              <div class="overlay_content">
                <div class="overlay_group">
                  <h3>Gastronomia</h3>
                  <div class="overlay_text">
                    <button @click="navigateToField('gastronomia')"
                            class="btn btn-template-outlined-white">
                            <i class="fas fa-list-ul"></i>Ver lista
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="box-field" @click="navigateToField('indumentaria')">
          <h2>Indumentaria</h2>
          <div class="box-image">
            <div class="image">
              <img class="img-fluid" src="https://geomarketing.com/wp-content/uploads/2016/11/Holiday-shopping-mobile-1.jpg" />
            </div>
            <div class="overlay d-flex align-items-center justify-content-center">
              <div class="overlay_content">
                <div class="overlay_group">
                  <h3>Indumentaria</h3>
                  <div class="overlay_text">
                    <button @click="navigateToField('indumentaria')"
                            class="btn btn-template-outlined-white">
                            <i class="fas fa-list-ul"></i>Ver lista
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
    </b-row>
    <b-row>
      <b-col class="box-field" @click="navigateToField('deportes')">
        <h2>Deportes</h2>
        <div class="box-image">
          <div class="image">
            <img class="img-fluid" src="https://frasesdelavida.com/wp-content/uploads/2018/01/Frases-de-deportes.jpg" />
          </div>
          <div class="overlay d-flex align-items-center justify-content-center">
            <div class="overlay_content">
              <div class="overlay_group">
                <h3>Deportes</h3>
                <div class="overlay_text">
                  <button @click="navigateToField('deportes')"
                          class="btn btn-template-outlined-white">
                          <i class="fas fa-list-ul"></i>Ver lista
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="box-field" @click="navigateToField('salones')">
        <h2>Salones y Casita de fiestas</h2>
        <div class="box-image">
          <div class="image">
            <img class="img-fluid" src="http://www.megaeventossur.com.ar/wp-content/uploads/slider-santos-lugares.jpg" />
          </div>
          <div class="overlay d-flex align-items-center justify-content-center">
            <div class="overlay_content">
              <div class="overlay_group">
                <h3>Salones y Casita de fiesta</h3>
                <div class="overlay_text">
                  <button @click="navigateToField('salones')"
                          class="btn btn-template-outlined-white">
                          <i class="fas fa-list-ul"></i>Ver lista
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="box-field" @click="navigateToField('otros')">
        <h2>Otros</h2>
        <div class="box-image">
          <div class="image">
            <img class="img-fluid" src="http://www.hotelroomsearch.net/im/hotels/es/shopping-center-1.jpg" />
          </div>
          <div class="overlay d-flex align-items-center justify-content-center">
            <div class="overlay_content">
              <div class="overlay_group">
                <h3>Otros</h3>
                <div class="overlay_text">
                  <button @click="navigateToField('otros')"
                          class="btn btn-template-outlined-white">
                          <i class="fas fa-list-ul"></i>Ver lista
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
</b-container>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    navigateToField(field) {
      this.$router.push(`/rubro/${field}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.box-field {
  padding: 0;
  margin-top: -10px;
  flex-basis: unset;
  cursor: pointer;
}
.box-image {
  margin: 0;
}
.box-image:hover .overlay {
  opacity: 1;
}
.box-image:hover h3,
.box-image:hover p, {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}
.box-image:hover p {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.box-image h3 {
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
  -webkit-transform: translateY(-50px);
  transform: translateY(-50px);
}
.box-image p {
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
  -webkit-transform: translateY(20px);
  transform: translateY(20px);
}
.box-image h3,
.box-image p {
  color: #FFF;
  font-weight: 700;
}
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(30, 100, 193, 0.6);
  padding: 20px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
  text-align: center;
}
img {
  width: 100%;
}
h2 {
  background: #f3f3f3;
  padding: 20px;
  margin-bottom: 0;
}
i {
  margin-right: 5px;
}
</style>

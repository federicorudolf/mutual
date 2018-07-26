<template>
  <b-container class="bv-example-row">
    <b-row>
        <b-col class="box-field" @click="navigateToField('gastronomia')">
          <div class="box-image">
            <div class="image">
              <img class="img-fluid" src="../assets/portfolio-2.jpg" />
            </div>
            <div class="overlay d-flex align-items-center justify-content-center">
              <div class="overlay_content">
                <div class="overlay_group">
                  <h3>Gastronomia</h3>
                  <div class="overlay_text">
                    <p>Descripcion del rubro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="box-field" @click="navigateToField('indumentaria')">
          <div class="box-image">
            <div class="image">
              <img class="img-fluid" src="../assets/portfolio-3.jpg" />
            </div>
            <div class="overlay d-flex align-items-center justify-content-center">
              <div class="overlay_content">
                <div class="overlay_group">
                  <h3>Indumentaria</h3>
                  <div class="overlay_text">
                    <p>Descripcion del rubro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
    </b-row>
    <b-row>
      <b-col class="box-field" @click="navigateToField('deportes')">
        <div class="box-image">
          <div class="image">
            <img class="img-fluid" src="../assets/portfolio-7.jpg" />
          </div>
          <div class="overlay d-flex align-items-center justify-content-center">
            <div class="overlay_content">
              <div class="overlay_group">
                <h3>Deportes</h3>
                <div class="overlay_text">
                  <p>Descripcion del rubro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="box-field" @click="navigateToField('otros')">
        <div class="box-image">
          <div class="image">
            <img class="img-fluid" src="../assets/portfolio-8.jpg" />
          </div>
          <div class="overlay d-flex align-items-center justify-content-center">
            <div class="overlay_content">
              <div class="overlay_group">
                <h3>Otros</h3>
                <div class="overlay_text">
                  <p>Descripcion del rubro</p>
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
}
</style>

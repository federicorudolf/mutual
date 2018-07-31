<template>
  <div class="home-carousel">
    <div class="dar-mask mask-primary"></div>
    <div class="container">
      <div class="homepage owl-carousel">
        <div class="item">
          <div class="row">
            <div class="col-md-5 text-right">
              <h1>Multipurpose responsive theme</h1>
              <p>Business. Corporate. Agency.<br>Portfolio. Blog. E-commerce.</p>
            </div>
            <div class="col-md-7">
              <img src="../assets/template-homepage.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <div class="col-md-5 text-right">
              <h1>Multipurpose responsive theme</h1>
              <p>Business. Corporate. Agency.<br>Portfolio. Blog. E-commerce.</p>
            </div>
            <div class="col-md-7">
              <img src="../assets/template-homepage.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <div class="col-md-5 text-right">
              <h1>Multipurpose responsive theme</h1>
              <p>Business. Corporate. Agency.<br>Portfolio. Blog. E-commerce.</p>
            </div>
            <div class="col-md-7">
              <img src="../assets/template-homepage.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="item">
          <div class="row">
            <div class="col-md-5 text-right">
              <h1>Multipurpose responsive theme</h1>
              <p>Business. Corporate. Agency.<br>Portfolio. Blog. E-commerce.</p>
            </div>
            <div class="col-md-7">
              <img src="../assets/template-homepage.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
    };
  },
  methods: {
    carousel() {
    $(".owl-carousel").owlCarousel({
      items : 1,
      lazyLoad : true,
      navigation : true,
      autoplay: true
    });
    }
  },
  mounted() {
    this.carousel();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-carousel {
  color: #fff;
}

.home-carousel .owl-carousel {
  padding-top: 60px;
  padding-bottom: 20px;
}

.home-carousel h1, .home-carousel h2 {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.home-carousel li, .home-carousel p {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.home-carousel p img {
  max-width: 200px;
}

.dark-mask {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.dark-mask.mask-primary {
  background: rgba(79, 191, 168, 0.9);
}

.home-carousel {
  color: #fff;
}

.home-carousel .owl-carousel {
  padding-top: 60px;
  padding-bottom: 20px;
}

.home-carousel h1, .home-carousel h2 {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.home-carousel li, .home-carousel p {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.home-carousel p img {
  max-width: 200px;
}

.owl-carousel .owl-dots {
  margin-top: 20px;
  text-align: center;
}

.owl-carousel .owl-dots .owl-dot {
  display: inline-block;
  margin: 0 5px;
}
.owl-carousel .owl-dots .owl-dot.active span {
  background: #fff;
}

.owl-carousel .owl-dots .owl-dot span {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #aaa;
}


.owl-carousel .owl-dots .owl-dot.active span {
  background: #fff;
}
</style>

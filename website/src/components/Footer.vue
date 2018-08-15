<!-- eslint-disable -->
<template>
  <div>
    <footer>
      <div class="container">
        <b-row class="footer-r">
          <b-col class="contact-col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.8397340535043!2d-62.26155868465489!3d-38.721488379598156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda34b9bf4e737%3A0x2b93721809ad4771!2sGral.+Paz+91%2C+8000+Bah%C3%ADa+Blanca%2C+Buenos+Aires!5e0!3m2!1sen!2sar!4v1532013287511" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          </b-col>
          <b-col class="contact-col">
            <h4>Contacto</h4>
            <div>
              <p class="title-info"><i class="fas fa-location-arrow"></i>Direccion:</p>
              <p class="info">Gral Paz 91</p>
            </div>
            <div>
              <p class="title-info"><i class="fas fa-mobile-alt"></i>Telefono:</p>
              <p class="info">291 - 42231212</p>
            </div>
            <div>
              <p class="title-info"><i class="fas fa-map-marked"></i>Ciudad:</p>
              <p class="info">Bahia Blanca</p>
            </div>
            <div>
              <p class="title-info"><i class="fas fa-globe-americas"></i>Provincia:</p>
              <p class="info">Buenos Aires</p>
            </div>
          </b-col>
          <b-col class="contact-col">
            <h4>Quienes somos</h4>
            <div>
              <p>LA ASOCIACION MUTUAL UNIDAD 1° DE NOVIEMBRE, esta vigente desde 05 de septiembre del 2016...</p>
            </div>
            <router-link to="/aboutus"
                             tag="button"
                             class="btn btn-template-main"
                             active-class="active">
                             <i class="fab fa-wpforms"></i> Contactenos
            </router-link>
          </b-col>
          <b-col class="contact-col">
            <img src="../assets/mutual_l.png" />
          </b-col>
        </b-row>
      </div>
    </footer>
    <div class="copyrights">
      <div class="container">
        <div class="text">
          <p>
            © 2018. Mutual / Unidad 1 de Noviembre
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Quienes somos',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    };
  },
};
</script>
<style lang="scss" scoped>
footer {
  background-color: #555;
  color: #FFF;
  padding: 45px 0;
}

footer iframe {
  height: 300px;
  width: 300px;
}
footer .container h4 {
  text-transform: uppercase;
}
footer p {
  margin: 0;
}
footer p i {
  margin-right: 5px;
  color: #1986ff;
}
footer .title-info {
  text-transform: uppercase;
  color: #3386ff;
}
footer .info {
  margin-left: 21px;
}
footer .btn {
  margin-top: 21px;
  background: #3386ff;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 700;
  border-color: #3386ff;
  border-radius: 0;
  cursor: pointer;
  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

footer .btn:hover {
  background-color: #0b5fda;
  border-color: #0b5fda;
}
.copyrights {
  padding: 50px 0;
  background: #333;
  color: #CCC;
}
</style>

<!-- eslint-disable -->
<template>
  <div class="bg-container">
    <div class="text_plane container">
      <h2>{{title}}</h2>
      <p>"Las asociaciones Mutuales, son aquellas constituidas libremente, sin fines de lucro, por personas inspiradas en la solidaridad, con el objeto de brindarse ayuda reciproca, frente a riesgos eventuales o de concurrir a su bienestar material y espiritual" (Ley 20321 art. 2).</p>
      <p>
        LA ASOCIACION MUTUAL UNIDAD 1° DE NOVIEMBRE, esta vigente desde 05 de septiembre del 2016, regulada por la ley 20321 y una gran cantidad de resoluciones emanadas del Organismo de Contralor el INAES. Las mutuales son entidades sin fines de lucro creadas para que los afiliados, ante una emergencia o necesidad de algun bien o servicio, al que no puedan tener acceso en forma individual, lo obtengan mediante la Mutual, por medio de algun descuento o financiacion. Las mutuales son una de las organizaciones mas democraticas, pues todos los asociados cumpliendo con algunos requisitos establecidos en el Estatuto Social, pueden desempeñar cualquier puesto en el organo que la conduce y controla. Debemos tener siempre presente que los asociados constituyen la maxima autoridad de la Mutual, pudiendo ejercer dicho poder en las Asambleas de Asociados. Esta misma esta compuesta por trabajadores de la Rama de Recoleccion y Barrido, Logistica y Transporte.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Quienes somos',
    };
  },
};
</script>
<style lang="scss" scoped>
  .text_plane {
    text-align: center;
  }
  .text_plane h2 {
    text-transform: uppercase;
  }

  .text_plane h2:after {
    content: " ";
    display: block;
    width: 100px;
    height: 2px;
    margin-top: .6rem;
    background-color: #1986ff;
    margin-right: auto;
    margin-left: auto;
  }

  .bg-container {
    background: url('../assets/texture-bw.png') center center repeat;
    border-bottom: 1px solid #999;
    padding: 60px 0;

    p {
      margin-bottom: 0;
    }
  }
</style>

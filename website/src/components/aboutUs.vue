<template>
  <div class="bg-container">
    <div class="text_plane container">
      <h2>{{title}}</h2>
      <p>{{description}}</p>
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
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    padding: 60px 0;
  }
</style>

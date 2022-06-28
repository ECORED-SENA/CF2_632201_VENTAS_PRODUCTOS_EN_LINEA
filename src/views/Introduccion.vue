<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción

    .row.mb-5(data-aos="fade-right")
      .col-lg-1.col-md-2.col-3.ms-4
        figure
          img(src='@/assets/curso/tema1/img01.svg')
      .col-lg-9.col-md-8.col-7
        p #[strong Este componente formativo se presenta como una solución a la relación empresa cliente, tal como se verá a continuación:] 

    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5VXdP4i4pag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

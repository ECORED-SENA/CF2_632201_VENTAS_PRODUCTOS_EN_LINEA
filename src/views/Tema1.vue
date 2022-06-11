<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.container01.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 1
      h1 Canales digitales

    .bloque-texto-g.color-acento-contenido.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos="zoom-in")(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img02.svg')})`}"
      )
      .bloque-texto-g__texto.p-4  
        p.mb-0 Es una realidad, este es un concepto que todas las empresas, de todos los tamaños, deben abordar; incluso, los negocios considerados offline o físicos, como lo dice el experto técnico en el siguiente video:
      
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
  .container.BGIMG01
    separador

    #t_1_1.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 1.1.	Herramientas y utilidades

    




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

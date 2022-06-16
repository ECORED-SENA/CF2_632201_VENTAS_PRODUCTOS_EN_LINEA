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
  
  .container.BGIMG01.p-4.p-md-5
    separador

    #t_1_1.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 1.1.	Herramientas y utilidades

    a(@click="mostrarColaps()")  
    #MapaGroup01(data-aos="zoom-in")
      .row.justify-content-center.mb-5
        .col-md-8.order-md-1.order-2
          .row
            .col-1
              img.h-75(src='@/assets/curso/tema2/img04.svg')
            .col-11
              p Para que la comunicación y proyección comercial sean efectivas, es importante que el negocio tenga presencia en las tendencias de comportamientos sociales y de consumo; en el caso del entorno digital, existen varias opciones donde se puede establecer presencia de marca.
          .row
            .col-6.mb-3(v-for="num of 2")
              button.ClaseBtn.collapsed(
                :id="`boton${num}`"
                data-bs-toggle="collapse" 
                :data-bs-target="`#collapse${num < 10 ? '0'+num : num}, #collapse${num < 10 ? '0'+num : num}s`" 
                aria-expanded="true" 
                :aria-controls="`#collapse${num < 10 ? '0'+num : num}, #collapse${num < 10 ? '0'+num : num}s`"
              )
                img.img-a(:src="require(`@/assets/curso/tema1/imagen0${num}.svg`)")
              img.img-a.collapse(
                :id="`collapse${num < 10 ? '0'+num : num}s`"
                src="@/assets/curso/tema1/sdw.svg" 
                data-bs-parent="#MapaGroup01"
                :class="{show: num == hash}"
              )
        .col-md-3.col-6.order-md-2.order-1
          img(src='@/assets/curso/tema1/imagen03.png')
      #collapse01.collapse(:class="{show: hash ? hash == 1 : false}" data-bs-parent='#MapaGroup01')
        .row
          .col-auto.BG08.mb-4
            .h4.text-white Redes sociales (Meta Business)
        p Antes de pasar a la descripción de Meta como gran horizonte de las redes sociales, es conveniente recordar algo del contexto en el siguiente video: 
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      #collapse02.collapse(:class="{show: hash == 2}" data-bs-parent='#MapaGroup01')
        p La naturaleza digital tiene un contexto global, es decir, el alcance y la presencia en el mundo digital están disponibles desde cualquier país y momento. Parte de las características de las redes sociales son:
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    hash: 0,
  }),
  watch: {
    $route(to) {
      if (to.hash?.length) {
        const numero = to.hash.split('_')[1]
        this.mostrarCollapse(numero)
        document.getElementById('MapaGroup01').scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.hash.length) {
        const numero = this.$route.hash.split('_')[1]
        this.hash = numero
        setTimeout(() => {
          document.getElementById('MapaGroup01').scrollIntoView({
            behavior: 'smooth',
          })
        }, 500)
      }
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrarCollapse(id) {
      console.log(document.querySelector('#boton' + id))
      document.querySelector('#boton' + id).click()
    },
  },
}
</script>

<style lang="sass"></style>

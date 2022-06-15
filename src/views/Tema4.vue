<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.container01.px-4.px-md-5.pt-4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Comunicación comercial en medios digitales

    .row.justify-content-center
      .col-12
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img01.png')
      .col-md-10.col-11
        .BG03.p-4
          p <b>Los medios digitales de comunicación se refieren a los canales que permiten el intercambio de información a través de tecnología computacional</b>, por lo general, están bajo el contexto de internet o redes cerradas de datos. Actualmente los medios de comunicación tradicionales van perdiendo vigencia, salvo algunos casos especializados, donde aún tienen aplicabilidad.

    #t_4_1.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 4.1.	La comunicación comercial online

    p.mb-5 <b>Cuando se habla de comunicación enmarcada en el concepto</b><span style="color:#0B67D1 !important; font-weight: bold;"> “comercial”</span>, <b>se refiere al tipo de comunicación que se apoya en la fuerza de ventas para lograr que los consumidores adquieran un servicio o producto</b>. Este tipo de comunicación pretende vender de manera directa y fidelizar al cliente, por lo que se requiere una relación con el consumidor para conocer sus características, requisitos, gustos, necesidades, hábitos, quejas, etc.

  .container.BGIMG04.p-4.p-md-5

    .row.justify-content-center.align-items-center.mb-2
      .col-md-4.col-8
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img03.png')
      .col-md-8.col-12.ps-4
        .cajon.color-acento-botones.p-3.mb-3
          p Es fundamental tener claridad sobre los objetivos y metas de ventas, para alinear el proceso comunicativo entre vendedor y consumidor, de esta manera se encuentra la coherencia entre lo que se busca ofrecer y lo que el cliente recibirá a cambio (Martínez, 2017).        
        h4.mb-3 <span style="background-color:#12263F !important; font-weight: bold; color:#FFFFFF !important;">Hay que considerar que la comunicación comercial tiene características particulares, entre ellas:</span>
        .row.justify-content-center.align-items-center
          .col-md-3.col-6.BG04.p-4.m-3
            figure(data-aos="fade-right")
              img.w-50.ms-5(src='@/assets/curso/tema4/img04.png')
            p Informar y dar a conocer un producto o servicio en línea.
          .col-md-3.col-6.BG04.p-4.m-3
            figure(data-aos="fade-right")
              img.w-50.ms-5(src='@/assets/curso/tema4/img05.png')
            p Busca persuadir al consumidor y pretende que el cliente recuerde lo que ofrece el negocio.
          .col-md-3.col-6.BG04.p-4.m-3
            figure(data-aos="fade-right")
              img.w-50.ms-5(src='@/assets/curso/tema4/img06.png')
            p Cerrar ventas y que el cliente tenga claridad de lo que obtiene a cambio de su compra.

            
  .container.container02.px-4.px-md-5.pb-4
    separador



</template>

<script>
export default {
  name: 'Tema4',
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

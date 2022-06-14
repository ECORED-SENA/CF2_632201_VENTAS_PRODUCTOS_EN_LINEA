<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BGIMG03.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Requerimientos del cliente
  
    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-8.p-0.mt-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img02.png')
      .col-md-8.col-12.BG01.p-3(data-aos="fade-left")    
        p <b>Las organizaciones centradas en el cliente deben considerar las necesidades que los productos y servicios resuelven.</b> De manera elemental, todas las personas necesitan tener algo por deseo o necesidad, de la mejor calidad, al instante y al precio correcto. <b>Los requerimientos se basan en la gestión y profundización del producto y sus atributos, la funcionalidad que representa, los costos implicados y la disponibilidad para el cliente.</b>      
        .row.justify-content-center.align-items-center.mb-2
          .col-md-1.py-4
            figure
              img(src='@/assets/curso/tema2/img04.svg')
          .col-md-10
            p <span style="color:#0B67D1 !important; font-weight: bold;"> La teoría de los tres cerebros de Lean (1978), </span> proviene de la neurociencia y establece que el cerebro humano se encuentra estructurado por tres factores, un cerebro reptiliano, un cerebro límbico y un cerebro neocórtex. <span style="color:#0B67D1 !important; font-weight: bold;"> De acuerdo con los fundamentos de esta teoría, cada componente del cerebro humano cumple una función, de tal forma que el cerebro reptiliano se asocia con procesos de supervivencia, el cerebro límbico con procesos emocionales y el cerebro neocórtex con procesos racionales.</span>
      .col-md-12
        .cajon.color-acento-botones.p-3
          p A partir del conocimiento de cómo funciona el cerebro humano, se podrían concluir algunos requerimientos elementales de todo cliente, así, la mayoría de las campañas, en los últimos años, apuntan a estimular o llegar al cerebro emocional y reptil, pues consideran que es aquí dónde está el “interruptor de compra” (Arboleda, 2018), al fin y al cabo, las ventas son acciones que están más enfocadas en el cerebro primitivo.

    .row.justify-content-center.mb-5
      .col-md-10
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 9
          span Teoría de los 3 cerebros de Paul MacLean 
      .col-md-10.col-12
        figure
          img(src='@/assets/curso/tema3/img03.svg')

  .container.BG02.px-4.px-md-5
    h4.mb-5 <span style="background-color:#12263F !important; font-weight: bold; color:#FFFFFF !important;">El contexto general de los requerimientos del cliente los explica el instructor en el siguiente elemento audiovisual: </span>

    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 3.1.	Propuestas de valor y factores clave

  .container.BGIMG04.p-4.p-md-5
    .bloque-texto-g.color-secundario.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos="zoom-in")(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4  
        p.mb-0 Es conveniente que las estrategias de ventas estén enfocadas a lograr convencer y enamorar el público en tres aspectos (uno para cada cerebro), de los cuales se desprenden los demás elementos de las propuestas de valor ganadoras así:

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img05.svg')
          h4 Seguridad (reptiliano) 
          p De manera natural, los animales, incluyéndonos, nos gusta tomar riesgos, esto es un factor para el éxito de marcas y productos es la confianza, seguridad y respaldo que puedan representar.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img06.svg')
          h4 Placer (límbico)
          p Corresponde al desarrollo de sensaciones o emociones positivas y agradables, que estimulen la generación de dopamina o sensación de felicidad (Asprilla, 2019). 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.pb-5 
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/img07.svg')
          h4 Utilidad (neocórtex)
          p.mb-4 Beneficio o conveniencia de algo con los interés u objetivos de alguien. 

  .container.container02.px-4.px-md-5.pb-4
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-12.p-3(data-aos="fade-right")
        p <span style="color:#0B67D1 !important; font-weight: bold;">Si bien es importante que todos los productos y servicios del negocio estén bajo el contexto de estos tres componentes, es normal que para algunas personas haya más ponderación en uno más que otros cerebros, por ejemplo, para clientes corporativos, se debe enfocar en satisfacer requerimientos racionales, en cambio, para consumidores masivos funciona mejor los enfoques al cerebro reptiliano y límbico. </span> En este orden, conviene identificar cuál es el requerimiento cerebral predominante en cada cliente y enfatizar la propuesta de valor o presentación en la satisfacción de sus exigencias.
      .col-md-4.col-8.p-0.mt-3
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img09.png')

    separador

    #t_3_2.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 3.2.	Algunos requisitos para mejorar experiencias de los clientes

    p.mb-5 Actualmente, los clientes se han vuelto más exigentes y más escasos, pues el número de ofertas disponible para todos aumenta aceleradamente cada día no solo por la facilidad de crear un negocio online, sino también por las tendencias en aumento de compras usando medios digitales.
    h4.mb-5 <span style="background-color:#12263F !important; font-weight: bold; color:#FFFFFF !important;">Algunas claves importantes para tener en cuenta, al momento de pensar en la satisfacción del cliente, son:</span>

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-8.px-3.mb-2
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img10.png')
      .col-md-7.col-11.mb-2
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-end.BGIMG05.pb-5
            .col-md-9.col-11.mt-5
              .cajon-b.color-primario.p-3.mb-3
                h5 Comunicación y atención 
                p “Los clientes antes tenían la razón, ahora tienen el poder”. Disponer de canales comunicativos fáciles de encontrar y usar se vuelven de gran valor para los clientes, a todos nos gusta ser escuchados, sentirnos acompañados, tener soporte y que respondan las preguntas de manera oportuna y de manera correcta es un aspecto que motiva a seguir usando la marca y/o recomendarla.
          .row.justify-content-center.align-items-end.BGIMG06.pb-5
            .col-md-9.col-11.mt-5
              .cajon-b.color-primario.p-3.mb-3
                h5 Servicio oportuno  
                p Se trata de atender las necesidades y expectativas de los clientes en el momento adecuado y por el canal adecuado. Además de tener la creatividad y conocimiento de usar los productos o servicios disponibles que más se ajusten a las exigencias expuestas.
          .row.justify-content-center.align-items-end.BGIMG07.pb-5
            .col-md-9.col-11.mt-5
              .cajon-b.color-primario.p-3.mb-3
                h5 Incluir a los clientes en los productos  
                p Ya sea para el desarrollo de un producto o si existe la posibilidad de ofrecer artículos que el cliente lo pueda personalizar, es necesario incluirlo en la promoción de la oferta poniendo sus opiniones en los medios de la empresa, esto hace sentir de maravilla a estos clientes, pues ser protagonistas y sentirse importantes llena el cerebro de químicos positivos. 
          .row.justify-content-center.align-items-end.BGIMG08.pb-5
            .col-md-9.col-11.mt-5
              .cajon-b.color-primario.p-3.mb-3
                h5 Realimentar el servicio  
                p Se debe procurar que los clientes realimenten después de la compra para saber más sobre expectativas y cumplimiento de requerimientos. Podrían ser comentarios en redes o privados, calificaciones del producto, encuestas, espacios para PQR.



</template>

<script>
export default {
  name: 'Tema3',
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

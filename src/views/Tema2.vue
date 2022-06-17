<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.container01.px-4.px-md-5.pt-4
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Habeas data y normatividad vigente

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-8.p-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img01.png')
      .col-md-8.col-12.BG01.p-3(data-aos="fade-left")    
          p <span style="background-color:#ECE5F7 !important; font-weight: bold;">Cuando las empresas usan datos personales para aplicar técnicas y tareas de <em>marketing</em> deberán valorar aspectos éticos</span><span style="color:#7F4FC7 !important; font-weight: bold;">(Ronda, 2013). </span> Aquí se tiene la capacidad de ahondar y conocer los pensamientos más profundos y privados de los consumidores deberá realizarse de forma transparente y destinando la información obtenida a la creación de productos y servicios que satisfagan las necesidades y deseos reales de los consumidores. <b>Además, permite conocer las rutas y hábitos para la decisión de compra teniendo la susceptibilidad de ser manipulado y, asimismo, evitar publicar anuncios engañosos o abusivos aprovechando la vulnerabilidad o necesidad de algún grupo poblacional</b>. Es importante anotar que los procesos de información deben tener autorización por parte de los implicados.

    separador

    #t_2_1.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 2.1.	Manejo de la información personal - Habeas data

  .container.BGIMG02.pe-5.pt-4
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-12.BG02.px-3.ps-5.mb-5.order-md-1.order-2(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-2
          .col-md-1.py-4
            figure
              img(src='@/assets/curso/tema2/img04.svg')
          .col-md-10
            p El derecho de habeas data es aquel que tiene toda persona para conocer, actualizar y rectificar la información que se haya recogido sobre ella en archivos y bancos de datos de naturaleza pública o privada. (Superintendencia de Industria y Comercio, 2021).
        p La normatividad en Colombia está sustentada en la Ley 126 de 2008, en diversas sentencias posteriores de la Corte y otras disposiciones que van actualizando la ley a medida de las necesidades.
        .cajon.color-acento-botones.p-3
          p Es importante tener en cuenta algunos concretos que se encuentran en la norma, según la Superintendencia de Industria y Comercio (2021), a saber:
      .col-md-4.col-8.p-0.mb-5.order-md-2.order-1
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img03.png')  
      .col-md-5.col-10.p-0.ps-5.mb-5.order-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img05.svg') 
      .col-md-7.col-11.ps-5.order-4(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row.justify-content-center.align-items-center(numero="1" titulo="Titular de la información")
            .col-md-11
              p Persona natural o jurídica a quien se refiere la información que reposa en un banco de datos.
          .row.justify-content-center.align-items-center(numero="2" titulo="Operador de información")
            .col-md-2.col-3
              figure
                img(src='@/assets/curso/tema2/img06.svg') 
            .col-md-8.col-7
              p Persona u organización que recibe de la fuente datos personales sobre varios titulares de la información, los administra y los pone en conocimiento de los usuarios bajo los parámetros de la ley.
          .row.justify-content-center.align-items-center(numero="3" titulo="Usuario de la información")
            .col-md-2.col-3
              figure
                img(src='@/assets/curso/tema2/img07.svg') 
            .col-md-8.col-7
              p Persona natural o jurídica que puede acceder a información personal de uno o varios titulares de la información suministrada por el operador o por la fuente, o directamente por el titular de la información.
          .row.justify-content-center.align-items-center(numero="4" titulo="Dato personal")
            .col-md-2.col-3
              figure
                img(src='@/assets/curso/tema2/img08.svg') 
            .col-md-8.col-7
              p Información vinculada a una o varias personas determinadas o determinables o que puedan asociarse con una persona natural o jurídica. Los datos personales pueden ser públicos, semiprivados o privados. 
          .row.justify-content-center.align-items-center(numero="5" titulo="Principio de finalidad")
            .col-md-2.col-3
              figure
                img(src='@/assets/curso/tema2/img09.svg') 
            .col-md-8.col-7
              p Obliga a que las actividades de recolección de datos personales obedezcan a una finalidad legal. Con fundamento en este principio, la finalidad debe ser comunicada al titular de la información previa o concomitante con el otorgamiento del titular de la autorización.
          .row.justify-content-center.align-items-center(numero="6" titulo="Circulación restringida")
            .col-md-2.col-3
              figure
                img(src='@/assets/curso/tema2/img10.svg') 
            .col-md-8.col-7
              p Consiste en que, a menos que la información sea pública, los datos personales no podrán ser accesibles por Internet o por otros medios de divulgación o comunicación masiva, salvo algunas salvedades definidas por la ley.
          .row.justify-content-center.align-items-center(numero="7" titulo="Principio de seguridad")
            .col-md-2.col-3
              figure
                img(src='@/assets/curso/tema2/img11.svg') 
            .col-md-8.col-7
              p La información contenida en los bancos de datos, así como aquella que resulte de las consultas que realicen los usuarios, se incorporen las medidas técnicas necesarias para garantizar la seguridad de los registros para evitar su adulteración, pérdida, consulta o uso no autorizado.
          .row.justify-content-center.align-items-center(numero="8" titulo="Principio de confidencialidad")
            .col-md-2.col-3
              figure
                img(src='@/assets/curso/tema2/img12.svg') 
            .col-md-8.col-7
              p Todas las personas naturales o jurídicas que intervengan en la administración de datos personales que no tengan carácter público, están obligadas en todo tiempo a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende la administración de datos.

    .row.justify-content-center.mb-5
      .col-lg-8.col-md-10.col-12(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-md-2.col-3
            figure
              img(src='@/assets/curso/tema2/img13.svg') 
          .col-md-9
            h5 Redondeando el importante concepto de los datos digitales se tiene lo siguiente por parte del experto:

  .container.container02.px-4.px-md-5.pb-4
    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    


</template>

<script>
export default {
  name: 'Tema2',
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

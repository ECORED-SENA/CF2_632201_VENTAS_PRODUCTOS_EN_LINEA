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
        figure.mb-5(data-aos="fade-right")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center.mb-5
          .col-md-2.col-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema5/img06.svg')
          .col-md-7.col-9
            p La naturaleza digital tiene un contexto global, es decir, <span style="color:#7F4FC7 !important; font-weight: bold;">el alcance y la presencia en el mundo digital están disponibles desde cualquier país y momento.</span> Parte de las características de las redes sociales son:
        SlyderA.BGIMG10.p-3.mb-5(tipo="b")(data-aos="fade-right")
          .row.justify-content-center.align-items-center.p-4
            .col-md-5.BGIMG11.pt-5
              .row.justify-content-center.align-items-end.pt-5
                .col-12
                  h4 Semiestructuradas
                  p.mb-0 No existe una organización formal y se hace compleja la filtración u organización estructural exacta.
            .col-md-3
              figure.ms-5
                img(src='@/assets/curso/tema1/img05.svg')
          .row.justify-content-center.align-items-center.p-4
            .col-md-4.me-5
              figure
                img(src='@/assets/curso/tema1/img06.svg')
            .col-md-5.BGIMG12.pt-5
              .row.justify-content-center.align-items-end.pt-5
                .col-12
                  h4 Plataformas horizontales
                  p.mb-0 Indica que entre los usuarios no hay una orden de mando sobre otros, la responsabilidad es la misma (en algunos casos, las opciones se amplían para usuarios de pago).
          .row.justify-content-center.align-items-center.p-4
            .col-md-5.BGIMG13.pt-5
              .row.justify-content-center.align-items-end.pt-5
                .col-12
                  h4 Entornos abiertos
                  p.mb-0 Es una red de usuarios que entran y salen a su voluntad, así como los contenidos y publicaciones.
            .col-md-3
              figure.ms-5
                img(src='@/assets/curso/tema1/img08.svg')
          .row.justify-content-center.align-items-center.p-4
            .col-md-3.me-5
              figure
                img(src='@/assets/curso/tema1/img10.svg')
            .col-md-5.BGIMG14.pt-5
              .row.justify-content-center.align-items-end.pt-5
                .col-12
                  h4 Carácter informal
                  p.mb-0 al ser abierto y poco estructurado, cuenta con sinnúmero de publicaciones que no están sobre bases formales de rigurosidad fidedigna.
        .BGIMG03.p-3
          .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-12
                .bloque-texto-a__texto.p-4
                  p Una de las empresas más grandes del mercado a nivel mundial se llama Meta, casa matriz de Facebook, y las siguientes son algunas de las herramientas que esta empresa dispone para el trabajo de los empresarios en relación con l comunicación en canales digitales:
          .row.justify-content-center.align-items-center.mb-5
            .col-md-4.col-8.mb-3
              figure
                img(src='@/assets/curso/tema1/img12.png')
            .col-md-8.col-12.mb-3.BG13
              .row  
                .col-auto
                  .BG12.mb-0.px-2.py-1
                    h3.mb-0.text-white Facebook
                .col-12.p-3
                  p esta es la red social principal de la empresa Meta, <b>tiene varias herramientas nativas disponibles para empresas, cada una tiene sus métodos, formas y técnicas para aplicar, no se trata de estar en todo, se trata de seleccionar el canal y herramienta y usarlas bien.</b> Hay tantas redes sociales y cada una tiene diversas herramientas, que abordarlas todas podría ser complejo, pues cada una tiene sus especificidades que podrían ser muy técnicas y complejas; te presentamos algunas opciones de Facebook:
          .row.mb-5
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta--boton.color-secundario.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/img13.svg')
                h4 Facebook Marketplace 
                p Espacio donde se pueden comprar y vender artículos de personas de comunidades y grupos conformados.
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta--boton.color-secundario.p-4
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/img14.svg')
                h4 Páginas de Facebook
                p La función de las páginas es ayudar a las empresas, organizaciones y marcas a compartir sus historias y conectar con las personas. Al igual que los perfiles, las páginas se pueden personalizar con historias, eventos y mucho más.
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta--boton.color-secundario.p-4.pb-5 
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema1/img15.svg')
                h4 Facebook Reels
                p.mb-4 Son una forma de publicar videos cortos con gran contenido de entretenimiento. Son  eficientes para darse a conocer de manera práctica a nuevas audiencias y formar parte de momentos culturales en Facebook. Presentan varias opciones tales como efectos, música o usar audios propios y originales para ampliar el abanico del desarrollo de las ideas creativas.

        .row.justify-content-center.align-items-center.mb-5
          .col-md-8.col-12.mb-3.BG13
            .row  
              .col-auto
                .BG12.mb-0.px-2.py-1
                  h3.mb-0.text-white Meta Business Suite
              .col-12.p-3
                p Es un conjunto de herramientas interrelacionadas para mejorar la productividad y gestión del negocio en las principales redes sociales. Actualmente se administra actividades y publicaciones con mejores opciones de métricas y segmentación en Facebook, Messenger e Instagram. Seguramente en un futuro se integrarán otros ambientes de Meta como WhatsApp y Oculus (metaverso).            
                .tarjeta-avatar-b.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema1/img17.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul
                    .p-4
                      h2 Meta
                      p Meta a través de Facebook es toda una academia de <em>marketing</em> y proyección del negocio, es un ecosistema donde todos están y de allí parte el éxito de esta.
          .col-md-4.col-8.mb-3
            figure
              img(src='@/assets/curso/tema1/img16.png')
      #collapse02.collapse(:class="{show: hash == 2}" data-bs-parent='#MapaGroup01')
        .row.mb-5
          .col-auto.BG08.mb-4
            .h4.text-white Business Profile (perfil del negocio) de Google
        .row.mb-4
          .col-md-5.col-10.mb-3
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img18.svg')
          .col-md-7.col-12
            p.mb-4 <b>En el buscador Google, otro gigante de internet, se realizan unos 3,8 millones de búsquedas por minuto.</b> Millones de personas buscan tiendas, centros comerciales, productos, restaurantes; en pocas palabras, miles buscan negocios y miles de estas búsquedas se hacen en la zona de influencia del negocio.
            .cajon.color-primario.p-3.mb-4
              p <b>Business Profile</b>, antes Google My Business <b>(https://www.google.com/business/)</b> es un conjunto de herramientas desarrolladas por Google y enfocado en los negocios y su presencia en internet. <b>Consta de la integración de las herramientas de productividad, pero principalmente de presencia digital e indexación en el motor de búsqueda de manera adecuada</b>, pues allí entre otras configuraciones se establecen descripción de la empresa, datos de contacto, sitio web, fotos, ubicación, horario de apertura y cierre, reseñas y puntuaciones de usuarios, etc.

        .row.justify-content-center.mb-5 
          .col-md-9.col-12
            .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
              h5 Figura 1
              span Ejemplo de una organización en Google Business Profile 
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img19.jpg')
        .BGIMG01.p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-md-8.col-12.mb-3.BG02.p-4
              p <span style="color:#7F4FC7 !important; font-weight: bold;">El objetivo principal es que los clientes o usuarios puedan encontrar empresas que satisfagan sus necesidades de búsqueda; </span> es decir, si buscan el nombre de un negocio, que este aparezca en recuadro con la información relevante. Las empresas más relevantes son las empresas que logran posicionarse y aparecen, al menos, en la primera página de búsqueda cuando los usuarios emplean palabras clave comerciales, sin mencionar el nombre del negocio.
              .row.justify-content-center.align-items-center
                .col-md-2.p-0 
                  figure(data-aos="fade-right")
                    img.w-75(src='@/assets/curso/tema1/img21.svg')
                .col-md-9
                  h5 Son muchas las ventajas que presenta Google para las empresas, a continuación, se muestran algunas de ellas: 
            .col-md-4.col-8.mb-3
              figure
                img(src='@/assets/curso/tema1/img20.png')
          .row.justify-content-center.mb-5
            .col-md-4.col-6.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img22.svg')
            .col-md-4.col-6.mb-3
              figure(data-aos="fade-bottom")
                img(src='@/assets/curso/tema1/img23.svg')
            .col-md-4.col-6.mb-3
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img24.svg')
            .col-md-12.mb-3
              p Es importante mencionar, que la marca Google es todo un ecosistema digital, y al igual que otras grandes compañías como Microsoft cuentan con múltiples herramientas de productividad que abarcan todo tipo y tamaño de empresas. Cuando las empresas van creciendo, también su administración se hace compleja, emplear compañías como estas podría ser una ayuda grande para mejorar el control, mediciones, flujos de procesos, comunicaciones y toda la productividad corporativa. En la siguiente figura se observan algunas de las herramientas más populares de Google:
            .col-md-8.col-11
              .titulo-sexto.color-acento-botones.mb-4(data-aos="fade-right")
                h5 Figura 2
                span Algunas herramientas de productividad Google
              figure(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img25.jpg')
        

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

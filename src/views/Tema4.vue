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
          p Es fundamental tener claridad sobre los objetivos y metas de ventas, para alinear el proceso comunicativo entre vendedor y consumidor, de esta manera se encuentra la coherencia entre lo que se busca ofrecer y lo que el cliente recibirá a cambio <span style="color:#7F4FC7 !important; font-weight: bold;">(Martínez, 2017)</span>.        
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


  .container.BG02.px-4.px-md-5.pb-4
    separador

    #t_4_2.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 4.2.	Elementos generales de la comunicación

    .bloque-texto-g.color-secundario.item-right.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img07.svg')})`}"
      )
      .bloque-texto-g__texto.p-5(data-aos="fade-left")
        p Se presentan diversos componentes que participan en el proceso comunicativo; algunos autores determinan siete, otros las resumen en cinco, sin embargo, todas coinciden en los siguientes elementos generales de la comunicación:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/img08.svg')
      .tarjeta.color-acento-contenido.p-3(x="2.8%" y="50%")
        .row.p-3
          .col-md-9.p-0
            .h5.mb-2 Emisor
            p Es el punto de partida de un mensaje, en el caso de la comunicación comercial es el actor principal que podría ser el cliente si se contacta por su propia iniciativa. Desde otro punto de vista, el emisor podría configurarse con mensajes publicitarios o máquinas que llamen la atención del cliente para iniciar un proceso comunicativo.
          .col-md-3.p-0
            figure
              img(src='@/assets/curso/tema4/img09.svg')
      .tarjeta.color-acento-contenido.p-3(x="22.2%" y="50%")
        .row.p-3
          .col-md-9.p-0
            .h5.mb-2  Codificación
            p Aquí se da la forma al mensaje para facilitar su transmisión.
          .col-md-3.p-0
            figure
              img(src='@/assets/curso/tema4/img10.svg')
      .tarjeta.color-acento-contenido.p-3(x="43.1%" y="43.1%")
        .row.p-3
          .col-md-9.p-0
            .h5.mb-2 Canal
            p Medio físico o digital por donde el mensaje es transmitido, actualmente existen diversidad de canales, desde el natural como el aire o la luz, hasta los artificiales como medios digitales, teléfonos, etc. 
          .col-md-3.p-0
            figure
              img(src='@/assets/curso/tema4/img11.svg')
      .tarjeta.color-acento-contenido.p-3(x="43.1%" y="55.7%")
        .row.p-3
          .col-md-9.p-0
            .h5.mb-2 Mensaje
            p Se refiere a la propia información que el emisor transmite.
          .col-md-3.p-0
            figure
              img(src='@/assets/curso/tema4/img12.svg')
      .tarjeta.color-acento-contenido.p-3(x="63.5%" y="50%")
        .row.p-3
          .col-md-9.p-0
            .h5.mb-2 Decodificación
            p Es la forma como el receptor identifica lo que le están contando.
          .col-md-3.p-0
            figure
              img(src='@/assets/curso/tema4/img13.svg')
      .tarjeta.color-acento-contenido.p-3(x="86.6%" y="50%")
        .row.p-3
          .col-md-9.p-0
            .h5.mb-2 Receptor
            p Se refiere a quién recibe la información. En un proceso de comunicación comercial, la interacción entre vendedor y cliente se hace dinámica y constantemente se intercambian roles entre emisor receptor (lo que se denomina realimentación). Incluso, al igual que el emisor, podrían ser entornos cibernéticos o máquinas entre humano a humano o humano a máquina (chatbot).
          .col-md-3.p-0
            figure
              img(src='@/assets/curso/tema4/img14.svg')
      .tarjeta.color-acento-contenido.p-3(x="43.1%" y="76.4%")
        .row.p-3
          .col-md-9.p-0
            .h5.mb-2 Contexto
            p Son las circunstancias temporales, espaciales e intenciones (en este caso realizar una venta), que rodean el hecho o acto comunicativo y que permite comprender el mensaje en su justa medida.
          .col-md-3.p-0
            figure
              img(src='@/assets/curso/tema4/img15.svg')

  .container.BGIMG04.p-4.p-md-5
    h4.mb-3 <span style="background-color:#12263F !important; font-weight: bold; color:#FFFFFF !important;">Esquema de la comunicación </span>
    .row.justify-content-center.mb-3
      .col-md-8.col-11
        figure
          img(src='@/assets/curso/tema4/img16.svg')
  
  .container.BG02.px-4.px-md-5.pb-4
    separador

    #t_4_3.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 4.3.	Niveles de comunicación comercial

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-8.mb-2.ps-4
        figure
          img(src='@/assets/curso/tema4/img17.png')
      .col-md-8.col-12.BG05.p-4
        .row.justify-content-center
          .col-md-12
            p En este segmento, se verán varios niveles según sus características, en primer lugar, caracterización de la comunicación comercial según el canal, y luego la caracterización según el contexto.
          .col-md-6.col-10.p-3
            .row.justify-content-center.align-items-center.BG06 
              .col-2.p-0
                figure
                  img(src='@/assets/curso/tema4/img18.svg')
              .col-10
                p.text-white.mb-0 Característica según el canal
          .col-md-6.col-10.p-3
            .row.justify-content-center.align-items-center.BG07
              .col-2.p-0
                figure
                  img(src='@/assets/curso/tema4/img19.svg')
              .col-10
                p.text-white Características según el contexto

    .row.mb-5
      .col-auto
        .BG09.p-2
          h3.text-white Característica según el canal
    .row.justify-content-center.align-items-center.mb-5
      .col-md-7.order-md-1.order-2
        LineaTiempoD.color-acento-botones
          .row.justify-content-center.align-items-center(numero="1" titulo="Canales personales:")
            .col-3
              figure
                img(src='@/assets/curso/tema4/img20.svg')
            .col-9.p-3
              p se refieren a los medios cuyo fin es llegar a un target específico de manera directa. Si bien el alcance es reducido, el porcentaje de efectividad es mucho mayor que en otro tipo de canal, pues se ejecuta de manera directa y hay mayor oportunidad de interacción y persuasión. Una ventaja importante es que es controlable por la red o empresa y se debe buscar la estandarización para que la fuerza de ventas aplique estos canales y lenguaje de manera unificada. A pesar de que la formación está orientada para ventas en línea, nunca está de más tener habilidades para atender personas de manera directa, pues habrá espacios como ferias, ruedas de negocios, etc., en los que también se vende.
          .row.justify-content-center.align-items-center(numero="2" titulo="Canales impersonales:")
            .col-3
              figure
                img(src='@/assets/curso/tema4/img21.svg')
            .col-9.p-3
              p se refiere a medios masivos para la comunicación e interacción con los clientes, tales como redes sociales, chatbots, etc. Allí se responden dudas generales y se da respuesta a un gran número de clientes que tengan la misma pregunta. No siempre se deja esto a la tecnología, pues también se puede contar con personal capacitado que atienda en determinado momento de manera más personal, las inquietudes de clientes online. 
          .row.justify-content-center.align-items-center(numero="3" titulo="Canal cibernético:")
            .col-3
              figure
                img(src='@/assets/curso/tema4/img22.svg')
            .col-9.p-3
              p con el avance de la tecnología y las nuevas realidades productivas, la inteligencia artificial va asumiendo canales con características mixtas, es decir, tanto el personal como el impersonal. Se están desarrollando herramientas digitales con la capacidad de atender a miles de clientes a la vez y que, por su programación e información integrada en sistemas de cómputo, tendrán conocimiento preciso del cliente, dándole respuestas puntuales según el cliente que consulte. 
      .col-md-5.col-8.order-md-2.order-1.mb-md-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img23.svg')           

    .row.mb-5
      .col-auto
        .BG09.p-2
          h3.text-white Características según el contexto
  
  .container.BGIMG04.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5 
      .col-md-6.mb-2.px-3
        .row.BG10.align-items-center.p-3.py-4
          .col-2.ms-4.mb-5.p-0
            figure
              img(src='@/assets/curso/tema4/img24.svg') 
          .col-9.mt-5
            p.text-white Nivel corporativo
          .col-md-10
            p.text-white este busca gestionar la reputación de la empresa, que es un intangible importante, pues se refiere a cómo el público percibe la marca. Es importante comunicar honestidad, buen servicio, imagen organizada, ética, entre otros valores corporativos. 
          .col-md-9.col-8
          .col-md-2.col-4
            figure
              img(src='@/assets/curso/tema4/img26.svg') 
      .col-md-6.mb-2.px-3
        .row.BG10.align-items-center.p-3.py-4
          .col-2.ms-4.mb-5.p-0
            figure
              img(src='@/assets/curso/tema4/img25.svg') 
          .col-9.mt-5
            p.text-white Nivel de marca
          .col-md-10
            p.text-white el objetivo de este nivel es construir una imagen que el público la identifique con facilidad, esto ayuda a comercializar los productos y servicios. Está muy asociado a lo visual, con la disposición de la publicidad en canales de venta.
          .col-md-9.col-8
          .col-md-2.col-4
            figure
              img(src='@/assets/curso/tema4/img26.svg') 
    separador

    #t_4_4.titulo-segundo.color-acento-contenido.ms-5(data-aos="fade-right")
      h2 4.4.	Técnicas y habilidades en la comunicación comercial

    .bloque-texto-g.color-acento-contenido.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos="zoom-in")(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img27.png')})`}"
      )
      .bloque-texto-g__texto.p-4  
        p.mb-0 La comunicación y el contacto con el público son claves para el éxito, existen personas que de manera natural tienen la habilidad persuasiva de vender “hasta corbatas en un desierto”, de ahí la importancia de tener el dominio de usar técnicas y destrezas en el arte de la comunicación en la venta. A continuación, se mencionan algunos elementos importantes, que se deben asumir para el buen desempeño de las labores:

  .container.container02.px-4.px-md-5.pb-4        
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Seguridad" :icono="require('@/assets/curso/tema4/img28.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-11
            h4.mb-3 Seguridad
            p Lo primero es dominar los productos, planes y servicios del portafolio de servicios. Un vendedor que improvisa y empieza a dar explicaciones de productos de manera insegura, difícilmente proyecta confianza, una de las maneras efectivas para contrarrestar el titubeo es dominar con propiedad los servicios y productos que se venden.
          .col-md-3.col-6
            figure
              img(src='@/assets/curso/tema4/img33.svg') 
      .py-4.py-md-5(titulo="Asertividad en la comunicación" :icono="require('@/assets/curso/tema4/img29.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-11
            h4.mb-3 Asertividad en la comunicación
            p Se podría preparar todo un curso completo sobre la comunicación asertiva, sin embargo, es importante mencionar que en la práctica un vendedor no se centra en vender, sino que su objetivo principal es cooperar con el cliente. Es un vendedor que, además, logra la combinación perfecta entre una conducta agresiva y pasiva en el momento de la venta (Nuño, 2018). El concepto asertividad está asociado al momento, persona, palabras y actitudes adecuadas para que el mensaje llegue de la mejor forma, de manera popular, podría referirse a ese “tacto” al comunicar ya sea para ofrecer un producto, resolver una duda, o calmar disgustos de los clientes.
          .col-md-3.col-6
            figure
              img(src='@/assets/curso/tema4/img34.svg') 
      .py-4.py-md-5(titulo="Analizar y conocer el segmento de mercado" :icono="require('@/assets/curso/tema4/img30.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-11
            h4.mb-3 Analizar y conocer el segmento de mercado
            p Es importante conocer y alinearse a las necesidades del público, así como las maneras de establecer relaciones comerciales con las personas de la zona, si bien cada cliente es diferente, por lo general, hay factores comunes según la ciudad, barrio o sector donde se realizan las ventas. Es importante enfocarse, entonces, en el contexto social y entender las motivaciones de los compradores.
          .col-md-3.col-6
            figure
              img(src='@/assets/curso/tema4/img35.svg') 
      .py-4.py-md-5(titulo="Escuchar de manera activa " :icono="require('@/assets/curso/tema4/img31.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-11
            h4.mb-3 Escuchar de manera activa 
            p Dejar que la persona se manifieste da la ventaja de recibir información del cliente para saber qué ruta y qué manera de atención es la más adecuada para aumentar el éxito de venta. Escuchar de manera adecuada (con contacto visual y demostrando atención), proporciona sensaciones agradables para el cliente haciéndolo sentir importante y aumentar su confianza. Adicionalmente, al identificar el perfil del cliente se sabrá qué producto y servicio adicional podría necesitar esta persona.
          .col-md-3.col-6
            figure
              img(src='@/assets/curso/tema4/img36.svg') 
      .py-4.py-md-5(titulo="Responder las objeciones con paciencia" :icono="require('@/assets/curso/tema4/img32.svg')")
        .row.justify-content-center.align-items-center
          .col-md-8.col-11
            h4.mb-3 Responder las objeciones con paciencia
            p Ocasionalmente, hay clientes que se interesan, pero se oponen a la compra, el truco es convencer sin coaccionar, no repetir lo mismo que ya se le dijo para que compre, se debe intentar indagar las motivaciones de la indecisión de compra e identificar la razón para moverse en la satisfacción de su objeción a la compra.
          .col-md-3.col-6
            figure
              img(src='@/assets/curso/tema4/img37.svg') 


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

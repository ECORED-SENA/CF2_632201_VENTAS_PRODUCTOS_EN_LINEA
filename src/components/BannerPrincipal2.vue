<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.justify-content-around     
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .col-lg-11
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Iniciar
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        img(:src="globalData.imagenBannerPrincipal") 

    .imagen_flotante_1.d-none.d-lg-block: img(src="@/assets/curso/portada/float1.png")
    .imagen_flotante_2.d-none.d-lg-block: img(src="@/assets/curso/portada/float2.png")
    .imagen_flotante_3.d-none.d-lg-block: img(src="@/assets/curso/portada/float3.png")    
    .imagen_flotante_4.d-none.d-lg-block: img(src="@/assets/curso/portada/float4.png")    
    .imagen_flotante_5.d-none.d-lg-block: img(src="@/assets/curso/portada/float5.png")    
    
  

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  //padding-left: 80px  !important
  z-index: 3


.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  .banner-principal__img
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 80px
    bottom: 35%
    right: 43%
    @media (max-width: $bp-max-lg)
      width: 65px
      right: 38%
    @media (max-width: $bp-max-xl)
      width: 65px
      right: 38%

  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 75px
    bottom: 75%
    right: 27%
    @media (max-width: $bp-max-lg)
      width: 60px !important
      bottom: 75% !important
      right: 24% !important
    @media (max-width: $bp-max-xl)
      width: 65px !important
      right: 24% !important
      bottom: 75% !important
  &_3
    animation: float1 4.5s ease-in-out infinite alternate
    position: absolute
    width: 75px
    top: 15%
    right: 15%
    @media (max-width: $bp-max-lg)
      width: 60px !important
      right: 10% !important
    @media (max-width: $bp-max-xl)
      width: 75px !important
      right: 10% !important
  &_4
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 100px
    bottom: 22%
    right: 7%
    z-index: 99
    @media (max-width: $bp-max-lg)
      width: 80px !important
      right: 2% !important
      top: 60% !important
    @media (max-width: $bp-max-xl)
      width: 85px !important
      right: 3% !important
      top: 60% !important
  &_5
    animation: float1 5s ease-in-out infinite alternate
    position: absolute
    width: 90px
    bottom: 12%
    right: 18%
    z-index: 99
    @media (max-width: $bp-max-lg)
      width: 70px !important
      right: 15% !important
      top: 70% !important
    @media (max-width: $bp-max-xl)
      width: 75px !important
      right: 15% !important
      top: 70% !important



@keyframes float1
  0%
    transform: translateY(20px)

  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1.1)

  100%
    transform: scale(1)


@media (max-width: $bp-max-md)
  .container
    background-image: none !important
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover

@media (max-width: $bp-max-xl)
  .imagen_flotante
    &_2
      animation: float1 3.5s ease-in-out infinite alternate
      position: absolute
      width: 70px
      bottom: 45%
      right: 35%
    &_3
      animation: float1 4.5s ease-in-out infinite alternate
      position: absolute
      width: 75px
      top: 7%
      right: 33%
    &_4
      animation: float1 3s ease-in-out infinite alternate
      position: absolute
      width: 90px
      top: 15%
      right: 1%
      z-index: 99
    &_5
      animation: float1 3s ease-in-out infinite alternate
      position: absolute
      width: 100px
      bottom: 25%
      right: 2%
      z-index: 99
</style>

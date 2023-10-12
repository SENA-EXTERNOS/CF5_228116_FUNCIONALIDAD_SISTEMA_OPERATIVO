<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estimado aprendiz. Con el paso del tiempo la configuración de un sistema operativo según el <i>hardware</i> a utilizar, se ha convertido en tendencia debido a que ambos son necesarios  y de suma importancia para que un dispositivo eléctrico funcione correctamente. Partiendo de lo indicado anteriormente, a través de este componente formativo, podrá explorar las tareas y funciones que se llevan a cabo de diferentes formas cuando se diseña un sistema operativo. Además, logrará conocer todo lo relacionado con los dispositivos de <em>software</em>, la seguridad y gestión de la información, entre otros puntos, que le serán útiles y funcionales a la hora de verificar la funcionalidad de este proceso, siempre teniendo como finalidad su funcionamiento, desarrollo y ejecución de manera óptima, con el fin de propiciar resultados caracterizados por la excelente calidad.  

    p(data-aos="fade-down").mb-5 Por favor analice el siguiente video el cual lo introducirá a todo lo relacionado con el desarrollo de un sistema operativo:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/skbro7RfyPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)               
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

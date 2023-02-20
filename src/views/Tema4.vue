<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Comprobar el funcionamiento de los dispositivos T.I en compatibilidad con el <i>software</i>  

    .tarjeta.color-secundario.p-5.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/temas/23.png")

        .col-md.col-lg-6
          p(data-aos="fade-down") Todas las aplicaciones (incluyendo juegos, programas, o utilidades) que fueron creadas para versiones anteriores funcionarán en la última versión de Windows 10 incluso Windows 11, pero podría suceder que algunos programas antiguos se ejecuten con problemas o no lo hagan en absoluto. 

          p(data-aos="fade-down").mb-4 Estas son algunas maneras de solucionar problemas comunes con programas antiguos:
          
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo_1.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download 

    .row.align-items-stretch.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Estimado aprendiz. Ha llegado al final de este componente formativo. Se espera que continúe recorriendo este camino lleno de aprendizajes. Recuerde explorar los recursos que se encuentran disponibles. Diríjase al menú principal en el cual encontrará la síntesis del tema abordado, una actividad didáctica, material complementario, entre otros.                      
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

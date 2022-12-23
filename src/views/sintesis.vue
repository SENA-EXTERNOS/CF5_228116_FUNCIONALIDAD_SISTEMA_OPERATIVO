<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down").mb-5 Dentro de las configuraciones del sistema operativo es importante identificar que al encender el computador se realiza la comprobación de <i>hardware</i>, creando una capa de acceso de <i>software</i> a nivel superior con el <i>hardware</i>. Actuando el sistema como intermediario entre el <i>hardware</i> y el usuario que permita ejecutar los programas y exista comunicación entre ambos. La seguridad del sistema que está instalado en el computador es importante mantenerla para que los dispositivos funcionen correctamente, cuando se instalan las actualizaciones presentan mejoras de funcionamiento del <i>software</i>, solucionando errores y vulnerabilidades. Debido a esto es importante conocer que existen dos formas de actualizar el sistema operativo, de forma manual, que cada usuario debe descargar desde la página oficial de cada sistema operativo; o de forma automática, que lo único que debe realizar el usuario es programar la fecha de actualización. Con estas acciones se garantiza mayor confiabilidad a la hora de interactuar entre la computadora y el usuario, así como seguridad cuando se descarga información.    

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Dispositivos y compatibilidad con el <i>software</i>

    .row.align-items-stretch.justify-content-center.mb-5
      .col-lg-8.bg1.p-2
        p(data-aos="fade-down").mb-0 Cada día la economía está migrando a tecnologías emergentes, especialmente al internet, medio que permite llevar a más personas la información. En la actualidad las empresas que ya existen tienen algún tipo de <i>software</i> que les permita una atención rápida y clara para ayudar a los clientes, en ventas, en soporte técnico, cotizaciones, entre otros. Cuando una empresa no se encuentra activa en internet, es como si no existiera. Es por ello, que la presencia del uso de sistemas de <i>software</i> es tan importante y, por tal razón todas las aplicaciones móviles o inclusive las que hacen parte de un sistema operativo están creciendo de forma exponencial.
         
      .col-lg-4.p-0 
        img.img-a.img-t(src='@/assets/curso/temas/2.png', alt='')

    .row.align-items-stretch.justify-content-center.mb-5
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/3.png', alt='')      
      .col-lg-8
        p(data-aos="fade-down") Para enfrentar este crecimiento de demanda, los desarrolladores van creando nuevos programas que permiten acceder de forma más sencilla a toda la información. Para ello, se debe garantizar que todos los diferentes sistemas operativos no generen conflicto a la hora de acceder desde cualquier dispositivo, para ello solo se necesita una pequeña modificación en las configuraciones tanto de <i>software</i> como de <i>hardware</i> para que se note inmediatamente la experiencia del navegante y por ende el rendimiento del sistema. 

        .color-fondo-text.bg-color(data-aos="fade-down")
          .color-fondo-text__texto 
            p Por esta razón, se debe garantizar que cada sistema instalado funcione sin interrupciones o afectaciones en cada dispositivo, cada desarrollador debe realizar comprobaciones en cada una de las versiones, sistemas operativos y los posibles dispositivos en los cuales se estima aplicar. Todas estas tareas se hacen con el fin de comprobar la compatibilidad del <i>software</i> con el sistema y ver si funciona.

    p(data-aos="fade-down").mb-5 Existen actividades que permiten identificar las pruebas de compatibilidad de los sistemas operativos. A continuación, se describirán:
    
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Actividad 1")
            .col-10
              p El agotamiento que sufre un sistema operativo con un <em>software</em> de prueba al que se le está instalando, permite verificar la funcionalidad básica, especialmente en el arranque; se revisan los buses de entradas y salidas <em>(E/S)</em>, la memoria y la unidad de procesamiento central <em>CPU</em>. La mayoría de los proveedores de marcas reconocidas brindan asistencia física o remota para brindar solución a sus clientes que presentan problemas con el sistema operativo, en los que se involucran los periféricos y las placas para los servidores que tienen o no las incluyen.
              
          .row.justify-content-center.align-items-center(titulo="Actividad 2")
            .col-10
              p Cuando se realizan instalaciones, se debe garantizar la conectividad y funcionalidad de los controladores integrados en cada placa de servidor. 
          .row.justify-content-center.align-items-center(titulo="Actividad 3")
            .col-10
              p Cuando se presentan estos inconvenientes de compatibilidad, significa que el programa no se interpreta correctamente o en definitiva nunca ha podido interpretar un algoritmo, esto implica que hay un fallo de ejecución en la consola o que no puede ser ejecutado.  
          .row.justify-content-center.align-items-center(titulo="Actividad 4")
            .col-10
              p Cuando se desarrollan programas de código abierto, es probable que no haya problemas de tipo de incompatibilidad.  
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/4.png', alt='') 

    p(data-aos="fade-down").mb-5 Dentro de las pruebas de compatibilidad se encuentra la comprobación de la aplicación o <i>software</i>, que funciona sin inconvenientes. Cuando se realizan estas pruebas siempre se involucra esfuerzo y sobre todo tiempo, porque se deben ejecutar en diferentes equipos y plataformas. Dichas pruebas se dividen en cuatro pasos:

    .row.justify-content-center.align-items-center        
      .col-lg-10
        PasosA.color-acento-botones(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-8.my-3
              h4(data-aos="fade-left") Conformar y crear modelos de prueba
              p(data-aos="fade-left") Al empezar la creación de aplicaciones, se deben diseñar modelos de prueba que permitan conocer el movimiento del <i>software</i> en cada entorno, incluyendo navegadores, sistemas operativos, entre otros.
            .col-lg-4.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')            
          .row.justify-content-center.align-items-center
            .col-lg-4.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')            
            .col-lg-8.text-start.order-lg-2.my-3
              h4(data-aos="fade-right") Identificar el entorno
              p(data-aos="fade-right") Es importante preparar el entorno reuniendo los dispositivos y los medios necesarios para realizar las pruebas de compatibilidad. Después de realizarlas, se debe incluir la versión mínima requerida que compone el dispositivo, se procede a cargar la versión de prueba para cada una de las plataformas o sistemas operativos.
          .row.justify-content-center.align-items-center
            .col-lg-8.my-3
              h4(data-aos="fade-left") Realizar prueba
              p(data-aos="fade-left") Cuando se configura el sistema o dispositivo móvil y se ejecutan los comandos, se tiene en cuenta los modelos de prueba realizados en el primer paso, registrando todos los resultados observados para corregir los errores visibles y buscar ocultos, de esta forma solucionar todos los errores posibles.

            .col-lg-4.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')            
          .row.justify-content-center.align-items-center
            .col-lg-4.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')            
            .col-lg-8.text-start.order-lg-2.my-3
              h4(data-aos="fade-right") Validación
              p(data-aos="fade-right") En el momento en que se ejecutan los programas o <i>software</i> sin errores o inconvenientes de cualquier tipo, llega el estado en el que se validan los resultados obtenidos, comprobando de nuevo la aplicación.        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

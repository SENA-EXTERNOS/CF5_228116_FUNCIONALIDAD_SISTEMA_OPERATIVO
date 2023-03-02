<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Seguridad de la información
    .row.align-items-stretch.justify-content-center.mb-5
      .col-lg-6.bg2.p-4
        p(data-aos="fade-down").mb-0 Dentro de todas las funciones del sistema operativo, la seguridad en la información se ha manifestado como uno de los principales riesgos en la manipulación de los datos.  Según esto, su principal función es salvaguardar la privacidad e integridad de toda la información que se almacena en el centro de datos o sistema. Es casi imposible garantizar que cuando la información está en internet, este a salvo de ataques externos o hackers que desean apropiarse de la información e incluso llenar de virus el dispositivo del usuario o la empresa. Sin embargo, con la seguridad, lo que se intenta evitar es que se realice el uso inadecuado del material y los recursos que conforman todo el sistema operativo.
      .col-lg-6.p-0 
        img.img-a.img-t(src='@/assets/curso/temas/9.png', alt='')

    .row.align-items-stretch.justify-content-center.mb-5.bg3
      .col-lg-6.p-0 
        img(src='@/assets/curso/temas/10.png', alt='')  
      .col-lg-6
        .p-4
          p(data-aos="fade-down") Para el cuidado y tratamiento de los datos, se implementan políticas y procedimientos que garanticen a cada usuario el acceso a todos sus recursos. Adicionalmente se debe comprobar que cada recurso que usa el usuario tenga derecho de acceso a los mismos. Con referencia a la seguridad del <i>hardware</i> y la política de protección, cada aplicación se debe incluir dentro de todo dispositivo móvil o sistema operativo, ya que en algunas ocasiones afecta varios componentes del mismo sistema. Dentro de las características de la seguridad de la información es importante tener en cuenta ciertas pautas:

          ul.lista-ul(data-aos="fade-down")
            li 
              i.fas.fa-angle-right.colorv
              p.mb-0 Direccionar la confidencialidad de los datos a utilizar.
            li              
              i.fas.fa-angle-right.colorv
              p.mb-0 Medir la pérdida de datos evitando reprocesos.
            li              
              i.fas.fa-angle-right.colorv
              p.mb-0 Manipular el acceso a los datos y recursos a utilizar.

    .row.align-items-stretch.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Las recomendaciones anteriores se hacen debido a la pérdida de datos, ya sea por accidentes del usuario de forma artificial, natural o errores de <i>software</i>. Por esto, se debe garantizar a cada usuario que el sistema es confiable y está acorde a los tipos de datos que se manejan. Una de las actividades más recomendadas y utilizadas a diario son las copias de seguridad, preferiblemente en diferentes lugares para que en caso de catástrofe o pérdida de la información exista una manera de recuperarla.   

    p(data-aos="fade-down").mb-5 En otras palabras, se puede decir que cuando se habla de seguridad, se trata de un conjunto de complementos, herramientas y medidas que permiten cuidar, proteger y actuar ante los posibles ataques a los que se está expuesto en la internet. Por esta razón, para cualquier empresa o individuo, existe una guía para salvaguardar la información que a continuación, se presenta:

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-9.my-3
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Disponibilidad de <br>la información")
            p Hace referencia a la facilidad de acceso a la información y los permisos para modificarla. Según el área de trabajo, se decide si es necesario el acceso inmediato o no. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Garantía de<br> información")
            p Cuando se accede a ciertos datos y no se han realizado cambios, se conoce como garantía de información. Es decir, que lo que cada usuario puede leer es completamente confiable. Sin embargo, esta puede ser vulnerable cuando se presentan los piratas cibernéticos. Por ejemplo: cuando ingresan a instituciones privadas o públicas como colegios, universidades, entre otros, con el fin de cambiar la información a conveniencia.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Restricción de <br>información")
            p Cada empresa o incluso cada usuario, manipula información valiosa y contenido que no puede ser visible por cualquier persona. Por tal razón, es importante recordar la importancia de la seguridad en este ámbito, de tal manera se garantice la confidencialidad.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identificación")
            p Cuando llega el momento de autenticar al usuario que desea acceder, ya sea por código o cámara, deben coincidir los patrones utilizados. De esta manera muchas empresas crean medidas de seguridad con el fin de establecer un acceso seguro y garantizar que cualquier persona no pueda usar la información almacenada.                                    
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')

    p(data-aos="fade-down").mb-5 Métodos para incrementar seguridad en los sistemas operativos:
    
    .row.justify-content-center.align-items-stretch.pt-5.text-center
      .col-lg-6.bg4(data-aos="fade-right")
        img.img-a.img-t.img-top(src='@/assets/curso/temas/12.png')
        .p-5.pt-0
          h4.my-3 <i>Firewall</i> para <i>hardware</i>
          p.mb-0 Consiste en la conexión de un equipo a la red y acomodar todos los paquetes, dependiendo el área que corresponda respetando las reglas. Todas las grandes organizaciones y compañías optan por usar este <em>firewall</em>. Este debe ir conectado entre el<em> router</em> y el internet. Una de las principales características es que, al cumplir con todas las propiedades de funcionamiento no se presentan novedades o daños y por tanto no ocupa tanto espacio de memoria. Al momento de realizar mantenimiento suele ser muy difícil de actualizar. Por tal razón, la persona idónea para el monitoreo o revisión debe ser alguien con experiencia para evitar daños en otras funciones. 
      .col-lg-6.bg5(data-aos="fade-left")
        img.img-a.img-t.img-top(src='@/assets/curso/temas/13.png')
        .p-5.pt-0
          h4.my-3 <i>Firewall</i> para <i>software</i>
          p.mb-0 Se ejecuta en todos los sistemas operativos e identifica los paquetes que llegan a un equipo. Son económicos a comparación del <i>firewall</i> para <i>hardware</i> y su instalación es más sencilla. Existen ciertos detalles que impiden el correcto funcionamiento ya que consume muchos recursos de la computadora.            
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

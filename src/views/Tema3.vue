<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Gestión de la información
    .row.align-items-center.justify-content-center.mb-5.bg7.py-2.pe-5(data-aos="fade-right")
      .col-lg-4.p-0 
        img(src='@/assets/curso/temas/14.png', alt='')    
      .col-lg-8.bgw.p-0
        .p-4
          p(data-aos="fade-down").mb-0 Después de haber descrito la importancia de la seguridad y sobre todo de resaltar la autenticación, vamos a continuar hablando del control de acceso. En el control de acceso se debe realizar una dirección a personas con autorización, estas personas están autorizadas para manipular la información ya sea eliminando, agregando o editando información. En esta área se describen dos modelos diferentes: lista de control de acceso <em>(ACL)</em> y control de acceso basado en roles <em>(RBAC)</em>.

    p(data-aos="fade-down").mb-5 Una ACL es una serie de comandos del sistema operativo IOS  que controlan si un router reenvía o descarta paquetes, según la información que se encuentra en el encabezado de éste. Las ACL son una de las características del <i>software</i> IOS de Cisco  más utilizadas. Una vez están activadas, las ACL realizan las siguientes actividades:

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg8")
          .row.justify-content-start.align-items-center(titulo="Restringen el paso de la red para aumentar su rendimiento")
            .col-11
              p Por ejemplo, si la política corporativa no permite el tráfico de video en la red, se pueden configurar y aplicar <i>ACL</i> que lo bloquee. Esto reduciría considerablemente la carga de la red y aumentaría su rendimiento. 
          .row.justify-content-start.align-items-center(titulo="Proporcionan control del flujo de tráfico")
            .col-11
              p Las <i>ACL</i> pueden restringir la entrega de actualizaciones de <i>routing</i> para asegurar que provienen de un origen conocido.

          .row.justify-content-start.align-items-center(titulo="Proporcionan un nivel básico de seguridad para el acceso a la red")
            .col-11
              p Las <i>ACL</i> pueden permitir que un <i>host</i> acceda a una parte de la red y evitar que otro acceda a la misma área.
          .row.justify-content-start.align-items-center(titulo="Filtran el tráfico según su tipo")
            .col-11
              p Puede permitir el tráfico de correo electrónico, pero bloquear todo el tráfico de <i>Telnet</i>.
          .row.justify-content-start.align-items-center(titulo="Filtran a los <i>hosts</i> para permitirles o denegarles el acceso a los servicios de red")
            .col-11
              p Las <i>ACL</i> pueden permitir o denegarles a los usuarios el acceso a determinados tipos de archivos, como a los protocolos de transferencia de archivos (<i>FTP</i>) o protocolo de transferencia de hipertextos (<i>HTTP</i>).
          .row.justify-content-start.align-items-center(titulo="Los <i>routers</i> no tienen <i>ACL</i> configuradas de manera predeterminada, por lo que no filtran el tráfico")
            .col-11
              p Al ingresar esta se enruta solamente en función de la disposición de la tabla de <i>routing</i>. Sin embargo, cuando se aplica una <i>ACL</i> a una interfaz, el <i>router</i> realiza la tarea adicional de evaluar todos los paquetes de red a medida que pasan a través de ella, para determinar si el paquete se puede reenviar.” (2017, diciembre 27)                                                                       
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='')   

    .row.align-items-stretch.justify-content-center
      .col-lg-8
        .cajon.color-secundario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Detallando la información anterior, una ACL es una lista secuencial de instrucciones para permitir (permit) o denegar (deny), conocidas como entradas de control de acceso (ACE). Estas últimas también se denominan comúnmente instrucciones de ACL. Cuando el tráfico de la red atraviesa una interfaz configurada, el router compara la información dentro del paquete con cada ACE, en orden secuencial, para determinar si el paquete coincide con una de ellas. Este proceso se denomina filtrado de paquetes y controla el acceso a una red mediante el análisis de los entrantes y salientes y la transferencia o el descarte de estos según criterios determinados, puede producirse en la capa tres o capa cuatro (2017, diciembre 27).    

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down") Ahora, siguiendo con otro mecanismo de protección, se encuentra el control de acceso basado en roles (<i>RBAC</i>, por sus siglas en inglés), el cual es un mecanismo de control de acceso que define los roles y los privilegios para determinar si a un usuario se le debe dar acceso a un recurso. Los roles se definen en función de características como la ubicación, el departamento, la antigüedad o las funciones de un usuario. Los permisos se asignan según el acceso (lo que el usuario puede ver), las operaciones (lo que el usuario puede hacer) y las sesiones (cuánto tiempo puede hacerlo el usuario).

        p(data-aos="fade-down") Para realizar un correcto control de acceso se debe:
      .col-lg-5.my-3
        img(src='@/assets/curso/temas/16.png', alt='')    
 
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='')     
      .col-lg-9.my-3
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Asignar roles")
            p Un usuario puede ejercer privilegios si se le ha asignado un rol.                               
          .tarjeta.color-acento-botones--borde.p-4(titulo="Autorizar roles")
            p El rol de un usuario debe estar autorizado, lo que garantiza que los usuarios solo puedan asumir roles para los que están autorizados   
          .tarjeta.color-acento-botones--borde.p-4(titulo="Autorizar<br> privilegios")
            p Un usuario puede ejercer ciertos privilegios si está autorizado para hacerlo, según la asignación de roles. Las funciones del <i>RBAC</i> son un compromiso con el principio de mínimo privilegio. El <i>RBAC</i> ayuda a lograr la seguridad de <i>Zero Trust</i> al asignar la menor cantidad de permisos de acceso a un usuario. El rol define el conjunto de permisos que necesita el usuario para realizar las tareas comerciales asociadas con su función laboral   
          .tarjeta.color-acento-botones--borde.p-4(titulo="Reducir la  carga <br>administrativa")
            p Utilice el <i>RBAC</i> para agregar y cambiar los roles rápidamente e implementarlos globalmente en todos los sistemas operativos, plataformas y aplicaciones. Además, reduce la posibilidad de error al asignar permisos de usuario. El <i>RBAC</i> también integra fácilmente a los usuarios de terceros en su red. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Separar tareas")
            p Como los roles están separados, en teoría, ningún usuario individual puede causar una infracción significativa, ya que un <i>hacker </i>estaría limitado a los recursos a los que se le permitió acceder a esa cuenta 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cumplimiento<br> mejorado")
            p El <i>RBAC</i> ayuda a las organizaciones a cumplir con las normas para la protección de datos y la privacidad, así como con los requisitos legales impuestos por los organismos gubernamentales regionales y locales. Esto es posible ya que los departamentos de TI y los ejecutivos pueden gestionar los permisos de acceso a los datos según los roles de los usuarios.   

    
    h2(data-aos="zoom-in-left") Diseño de informes técnicos sobre instalaciones
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-10    
        .color-fondo-text1.bg-color(data-aos="fade-down")
          .color-fondo-text1__texto.p-2 
            p A continuación, se describe una metodología de pasos a seguir a la hora de realizar informes técnicos, en la cual encontrarán una descripción directa en cada punto, permitiendo describir de manera detallada todos los percances y detalles del proceso de instalación, con el fin de que exista una evidencia del trabajo realizado. Es importante tener presente que el lenguaje a utilizar debe ser entendible para todo tipo de persona (rol), con la finalidad de que exista comprensión y claridad en la información.  

    img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/18-.svg', alt='')     

    h2(data-aos="zoom-in-left") Normas y estándares técnicos más comunes para la entrega de informes 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La guía para presentación de informes técnicos de avance o finales está enfocada a lograr una mayor eficiencia y agilidad en el proceso de evaluación de los resultados de los proyectos realizados en una empresa. Además de reportar sobre el cumplimiento de los objetivos y obtención de los resultados comprometidos contractualmente, se constituye en fuente de información importante de los proyectos y programas financiados por la compañía o área de servicio, tecnología e innovación y para todos los posibles interesados, sobre el estado de avance e impacto del desarrollo de la aplicación o sistema operativo a usar. De igual manera, la(s) entidad(es) ejecutora(s) deberá(n) notificar oportunamente al encargado o gerente sobre cualquier dificultad o problema que pueda comprometer seriamente el desarrollo normal del proyecto, con el fin de tomar las medidas conducentes a su solución y evitar inconvenientes o factores negativos que impidan el logro de los objetivos propuestos.   

    p(data-aos="fade-down").mb-5 Los informes técnicos pueden ser de dos clases:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')     
      .col-lg-8.my-3 
        .row(data-aos="fade-left")
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/curso/temas/20.svg', alt='', style='margin-right: -100px').w-100
          .col-10.py-3.border-y
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              P Informes de avances técnicos: documento en el cual se registran los avances del proyecto financiado. Se presentan durante el desarrollo de acuerdo con las fechas establecidas en la carta de inicio del proyecto o programa, o cuando el supervisor lo considere pertinente, verificación de cumplimiento o prórrogas.

        .row(data-aos="fade-right")
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center
            img(src='@/assets/curso/temas/21.svg', alt='', style='margin-right: -100px').w-100
          .col-10.py-3.border-bot
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              P Informe final técnico: documento en el cual se registran los resultados y conclusiones sobre la ejecución del proyecto, con sus respectivos soportes y anexos, los cuales responden a los compromisos pactados en el contrato. Se entrega para evaluación al vencimiento del plazo establecido. Se pueden utilizar plantillas con formatos para entrega de informes tales como: APA, IEEE, entre otros.                           



    h2.mb-5 Comprobar el funcionamiento de los dispositivos T.I en compatibilidad con el <i>software</i>  

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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Normativa
    p(data-aos="fade-down").mb-5 Colombia cuenta con una amplia normativa relacionada con la seguridad y salud en el trabajo, que se considera un conjunto de herramientas para priorizar la protección de la salubridad laboral y transformar el Sistema de Riesgos Laborales en uno más eficiente, a continuación, se describen las normas más relevantes y que son de obligatorio cumplimiento sin importar la clasificación de la empresa.
    
    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.  
          span Normativa seguridad y salud en el trabajo     
        .tabla-a.color-acento-botones
          table
            caption Nota. Adaptada del centro de documentación SURA AR.
            thead
              tr.text-center.bgt6
                td.text-bold.w-80 Ley
                td.text-bold Qué establece
            tbody
              tr
                td.text-bold.text-center.w-80 Código Sustantivo del Trabajo
                td Cuya finalidad es la de proteger las partes involucradas en un contrato laboral, es decir, entre el trabajador y el empleador quien contrata los servicios del empleado.
              tr
                td.text-bold.text-center.w-80 Ley 1010 2006
                td Por medio de la cual se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros hostigamientos en el marco de las relaciones de trabajo.
              tr
                td.text-bold.text-center.w-80 Resolución 1401 2007
                td Por la cual se reglamenta la investigación de incidentes y accidentes de trabajo.
              tr
                td.text-bold.text-center.w-80 Resolución 2346 2007
                td Por la cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales.
              tr
                td.text-bold.text-center.w-80 Resolución 2646 2008
                td Por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas.
              tr
                td.text-bold.text-center.w-80 Resolución 652 2012
                td Por la que se establece la conformación y funcionamiento del comité de convivencia laboral en entidades públicas y empresas privadas y se dictan otras disposiciones.
              tr
                td.text-bold.text-center.w-80 Resolución 0312 2019
                td Por la cual se definen los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SGSST.
              tr
                td.text-bold.text-center.w-80 Resolución 1409 2012
                td Por la cual se establece el reglamento de seguridad para protección contra caídas en trabajo en alturas.
              tr
                td.text-bold.text-center.w-80 Decreto-Ley 1295 1994
                td Por el cual se determina la organización y administración del sistema general de riesgos profesionales.
              tr
                td.text-bold.text-center.w-80 Resolución 1792 1990
                td Por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.
              tr
                td.text-bold.text-center.w-80 Resolución 2013 1986
                td Por la cual se reglamenta la organización y funcionamiento de los comités de medicina, higiene y seguridad industrial en los lugares de trabajo.
              tr
                td.text-bold.text-center.w-80 Resolución 2400 1979
                td Por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Centro de documentación de SURA ARL
                  p(data-aos="fade-down").mb-0 Para conocer más sobre la normativa colombiana en temas de SGSST, puede consultar el enlace. Centro de documentación de SURA ARL, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.arlsura.com/index.php/decretos-leyes-resoluciones-circulares-y-jurisprudencia" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema8',
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

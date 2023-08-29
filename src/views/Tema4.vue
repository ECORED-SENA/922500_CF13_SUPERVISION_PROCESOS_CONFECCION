<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Puestos de trabajo
    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='') 

      .col-lg-7.my-3
        p(data-aos="fade-down") En las empresas del sector textil y específicamente de la confección, existen diferentes puestos de trabajo, que varían según las actividades que desarrolla la empresa, la manera como se diseñan e implementan estos puestos de trabajo tiene una relación directa con el éxito de las organizaciones. Cada puesto de trabajo debe cumplir y reflejar normas ambientales y requerimientos organizacionales para lograr que sean productivos y satisfactorios a las expectativas de los empleados y de las empresas.

        p(data-aos="fade-down") Un puesto de trabajo es mucho más que una acumulación de acciones que realiza un trabajador, es un conjunto de unidades de trabajo o tareas que son realizadas por una persona, a través de una serie de elementos como máquinas, materiales e insumos en un ambiente armonioso y favorable, la cual se constituye como una serie de responsabilidades y deberes inherentes al trabajador.          

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/33.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La OIT (s. f.) define el puesto de trabajo o actividad productiva, “como el conjunto de tareas, responsabilidades y obligaciones desempeñado por una persona, o que se prevé que una persona desempeñe, para una sola unidad económica” (p. 4). 

    h4(data-aos="fade-down").t1 Factores para definir un puesto de trabajo
    p(data-aos="fade-down").mb-5 Múltiples estudios definen que parte del éxito de una empresa radica en la adaptabilidad del trabajador a su puesto de trabajo, por eso las empresas, buscando alcanzar el máximo de rendimiento y una optimización laboral, han implementado dos procesos paralelos: el diseño y el análisis de puestos de trabajo. Los siguientes son elementos clave a la hora de diseñar un puesto de trabajo:

    .tarjeta.tarjeta-verde.p-4.mb-5(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Ambiente y entorno
            p Para que un puesto de trabajo sea satisfactorio y de calidad debe tener en cuenta factores como el entorno laboral, un buen diseño ergonómico y una estructura organizativa adecuada. Para ello, se debe tener en cuenta:
        
          .col-lg-7.my-3
            .row.justify-content-center.text-center
              .col-lg-6.my-3
                .bg5.p-4.brad1.h-100
                  h5 Accesibilidad
                  p.mb-0 Generar un buen acceso, tratando de favorecer la ubicación, la movilidad y el transporte. 
              .col-lg-6.my-3
                .bg6.p-4.brad1.h-100
                  h5 Amplitud y limpieza
                  p.mb-0 Se debe contar con un espacio amplio y en condiciones adecuadas de higiene y limpieza para desarrollar el trabajo cómodamente. 
              .col-lg-6.my-3
                .bg6.p-4.brad1.h-100
                  h5 Sin contaminantes acústicos y ambientales
                  p.mb-0 El ruido o la mala climatización afectan la productividad. 
              .col-lg-6.my-3
                .bg5.p-4.brad1.h-100
                  h5 Sin barreras arquitectónicas
                  p.mb-0 La movilidad de los trabajadores es clave y se debe tener en cuenta este aspecto para las personas con discapacidad física.    
                  
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 La concepción espacial y ergonomía
            p Un puesto de trabajo debe contar con un estudio ergonómico, adecuando la superficie a la funcionalidad y desarrollo de la tarea, validando tanto el recurso humano como el material, garantizando la seguridad, salud y confort de los trabajadores. Algunos de estos aspectos son:
        
          .col-lg-7.my-3
            .row.justify-content-center.text-center
              .col-lg-6.my-3
                .bg5.p-4.brad1.h-100
                  h5 Diseño del mobiliario
                  p.mb-0 Tener en cuenta las medidas antropométricas del usuario.
              .col-lg-6.my-3
                .bg6.p-4.brad1.h-100
                  h5 Postura del trabajador
                  p.mb-0 El puesto de trabajo debe favorecer el cambio de postura para prevenir y corregir las posibles lesiones producidas por malas posturas corporales.
              .col-lg-6.my-3
                .bg6.p-4.brad1.h-100
                  h5 Fatiga muscular y esfuerzo
                  p.mb-0 Es necesario validar el esfuerzo muscular que genera cada tarea para minimizar riesgos y sus posibles complicaciones.
              .col-lg-6.my-3
                .bg5.p-4.brad1.h-100
                  h5 Señalización
                  p.mb-0 La adecuada señalización de los espacios, equipos e instrumentos minimiza los riesgos de accidentes laborales.                        
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Descripción de tareas
            p Es necesario definir claramente las tareas que implica cada puesto de trabajo. Esto genera una apropiación del trabajador en relación con sus funciones, responsabilidades y obligaciones, de esta manera se podrá lograr una mayor eficacia organizativa vinculada con cada actividad y los procesos productivos. Por ello, es esencial hacer un buen análisis de cada puesto teniendo en cuenta tanto los factores técnicos como los humanos. Así se conseguirá una mayor eficacia organizativa enfocada en actividades y procesos productivos.
        
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')   
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Seguridad y salud en el trabajo
            p Además de los anteriores elementos definidos, un puesto de trabajo debe tener claramente establecidos elementos que tienen que ver con la salud laboral y mitigación de riesgos. Su contenido debe dar cuenta de elementos que permitan realizar análisis de dicho puesto en dos sentidos: para la calificación de un evento o enfermedad laboral; o determinar compatibilidades para reintegro o inclusión laboral de personas con discapacidad.
        
          .col-lg-7.my-3
            .row.justify-content-center.text-center
              .col-lg-6.my-3
                .bg5.p-4.brad1.h-100.j
                  p.mb-0 Descomposición de las actividades del puesto en acciones menores.
              .col-lg-6.my-3
                .bg6.p-4.brad1.h-100.j
                  p.mb-0 La identificación de riesgos a los que está expuesto el trabajador definiendo claramente las características, variaciones temporalidad y niveles de riesgo.
              .col-lg-6.my-3
                .bg6.p-4.brad1.h-100.j
                  p.mb-0 Los requerimientos de recurso humano y material del puesto.
              .col-lg-6.my-3
                .bg5.p-4.brad1.h-100.j
                  p.mb-0 Incluye la identificación de requerimientos del puesto o sistema de trabajo.

    h4(data-aos="fade-down").t1 Elementos para el diseño de puesto de trabajo
    p(data-aos="fade-down").mb-5 Para diseñar un puesto de trabajo es necesario recolectar una serie de datos que son fundamentales para este proceso, tales como:

    .bg7.p-4.mb-4
      .row.justify-content-center.align-items-center     
        .col-lg-3    
          .row.justify-content-center.mb-2           
            .col.p-0
              .bg8.p-3.h-100.j
                p.mb-0 El tipo de actividades laborales.
            .col-2.p-0
              .bg9.j.h-100.py-3.px-2
                img.img-a.img-t(src='@/assets/curso/temas/34.svg', alt='')  

          .row.justify-content-center.mb-2           
            .col.p-0
              .bg8.p-3.h-100.j
                p.mb-0 Las responsabilidades definidas para ese puesto.
            .col-2.p-0
              .bg9.j.h-100.py-3.px-2
                img.img-a.img-t(src='@/assets/curso/temas/35.svg', alt='') 

          .row.justify-content-center.mb-2           
            .col.p-0
              .bg8.p-3.h-100.j
                p.mb-0 El listado de habilidades y competencias requeridas.
            .col-2.p-0
              .bg9.j.h-100.py-3.px-2
                img.img-a.img-t(src='@/assets/curso/temas/36.svg', alt='') 

          .row.justify-content-center.mb-2           
            .col.p-0
              .bg8.p-3.h-100.j
                p.mb-0 Las condiciones del trabajador, incluso las cláusulas del contrato.
            .col-2.p-0
              .bg9.j.h-100.py-3.px-2
                img.img-a.img-t(src='@/assets/curso/temas/37.svg', alt='')                                            
        .col-lg-4.px-4
          img.img-a.img-t(src='@/assets/curso/temas/42.svg', alt='')                 
          
        .col-lg-3    
          .row.justify-content-center.mb-2
            .col-2.p-0
              .bg11.j.h-100.p-3.px-2
                img.img-a.img-t(src='@/assets/curso/temas/38.svg', alt='')                      
            .col.p-0
              .bg10.p-3.h-100.j
                p.mb-0 El contexto del puesto, es decir, tener en cuenta la inversión o el presupuesto para el salario.
                
          .row.justify-content-center.mb-2
            .col-2.p-0
              .bg11.j.h-100.p-3.px-2
                img.img-a.img-t(src='@/assets/curso/temas/39.svg', alt='')                      
            .col.p-0
              .bg10.p-3.h-100.j
                p.mb-0 Las acciones requeridas en la tarea definida y el comportamiento. 

          .row.justify-content-center.mb-2
            .col-2.p-0
              .bg11.j.h-100.p-3.px-2
                img.img-a.img-t(src='@/assets/curso/temas/40.svg', alt='')                      
            .col.p-0
              .bg10.p-3.h-100.j
                p.mb-0 Las máquinas, equipos, herramientas o infraestructura usados en el puesto.

          .row.justify-content-center.mb-2
            .col-2.p-0
              .bg11.j.h-100.p-3.px-2
                img.img-a.img-t(src='@/assets/curso/temas/41.svg', alt='')                      
            .col.p-0
              .bg10.p-3.h-100.j
                p.mb-0 Elementos de desempeño requerido para el empleado.

    h4(data-aos="fade-down").t1.mt-5 Beneficios del diseño de un buen puesto de trabajo
    p(data-aos="fade-down").mb-5 El diseño y la descripción correcta de un puesto de trabajo se traducen en una serie de beneficios tanto para la empresa como para los trabajadores, entre los que se pueden mencionar: 

    .row.justify-content-center.text-center(data-aos="fade-left")
      .col-lg-4.my-3
        .bg12.p-4.py-5.brad1.h-100
          .bgn 
            span 1
          p.mb-0.j Asegura un desempeño productivo. 
      .col-lg-4.my-3
        .bg12.p-4.py-5.brad1.h-100
          .bgn 
            span 2
          p.mb-0.j Evita enfermedades relacionadas con las condiciones laborales.
      .col-lg-4.my-3
        .bg12.p-4.py-5.brad1.h-100
          .bgn 
            span 3
          p.mb-0.j Sirve como protocolo o guía de reclutamiento y selección de personal.   

      .col-lg-4.my-3
        .bg12.p-4.py-5.brad1.h-100
          .bgn 
            span 4
          p.mb-0.j Da claridad al trabajador en relación con su desempeño y exigencias del puesto.
      .col-lg-4.my-3
        .bg12.p-4.py-5.brad1.h-100
          .bgn 
            span 5
          p.mb-0.j Es la base para medir el desempeño laboral.
      .col-lg-4.my-3
        .bg12.p-4.py-5.brad1.h-100
          .bgn 
            span 6
          p.mb-0.j Posibilita pedir salarios justos y equilibrados.

      .col-lg-4.my-3
        .bg12.p-4.py-5.brad1.h-100
          .bgn 
            span 7
          p.mb-0.j Posibilita diseñar planes de compensaciones e incentivos para los empleados
      .col-lg-4.my-3
        .bg12.p-4.py-5.brad1.h-100
          .bgn 
            span 8
          p.mb-0.j Facilita la implementación de planes de sucesión en la empresa.
      .col-lg-4.my-3
        .bg12.p-4.brad1.h-100
          .bgn 
            span 9
          p.mb-0.j.pt-4 Maximiza la productividad de los trabajadores, por lo tanto, ayuda a maximizar la productividad de la empresa.                         

    .row.justify-content-center.align-items-center.mt-5   
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Metodología de distribución de plantas en ambientes de agrupación celular.
                  p(data-aos="fade-down").mb-0 Le invitamos a leer con atención el siguiente artículo el cual expone un caso de aplicación sobre la distribución de planta e integra los temas estudiados sobre el tema de distribución de planta.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_Metodologia_de_distribucion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Ergonomía y puestos de trabajo

    p(data-aos="fade-down").mb-5 En el proceso de diseñar puestos de trabajo, se deben tener en cuenta los datos antropométricos de las personas, entendidos como las proporciones y medidas del cuerpo, y deben ser analizadas en dos sentidos: la antropometría estática, que valida las dimensiones del cuerpo en posición estática y permite determinar el espacio que debe existir entre el trabajador y los objetos y máquinas que manipula, y la dinámica que estudia las medidas a partir de los movimientos y recorridos que genera el puesto de trabajo, posibilitando medir los movimientos necesarios para la realización de las tareas.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/43.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 En este escenario entra la ergonomía como medida para la prevención de factores de riesgo y trastornos musculoesqueléticos por la adopción de malas posturas y movimientos inadecuados. Según el Instituto Regional de Seguridad y Salud en el Trabajo de Madrid (s. f.), “la ergonomía es la disciplina preventiva que integra el conjunto de técnicas cuyo objetivo es la adecuación entre el trabajo y la persona, es decir, conseguir la adecuación de entre los trabajadores y su puesto de trabajo” (p. 1). 
            
    p(data-aos="fade-down").mb-5 La Escuela Colombiana de Ingeniería Julio Garavito (2019) plantea que la ergonomía define “las reglas usadas para organizar el trabajo, aplicadas fundamentalmente para el crecimiento tecnológico, organizacional y principalmente para el bienestar físico y social del hombre” (p. 5). La ergonomía es una herramienta indispensable en doble vía; permite elementos fundamentales para el diseño del puesto, pero igualmente se posibilita medir los resultados de unas determinadas condiciones de trabajo en lo referente a productividad y eficiencia.     
    h4(data-aos="fade-down").t1 Principios básicos de la ergonomía
    p(data-aos="fade-down").mb-5 Para aplicar los principios de ergonomía a un puesto de trabajo, es necesario examinar las condiciones laborales de cada puesto para evitar o resolver problemas. Pequeños cambios ergonómicos por más sutiles que sean en relación con el diseño de elementos y equipos de las tareas realizadas, pueden mejorar en el trabajador la comodidad, seguridad y productividad; por lo tanto, existen unos principios básicos para ser aplicados, como son:

    .bg15.p-3.mb-5(data-aos="flip-down")
      .row.justify-content-center.align-items-start       
        .col-auto
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.svg', alt='')     

        .col
          ul.lista-ul.mb-0.fa-ul
            li 
              i.lista-ul__vineta
              | Ninguna tarea debe comprometer a los trabajadores con esfuerzos y posturas forzadas.
            li 
              i.lista-ul__vineta
              | Es necesario trabajar en la inducción de técnicas adecuadas para levantar y transportar peso, igualmente buscar que la cantidad y frecuencia de levantamiento sea mínima.
            li 
              i.lista-ul__vineta
              | Minimizar el trabajo de pie en lo posible.
            li 
              i.lista-ul__vineta
              | Se debe rotar las tareas, pues acciones repetitivas generan la utilización de los mismos músculos.
            li 
              i.lista-ul__vineta
              | Ubicar las máquinas y elementos de manera que los trabajadores puedan desempeñar sus tareas teniendo los antebrazos pegados al cuerpo y con las muñecas rectas.
            li 
              i.lista-ul__vineta
              | Para tareas de ensamble y corte el material debe ubicarse de manera que los músculos más fuertes realicen la mayor parte de la actividad.
            li 
              i.lista-ul__vineta
              | Es necesario modificar y sustituir herramientas y equipos manuales que generen lesiones o incomodidad permanente.

    p(data-aos="fade-down").mb-5 La ergonomía está directamente vinculada a los puestos de trabajo y como se expresó anteriormente, dichos puestos están asociados a las actividades productivas de la empresa; dentro del sector de textil existen diferentes puestos de trabajo, que varían según el área funcional en la que se desempeñan las empresas, encontrándose, principalmente las siguientes:

    .row.justify-content-center.mb-4.text-center 
      .col-lg-3.my-3(data-aos="flip-down")
        .bg13.p-4
          h5.text-center.mb-0(data-aos="fade-down") Hilatura             
        .bg14.p-4.h-100
          p.mb-0(data-aos="fade-down") Comprende los procesos de transformación de las fibras en hilos.
      .col-lg-3.my-3(data-aos="flip-down")
        .bg13.p-4
          h5.text-center.mb-0(data-aos="fade-down") Tisaje
        .bg14.p-4.h-100
          p.mb-0(data-aos="fade-down") Son las operaciones necesarias para la elaboración de tejidos partiendo del hilo.
      .col-lg-3.my-3(data-aos="flip-down")
        .bg13.p-4
          h5.text-center.mb-0(data-aos="fade-down") Tintes y acabados
        .bg14.p-4.h-100
          p.mb-0(data-aos="fade-down") Engloba las operaciones físicas, químicas y mecánicas, cuyo objeto brindan cambios en las características físicas de los tejidos (por ejemplo, color, textura, densidad, dureza, ancho, etc.).
      .col-lg-3.my-3(data-aos="flip-down")
        .bg13.p-4
          h5.text-center.mb-0(data-aos="fade-down") Confección
        .bg14.p-4.h-100
          p.mb-0(data-aos="fade-down") Se realiza la configuración del producto textil dirigido al consumidor final.

    h4(data-aos="fade-down").t1 Riesgos del sector de la confección
    p(data-aos="fade-down").mb-5 Después de analizar la industria textil en su conjunto, el enfoque se centra ahora en las tareas específicas de los talleres y fábricas de confección de prendas y productos acabados para validar los principales riesgos a los que están expuestos los trabajadores en estos puestos de trabajo. Las actividades generales que se llevan a cabo en estas empresas incluyen diseño, corte, modelado, planchado, confección, reparación y terminaciones.
    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.  
          span Tipo de puestos para el sector de confecciones área de producción
        .tabla-a.color-acento-botones          
          table
            thead
              tr.text-center.bgt5
                td.text-bold.w-70 Actividad
                td.text-bold Tareas del puesto de trabajo
            tbody
              tr
                td.w-70.text-center.text-bold.bgt4(rowspan='3') Diseño
                td.pad.brtab Dibujar siluetas.
              tr
                td.pad.brtab Elaborar moldes.
              tr
                td.pad Cortar moldes.
              tr
                td.w-70.text-center.text-bold.bgt4(rowspan='6') Corte y modelado 
                td.pad.brtab Alistar.
              tr
                td.pad.brtab Extender.
              tr
                td.pad.brtab Trazar.
              tr
                td.pad.brtab Cortar - manejo de máquinas.
              tr
                td.pad.brtab Tiquetear.
              tr
                td.pad Transportar.
              tr
                td.w-70.text-center.text-bold.bgt4(rowspan='4') Planchado 
                td.pad.brtab Preparación de prendas.
              tr
                td.pad.brtab Extendido de prendas.
              tr
                td.pad.brtab Planchado, vaporizado y enfriado de prendas.
              tr
                td.pad Recogida de prendas.
              tr
                td.w-70.text-center.text-bold.bgt4(rowspan='4') Confección
                td.pad.brtab Coser - manejo de máquinas.
              tr
                td.pad.brtab Planchado y vaporizado.
              tr
                td.pad.brtab Empacar.
              tr
                td.pad Transportar.
      .col-lg-6
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='')     

    p(data-aos="fade-down").mb-5 Teniendo en cuenta la actividad y tipos de puestos de trabajo, los riesgos más presentes en este sector de la confección son:
    .bg17
      .row.justify-content-center.mb-4.pt-5           
        .col-lg-6.my-3    
          .bg16.p-0.h-100
            img.img-a(src='@/assets/curso/temas/48.png' alt='AvatarTop')
            .p-4
              h4.t1 Riesgos relacionados con la seguridad en el trabajo:         
              ul.lista-ul.mb-0.fa-ul
                li 
                  i.lista-ul__vineta
                  p.mb-0 #[b Caídas:] generadas por la falta de espacio, obstáculos en las zonas de tránsito o falta de espacio suficiente.
                li 
                  i.lista-ul__vineta
                  p.mb-0 #[b Golpes:] por efecto de transporte, manipulación de materias primas o tropiezos con elementos.
                li 
                  i.lista-ul__vineta
                  p.mb-0 #[b Cortadas, pinchazos o atrapamiento:] ocasionados por los elementos, y equipos utilizados como máquinas de coser, tijeras, cortadoras, agujas, etc.
        .col-lg-6.my-3    
          .bg16.p-0.h-100
            img.img-a(src='@/assets/curso/temas/49.png' alt='AvatarTop')
            .p-4
              h4.t1 Riesgos relacionados con el medio ambiente:         
              ul.lista-ul.mb-0.fa-ul
                li 
                  i.lista-ul__vineta
                  p.mb-0 #[b Problemas respiratorios:] por exposición a polvos, fibras, lanas y otras fibras.
                li 
                  i.lista-ul__vineta
                  p.mb-0 #[b Intoxicaciones:] por la manipulación permanente o inadecuada de químicos.
                li 
                  i.lista-ul__vineta
                  p.mb-0 #[b Irritación de ojos, nariz y garganta:] por la exposición a altas o bajas temperaturas por mal acondicionamiento de los lugares de trabajo.
                li 
                  i.lista-ul__vineta
                  p.mb-0 #[b Problemas auditivos:] por la exposición frecuente al ruido producido por los motores de las máquinas utilizadas.

      .bg16.p-5.mb-5
        h4(data-aos="fade-down").t1 Riesgos ergonómicos
        p(data-aos="fade-down").mb-5 La industria de la confección y moda ha experimentado un auge en los últimos años, pero junto con ello ha surgido la preocupación por los riesgos que los trabajadores enfrentan en los talleres y fábricas de confección de prendas y productos acabados, a continuación se presentan:   

        SlyderF.text-center(columnas="col-lg-6 col-xl-4")(data-aos="fade-right")
          .bg21.p-0.h-100
            img.img-a.img-t(src='@/assets/curso/temas/50.png' alt='AvatarTop')
            .p-4
              h4 Lesiones o molestrias músculo esqueléticas      
              p.mb-0 Por malas posiciones generalmente en cuello, hombros, y cintura; por esfuerzos musculares y tareas con acciones repetitivas de brazos, manos, muñecas, pie y dolores de espalda de distinta localización (cervical, dorsal y lumbar). 
          .bg21.p-0.h-100
            img.img-a.img-t(src='@/assets/curso/temas/51.png' alt='AvatarTop')
            .p-4
              h4 Desgastes      
              p.mb-0 Por utilización permanente de máquinas de coser que pueden ir integradas en la mesa de trabajo o colocarse sobre una mesa convencional, sillas no regulables, elementos de transportes de las prendas confeccionadas inadecuadas al tipo ergonómico para el puesto de trabajo. 
          .bg21.p-0.h-100
            img.img-a.img-t(src='@/assets/curso/temas/52.png' alt='AvatarTop')
            .p-4
              h4 Dolores de cabeza y problemas oculares   
              p.mb-0 Por las exigencias visuales de la tarea y falta de iluminación.
          .bg21.p-0.h-100
            img.img-a.img-t(src='@/assets/curso/temas/53.png' alt='AvatarTop')
            .p-4
              h4 Fatiga física y mental
              p.mb-0 Por la monotonía de las tareas, ciclos repetitivos, exceso de horas de trabajo, ausencia de pausa y descansos y ritmos demasiados intensos. 
          .bg21.p-0.h-100
            img.img-a.img-t(src='@/assets/curso/temas/54.png' alt='AvatarTop')
            .p-4
              h4 Insatisfacción laboral
              p.mb-0 Generadora de estrés y otras alteraciones de la salud, las cuales son generadas por insatisfacción con la remuneración laboral, falta de participación, por aislamiento, falta de comunicación o nulidad de participación.              
</template>

<script>
export default {
  name: 'Tema5',
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

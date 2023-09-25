<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Puestos de trabajo y factores ambientales
    p(data-aos="fade-down").mb-5 Los factores ambientales se refieren a las condiciones físicas y ambientales del lugar de trabajo que influyen en el desempeño de las tareas. Incluyen aspectos como el ambiente térmico, acústico, vibratorio y lumínico, así como la calidad del ambiente interior. Las empresas deben examinar periódicamente estas condiciones para eliminar, controlar o mitigar los riesgos que representan para la salud. estos factores corresponden a:
    
    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Medio ambiente de trabajo
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.svg', alt='Esta es una figura informativa que explica los diferentes tipos de condiciones ambientales que pueden afectar a un lugar de trabajo')
        figcaption.mt-3 Nota. Tomada de Gómez (2017, p. 23).


    h4(data-aos="fade-down").t1 Factores ambientales relacionados con enfermedades musculoesqueléticas
    p(data-aos="fade-down").mb-5 Los factores ambientales en el trabajo que pueden generar enfermedades musculoesqueléticas son específicamente vibración, frío y calor.
    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.  
          span Factores ambientales relacionados con enfermedades musculoesqueléticas  
        .tabla-a.color-acento-botones          
          table
            thead
              tr.text-center.bgt5
                td.text-bold Factor
                td.text-bold Acciones preventivas
            tbody
              tr
                td #[b Vibración:] movimiento oscilatorio de cuerpos sólidos.
                td
                  ul.lista-ul.mb-0.fa-ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Se debe generar un entrenamiento al trabajador sobre la utilización, mantenimiento sobre la herramienta con emisión vibratoria.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Planificar claramente las horas de trabajo (tiempo de exposición), con frecuentes pausas evitando exposición prolongada.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Generar pausas activas con ejercicios para descansar y fortalecer la zona expuesta a la vibración evitando problemas vasculares, de nervios o musculares o el síndrome del túnel carpiano.
  
              tr
                td #[b Frío: ]baja temperatura que puede ser por convección y radiación ante ciertas situaciones y la sensación que se expresa ante ese fenómeno. Se define temperatura ambiental crítica, al aire libre, o aquella igual o menor de 10 ºC.
                td
                  ul.lista-ul.mb-0.fa-ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Para evitar el #[i disconfort] térmico se debe usar vestimenta protectora.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 En espacios que permitan generar factores que eleven la temperatura sin exagerar.
              tr
                td #[b Calor:] este se relaciona con el manejo de energía en tránsito que se reconoce solo cuando se cruza la frontera de un sistema termodinámico.
                td              
                  ul.lista-ul.mb-0.fa-ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Ventilación adecuada. 
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Hidratación y balance de electrolitos. 
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Evitar temperaturas superiores a los 36 °C.

    h4(data-aos="fade-down").t1 Factores de riesgos ambientales relacionados con el #[i confort] en el lugar de trabajo
    p(data-aos="fade-down").mb-5 Este tipo de factores no generan enfermedades musculoesqueléticas, pero sí #[i disconfort] en el lugar de trabajo, se pueden evidenciar mala iluminación, ruido, y condiciones ambientales a las que se expone un trabajador en un recinto, dentro de las cuales están factores químicos, físico y biológicos susceptibles de generar efectos en la salud o en el bienestar de los trabajadores.
    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.  
          span Factores de riesgos ambientales relacionados con el #[i confort] en el lugar de trabajo  
        .tabla-a.color-acento-botones          
          table
            thead
              tr.text-center.bgt5   
                td.w-80.text-bold.text-center Factor
                td.text-bold Acciones preventivas
            tbody
              tr
                td.w-80.text-bold.text-center Iluminación
                td
                  ul.lista-ul.mb-0.fa-ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Para un aceptable nivel de #[i confort], no debe existir un excesivo contraste en el entorno de la tarea a ejecutar.
                    li 
                      i.lista-ul__vineta
                      p.mb-0  Generar mantenimiento permanente a los elementos de iluminación.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Ubicar estratégicamente máquinas y trabajadores para que no produzcan deslumbramientos tanto por las propias fuentes luminosas como en las superficies del entorno de trabajo o sombras del trabajador.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Para generar un #[i confort] visual y evitar la fatiga visual es necesario implementar una Iluminación uniforme y óptima, con ausencia de brillos deslumbrantes, en condiciones de contraste adecuadas, utilizando los colores correctos y garantizando la ausencia de luces intermitentes o efectos estroboscópicos.
  
              tr
                td.w-80.text-bold.text-center Ruido
                td
                  ul.lista-ul.mb-0.fa-ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Para favorecer un ambiente acústico de #[i confort] en los puestos de trabajo, es necesario el acondicionamiento acústico del recinto a través de la implementación de determinados materiales que pueden incrementar la absorción acústica, reduciendo con ello el sonido reflejado por los límites del local.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 El aislamiento acústico con la utilización permanente de protectores auditivos.
  
              tr
                td.w-80.text-bold.text-center Condiciones ambientales 
                td
                  ul.lista-ul.mb-0.fa-ul
                    li 
                      i.lista-ul__vineta
                      p.mb-0  Realizar un correcto manejo de productos y desechos químicos y biológicos.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Generar capacitación permanente a los trabajadores sobre  los productos químicos utilizados en los lugares de trabajo, al igual que las medidas adecuadas de prevención que les permitan participar eficazmente en los programas de protección.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Eliminar el uso o reducirlo, minimizando la utilización de sustancias tóxicas, cuando sea factible.



    .row.justify-content-center.align-items-center.mt-5   
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Condiciones de trabajo, riesgo y salud ambiental.
                  p(data-aos="fade-down").mb-0 Para ampliar sus conocimientos sobre la seguridad y salud en el trabajo realice la lectura del documento: Condiciones de trabajo, riesgo y salud ambiental.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2 _Condiciones_de_Trabajo_Riesgo_y_Salud_Ambiental.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download                          
          
</template>

<script>
export default {
  name: 'Tema7',
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

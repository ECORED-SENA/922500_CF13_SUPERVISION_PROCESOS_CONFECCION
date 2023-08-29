<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Descripción y análisis de puestos de trabajo

    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='')

      .col-lg-8.my-3
        p(data-aos="fade-down") A continuación, se presenta una descripción y análisis de tres puestos de trabajo asociados al proceso productivo de confección, teniendo como referentes las tareas claves de dicho proceso: extendido y corte, planchado y confección, estas tareas pueden variar dependiendo de la empresa, la producción, y una serie de factores organizativos (secuencias y métodos de trabajo), factores físicos (número de trabajadores, elementos del puesto). 
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Tareas clave en la producción de confección
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.svg', alt='')

    h4(data-aos="fade-down").t1 Puesto de corte
    p(data-aos="fade-down").mb-5 Es un puesto en el que generalmente se trabaja de pie, en las empresas hay tres tipos de corte: manual, semiautomático, en estos se ayuda al proceso con algún elemento, y el automatizado.
    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-10(data-aos="fade-left")
        .tabla-a.color-acento-botones      
          table
            thead
              tr.text-center.bgt5
                td.text-bold.w-90.text-center Puesto
                td.text-bold Corte
            tbody
              tr
                td.bgt4.text-bold.w-90.text-center Maquinaria o equipos 
                td
                  | Se utilizan mesas planas e inclinadas, herramientas de corte de cuchillas, eléctricas y ultrasonido, tijeras, y elementos como plataformas móviles o carros.
              tr
                td.bgt4.text-bold.w-90.text-center Descripción de la carga física
                td
                  | Esta tarea genera movimientos repetitivos especialmente de la muñeca y miembro superior. Manipulación manual de cargas. Demanda de atención visual.
              tr
                td.bgt4.text-bold.w-90.text-center Riesgos
                td
                  ul.lista-ul.mb-0.fa-ul.mb-4
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Se generan riesgos asociados a lesiones y molestias por movimientos repetitivos de brazos, cuellos y hombros en un nivel elevado y aceptables en la zona de muñeca-mano.

                    li 
                      i.lista-ul__vineta
                      p.mb-0 Traumas por levantamiento manual de carga o por movimientos repetitivos.

                    li 
                      i.lista-ul__vineta
                      p.mb-0 Un nivel leve de riesgo asociado a las exigencias visuales relacionados con la iluminación.

                  .titulo-sexto.color-acento-contenido
                    h5 Figura 3. 
                    span Posturas adoptadas durante la tarea de corte
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.png', alt='')

              tr
                td.bgt4.text-bold.w-90.text-center Acciones de mejora
                td
                  ul.lista-ul.mb-0.fa-ul.mb-4
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Mejorar la altura del corte en función de la altura del trabajador que ocupe el puesto.

                    li 
                      i.lista-ul__vineta
                      p.mb-0 Elevar las mesas de corte buscando modificar la situación de los puntos donde se mira, evitando así que el trabajador permanezca agachado.

                    li 
                      i.lista-ul__vineta
                      p.mb-0 Dotar las mesas de sistemas de arrastre de la tela evitando que sea el trabajador quien deba tirar del mismo, al igual que evitar la profundidad de la tela, esto evitará flexiones de brazo.

                    li 
                      i.lista-ul__vineta
                      p.mb-0 Para evitar la repetición de movimientos se sugiere automatizar el proceso de extendido mediante cintas transportadoras; o en empresas pequeñas programar medidas organizativas como trabajar el puesto en equipo de varias personas.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Garantizar una buena iluminación.

                  .row
                    .col-lg-8            
                      .titulo-sexto.color-acento-contenido
                        h5 Figura 4. 
                        span Posturas correctas para el puesto de trabajo de pie
                      img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='') 
                      figcaption Nota. Tomada de Ofiprix (2017) 

    h4(data-aos="fade-down").t1 Puestos de planchado y vaporizado
    p(data-aos="fade-down").mb-5 Es un puesto que se realiza generalmente de pie, las acciones realizadas son preparación de prendas, extendido de la prenda sobre la telera, planchado y vaporizado, recolección de la prenda.
    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-10(data-aos="fade-right")
        .tabla-a.color-acento-botones      
          table
            thead
              tr.text-center.bgt5
                td.text-bold.w-90.text-center Puesto
                td.text-bold Planchado y vaporizado de prendas
            tbody
              tr
                td.bgt4.text-bold.w-90.text-center Maquinaria o equipos 
                td
                  | Mesas vaporizadores, planchas manuales, máquinas vaporizadores, planchas, máquinas automáticas para el planchado y prehormado.
              tr
                td.bgt4.text-bold.w-90.text-center Descripción de la carga física
                td
                  | Es un puesto con alta carga estática y dinámica, pues el trabajador está de pie durante la jornada y realiza movimientos repetitivos, flexiones y abducciones de brazos, muñecas. La profundidad y tamaño de prendas genera posturas forzadas de tronco.
              tr
                td.bgt4.text-bold.w-90.text-center Riesgos
                td
                  ul.lista-ul.mb-0.fa-ul.mb-4
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Por los movimientos repetitivos de brazos, muñecas, hombro y cuello se generan lesiones y molestias.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 La temperatura alta genera acaloramiento.
                    li 
                      i.lista-ul__vineta
                      p.mb-0  Riesgos óseo-musculares, varices por la carga estática y las posturas forzadas.

                  .titulo-sexto.color-acento-contenido
                    h5 Figura 5. 
                    span Postura adoptada durante la tarea de planchado
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/60.png', alt='')               
              tr
                td.bgt4.text-bold.w-90.text-center Acciones de mejora
                td
                  ul.lista-ul.mb-0.fa-ul.mb-4
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Establecer una altura y profundidad cómoda para los brazos, cuello.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Los pedales que en ocasiones se utilizan no deben exigirle al trabajador el apoyo en un solo pie.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Mejorar la carga visual de la tarea con una iluminación no menor a 500 lux en la zona de trabajo.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Validar la localización de las luminarias, para que no se genere sombra con el cuerpo del trabajador y buscar una buena inclinación de la mesa para facilitar la visión.
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 6. 
                    span Postura adecuada de cuello
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.png', alt='')                                               

    h4(data-aos="fade-down").t1 Puestos de confección
    p(data-aos="fade-down").mb-5 Esta tarea se caracteriza por una postura sentada, con la cabeza y el tronco generalmente inclinado hacia adelante, con una gran exigencia visual, con movimientos simultáneos de brazos y pies.
    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-10(data-aos="fade-left")
        .tabla-a.color-acento-botones      
          table
            thead
              tr.text-center.bgt5
                td.text-bold.w-90.text-center Puesto
                td.text-bold Confección
            tbody
              tr
                td.bgt4.text-bold.w-90.text-center Maquinaria o equipos 
                td Variadas máquinas de coser, mesas y sillas, carros y plataformas de depósito de material.

              tr
                td.bgt4.text-bold.w-90.text-center Descripción de la carga física

                td Es un puesto con alto índice de repetición de movimientos de brazos, manos y muñecas, y posturas inadecuadas de cuello y hombros. Combina esfuerzo estático por la postura sentada y dinámica por la repetición y movimientos simultáneos. Con gran exigencia de precisión visual.
              tr
                td.bgt4.text-bold.w-90.text-center Riesgos

                td
                  ul.lista-ul.mb-0.fa-ul.mb-4
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Los riesgos de lesión o molestias musculoesqueléticas en la zona de cuello y hombros son elevados.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Riesgos como dolores asociados a la carga estática.

                    li 
                      i.lista-ul__vineta
                      p.mb-0 Riesgos asociados a la iluminación como molestias o esfuerzos visuales especialmente si se trabaja con tejidos oscuros.
            
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 7. 
                    span Posturas adoptadas durante la tarea de confección
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.png', alt='') 
                  figcaption Nota. Tomada de ICASEL Canarias (s.f.).

              tr
                td.bgt4.text-bold.w-90.text-center Acciones de mejora
                td              
                  ul.lista-ul.mb-0.fa-ul.mb-4
                    li 
                      i.lista-ul__vineta
                      p.mb-0 Buscar una postura óptima del cuerpo, mejorando la altura de trabajo.

                    li 
                      i.lista-ul__vineta
                      p.mb-0 Validar la ubicación, la altura y profundidad del punto de costura, así como la ubicación de los pedales.

                    li 
                      i.lista-ul__vineta
                      p.mb-0 Mejorar los espacios para las piernas y los pies con escenarios más holgados, así como también bajo la mesa y encima del tablero.

        
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 8. 
                    span Dimensiones recomendadas para el tablero
                  img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/63.png', alt='') 
                  figcaption Nota. Tomada de ICASEL Canarias (s.f.).

                  ul.lista-ul.mb-0.fa-ul.mb-4
                    li 
                      i.lista-ul__vineta
                      p.mb-0                     
                    li 
                      i.lista-ul__vineta
                      p.mb-0 C → profundidad de trabajo anterior a la aguja. Mínimo 20 cm, máximo 38 cm.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 D → profundidad total (desde el borde anterior de la mesa). Mínimo 40 cm, máximo 60 cm.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 E → anchura recomendada para la zona parcial de trabajo. Mínimo 106 cm, máximo 150 cm.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 F → altura del espacio para las piernas postura sentada. ≥ 65 cm.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 G → espacio para las piernas y pies, anchura ≥ 46 cm.
                    li 
                      i.lista-ul__vineta
                      p.mb-0 H → espacio para las piernas, profundidad a la altura de las rodillas ≥ 49 cm.             

</template>

<script>
export default {
  name: 'Tema6',
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

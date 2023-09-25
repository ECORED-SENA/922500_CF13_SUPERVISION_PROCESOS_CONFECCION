<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Distribución de planta de acuerdo con el sistema de producción

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-7.my-3
        p(data-aos="fade-down") Para determinar la ubicación de los puestos de trabajo, máquinas, herramientas y equipos, así como la relación entre las personas y otros recursos, es necesario tener en cuenta los productos a fabricar y los sistemas de producción empleados.

        p(data-aos="fade-down") Si se trata de productos que tienen muy pocas operaciones, la disposición de las máquinas se hará de una manera diferente a cuanto el producto a elaborar es complejo y el número de operaciones es grande, no es lo mismo producir pañuelos, que overoles para un mecánico de aviones. A eso hay que sumarle el número de unidades, y la frecuencia con que hay demanda de ese producto. Según estos elementos, se pueden distinguir dos tipos de producción: por lotes y continua.      
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='') 

    h4(data-aos="fade-down").t1 Producción por lotes         
    p(data-aos="fade-down").mb-5 La producción por lotes es un tipo de sistema de producción en el que se fabrican productos en grupos, llamados lotes, en los que cada lote representa una cantidad determinada de unidades producidas, en el siguiente video se puede profundizar sobre esto.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/DqeXF4NsOP0?si=Geg_qQUh-ThmMhJl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Producción por lotes 

    h4.t1(data-aos="fade-down") Producción continua

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-7.my-3
        p(data-aos="fade-down") Este tipo de producción se utiliza cuando se requiere un alto volumen de producción, lo que conlleva a que las operaciones y los empleados se especialicen en tareas específicas debido al alto número de repeticiones de las mismas acciones. La distribución de puestos de trabajo se realiza de acuerdo con la secuencia de actividades establecida. Este enfoque se conoce como distribución por producto, en la que los montajes duran mucho tiempo. Este tipo de producción y distribución de planta permiten un flujo continuo de producción, tal como se observa en la industria automotriz y la de electrodomésticos.
      .col-lg-5.my-3                            
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='') 


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

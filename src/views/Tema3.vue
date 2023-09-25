<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Distribución de planta según necesidades del área
    p(data-aos="fade-down").mb-5 En la actualidad la distribución en las plantas satisface demandas y necesidades que la moda actual solicita; la versatilidad de referencias y modelos, los cambios en los materiales y las cantidades han hecho que las maneras de ubicar los puestos de trabajo sean cada vez más innovadoras y funcionales. A continuación se presenta un ejemplo:

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-12 
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/22.svg', alt='Distribución de planta según necesidades del área')

          .tarjeta.bg2.p-3(x="13%" y="42%" numero="1")
            .h5 Área administrativa   
            p.mb-0 La actividad económica de una empresa define las operaciones administrativas necesarias, el personal requerido y las áreas de trabajo necesarias. Por ejemplo, una empresa dedicada a la venta de productos requiere un espacio para #[i show room], mientras que una empresa de producción necesita áreas específicas para la producción y necesidades fisiológicas del personal.     

          .tarjeta.bg2.p-3(x="25.8%" y="8%" numero="2")
            .h5 Área de materias primas e insumos   
            p.mb-0 Es importante considerar la capacidad y sistema de producción, tipo de producto, políticas de inventario, presentación de materiales e insumos, para determinar el espacio y posición en el flujo de producción. También se deben considerar el transporte y condiciones ambientales, y ubicar un espacio para dispositivos tecnológicos si es necesario.   

          .tarjeta.bg2.p-3(x="46.4%" y="24.5%" numero="3")
            .h5 Área de producción   
            p.mb-0 El área de producción se enfoca en las actividades de ensamble, fabricación, confección o maquila, y se refiere a las operaciones de transformación de materias primas en productos terminados. En ella se ubican las máquinas que tienen una misión específica dentro del proceso de fabricación, en una secuencia lógica que permite saber cuántas y cuáles máquinas se deben ubicar y en qué sitio.   

          .tarjeta.bg2.p-3(x="65.6%" y="19%" numero="4")
            .h5 Área de mantenimiento   
            p.mb-0 Habitualmente se asigna un espacio donde se encuentran las herramientas y utensilios para reparar máquinas: esmeril, destornilladores, compresor, llaves, lubricantes, etc. También en este sitio se estila mantener en custodia las guías o fólderes, pies prensatelas, planchuelas, y otros accesorios que se instalan a menudo en las máquinas buscando efectos deseados.                                   

          .tarjeta.bg2.p-3(x="86.5%" y="42%" numero="5")
            .h5 Áreas de alimentación y servicios   
            p.mb-0 En el sector de diseño, confección y moda, el costo de contratación de personal es elevado. Es necesario asignar un espacio adecuado para que el personal pueda realizar actividades como ponerse el uniforme, alimentarse y satisfacer otras necesidades fisiológicas.  

    h4(data-aos="fade-down").t1 Tipos de distribución de planta      
    p(data-aos="fade-down").mb-5 Las maneras de distribuir los equipos, herramientas y materiales se pueden clasificar en:

    .bg3.mb-5
      .row.justify-content-center           
        .col-lg-6.my-3(data-aos="fade-right")
          .bg4.p-4.py-5.h-100.brad1.j
            .row.justify-content-center           
              .col-auto 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')     
              .col
                h5(data-aos="fade-down") Distribución por producto
                p(data-aos="fade-down").mb-0 Se refiere a la disposición que se hace de los equipos, siendo consecuente con los procesos y secuencias de fabricación. Se ubican los puestos de trabajo, según el listado de operaciones, en un desarrollo lógico de flujo de fabricación, esta distribución también se denomina taller de flujo. Se utiliza cuando los procesos están organizados y son repetitivos. Ejemplo: manufactura de pequeños aparatos eléctricos: planchas, hornos pequeños, afeitadoras.
        .col-lg-6.my-3(data-aos="fade-left")
          .bg4.p-4.py-5.h-100.brad1.j
            .row.justify-content-center           
              .col-auto 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg', alt='')     
              .col
                h5(data-aos="fade-down") Distribución por proceso
                p(data-aos="fade-down").mb-0 Se alinean procesos y equipos que cumplen una misma función, se utiliza cuando la programación de la producción se realiza por lotes similares, y cada uno con unas condiciones especiales, en la industria de la confección se utiliza frecuentemente, ya que sus procesos a pesar de que diferencian una moda de otra, en su estructura central son iguales.

        .col-lg-6.my-3(data-aos="fade-right")
          .bg4.p-4.py-5.h-100.brad1.j
            .row.justify-content-center           
              .col-auto 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.svg', alt='')     
              .col
                h5(data-aos="fade-down") Distribución por posición fija
                p(data-aos="fade-down").mb-0 El equipo de manufactura: personas, máquinas, herramientas, materiales se desplaza hasta donde se encuentra el producto a fabricar, por efectos de tamaño o peso. Ejemplo: barcos.
        .col-lg-6.my-3(data-aos="fade-left")
          .bg4.p-4.py-5.h-100.brad1.j
            .row.justify-content-center           
              .col-auto 
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.svg', alt='')     
              .col
                h5(data-aos="fade-down") Distribución híbrida
                p(data-aos="fade-down").mb-0 Seguir una sola línea de producción, o una sola manera de producir, o más aún, distribuir la planta con una sola intención de producir, es demasiado arriesgado; por ello, muchas organizaciones optan para ganar en versatilidad y respuesta a la demanda, por implementar varios tipos de distribución de planta, de manera mixta o híbrida.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Lo invitamos a observar el video “Distribución de planta” que se encuentra en el material complementario que profundiza en los aspectos clave.

    h4(data-aos="fade-down").t1 Distribución de planta y costos
    p(data-aos="fade-down") No existe una actividad que se realice en una planta que no sea para el beneficio de la organización, los colaboradores, los clientes, los sistemas de producción, los proveedores y todo lo que pertenezca a ese entorno organizacional. En el fondo, cuando se habla de empresas se habla de rentabilidad, utilidades, crecimiento; y el ejercicio de diseñar una distribución o redistribución de planta no es ajeno a ese propósito, lo que hace concluir que cualquier mejora al proceso productivo está ligada al tema de costos.

    p(data-aos="fade-down").mb-5 A continuación se observa la relación de los aspectos beneficiados con una buena distribución de planta.  
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.  
          span Relación de beneficios según actividad de distribución de planta
        .tabla-a.color-acento-botones           
          table.text-center
            thead
              tr
                th.brt1  
                td(colspan='3').text-white.bgt1.text-bold Beneficio económico
            tbody
              tr.bgt2.text-bold
                td Aspecto
                td Área
                td Tiempo
                td Empleado
              tr
                td Eliminar o recortar distancias.
                td Se requiere menos área.
                td Los procesos se agilizan y se producen más unidades en menor tiempo. 
                td Sufre menos fatiga y mejora su eficiencia.
              tr
                td Flujos de producción.
                td Se utilizan espacios según la necesidad.
                td Son más ágiles los flujos y hay más productividad.
                td Más participativo y versátil.
              tr
                td Disminución del tiempo de fabricación.
                td N/A
                td Se aumenta la capacidad instalada.
                td Se logran recursos para incentivar.
              tr
                td Seguridad del personal, disminución de accidentes.
                td  N/A
                td Más minutos productivos, y menos tiempo ocioso.
                td Se disminuye el ausentismo y las incapacidades.
    p(data-aos="fade-down") Después de implementar mejoras en la distribución de planta actual, un indicador importante que demuestra el efecto que tuvo esta mejora, es el de revisar costos vs. facturación, ese resultado indica si la gestión de procesos por intermedio de distribución y reacomodo de recursos fue efectiva. 

    h4(data-aos="fade-down").t1 #[i Software] para distribuciones de planta
    p(data-aos="fade-down").mb-5 En el siglo XXI, los avances tecnológicos han sido muy representativos, y de ahí se ha establecido que se está viviendo la cuarta revolución industrial o industrias 4.0. La industria de la moda no es ajena a eso y el mercado oferta programas que ayudan a elaborar una distribución de planta de manera más técnica y ágil. Los más utilizados son:

    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Microsoft Visio")
        .row.justify-content-center.align-items-center
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.png', alt='')     

          .col
            p.mb-0 Este #[i software] se utiliza para dibujar una gran cantidad de diagramas, como por ejemplo los organigramas, flujogramas o diagramas de flujo. El programa Visio también ayuda con la construcción de planos de planta y/o distribución de planta e integra y ayuda a visualizar la relación de los elementos necesarios para la gestión de procesos. Apoyar la comunicación con información visual ayuda a entender mejor tablas y textos que a veces son difíciles de comprender.   

      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="AutoCAD")
        .row.justify-content-center.align-items-center
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')     

          .col
            p.mb-0 Es en la actualidad el programa más usado para arquitectura, diseño industrial e ingeniería. Esta herramienta tiene capacidad para construir y editar planos que permitan visualizar distribuciones de planta y puestos de trabajo; incluso permite dibujos en 2D y 3D. Su capacidad de automatizar de manera rápida información como planos, elementos, máquinas, procesos, etc., hacen que sea una solución importante, cuando de visualizar procesos se trata y, además, integra informaciones de otras áreas.  

      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="<i>Layout</i>")
        .row.justify-content-center.align-items-center
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')     

          .col
            p.mb-0 Es un vocablo en inglés que se podría traducir como la disposición de elementos en un diseño. Es una especie de plantilla que se utiliza, para hacer dibujos de elementos que se interrelacionan. Esta herramienta se puede aprovechar para hacer un dibujo de la disposición de los elementos necesarios en la planta de producción, y en la empresa en general. 

      .tarjeta.color-acento-botones--borde.tabs-brbottom.p-4(titulo="Suite Office")
        .row.justify-content-center.align-items-center
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='')     

          .col
            p.mb-0 En programas de la suite de Office como Microsoft Word y Excel también se encuentran maneras de realizar distribuciones de planta, allí aparecen los símbolos necesarios para construir planos o diagramas que ayudan a la persona delegada para asignar áreas a los puestos de trabajo, maquinaria, y materiales.                                       

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

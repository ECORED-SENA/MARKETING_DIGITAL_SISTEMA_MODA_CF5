<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 El término <b>‘venta’</b> históricamente hace referencia a todas las actividades para proveer a un cliente u organización de un bien o servicio bajo un precio estipulado; es decir, hay un intercambio de dinero. Sin embargo, en la actualidad, debido a la cantidad de negocios que ofrecen los mismos productos y servicios, la venta se ha connotado desde propuestas de valor diferenciadoras que hacen que los modelos de negocios sean apetecidos por los clientes. 
    p.mb-4 Las ventas suponen un mecanismo de continuidad de los negocios y ganancia económica, desde el punto de vista del vendedor cuando lo ofrece a un público definido que, de una u otra forma, satisface sus necesidades y deseos.
    p.mb-4 Por lo anterior, el presente componente de formación surge en el marco de las ventas para poder tener la capacidad de establecer e interactuar con los clientes potenciales según sus necesidades y el medio definido para llevar a cabo la estrategia de venta. En este sentido, se sugiere identificar, en el siguiente recurso de aprendizaje, el contexto de formación y algunos aspectos para iniciar y finalizar este momento de aprendizaje. Bienvenido. 

    figure.mb-5
      img(src="@/assets/curso/introduccion/img01.svg", alt="")
     
    .row.mb-4
      .col-4.d-flex
        .cajon.color-acento-botones.p-4
          .h5 ¿Cómo surge este curso?
          p Desde la necesidad de la interacción con los clientes que lleve a su fidelización y mantener las ventas de la empresa.
      .col-4.d-flex
        .cajon.color-acento-contenido.bloque10.p-4
          .h5 ¿Cuál es objeto de aprendizaje?
          p Una vez finalizado este componente de formación se espera que usted pueda:
          p Prestar servicio al cliente acorde a unos lineamientos. 
          p Registrar información y bases de datos en el marco del servicio al cliente.
          p Manejar comunidades en entornos digitales.
      .col-4.d-flex
        .cajon.color-secundario.p-4
          .h5 ¿Cómo está estructurado el componente de formación?
          p Para desarrollar la experiencia de aprendizaje, se tendrá contenido temático y actividades de aprendizaje para desarrollar conocimiento, habilidades y actitudes. Adelante con su aprendizaje.
    
    p.text-center.mb-4 Finalmente, es necesario tener presentes estos aspectos para iniciar y culminar con éxito el componente de formación.

    .row.mb-4
      .col-3.d-flex     
        .lista-ol--cuadro__vineta.fondo-color-primario.texto-blanco.mt-2
          span a
        p Organizar un horario de estudio individual y colaborativo.
      .col-3.d-flex     
        .lista-ol--cuadro__vineta.fondo-color-secundario.texto-blanco.mt-2
          span b
        p Revisar las notificaciones del curso constantemente.
      .col-3.d-flex     
        .lista-ol--cuadro__vineta.fondo-color-acento-contenido.texto-negro.mt-2
          span c
        p Participar en los foros y actividades sugeridas por el instructor.
      .col-3.d-flex     
        .lista-ol--cuadro__vineta.fondo-color-acento-botones.texto-blanco.mt-2
          span d
        p Entregar las evidencias esperadas durante este componente de formación. En caso de alguna inquietud no dude en escribirnos. 
  
    p Ahora es tiempo de apropiarse de la información necesaria para poder alcanzar los resultados de aprendizaje esperados. Adelante. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo
      .h4 Actividad didáctica  (falso y verdadero)
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/curso/actividad/img01.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        
        p.mb-4 Apreciado participante, a continuación encontrará unos enunciados relacionados con la experiencia de aprendizaje del presente componente de formación.
        p.mb-4 Con la intención de contrastar enunciados relacionados con el servicio al cliente, seleccione una respuesta con respecto a las afirmaciones dadas. Adelante. 

        br
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 ¿Cuál es su última palabra?
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>

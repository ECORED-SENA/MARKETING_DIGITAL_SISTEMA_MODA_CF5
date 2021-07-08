<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Etiqueta empresarial

    .cajon.color-acento-contenido.p-5.mb-4
      p.m-0 La globalización del mundo de los negocios les exige a las empresas generar una imagen positiva, basada en reglas que rigen las relaciones interpersonales y empresariales, aplicarlas genera distinción frente a clientes, colaboradores y colegas como un sello de garantía en ese escenario competido del mundo empresarial, es allí donde cobra vida el concepto de etiqueta empresarial.

    .row.mb-4
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/tema6/img01.png', alt='')        
      .col-lg-8
        p.mb-4 Albán (2002) define la etiqueta como “un conjunto de normas y también de costumbres que las personas deben tener conocimiento y aplicarlas en diferentes actos de índole social, ceremonial y, que a su vez permiten una adecuada relación con los demás” (p. 34).
        p.mb-4 Pero en el escenario empresarial se refiere a esa codificación de modales y comportamientos que determinan las formas y modos de relaciones; para generar un buen ambiente deben estar basados en la misión y visión empresarial y en la cultura de servicio definido por la empresa.
        p Para recopilar esas pautas de comportamiento y criterios empresariales se debe generar un protocolo, entendido como ese documento que establece los principios, normas y actuaciones que se deben generar en la empresa, no es obligatorio, pero sí esencial para construir un ambiente laboral saludable. Este documento tiene unas características y un contenido, por ello, es importante que revise el siguiente recurso de aprendizaje.

    .row.mb-5
      .col-lg-3
      .col-lg-6
        figure
          img(src='@/assets/curso/tema6/img02.svg', alt='')
        div.contenedor
          a.indicador__containe(@click="mostrarDiv(1); mostrarIndicador2 = true;" @mouseover="mostrarIndicador1 = false; ")
            div.boton1
            .indicador--click(style="left:15%" v-if="mostrarIndicador1" )         
          a.indicador__containe(@click="mostrarDiv(2); mostrarIndicador1 = true;" @mouseover="mostrarIndicador2 = false; ")        
            div.boton2
            .indicador--click(style="left:80%" v-if="mostrarIndicador2" )           
      .col-lg-3

    .div(id="myDiv1" ref="myDiv1" style="display:inline")
      .row.mb-4
        .col-lg-3
        .col-lg-6
          .row
            .col-12
              p.text-center El protocolo empresarial debe reunir como mínimo las siguientes características:
          .row
            .col-3
            .col-6(style="border: 1px solid #BB83FF!important;")
            .col-3
        .col-lg-3
      .row.mb-4
        .col-lg-3
        .col-lg-3
          figure
            img(src='@/assets/curso/tema6/img03.svg', alt='')
        .col-lg-3
          figure
            img(src='@/assets/curso/tema6/img04.svg', alt='')
        .col-lg-3
      .row.mb-4
        .col-lg-3
        .col-lg-3
          figure
            img(src='@/assets/curso/tema6/img05.svg', alt='')
        .col-lg-3
          figure
            img(src='@/assets/curso/tema6/img06.svg', alt='')
        .col-lg-3

    .div(id="myDiv2" ref="myDiv2" style="display:none")
      .row.mb-4
        .col-lg-2
        .col-lg-8
          .row
            .col-12
              p.text-center Cada empresa genera el contenido de su protocolo, según su dinámica, su tamaño y su cultura de servicio, pero hay puntos esenciales que se deben tener en cuenta. Ellos son:
          .row
            .col-3
            .col-6(style="border: 1px solid #F17781!important;")
            .col-3
        .col-lg-2
      .row.mb-4
        .col-lg-1
        .col-lg-10
          .row
            .col-lg-4
              figure
                img(src='@/assets/curso/tema6/img07.svg', alt='')
            .col-lg-4
              figure
                img(src='@/assets/curso/tema6/img08.svg', alt='')
            .col-lg-4
              figure
                img(src='@/assets/curso/tema6/img09.svg', alt='')
        .col-lg-1
      .row.mb-4
        .col-lg-1
        .col-lg-10
          .row
            .col-lg-6
              figure
                img(src='@/assets/curso/tema6/img10.svg', alt='')
            .col-lg-6
              figure
                img(src='@/assets/curso/tema6/img11.svg', alt='')            
        .col-lg-1

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicador1: false,
    mostrarIndicador2: true,
    display1: true,
    display2: false,
    // variables de vue
  }),
  methods: {
    mostrarDiv(p) {
      if (p == 1) {
        this.$refs.myDiv1.style.display = 'inline'
        this.$refs.myDiv2.style.display = 'none'
      } else {
        this.$refs.myDiv1.style.display = 'none'
        this.$refs.myDiv2.style.display = 'inline'
      }
    },
  },
}
</script>

<style lang="sass" scoped></style>

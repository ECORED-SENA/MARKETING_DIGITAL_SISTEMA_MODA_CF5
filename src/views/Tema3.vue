<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Introducción al CRM

    p.mb-4 El CRM o Customer Relationship Management, que puede traducirse al español como ‘gestión de las relaciones con los clientes’, se ha convertido en una increíble herramienta para las ventas haciendo uso de las nuevas tecnologías. Según el portal web RD Station, un CRM es un proceso de negocio optimizado para mejorar el desempeño de quien la usa; es decir, el CRM combina tanto procesos tecnológicos como talento humano e información, en su estrategia para lograr una mayor organización en el logro de ventas y conexión con los clientes.
    p.mb-4 El CRM está muy enfocado al marketing relacional y se basa en construir una conexión cercana entre el cliente y las empresas, buscando el bienestar de aquel, para desarrollar mayor fidelización que genere como resultado un beneficio económico. Entre las ventajas significativas del CRM, se destaca la automatización de los procesos, que optimiza los recursos, el tiempo, la gestión de datos; y personaliza los servicios para brindar una mejor experiencia al cliente. Esto significa mayores ventas y lealtad hacia la empresa. Esta herramienta explica que, a mayor felicidad del cliente, más ganancias, lo que supone conocer a dicho cliente.
    p.mb-4 Implementar un CRM dentro de las empresas conlleva una inversión, por lo que es importante que el retorno de esta inversión se vea reflejado en los resultados de esta estrategia, logrados por medio de la fusión de diversos factores. De acuerdo con el portal web Tenebit (2020), la implementación del CRM debe estar basado en tres importantes pilares. Estos son:

    .row.mb-5 
      .col-4.d-flex
        div.fondo-morado-claro.borde-redondo.p-3
          div.d-flex.justify-content-center
            figure.w-50.mb-4
              img(src="@/assets/curso/tema3/img01.svg", alt="Texto que describa la imagen")
          div.text-center.mb-4
            strong Personas
          
          p El talento humano es un factor fundamental para llevar a cabo una estrategia de CRM. Formar a las personas para que se adapten a los cambios que supone la empresa con la adopción de este sistema es crucial, por ello el retorno a la inversión lo proveerá el personal que implemente y haga un uso adecuado.

      .col-4.d-flex
        div.fondo-rojo-claro.borde-redondo.p-3
          div.d-flex.justify-content-center
            figure.w-50.mb-4
              img(src="@/assets/curso/tema3/img02.svg", alt="Texto que describa la imagen")
          div.text-center.mb-4
            strong Procesos
          
          p Es necesario evaluar los procesos que se llevan a cabo al interior de la empresa para que el CRM se efectúe correctamente, es decir, buscar que la herramienta se adapte a la empresa entendiendo todo el potencial que ésta permite y la manera en que se direcciona para lograr los objetivos propuestos. El manejo de datos es imprescindible para el desarrollo de la estrategia.

      .col-4.d-flex
        div.fondo-verde-claro.borde-redondo.p-3
          div.d-flex.justify-content-center
            figure.w-50.mb-4
              img(src="@/assets/curso/tema3/img03.svg", alt="Texto que describa la imagen")
          div.text-center.mb-4
            strong Tecnología 
          
          p Las soluciones tecnológicas a través de los sistemas de recopilación y organización de datos permiten obtener información de los clientes, lo que, a su vez, permite el éxito de un proceso de ventas. A partir de la automatización de los procesos, se pueden deducir infinidad de datos que sean necesarios según la estrategia de marketing; en ellos está el verdadero valor para la empresa.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

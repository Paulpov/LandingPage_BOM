<template>
  <section class="bg-bookmark-blue py-5 " id="address">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between">
        <!-- Iframe Container -->
        <div id="endereco" class="w-full lg:w-1/2 xl:w-2/5 py-4">
          <iframe
            class="rounded-lg w-full aspect-video"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.9972343470295!2d-51.16579132385243!3d-23.35211475393978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4320b03c0001%3A0xcb99e40d3214f44e!2sPopov%20Transportes!5e0!3m2!1spt-BR!2sbr!4v1691787008195!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- Content -->
        <div class="w-full lg:w-1/2 xl:w-2/5 text-center lg:text-left mt-10 lg:mt-0">
          <h1 class="text-3xl text-bookmark-white">Nosso Endereço</h1>
          <p class="text-bookmark-grey my-4">
            Faça uma visita!
          </p>
          <p class="text-bookmark-grey my-4">
            Nosso portão está aberto para você! Venha nos visitar.
          </p>
          <p class="text-bookmark-grey my-4 capitalize uppercase font-bold">
            <a href="https://maps.app.goo.gl/Gd6nc8QN17fqBeVYA?g_st=iw">
              Rua Pedro Botelho de Rezende, 2583 - Burle Marx, Londrina/PR.
            </a>
          </p>
          <p class="text-bookmark-grey my-4">
            Vamos conversar sobre transporte, compartilhar histórias e tomar um café juntos.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Estilos para dispositivos móveis */
#iframe {
  height: 800px;
}

/* Estilos para dispositivos desktop */
@media (min-width: 1024px) {
  #endereco iframe {
    height: 500px; /* Altura ajustada para telas de desktop */
    width: 600px;
  }
}
</style>

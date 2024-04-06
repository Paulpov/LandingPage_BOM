<template>
    <section :class="sectionClasses" id="partners">
      <div id="servicos" class="scroll-smooth sm:w-3/4 lg:w-5/12 mx-auto px-2 pb-20">
        <h1 class="text-4xl text-center text-bookmark-white">Nossos Clientes</h1>
        <p class="text-center text-bookmark-grey mt-4">
          Fortalecendo laços, construindo juntos. Nossos clientes são mais que parceiros; são nossa inspiração, nossa força motriz. Uma parceria duradoura, uma jornada compartilhada rumo ao sucesso.
        </p>
      </div>
      <div class="container mx-auto flex items-center justify-center">
        <Splide
          :options="{
            type: 'loop',
            autoplay: true,
            interval: 3000,
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
            },
          }"
        >
          <SplideSlide v-for="(cliente, index) in clientes" :key="index">
            <img
              :src="cliente.logo"
              :alt="cliente.nome"
              class="mx-auto cliente-logo"
            />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  </template>
  
  <script>
  import { Splide, SplideSlide } from "@splidejs/vue-splide";
  import "@splidejs/vue-splide/css";
  
  export default {
    components: {
      Splide,
      SplideSlide,
    },
    data() {
      return {
        clientes: [
          { nome: "Cliente 1", logo: "../j macedo.png" },
          { nome: "Cliente 2", logo: "../logo ALPES.png" },
          { nome: "Cliente 3", logo: "../m-dias-branco-logo-azul.png" },
          { nome: "Cliente 4", logo: "../LOGO BUNGE.png" },
          { nome: "Cliente 5", logo: "../LOGO SELMI.png" },
          // Adicione mais clientes conforme necessário
        ],
      };
    },
    computed: {
      sectionClasses() {
        return "py-20 " + this.getColorClass();
      },
    },
    methods: {
      getColorClass() {
        return "bg-blue-2000";
      },
    },
  };
  </script>
  
  <style scoped>
  .cliente-logo {
    width: 200px;
    height: auto;
  }
  </style>
  
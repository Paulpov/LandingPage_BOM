<template>
  <section class="relative ">
    
    <div
      class="container flex flex-col-reverse lg:flex-row items-center pag-12 mt-14 lg:mt-28 "
    >


        


      <div class="flex flex-1 flex-col items-center lg:items-start ">

        
            


        <h2
          class="text-white text-3xl md:text-4 leg:text-5xl text-center lg:text-left mb-6"
        >
          Popov Transportes.
        </h2>
        <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
          com mais de 10 anos no mercado, destaca-se no setor de transporte pela
          qualidade, eficiência e abordagem humanizada no atendimento a clientes
          e colaboradores. A empresa promove um ambiente de trabalho saudável,
          valorizando o desenvolvimento pessoal dos colaboradores. A tecnologia
          é integrada aos processos para otimização contínua, reforçando o
          compromisso com excelência e aprimoramento constante no serviço de
          transporte.
        </p>
        <div class="flex justify-center felx-wrap gap-6">
          <div
            class="flex flex-col sm:flex-row gap-6 mt-8 justify-center"
          ></div>
        </div>
      </div>
      <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
        <img
          draggable="false"
          src="../assets/images/brand-logo.png"
          alt="micro illustration"
          class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4 md:w-3/5 md:h-3/5 rounded-xl"
        />
      </div>
      <div
        class="hidden md:block overflow-hidden bg-bookmark-blue rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-30"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}


</script>


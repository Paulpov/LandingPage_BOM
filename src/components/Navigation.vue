<template>
   <nav class="container max-w-7xl mx-auto flex flex-col sm:flex-row items-center py-4">

    <div class="w-full flex justify-between items-center">
      <div class="scroll-smooth py-1">
        <img
          draggable="false"
          src="../assets/images/white-logo.png"
          width="120"
          alt="Logo da Empresa"
        />
      </div>
      <div class="flex sm:hidden">
        <i
          class="text-xl fas fa-bars text-white cursor-pointer"
          @click="toggleMenu"
        ></i>
      </div>
    </div>
    <ul
      :class="{
        hidden: !isMenuOpen,
        flex: isMenuOpen,
        'flex-col': isMenuOpen,
        'sm:flex': true,
        'sm:flex-row': true,
        'mt-4 sm:mt-0': isMenuOpen,
        'w-full': isMenuOpen,
        'items-center': isMenuOpen,
        'sm:justify-end': true,
        'gap-12': true,
        'text-bookmark-blue': true,
        uppercase: true,
        'text-xs': true,
      }"
      class="flex flex-1 justify-end items-center gap-4 sm:gap-8 text-white uppercase text-xs whitespace-nowrap"
    >
      <li class="cursor-pointer text-white">
        <a href="#servicos" class="inline-block px-6 py-2">Nossos Serviços</a>
      </li>
      <li class="cursor-pointer text-white">
        <a href="#endereco" class="inline-block px-6 py-2">Endereço</a>
      </li>
      <li class="cursor-pointer text-white">
        <a href="#comprometimento" class="inline-block px-6 py-2">Comprometimento</a>
      </li>
      <li class="cursor-pointer text-white">
        <a href="#partners" class="inline-block px-6 py-2">Nossos Clientes</a>
      </li>
      <button
        @click="openModal"
        type="button"
        class="text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md bg-bookmark-red hover:bg-bookmark-white hover:text-black"
      >
        FALE CONOSCO
      </button>
      <div class="inset-0 flex sm:hidden items-center justify-center"></div>
    </ul>
  </nav>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-2xl text-center"
                >Nossos Contatos</DialogTitle
              >
              <div class="mt-4">
                <p class="text-sm text-gray-500">
                  Abaixo estão nossos números e setores para melhor te atender!
                </p>
                <hr class="mt-4" />
                <div class="flex flex-col sm:flex-row gap-6 mt-8">
                  <p class="text-sm text-gray-500">
                    Administração - (43) 99183-1471
                  </p>
                  <a
                    href="whatsapp://send?phone=5543991831471&text=Olá, Vim pelo Site e Gostaria de Saber mais Sobre Questões Administrativas!"
                    class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >Enviar Mensagem</a
                  >
                </div>
                <div class="flex flex-col sm:flex-row gap-6 mt-8">
                  <p class="text-sm text-gray-500">Fretes - (43) 99614-0507</p>
                  <a
                    href="whatsapp://send?phone=5543996140507&text=Olá, Vim pelo Site e Gostaria de Saber mais Sobre Questões de Frete!"
                    class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >Enviar Mensagem</a
                  >
                </div>
                <div class="flex flex-col sm:flex-row gap-6 mt-8">
                  <p class="text-sm text-gray-500">
                    Entregas - (43) 99867-5702
                  </p>
                  <a
                    href="whatsapp://send?phone=5543998675702&text=Olá, Vim pelo Site e Gostaria de Saber mais Sobre Questões de Entrega!"
                    class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >Enviar Mensagem</a
                  >
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
const isMenuOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

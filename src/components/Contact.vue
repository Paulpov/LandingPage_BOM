<template>
  <section class="bg-bookmark-dark text-white py-20">
    <div class="container">
      <div class="sm:w-3/4 lg:w-2/4 mx-auto">

        <h1 class="text-2xl text-center">
          Fique Ligado e Inove suas parcerias
        </h1>

        <p class="font-light uppercase text-center mb-8 mt-8">ENTRE EM CONTATO</p>
        <!-- Ini - Button Modal #1-->
        <div class="flex flex-col sm:flex-row gap-6 mt-8 justify-center">

          <div class="inset-0 flex items-center justify-center">
            <button
              type="button"
              @click="openModal"
              class="flex-1 px-2 py-3 rounded-md btn bg-bookmark-red hover:bg-bookmark-white hover:text-black"
            >
              Saiba Mais
            </button>
          </div>
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
                <div class="fixed inset-0 bg-black bg-opacity-25" />
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
                      <DialogTitle as="h3" class="text-2xl text-center">
                        Nossos Contatos
                      </DialogTitle>
                      <div class="mt-4">
                        <p class="text-sm text-gray-500">
                          Abaixo estão nossos numeros e setores para melhor te
                          atender!
                        </p>

                        <hr class="mt-4" />

                        <div class="justify-center">
                          <div
                            class="flex flex-col sm:flex-row gap-6 mt-8 inset-0 flex items-center"
                          >
                            <p class="text-sm text-gray-500">
                              Administração - (43) 99183-1471
                            </p>
                            <button
                              type="button"
                              class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                            >
                              <a
                                href="whatsapp://send?phone=5543991831471&text=Olá, Vim pelo Site e Gostaria de Saber mais Sobre Questões Admnistrativas!"
                                >Enviar Mensagem</a
                              >
                            </button>
                          </div>

                          <div
                            class="flex flex-col sm:flex-row gap-6 mt-8 inset-0 flex items-center"
                          >
                            <p class="text-sm text-gray-500">
                              Fretes - (43) 99614-0507
                            </p>
                            <button
                              type="button"
                              class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                            >
                              <a
                                href="whatsapp://send?phone=5543996140507&text=Olá, Vim pelo Site e Gostaria de Saber mais Sobre Questões de Frete!"
                                >Enviar Mensagem</a
                              >
                            </button>
                          </div>

                          <div
                            class="flex flex-col sm:flex-row gap-6 mt-8 inset-0 flex items-center "
                          >
                            <p class="text-sm text-gray-500">
                              Entregas - (43) 99867-5702
                            </p>
                            <button
                              type="button"
                              class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                            >
                              <a
                                href="whatsapp://send?phone=5543998675702&text=Olá, Vim pelo Site e Gostaria de Saber mais Sobre Questões de Entrega!"
                                >Enviar Mensagem</a
                              >
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="mt-4"></div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </div>
            </Dialog>
          </TransitionRoot>
        <!-- Fim - Button Modal #1-->

        </div>

      </div>
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

const isOpen = ref(true);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
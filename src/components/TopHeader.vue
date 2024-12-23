<template>
  <div
    class="dew-drop absolute md:w-[800px] md:h-[800px] w-[280px] h-[280px] md:top-[6%] md:-right-[10%] top-[3%] -right-[13%]">
  </div>

  <div class="fixed bottom-0 left-0 z-10">
    <img :src="cubes" alt="cube">
  </div>

  <div class="flex justify-between items-center">
    <!-- slider image -->
    <div class="relative md:mt-24 flex items-center justify-between md:w-[600px] w-[200px] ">
      <div class="small-image relative md:w-[200px] md:h-[200px] text-center ">
        <div
          class="absolute md:w-[250px] md:h-[250px] md:-right-[60%] -right-[50px] md:top-0 top-[-30px] w-[100px] h-[100px]  bg-gradient-to-r from-[#6F4336] to-[#3B2F2F] rounded-full">
          <img :src="images[currentIndex + 1]" class="" />
        </div>
      </div>

      <div class="arrow flex gap-4 absolute top-[15%] right-[15%]">
        <div class="right cursor-pointer" @click="next">
          <span class="flex justify-center items-center bg-[#004876] md:w-9 md:h-9 w-5 h-5 rounded-full">
            <i class="fa-solid fa-arrow-right text-white"></i>
          </span>
        </div>
        <div class="left cursor-pointer" @click="prev">
          <span class="flex justify-center items-center md:w-9 md:h-9 w-5 h-5 border border-[#3B2F2F] rounded-full">
            <i class="fa-solid fa-arrow-left text-[#3B2F2F]"></i>
          </span>
        </div>
      </div>

      <div
        class="relative main-image md:w-[400px] md:h-[400px] w-[120px] h-[120px] text-center bg-gradient-to-r from-[#004876] to-[#1E71A6] rounded-full">
        <div class="absolute top-1/2 translate-y-[-50%] md:w-[500px] md:h-[500px] w-[150px] h-[150px] rounded-full">
          <img :src="images[currentIndex]" class="" />
        </div>
      </div>


    </div>

    <!-- title -->
    <div class="container w-fit" dir="ltr">
      <h1 class="font-[700] md:text-8xl text-3xl text-mainColor md:text-center">coffee<br>&shop</h1>
      <p class="font-[400] md:w-[250px] w-[160px] md:text-[16px] text-[10px] md:mx-auto my-3">Get your ordered (better)
        coffee delivered to you if you
        want.</p>
      <div class="button text-center flex gap-5 items-center md:justify-center">
        <button
          class="text-secondColor border border-secondColor px-2 py-1 font-[500] rounded-xl md:text-sm text-[10px]">SHOP
          20% OFF <i class="fa-solid fa-arrow-right-long"></i></button>
        <span class="bg-mainColor flex justify-center items-center p-3 rounded-full md:w-8 md:h-8 w-7 h-7"><i
            class="fa-solid fa-bag-shopping md:fa-lg fa-md text-white"></i></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import cube from '@/assets/Images/transparent_background_image.png';

const images = [
  require('@/assets/Images/dfcb34d56a680cc865853575bba6f0f4.png'),
  require('@/assets/Images/38e15540379068957cb03dd05dfe1ff4.png'),
  require('@/assets/Images/f1ff4f4c09d3efbdafb19f8a5bcbf739.png'),
];

const currentIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
  if(currentIndex.value == images.length-1){
    currentIndex.value = 0
  }
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const cubes = ref(cube);
</script>


<style scoped> 
.dew-drop {
  background: rgb(0, 72, 118);
  background: linear-gradient(110deg, rgb(164, 190, 206) 0%, rgba(255, 255, 255, 1) 58%);
  border-radius: 0 50% 50% 50%;
  transform: rotate(73deg);
  z-index: -4;
}
</style>
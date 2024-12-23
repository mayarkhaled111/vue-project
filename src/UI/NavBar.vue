<template>
    <nav class="py-5 sm:mb-5">
        <div class="container flex justify-between items-center">
          <div class="flex gap-4 items-center">
              <span class="bg-mainColor flex justify-center items-center p-3 rounded-full w-8 h-8"><i class="fa-solid fa-bag-shopping fa-lg text-white"></i></span>
              <span><i class="fa-solid fa-bars fa-xl text-mainColor"></i></span>
          </div>
          <div>
            <ul class="flex gap-4 text-mainColor ">
              <li class="text-mainColor font-bold" ><router-link to="/">Home</router-link></li>
              <li class="text-mainColor font-bold"><router-link to="/task">Task</router-link></li>
            </ul>
          </div>
          <div><i class="fa-solid fa-mug-hot fa-2xl text-mainColor"></i></div>
        </div>
    </nav>
</template>


<script setup>

</script>

<style scoped>
.router-link-active{
  border-bottom: 2px solid #004876;
}
</style>
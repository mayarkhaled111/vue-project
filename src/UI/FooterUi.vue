<template>
    <div class="relative bg-gradient-to-r from-[#004876] to-[#1E71A6] text-white py-16 mt-9">
        <div class="image absolute md:top-[-53%] md:right-[7%] top-[-20%] right-[10%]">
            <img :src="absoluteImage" class="md:w-[200px] w-[100px] -rotate-[20deg]" />
        </div>
        <div class="container " dir="ltr">
            <div class="md:flex justify-center gap-5">
                <div class="text-[#FFFFFF95] md:w-1/5 flex flex-col gap-3">
                    <h2 class="text-[#FFFFFF]">Menu</h2>
                    <p>Get inspired</p>
                    <p>Our products</p>
                    <p>For a better world</p>
                    <p>Contact</p>
                    <p>Blog</p>
                </div>
                <div class="text-[#FFFFFF95] md:w-1/5 flex flex-col gap-3">
                    <h2 class="text-[#FFFFFF]">CafeLocatotion</h2>
                    <p>lorem ipsum</p>
                </div>
                <div class="text-[#FFFFFF95] md:w-1/5 flex flex-col gap-3">
                    <h2 class="text-[#FFFFFF]">Contact </h2>
                    <p>Do you have a question? Send it to us!</p>
                    <p>000000000</p>
                </div>
            </div>
            <hr class="border-1 border-[#ffffff70] w-2/3 m-auto my-8 " />
            <div class="flex w-2/3 justify-between m-auto">
                <h2 class="text-[#FFFFFF95]">Privacy policy</h2>
                <ul class="flex gap-2">
                    <li class=""><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const absoluteImage = require('@/assets/Images/absoluteImage.png')
</script>

<style scoped>
ul li {
    border: 1px solid white;
    padding: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul li:hover {
    cursor: pointer;
}
</style>
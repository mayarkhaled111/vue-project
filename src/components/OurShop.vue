<template>
    <div class="md:flex items-center" dir="ltr">
        <div class="bean-bag md:w-1/2">
            <img :src="image" class="w-full  object-contain" />
        </div>
        <div class="content ">
            <div class="container">
                <h1 class="text-textColor text-[32px] font-[700]">Welcome to Our shop</h1>
                <p class="text-textColor mb-5">The coffee you want, when you want it</p>
                <div class="details flex flex-wrap">
                    <div class="flex items-center gap-5 md:w-1/2 my-3" v-for="detail in details" :key="detail.title">
                        <span class="img p-5 bg-secondColor rounded-full">
                            <img :src="detail.image" class="w-[50px]" />
                        </span>
                        <div class="flex">
                            <div class="">
                                <h3 class="font-[700] text-mainColor mb-2">{{ detail?.title }}</h3>
                                <p class="font-[400] text-[12px]">{{ detail.describe }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mb-40">
        <img :src="animation" class="md:w-1/4 h-[250px] object-cover" />
    </div>
</template>

<script setup>

const image = require('@/assets/Images/bean-bags.png')
const animation = require('@/assets/Images/animation.gif')
const details = [
    {
        image: require('@/assets/Images/beans.png'),
        title: 'quality',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        image: require('@/assets/Images/glass.png'),
        title: 'Easy',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        image: require('@/assets/Images/croissant.png'),
        title: 'taste',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        image: require('@/assets/Images/cupOfCoffee.png'),
        title: 'quick',
        describe: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
]
</script>
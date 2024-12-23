<template>
    <div class="text-center my-24">
        <swiper :modules="modules" :slides-per-view="7" :space-between="0" Pagination :autoplay="{ delay: 1000 }"
            :speed="500" :breakpoints="{ 320: { slidesPerView: 4 }, 768: { slidesPerView: 7 } }">
            <swiper-slide>
                <div class="flex md:gap-10 gap-3 ">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="flex md:gap-10 gap-3">
                    <span class="text-[#6f43367a]">Coffee</span> <img :src="bean" class="w-[25px]">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
const modules = [Autoplay, Pagination, Navigation];
const bean = require('@/assets/Images/coffee-bean.png')
</script>
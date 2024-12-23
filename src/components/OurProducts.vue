<template>
  <div class="container text-center" dir="ltr">
    <div class="text mb-14">
      <p class="text-textColor text-[20px] font-[400]">Our products</p>
      <h1 class="text-textColor text-[32px] font-[700]">Special to Try</h1>
    </div>
    <div class="tabs  m-auto ">
      <v-card>
        <v-tabs v-model="tab" align-tabs="center" class="custom-tabs">
          <v-tab :value="1">All categories</v-tab>
          <v-tab :value="2">Special offers</v-tab>
          <v-tab :value="3">Best seller</v-tab>
          <v-tab :value="4">Roasting</v-tab>
          <v-tab :value="5">Coffee</v-tab>
          <v-tab :value="6">Coffee equipment</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="n in 6" :key="n" :value="n">
            <v-container class="mt-[50px] px-4">
              <v-row dense>
                <v-col v-for="category in categories" :key="category.title" cols="12" sm="6" md="4" lg="3" class="mb-6">
                  <v-card :variant="'text'" class="flex flex-col justify-center items-center">
                    <div class="image-container relative bg-mainColor w-fit pb-2 pr-2">
                      <div class="cont-image w-fit bg-secondColor pt-2 pl-2">
                        <v-img :src="category.img" height="230" width="230" cover class="image bg-[#f2f2f2] m-auto" />
                      </div>
                      <v-badge v-if="category.discount !== ''" color="#F9EDBD" :content="category.discount"
                        class="absolute top-[10%] left-[20%]"></v-badge>
                    </div>
                    <v-card-title class="font-500 text-[18px]">{{ category.title }}</v-card-title>
                    <v-card-subtitle class="text-[#8B8BA5] font-[400]">By {{ category.person }}</v-card-subtitle>
                    <v-card-text>
                      <span class="flex gap-2 ">
                        <i v-for="star in category.rate" :key="star" class="fa-solid fa-star text-[#E1B168]"></i>
                      </span>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </div>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';

const tab = ref(1); // تأكد من أن التبويب يتم تحديده
const categories = ref([
  {
    img: require('@/assets/Images/machine.png'),
    title: 'Brazilian Roasted Coffee',
    person: 'Amir Samantha',
    rate: 5,
    discount: ''
  },
  {
    img: require('@/assets/Images/coffee.jpeg'),
    title: 'Brazilian Roasted Coffee',
    person: 'John Lennonk',
    rate: 5,
    discount: ''
  },
  {
    img: require('@/assets/Images/cup.png'),
    title: 'Brazilian Roasted Coffee',
    person: 'Toekang Sayoer',
    rate: 5,
    discount: '-30%'
  },
  {
    img: require('@/assets/Images/dfcb34d56a680cc865853575bba6f0f4.png'),
    title: 'Brazilian Roasted Coffee',
    person: 'Imelda Saranghae',
    rate: 5,
    discount: ''
  },
]);

onMounted(() => {
  console.log(categories.value); // تحقق من البيانات هنا
});
</script>

<style scoped>
.custom-tabs .v-tab {
  color: #3B2F2F;
}

.custom-tabs .v-tab-item--selected {
  color: #004876;
}

.v-card.v-theme--light.v-card--density-default.v-card--variant-elevated {
  box-shadow: none;
}

.image-container {
  border-radius: 40px;
}

.cont-image {
  border-radius: 40px;
}

.image-container .image {
  border-radius: 40px;
}
</style>

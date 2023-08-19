<template>
    <div class="psychologist py-10">
        <div class="container">
            <div class="psychologist__cards-wrapper mb-[50px]">
                <NuxtLink to="/teacher" class="psychologist__card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <div class="psychologist__card-top">
                        <div class="psychologist__card-img">
                            <img src="@/assets/images/png/all.png" alt="">
                        </div>
                        <div class="psychologist__card-top__text-wrapper">
                            <h3 class="psychologist__card-top__title text-3xl font-medium mb-2">Всего учеников</h3>
                            <div class="psychologist__card-top__conut font-medium text-2xl">441</div>
                        </div>
                    </div>
                    <p class="psychologist__card-desc text-xl font-medium">Общий эмоциональный фон учеников</p>
                    <span class="inline-flex items-center rounded-md bg-[#bef264] px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-[#bef264] psychologist__card-badge">Хорошо</span>
                </NuxtLink>
                <NuxtLink to="/teacher" class="psychologist__card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <div class="psychologist__card-top">
                        <div class="psychologist__card-img">
                            <img src="@/assets/images/png/teachers.png" alt="">
                        </div>
                        <div class="psychologist__card-top__text-wrapper">
                            <h3 class="psychologist__card-top__title text-3xl font-medium mb-2">Всего преподавателей</h3>
                            <div class="psychologist__card-top__conut font-medium text-2xl">36</div>
                        </div>
                    </div>
                    <p class="psychologist__card-desc text-xl font-medium">Общий эмоциональный фон преподавателей</p>
                    <span class="inline-flex items-center rounded-md bg-[#bef264] px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-[#bef264] psychologist__card-badge">Хорошо</span>
                </NuxtLink>
                <NuxtLink to="/teacher" class="psychologist__card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <div class="psychologist__card-top">
                        <div class="psychologist__card-img">
                            <img src="@/assets/images/png/smile-emotion.png" alt="">
                        </div>
                        <div class="psychologist__card-top__text-wrapper">
                            <h3 class="psychologist__card-top__title text-3xl font-medium mb-2">Общий эмоциональный фон школы</h3>
                        </div>
                    </div>
                    <span class="inline-flex items-center rounded-md bg-[#bef264] px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-[#bef264] psychologist__card-badge">Хорошо</span>
                </NuxtLink>
                <NuxtLink to="/teacher" class="psychologist__card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <div class="psychologist__card-top">
                        <div class="psychologist__card-img">
                            <img src="@/assets/images/png/depression.png" alt="">
                        </div>
                        <div class="psychologist__card-top__text-wrapper">
                            <h3 class="psychologist__card-top__title text-3xl font-medium mb-2">Уровень депрессии</h3>
                            <div class="psychologist__card-top__conut font-medium text-2xl">19%</div>
                        </div>
                    </div>
                    <span class="inline-flex items-center rounded-md bg-[#f87171] px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-[#f87171] psychologist__card-badge">Внимание!</span>
                </NuxtLink>
            </div>
            <h2 class="psychologist__title text-3xl font-medium mb-5">ОБРАТИТЬ ВНИМАНИЕ</h2>
            <div class="psychologist__bottom-cards-wrapper grid grid-cols-3 gap-5">
                <div class="psychologist__bottom-card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <h3 class="psychologist__bottom-card__title text-2xl font-medium mb-10">Проявление агрессии</h3>
                    <div class="flex gap-3 psychologist__bottom-card__images">
                        <img class="w-[60px] rounded-md" src="https://picsum.photos/65" alt="" v-for="item in 4" :key="item">
                    </div>
                </div>
                <div class="psychologist__bottom-card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <h3 class="psychologist__bottom-card__title text-2xl font-medium mb-10">Усталость</h3>
                    <div class="flex gap-3 psychologist__bottom-card__images">
                        <img class="w-[60px] rounded-md" src="https://picsum.photos/65" alt="" v-for="item in 4" :key="item">
                    </div>
                </div>
                <div class="psychologist__bottom-card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <h3 class="psychologist__bottom-card__title text-2xl font-medium mb-10">Депрессия</h3>
                    <div class="flex gap-3 psychologist__bottom-card__images">
                        <img class="w-[60px] rounded-md" src="https://picsum.photos/65" alt="" v-for="item in 4" :key="item">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "without",
});
</script>

<style lang="scss" scoped>

</style>
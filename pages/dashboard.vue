<template>
    <div class="dashboard">
            <div class="dashboard__top">
                <div class="container">
                    <div class="dashboard__cards-wrapper py-[50px]">
                        <NuxtLink to="/admin" class="dashboard__card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                            <div class="dashboard__card-top">
                                <div class="dashboard__card-img">
                                    <img src="@/assets/images/png/all.png" alt="">
                                </div>
                                <div class="dashboard__card-top__text-wrapper">
                                    <h3 class="dashboard__card-top__title text-3xl font-medium mb-2">Всего учеников</h3>
                                    <div class="dashboard__card-top__conut font-medium text-2xl">441</div>
                                </div>
                            </div>
                            <p class="dashboard__card-desc text-xl font-medium">Общий эмоциональный фон учеников</p>
                            <span class="inline-flex items-center rounded-md bg-[#bef264] px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-[#bef264] dashboard__card-badge">Хорошо</span>
                        </NuxtLink>
                        <NuxtLink to="/admin" class="dashboard__card bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                            <div class="dashboard__card-top">
                                <div class="dashboard__card-img">
                                    <img src="@/assets/images/png/teachers.png" alt="">
                                </div>
                                <div class="dashboard__card-top__text-wrapper">
                                    <h3 class="dashboard__card-top__title text-3xl font-medium mb-2">Всего преподавателей</h3>
                                    <div class="dashboard__card-top__conut font-medium text-2xl">36</div>
                                </div>
                            </div>
                            <p class="dashboard__card-desc text-xl font-medium">Общий эмоциональный фон преподавателей</p>
                            <span class="inline-flex items-center rounded-md bg-[#bef264] px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-[#bef264] dashboard__card-badge">Хорошо</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="dashboard__bottom">
                <div class="container">
                    <div class="dashboard__cards-wrapper py-[50px]">
                        <NuxtLink to="/admin" class="dashboard__card bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                            <div class="dashboard__card-top">
                                <div class="dashboard__card-img">
                                    <img src="@/assets/images/png/smile-emotion.png" alt="">
                                </div>
                                <div class="dashboard__card-top__text-wrapper">
                                    <h3 class="dashboard__card-top__title text-3xl font-medium mb-2">Общий эмоциональный фон школы</h3>
                                </div>
                            </div>
                            <span class="inline-flex items-center rounded-md bg-[#bef264] px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-[#bef264] dashboard__card-badge">Хорошо</span>
                        </NuxtLink>
                        <NuxtLink to="/admin" class="dashboard__card bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                            <div class="dashboard__card-top">
                                <div class="dashboard__card-img">
                                    <img src="@/assets/images/png/depression.png" alt="">
                                </div>
                                <div class="dashboard__card-top__text-wrapper">
                                    <h3 class="dashboard__card-top__title text-3xl font-medium mb-2">Уровень депрессии</h3>
                                    <div class="dashboard__card-top__conut font-medium text-2xl">19%</div>
                                </div>
                            </div>
                            <span class="inline-flex items-center rounded-md bg-[#f87171] px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-[#f87171] dashboard__card-badge">Внимание!</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "without",
});
const locale = ref(null)
onMounted(()=> {
    locale.value = localStorage.getItem('loginPage')
})
</script>

<style lang="scss" scoped>

</style>
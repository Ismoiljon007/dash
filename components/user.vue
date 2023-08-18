<template>
    <NuxtLink to="/student/user" class="bg-[#fff] text-[#222] grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] shadow-md rounded-md p-3.5">
        <div class="admin-list__item-user">
            <img class="rounded-lg mb-1 admin-list__item-user-img" src="https://picsum.photos/120" alt="">
            <h2 class="text-lg font-medium">Алиев Валижон</h2>
        </div>
        <h3 class="admin-list__item-class">6 “Б”</h3>
        <h4 class="admin-list__item-age">12</h4>
        <h4 class="admin-list__item-emotion">Позитивный</h4>
        <ul class="flex flex-col gap-2">
            <li class="flex justify-between">Веселье: <span>85%</span></li>
            <li class="flex justify-between">Грусть: <span>15%</span></li>
            <li class="flex justify-between">Злость <span>0%</span></li>
            <li class="flex justify-between">Страх: <span> 0%</span> </li>
        </ul>
    </NuxtLink>
</template>

<script setup>

</script>

<style lang="scss">
.admin-list__item-user-img {
    width: 112px;
    height: 112px;
}
</style>
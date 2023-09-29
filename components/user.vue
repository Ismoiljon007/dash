<template>
    <NuxtLink :to="`/student/${user.id}`"
        class="bg-[#fff] text-[#222] grid grid-cols-[1.5fr_1fr_1.1fr_1.8fr] shadow-md rounded-md p-3.5">
        <div class="admin-list__item-user">
            <img class="rounded-lg mb-1 admin-list__item-user-img" :src="user?.main_image">
            <h2 class="user-name text-lg font-medium">{{ user?.full_name }}</h2>
        </div>
        <h3 class="admin-list__item-class">{{ user?.pupil_class }}</h3>
        <h4 class="admin-list__item-age">{{ age_user }}</h4>
        <ul class="flex flex-col gap-2">
            <li class="flex justify-between">{{ user.emotions.length ? Math.max(...temp) : 0 }}%</li>
        </ul>
    </NuxtLink>
</template>

<script setup>
const { user } = defineProps(['user'])
const age_user = ref(null)
onMounted(() => {
    function calculateAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();

        const birthMonth = dob.getMonth();
        const currentMonth = today.getMonth();

        if (currentMonth < birthMonth || (currentMonth === birthMonth && today.getDate() < dob.getDate())) {
            age--;
        }

        return age;
    }

    // Example usage:
    const dateOfBirth = user?.birth_date;
    const age = calculateAge(dateOfBirth);
    if (user?.birth_date) {
        age_user.value = age
    } else {
        age_user.value = 'Нет данных'
    }
})
</script>

<style lang="scss">
.admin-list__item-user-img {
    width: 112px;
    height: 112px;
    object-fit: cover;
}

.user-name {
    text-transform: capitalize;
}
</style>
<template>
    <div class="register">
        <div class="container">
            <div class="flex w-1/2 flex-col justify-center py-6 lg:px-8 rounded-md bg-[#fff]">
                <h2 class="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Форма регистрации
                </h2>
                <div class="mt-10 ">
                    <form class="space-y-2" @submit.prevent="login()" action="#" method="POST">
                        <div>
                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Имя и фамилия</label>
                            <div class="mt-2">
                                <input id="name" v-model="name" name="name" type="text" autocomplete="email" required
                                    class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Ваш e-mail</label>
                            <div class="mt-2">
                                <input id="email" v-model="email" name="email" type="email" autocomplete="email" required
                                    class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password"
                                    class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                            </div>
                            <div class="mt-2">
                                <input id="password" v-model="password" name="password" type="password"
                                    autocomplete="current-password" required
                                    class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password"
                                    class="block text-sm font-medium leading-6 text-gray-900">Повторите пароль</label>
                            </div>
                            <div class="mt-2">
                                <input id="password" v-model="password" name="password" type="password"
                                    autocomplete="current-password" required
                                    class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="flex w-full mt-5 justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 ">Зарегистрировать</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "without",
});
const name = ref("")
const email = ref("")
const password = ref("")
const password_again = ref("")
</script>

<style lang="scss">
.register {
    height: 100vh;
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
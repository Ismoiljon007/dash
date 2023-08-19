<template>
    <div class="login ">
        <div class="container max-w-screen-lg flex gap-4">
            <div class="flex w-1/2 flex-col justify-center py-6 lg:px-8 rounded-md bg-[#fff]">
                <h2 class="text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">Вход по логину и
                    паролю
                </h2>
                <div class="mt-10 ">
                    <form class="space-y-6" @submit.prevent="login()" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Логин / электронная
                                почта</label>
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
                            <button type="submit"
                                class="flex w-full justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 ">Войти</button>
                        </div>
                    </form>


                </div>
            </div>
            <div class="flex w-1/2 flex-col justify-center items-center py-6 lg:px-8 rounded-md bg-[#fff]">
                <h2 class="text-[#222] font-medium mb-5 text-2xl">Вход по распознаванию лиц</h2>
                <button @click="start()"
                    class="flex mx-auto w-[fit-content] justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 "
                    v-if="video">Включить веб-камеру </button>
                <video ref="webcamRef" :class="{ 'block': !video }" class="object-cover hidden w-full h-full rounded-md"
                    autoplay></video>

            </div>
        </div>

    </div>
</template>

<script setup>
import { useStore } from '~~/store/store';
definePageMeta({
    layout: "without",
});
const store = useStore()
const router = useRouter()
const webcamRef = ref(null)
const video = ref(true)
async function start() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    webcamRef.value.srcObject = stream;
    video.value = false
}
function takepicture() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext("2d");
    context.drawImage(webcamRef.value, 0, 0, 320, 200);
    const data = canvas.toDataURL("image/png");
    const base64Data = canvas.toDataURL("image/png");

    const base64ImageData = base64Data.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');

    const binaryImageData = atob(base64ImageData);
    const blob = new Blob([new Uint8Array(binaryImageData.length).map((_, i) => binaryImageData.charCodeAt(i))], { type: 'image/jpeg' });
    const objectURL = URL.createObjectURL(blob);

    const img = new Image();
    console.log(objectURL);
}
const email = ref("")
const password = ref("")
async function login() {
    email.value = ""
    password.value = ""
    if (localStorage.getItem('loginPage') == 'parent') {
        router.push('/parent')
    } else if(localStorage.getItem('loginPage') == 'teacher-dash'){
        router.push('/teacher-dash')
    } else if(localStorage.getItem('loginPage') == 'psychologist') {
        router.push('/psychologist')
    } else {
        router.push('/dashboard')
    }
}
</script>

<style lang="scss">
.block {
    display: block !important;
}
</style>
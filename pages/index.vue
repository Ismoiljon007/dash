<template>
    <div class="chose-user ">
        <div class="container h-full max-w-5xl mx-auto flex flex-col">
            <h2 class="chose-user__title pt-[50px] mb-[20px]">СИСТЕМА АНАЛИЗА ПСИХОЭМОЦИОНАЛЬНОГО СОСТОЯНИЯ   </h2>
            <div class="chose-user__wrapper flex justify-between  my-auto">
                <h4 class="chose-user__wrapper-title font-semibold  text-4xl">Войти в систему как:</h4>
                <ul class="chose-user__list grid grid-cols-2 gap-4">
                    <li @click="toPage('admin')" class="chose-user__item flex flex-col items-center gap-3">
                        <div class="chose-user__item-img">
                            <img class="rounded-full" src="@/assets/images/png/Ellipse.png" alt="">
                        </div>
                        <h4 class="chose-user__item-title text-xl font-medium">АДМИНИСТРАТОР</h4>
                    </li>
                    <li @click="toPage('psycholog')" class="chose-user__item flex flex-col items-center gap-3">
                        <div class="chose-user__item-img">
                            <img class="rounded-full" src="@/assets/images/png/Ellipse-2.png" alt="">
                        </div>
                        <h4 class="chose-user__item-title text-xl font-medium">ПСИХОЛОГ</h4>
                    </li>
                    <li @click="toPage('teacher')" class="chose-user__item flex flex-col items-center gap-3">
                        <div class="chose-user__item-img">
                            <img class="rounded-full" src="@/assets/images/png/Ellipse-3.png" alt="">
                        </div>
                        <h4 class="chose-user__item-title text-xl font-medium">ПРЕПОДАВАТЕЛЬ</h4>
                    </li>
                    <li @click="toPage('parent')" class="chose-user__item flex flex-col items-center gap-3">
                        <div class="chose-user__item-img">
                            <img class="rounded-full" src="@/assets/images/png/Ellipse-1.png" alt="">
                        </div>
                        <h4 class="chose-user__item-title text-xl font-medium">РОДИТЕЛЬ</h4>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '~~/store/store';
const store = useStore()
const router = useRouter()
function toPage(text) {
    store.loginPage = text
    router.push('/login')
}
</script>

<style lang="scss">
.chose-user {
    height: 100vh;

    .container {
        flex-grow: 1;
    }
}

.chose-user__item {
    cursor: pointer;
    .chose-user__item-img {
        // background: #fff;
        border-radius: 50%;
        width: 250px;
        height: 250px;
        flex-shrink: 0;
        border: 4px solid transparent;
        transition: all 0.3s ease;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }

    &:hover {
        .chose-user__item-img {
            border-color: #2F4858;
        }

        .chose-user__item-title {
            color: #F8F7F1;
        }
    }
}
</style>
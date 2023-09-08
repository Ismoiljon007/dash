<template>
    <div class="about-student">
        <div class="container max-w-screen-xl mx-auto">
            <div class="about-student__header grid">
                <div
                    class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6 ">
                    Ученик</div>
                <div
                    class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6 ">
                    Класс</div>
                <div
                    class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6 ">
                    Возраст</div>
                <div
                    class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6 ">
                    Средний фон ЭС</div>
                <div
                    class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6 ">
                    Фон ЭС сегодня</div>
                <div
                    class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none sm:text-sm sm:leading-6 ">
                    Карта эмоций</div>
            </div>
            <div class="about-student__info grid">
                <div class="bg-[#fff] text-[#222] grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] shadow-md rounded-md p-3.5">
                    <div class="admin-list__item-user">
                        <img class="rounded-lg mb-1 admin-list__item-user-img" :src="details?.data?.face_result?.source_photo" alt="">
                        <h2 class="text-lg font-medium">Алиев Валижон</h2>
                    </div>
                    <h3 class="admin-list__item-class"><span>{{  }}</span> “Б”</h3>
                    <h4 class="admin-list__item-age">12</h4>
                    <h4 class="admin-list__item-emotion">Позитивный</h4>
                    <ul class="flex flex-col gap-2">
                        <li class="flex justify-between">Веселье: <span>85%</span></li>
                        <li class="flex justify-between">Грусть: <span>15%</span></li>
                        <li class="flex justify-between">Злость <span>0%</span></li>
                        <li class="flex justify-between">Страх: <span> 0%</span> </li>
                    </ul>
                </div>
                <div
                    class="about-user_chart bg-[#fff] text-[#222] grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] shadow-md rounded-md p-3.5">
                    <chart />
                </div>
            </div>
            <div class="about-student__emotions mt-2">
                <div class="bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5 about-student__activity">
                    <h3 class="mb-5 text-xl font-medium about-student__send-title">Активность</h3>
                    <div class="flex flex-col items-center justify-center h-full w-full">
                        <img src="@/assets/images/jpg/chart.jpg" alt="">
                    </div>
                </div>
                <div class="bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5 about-student__state">
                    <h3 class="mb-5 text-xl font-medium about-student__send-title">Состояние</h3>
                    <div class="chart">
                        <pie/>
                    </div>
                </div>
                <div class="bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5 about-student__score">
                    <h3 class="mb-5 text-xl font-medium about-student__send-title">Общая оценка</h3>
                    <div class="emotion w-full flex flex-col items-center justify-center h-full">
                        <img class="mb-2" src="@/assets/images/png/smile.png" alt="">
                        <h4 class="text-xl font-medium">Хорошо</h4>
                    </div>
                </div>
                <div class="bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5 about-student__week-em">
                    <h3 class="mb-5 text-xl font-medium about-student__send-title">Эмоции за неделю</h3>
                    <div class="grid activity">
                        <div class="activity-item flex flex-col gap-2" v-for="item in 7" :key="item">
                            <img class="rounded-md" src="https://picsum.photos/53/63" alt="">
                            <img class="rounded-md" src="https://picsum.photos/53/63" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-student__notification">
                <div class=" about-student__notification-wr bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <h3 class="about-student__title mb-5 text-xl font-medium">Уведомления</h3>
                    <div class="flex">
                        <div class="about-student__notification-img">
                            <img class="rounded-full" src="https://picsum.photos/100" alt="">
                        </div>
                        <div class="about-student__notification-info">
                            <h3 class="about-student__notification-name mb-3 text-lg font-medium">Дмитрий, учитель труда
                            </h3>
                            <div
                                class="about-student__notification-desc bg-[#4D6A71] text-[#222] shadow-md rounded-md p-3.5">
                                <svg class="rec" xmlns="http://www.w3.org/2000/svg" width="52" height="31"
                                    viewBox="0 0 52 31" fill="none">
                                    <path d="M0.496036 0.562349L51.7644 13.5068L37.0488 30.0689L0.496036 0.562349Z"
                                        fill="#4D6A71" />
                                </svg>
                                <p>
                                    Очень рассеян, нет концентрации при выполнении
                                    технических работ
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        class=" flex justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80">Ответить</button>
                </div>
                <div class=" about-student__notification-wr bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5">
                    <h3 class="about-student__title mb-5 text-xl font-medium">Рекомендации</h3>
                    <div class="flex">
                        <div class="about-student__notification-img">
                            <img class="rounded-full" src="https://picsum.photos/100" alt="">
                        </div>
                        <div class="about-student__notification-info">
                            <h3 class="about-student__notification-name mb-3 text-lg font-medium">Алина Игоревна, психолог
                            </h3>
                            <div
                                class="about-student__notification-desc bg-[#4D6A71] text-[#222] shadow-md rounded-md p-3.5">
                                <svg class="rec" xmlns="http://www.w3.org/2000/svg" width="52" height="31"
                                    viewBox="0 0 52 31" fill="none">
                                    <path d="M0.496036 0.562349L51.7644 13.5068L37.0488 30.0689L0.496036 0.562349Z"
                                        fill="#4D6A71" />
                                </svg>
                                <p>
                                    Рекомендую родителям позаниматься по теме
                                    критического мышления
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        class=" flex justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80">Ответить</button>
                </div>
            </div>
            <form action="#" class="bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5 mt-2" @submit.prevent="">
                <h3 class="about-student__title mb-5 text-xl font-medium about-student__send-title">Обращение к
                    администрации школы</h3>
                <div class="about-student__send-wr flex">
                    <input type="text"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="введите текст Вашего обращения">
                    <button
                        class="flex justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80">Отправить</button>
                </div>
            </form>
            <form action="#" class="bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5 mt-2" @submit.prevent="">
                <h3 class="about-student__title mb-5 text-xl font-medium about-student__send-title">Обращение к классному
                    руководителю</h3>
                <div class="about-student__send-wr flex">
                    <input type="text"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="введите текст Вашего обращения">
                    <button
                        class="flex justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80">Отправить</button>
                </div>
            </form>
            <form action="#" class="bg-[#fff] bg-[#fff] text-[#222] shadow-md rounded-md p-3.5 mt-2" @submit.prevent="">
                <h3 class="about-student__title mb-5 text-xl font-medium about-student__send-title">Обращение к родителям
                </h3>
                <div class="about-student__send-wr flex">
                    <input type="text"
                        class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="введите текст Вашего обращения">
                    <button
                        class="flex justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80">Отправить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
const {id} = useRoute().params
const details = ref(null)
async function getDetails() {
    const data = await $fetch('http://95.47.127.26:50008/Card/Humans/'+id, {
        method: 'GET',
        headers: {
            'X-APP-SERIAL': "9cfa3efcf90bb889d2ba7338101db808e00c4bf74dc57fa96722cd71423c8020"
        }
    })
    details.value = data
}
await getDetails()
</script>

<style lang="scss">
.about-student {
    padding: 40px 0;
}
.activity {
    grid-template-columns: repeat(7,1fr);
    gap: 10px;
}
.about-student__notification-wr {
    button {
        margin-top: 20px;
        margin-left: auto;
    }
}

.about-student__send-wr {
    gap: 30px;
}

.about-student__notification-img {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    margin-right: 10px;

    img {
        width: 100%;
        height: 100%;
    }
}

.about-student__notification-info {
    .about-student__notification-desc {
        width: 358px;
        position: relative;
        margin: 20px 0 0px 29px;
        background: #4D6A71;

        p {
            color: #fff;
        }

        .rec {
            position: absolute;
            top: -12px;
            left: -29px;
        }
    }
}

.about-user_chart {
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-student__activity {

}

.about-student__state {
    height: 100%;
}

.about-student__notification {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
}

.about-student__score {
    
}

.about-student__week-em {
    height: 100%;
}

.about-student__header {
    margin-bottom: 10px;
    grid-template-columns: 1.1fr 1fr 1fr 1fr 1fr 2fr;
    gap: 5px;

    .drop {
        &:last-child {
            margin-left: 5px;
        }
    }
}

.about-student__emotions {
    display: grid;
    grid-template-columns: 1.65fr 1.65fr 1.65fr 2fr;
    grid-template-rows: 1fr;
    gap: 10px;
}

.about-student__info {
    gap: 10px;
    grid-template-columns: 5.3fr 2fr;
}
</style>
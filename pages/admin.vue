<template>
    <div class="admin py-10">
        <div class="container max-w-screen-xl mx-auto">
            <div class="admin-nav mb-10">
                <button @click="check = 'teacher'" class="rounded px-3 bg-[#fff] text-[#2F4858] mr-4 py-1.5"
                    :class="check === 'teacher' ? 'bg-[#222] text-[#fff]' : ''">Преподаватели</button>
                <button @click="check = 'student'" class="rounded px-3 bg-[#fff] text-[#2F4858] py-1.5"
                    :class="check === 'student' ? 'bg-[#222] text-[#fff]' : ''">Ученики</button>
            </div>
            <div class="admin-wrapper flex gap-7">
                <ul class="w-3/4 admin-list flex flex-col gap-4">
                    <div class="admin-list__nav grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4">
                        <div class="relative mt-2">
                            <button @click="openDrop($event)" type="button"
                                class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer"
                                aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                <span class="flex items-center pointer-events-none">
                                    <span class="ml-3 block truncate">{{ params.student }}</span>
                                </span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <Transition name="fade">
                                <ul class="drop-list absolute hidden z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                    tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                    aria-activedescendant="listbox-option-3">

                                    <li @click="itemChange(), params.student = item.name"
                                        class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                        id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                        :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                        <div class="flex items-center">
                                            <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                        </div>

                                        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                            v-if="checkedStudent == item.name">
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </li>

                                </ul>
                            </Transition>
                        </div>
                        <div class="relative mt-2">
                            <button @click="openDrop($event)" type="button"
                                class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer"
                                aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                <span class="flex items-center pointer-events-none">
                                    <span class="ml-3 block truncate">{{ params.class }}</span>
                                </span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <Transition name="fade">
                                <ul class="drop-list absolute hidden z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                    tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                    aria-activedescendant="listbox-option-3">

                                    <li @click="itemChange(), params.class = item.name"
                                        class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                        id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                        :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                        <div class="flex items-center">
                                            <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                        </div>

                                        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                            v-if="checkedStudent == item.name">
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </li>

                                </ul>
                            </Transition>
                        </div>
                        <div class="relative mt-2">
                            <button @click="openDrop($event)" type="button"
                                class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer"
                                aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                <span class="flex items-center pointer-events-none">
                                    <span class="ml-3 block truncate">{{ params.age }}</span>
                                </span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <Transition name="fade">
                                <ul class="drop-list absolute hidden z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                    tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                    aria-activedescendant="listbox-option-3">

                                    <li @click="itemChange(), params.age = item.name"
                                        class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                        id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                        :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                        <div class="flex items-center">
                                            <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                        </div>

                                        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                            v-if="checkedStudent == item.name">
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </li>

                                </ul>
                            </Transition>
                        </div>
                        <div class="relative mt-2">
                            <button @click="openDrop($event)" type="button"
                                class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer"
                                aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                <span class="flex items-center pointer-events-none">
                                    <span class="ml-3 block truncate">{{ params.middleEmotion }}</span>
                                </span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <Transition name="fade">
                                <ul class="drop-list absolute hidden z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                    tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                    aria-activedescendant="listbox-option-3">

                                    <li @click="itemChange(), params.middleEmotion = item.name"
                                        class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                        id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                        :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                        <div class="flex items-center">
                                            <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                        </div>

                                        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                            v-if="checkedStudent == item.name">
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </li>

                                </ul>
                            </Transition>
                        </div>
                        <div class="relative mt-2">
                            <button @click="openDrop($event)" type="button"
                                class="drop relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer"
                                aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                <span class="flex items-center pointer-events-none">
                                    <span class="ml-3 block truncate">{{ params.emotion }}</span>
                                </span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <Transition name="fade">
                                <ul class="drop-list absolute hidden z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                    tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                    aria-activedescendant="listbox-option-3">

                                    <li @click="itemChange(), params.emotion = item.name"
                                        class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                        id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                        :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                        <div class="flex items-center">
                                            <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                        </div>

                                        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                            v-if="checkedStudent == item.name">
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </li>

                                </ul>
                            </Transition>
                        </div>

                    </div>
                    <li v-for="(user) in humans?.data?.results" @click="openBtn($event)"
                        class="bg-[#fff] admin-item cursor-pointer hover:bg-[#f5f5f5] text-[#222] grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] shadow-md rounded-md p-3.5"
                        :key="user">
                        <div class="pointer-events-none admin-list__item-user">
                            <img class="rounded-lg mb-1 admin-list__item-user-img" :src="user?.face_result?.source_photo">
                            <h2 class="user-name text-lg font-medium"><span>{{ user?.meta?.first_name }}</span> <span>{{
                                user?.meta?.last_name }}</span></h2>
                        </div>
                        <h3 class="pointer-events-none admin-list__item-class">{{ user?.watch_lists[0] }} “Б”</h3>
                        <h4 class="pointer-events-none admin-list__item-age">{{ user?.meta?.age }}</h4>
                        <h4 class="pointer-events-none admin-list__item-emotion">Позитивный</h4>
                        <ul class="flex-col gap-2 pointer-events-none flex pb-[60px]">
                            <li class="pointer-events-none flex flex justify-between">Веселье: <span>85%</span></li>
                            <li class="pointer-events-none flex flex justify-between">Грусть: <span>15%</span></li>
                            <li class="pointer-events-none flex flex justify-between">Злость <span>0%</span></li>
                            <li class="pointer-events-none flex flex justify-between">Страх: <span> 0%</span> </li>
                        </ul>
                        <button
                            class="ml-auto mt-10 btn flex hidden justify-center rounded-md bg-[#2F4858] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 ">редактировать</button>
                    </li>
                </ul>
                <div class="admin-filter w-1/4 mt-10">
                    <form action="#" @submit.prevent="" class="flex flex-col gap-2 mb-[200px]">
                        <label for="search">Поиск</label>
                        <input id="search" placeholder="введите фамилию"
                            class="block w-full rounded-md border-0 p-1.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-blue-500 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            type="text">
                    </form>
                    <h4 class="mb-3">Фильтр</h4>
                    <div class="relative mt-2">
                        <button @click="openDrop($event)" type="button"
                            class="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer drop"
                            aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                            <span class="flex pointer-events-none items-center">
                                <span class="ml-3 block truncate pointer-events-none">{{ filterParams.age }}</span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <Transition name="fade">
                            <ul class="drop-list hidden absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                aria-activedescendant="listbox-option-3">

                                <li @click="itemChange(), filterParams.age = item.name"
                                    class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                    id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                    :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                    <div class="flex items-center">
                                        <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                    </div>

                                    <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                        v-if="checkedStudent == item.name">
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </li>

                            </ul>
                        </Transition>
                    </div>
                    <div class="relative mt-2">
                        <button @click="openDrop($event)" type="button"
                            class="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer drop"
                            aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                            <span class="flex pointer-events-none items-center">
                                <span class="ml-3 block truncate pointer-events-none">{{ filterParams.class }}</span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <Transition name="fade">
                            <ul class="drop-list hidden absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                aria-activedescendant="listbox-option-3">

                                <li @click="itemChange(), filterParams.class = item.name"
                                    class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                    id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                    :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                    <div class="flex items-center">
                                        <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                    </div>

                                    <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                        v-if="checkedStudent == item.name">
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </li>

                            </ul>
                        </Transition>
                    </div>
                    <div class="relative mt-2">
                        <button @click="openDrop($event)" type="button"
                            class="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer drop"
                            aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                            <span class="flex pointer-events-none items-center">
                                <span class="ml-3 block truncate pointer-events-none">{{ filterParams.gander }}</span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <Transition name="fade">
                            <ul class="drop-list hidden absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                aria-activedescendant="listbox-option-3">

                                <li @click="itemChange(), filterParams.gander = item.name"
                                    class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                    id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                    :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                    <div class="flex items-center">
                                        <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                    </div>

                                    <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                        v-if="checkedStudent == item.name">
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </li>

                            </ul>
                        </Transition>
                    </div>
                    <div class="relative mt-2">
                        <button @click="openDrop($event)" type="button"
                            class="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2F4858] sm:text-sm sm:leading-6 cursor-pointer drop"
                            aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                            <span class="flex pointer-events-none items-center">
                                <span class="ml-3 block truncate pointer-events-none">{{ filterParams.emotion }}</span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                        <Transition name="fade">
                            <ul class="drop-list hidden absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                                aria-activedescendant="listbox-option-3">

                                <li @click="itemChange(), filterParams.emotion = item.name"
                                    class="drop-item cursor-pointer text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-[#f1f5f9]"
                                    id="listbox-option-0" role="option" v-for="item in students" :key="item"
                                    :class="checkedStudent === item.name ? 'bg-[#f1f5f9]' : ''">
                                    <div class="flex items-center">
                                        <span class="font-normal ml-3 block truncate">{{ item.name }}</span>
                                    </div>

                                    <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4"
                                        v-if="checkedStudent == item.name">
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </li>

                            </ul>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="modal bg-[#fff] cursor-pointer hover:bg-[#f5f5f5] text-[#222] shadow-md rounded-md p-3.5">
        <div class="edit-modal">

        </div>
    </div> -->
</template>

<script setup>
import { useStore } from '~~/store/store';
const store = useStore()
const check = ref('student')
const checkedStudent = ref('Ученик')
function openBtn(e) {
    // console.log(e.target);
    document.querySelectorAll('.admin-item').forEach((el, i) => {
        if (el == e.target) {
            document.querySelectorAll('.btn')[i].classList.toggle('hidden')
        }
    })
}
const params = reactive({
    student: 'Ученик',
    class: "Класс",
    age: "Возраст",
    middleEmotion: "Средний фон ЭС",
    emotion: "Фон ЭС сегодня"
})



const humans = ref(null)

async function getHumans() {
    store.loader = true
    const data = await $fetch("http://95.47.127.26:50008/Card/Humans", {
        method: 'GET',
        headers: {
            'X-APP-SERIAL': "9cfa3efcf90bb889d2ba7338101db808e00c4bf74dc57fa96722cd71423c8020"
        }
    })
    humans.value = data
    store.loader = false
    console.log(data);
}
await getHumans()
const humansDetails = ref([])
const getHumansDetails = async () => {
    const res = await $fetch('https://faceids.tadi.uz/events/faces/?limit=5', {
        method: 'GET',
        headers: {
            'Authorization': "Token 2a1bc15f2f20631edb18203c5ef1ed14d7c0335a2575b3d0cff4724baa002a7a"
        }
    })
    // console.log();
    res.results.forEach(async (item) => {
        const data = await $fetch('https://faceids.tadi.uz/events/faces/' + item.id, {
            method: 'GET',
            headers: {
                'Authorization': "Token 2a1bc15f2f20631edb18203c5ef1ed14d7c0335a2575b3d0cff4724baa002a7a"
            }
        })
        humansDetails.value.push(data)
    })
}
getHumansDetails()
const filterParams = reactive({
    age: "По возрасту",
    class: "По классу",
    gander: "По полу",
    emotion: "По ЭС"
})
function itemChange() {
    document.querySelectorAll('.drop').forEach((el, i) => {
        el.nextElementSibling.classList.add('hidden')
    })
}
function openDrop(e) {
    document.querySelectorAll('.drop').forEach((el, i) => {
        if (e.target == el) {
            e.target.nextElementSibling.classList.toggle('hidden')
        } else {
            el.nextElementSibling.classList.add('hidden')
        }
    })
}
const students = [
    {
        name: 'Mikle'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Abdulajon'
    },
    {
        name: 'Sherali'
    }
]
const teachers = [
    {
        name: 'Mikle'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Abdulajon'
    },
    {
        name: 'Sherali'
    }
]
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(20%);
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.3s;
    transform: translate(0%);
}

.admin-list__item-user-img {
    width: 112px;
    height: 112px;
    object-fit: cover;
    object-position: top;
}

.user-name {
    text-transform: capitalize;
}

.admin-item {
    position: relative;

    .btn {
        position: absolute;
        bottom: 15px;
        right: 15px;
    }
}
</style>
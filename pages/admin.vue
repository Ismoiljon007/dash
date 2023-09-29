<template>
    <div class="admin py-10">
        <div class="container max-w-screen-xl mx-auto">
            <div class="admin-nav mb-10">
                <button @click="check = 'teacher', getTeachers()" class="rounded px-3 bg-[#fff] text-[#2F4858] mr-4 py-1.5"
                    :class="check === 'teacher' ? 'active-btn' : ''">Преподаватели</button>
                <button @click="check = 'student', getHumans()" class="rounded px-3 bg-[#fff] text-[#2F4858] py-1.5"
                    :class="check === 'student' ? 'active-btn' : ''">Ученики</button>
            </div>
            <div class="admin-wrapper flex gap-7">
                <ul class="w-3/4 admin-list flex flex-col gap-4">
                    <div class="admin-list__nav grid grid-cols-[1.5fr_1fr_1fr_2fr] gap-4">
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
                    <li v-for="user in humans?.results" :key="user">
                        <user class="hover:bg-[#f5f5f5]" :user="user" />
                    </li>
                </ul>
                <div class="admin-filter w-1/4 mt-10">
                    <form action="#" @submit.prevent="" class="flex flex-col gap-2 mb-[200px]">
                        <label for="search">Поиск</label>
                        <input @input="search($event)" id="search" placeholder="введите фамилию"
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
    const data = await $fetch(store.baseUrl + "/users/pupils/", {
        method: 'GET',
    })
    humans.value = data
    store.loader = false

}
getHumans()

async function getTeachers() {
    store.loader = true
    const data = await $fetch(store.baseUrl + "/users/users/", {
        method: 'GET',
    })
    console.log(data);
    humans.value = data
    store.loader = false
}

async function search(e) {
    if (check != 'teacher') {
        const data = await $fetch(store.baseUrl + "/users/pupils/", {
            method: 'GET',
            params: {
                search: e.target.value
            }
        })
        humans.value = data
    } else {
        const data = await $fetch(store.baseUrl + "/users/users/", {
            method: 'GET',
            params: {
                search: e.target.value
            }
        })
        humans.value = data
    }
}

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
.active-btn {
    background: #c9c9c9;
    color: #fff
}

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
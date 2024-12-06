<!-- 侧边来组件在头部导航组件Navbar.vue中使用 -->
<script setup>
import { useRoute } from 'vue-router'
import { defineProps, defineEmits } from 'vue'

const route = useRoute()

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
})

const emit = defineEmits(['onClose'])

// 简化版的个人信息
const profile = {
  nickname: '学会微笑',
  stats: [
    { label: '文章', count: 5 },
    { label: '标签', count: 8 },
    { label: '分类', count: 4 },
  ],
}

const closeSidebar = () => {
  emit('onClose')
}
</script>

<template>
  <!-- 遮罩层 -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 z-50"
    @click="closeSidebar"
  ></div>

  <!-- 侧边栏 -->
  <div
    :class="[
      'fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto',
      isOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <!-- 关闭按钮 -->
    <button
      class="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      @click="closeSidebar"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div class="p-6">
      <!-- 个人信息区域 -->
      <div class="mb-4 border-b border-gray-100">
        <!-- 头像和名字 -->
        <div class="flex flex-col items-center space-y-4 mb-4">
          <img
            src="@/assets/images/Mofei1-cut.jpg"
            alt="avatar"
            class="w-16 h-16 rounded-full object-cover"
          />
          <h2 class="text-lg font-bold text-gray-800">
            {{ profile.nickname }}
          </h2>
        </div>

        <!-- 统计信息 -->
        <div class="flex justify-between px-8 py-3">
          <div
            v-for="stat in profile.stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-lg font-semibold text-gray-800">
              {{ stat.count }}
            </div>
            <div class="text-xs text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- 导航菜单 -->
      <nav class="grid grid-cols-3 gap-3">
        <router-link
          class="flex flex-col items-center justify-center px-4 py-4 border border-blue-100 text-gray-600 rounded-lg font-semibold"
          :to="{ path: '/dashboard' }"
          :class="{ 'bg-blue-500 text-white': route.path === '/dashboard' }"
          @click="closeSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 fill-gray-600"
            :class="{ '!fill-white': route.path === '/dashboard' }"
            viewBox="0 0 24 24"
          >
            <title>home</title>
            <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          首页
        </router-link>
        <router-link
          class="flex flex-col items-center justify-center px-4 py-4 border border-blue-100 text-gray-600 rounded-lg font-semibold transition-colors"
          :to="{ path: '/tag' }"
          :class="{ 'bg-blue-500 text-white': route.path === '/tag' }"
          @click="closeSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-8 w-8 fill-gray-600"
            :class="{ '!fill-white': route.path === '/tag' }"
          >
            <title>tag</title>
            <path
              d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"
            />
          </svg>
          标签
        </router-link>
        <router-link
          class="flex flex-col items-center justify-center px-4 py-4 border border-blue-100 text-gray-600 rounded-lg font-semibold transition-colors"
          :to="{ path: '/category' }"
          :class="{ 'bg-blue-500 text-white': route.path === '/category' }"
          @click="closeSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-8 w-8 fill-gray-600"
            :class="{ '!fill-white': route.path === '/category' }"
          >
            <title>shape</title>
            <path
              d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z"
            />
          </svg>
          分类
        </router-link>
        <router-link
          class="flex flex-col items-center justify-center px-4 py-4 border border-blue-100 text-gray-600 rounded-lg font-semibold transition-colors"
          :to="{ path: '/archive' }"
          :class="{ 'bg-blue-500 text-white': route.path === '/archive' }"
          @click="closeSidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-8 w-8 fill-gray-600"
            :class="{ '!fill-white': route.path === '/archive' }"
          >
            <title>archive-edit</title>
            <path
              d="M20 10.3V8H4V21H11V19.13L19.39 10.74C19.57 10.56 19.78 10.42 20 10.3M15 13H9V11.5C9 11.22 9.22 11 9.5 11H14.5C14.78 11 15 11.22 15 11.5V13M21 7H3V3H21V7M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83Z"
            />
          </svg>
          归档
        </router-link>
        <router-link
          class="flex flex-col items-center justify-center px-4 py-4 border border-blue-100 text-gray-600 rounded-lg font-semibold transition-colors"
          :to="{ path: '/about' }"
          :class="{ 'bg-blue-500 text-white': route.path === '/about' }"
          @click="closeSidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 w-8 fill-gray-600"
            :class="{ '!fill-white': route.path === '/about' }">
            <title>information</title>
            <path
              d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
          关于
        </router-link>
      </nav>
    </div>
  </div>
</template>

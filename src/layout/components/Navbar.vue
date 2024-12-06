<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import Sidebar from '@/layout/components/Sidebar.vue'

const isSidebarOpen = ref(false)
const isVisible = ref(true)
const lastScrollPosition = ref(0)
const scrollThreshold = 50 // 滚动阈值
const isScrollingUp = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const handleScroll = () => {
  const currentScrollPosition = window.scrollY

  // 判断滚动方向
  isScrollingUp.value = currentScrollPosition < lastScrollPosition.value

  // 只有当滚动超过阈值时才触发显示/隐藏
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) > scrollThreshold) {
    isVisible.value = isScrollingUp.value || currentScrollPosition < 100
    lastScrollPosition.value = currentScrollPosition
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const menuItems = [
  {name: '首页', path: '/dashboard'},
  {name: '标签', path: '/tag'},
  {name: '分类', path: '/category'},
  {name: '归档', path: '/archive'},
  {name: '关于', path: '/about'}
]
</script>

<template>
  <nav
      class="fixed top-0 left-0 right-0 bg-white z-20 transition-transform duration-300"
      :class="[
      isVisible ? 'translate-y-0' : '-translate-y-full',
      isScrollingUp ? 'shadow-md' : ''
    ]"
  >
    <div class="container px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold text-gray-800">
            Ablog
          </router-link>
        </div>

        <!-- 桌面端菜单 -->
        <div class="hidden md:flex space-x-8">
          <router-link
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="text-base text-gray-600 font-semibold hover:text-blue-500 transition-colors"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <button
            class="md:hidden text-gray-600 hover:text-gray-900"
            @click="toggleSidebar"
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
                d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <!-- 为了防止内容被固定导航栏遮挡，添加一个占位符 -->
  <div class="h-16"></div>

  <!-- 侧边栏 -->
  <Sidebar :is-open="isSidebarOpen" @on-close="closeSidebar"/>
</template>

<style scoped>
/* 添加平滑过渡效果 */
.transition-transform {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

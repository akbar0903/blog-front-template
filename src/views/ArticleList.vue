<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Pagination from '@/components/Pagination.vue'

const router = useRouter()
const currentPage = ref(1)
const totalPages = ref(20)

const articles = [
  {
    id: 1,
    title: '2024年前端开发趋势展望, 前端技术发展趋势, 前端开发趋势',
    cover:
      'https://blog-ultimate.oss-cn-beijing.aliyuncs.com/0c7328e0-0380-40c3-8aac-80c86302a5bf.png',
    summary:
      '随着Web技术的不断发展，2024年前端开发领域将迎来新的机遇和挑战。本文将详细探讨AI辅助开发、WebAssembly、',
    publishDate: '2024-03-15',
    views: 1234,
    comments: 56,
    likes: 88,
    tags: ['前端开发', 'Web技术'],
  },
  {
    id: 2,
    title: 'Vue3 + TypeScript 实战指南',
    cover:
      'https://blog-ultimate.oss-cn-beijing.aliyuncs.com/0dbf7a7f-fda5-4357-9b41-b7fad1afdeac.jpg',
    summary:
      '本文将带你深入了解Vue3和TypeScript的结合使用，包括组合式API、类型推导、性能优化等实用技巧，助你构建更健壮的应用...',
    publishDate: '2024-03-10',
    views: 2156,
    comments: 89,
    likes: 120,
    tags: ['Vue3', 'TypeScript'],
  },
  {
    id: 3,
    title: '深入浅出Tailwind CSS',
    cover:
      'https://blog-ultimate.oss-cn-beijing.aliyuncs.com/1e04f970-0fd6-4731-acc3-00165adba496.jpg',
    summary:
      'Tailwind CSS作为一个实用优先的CSS框架，正成为前端开发的新宠。本文将分享Tailwind CSS的最佳实践和使用技巧...',
    publishDate: '2024-03-05',
    views: 1789,
    comments: 45,
    likes: 94,
    tags: ['CSS', 'Tailwind'],
  },
  {
    id: 4,
    title: '构建高性能React应用：最佳实践与优化技巧',
    cover:
      'https://blog-ultimate.oss-cn-beijing.aliyuncs.com/2c8a742b-3f1d-4995-8aa7-3a37d4288247.jpg',
    summary:
      '性能优化是前端开发中的重要话题。本文将介绍React应用优化的关键策略，包括状态管理、组件拆分、懒加载等实用技巧...',
    publishDate: '2024-03-01',
    views: 3267,
    comments: 125,
    likes: 246,
    tags: ['React', '性能优化'],
  },
  {
    id: 5,
    title: 'Node.js微服务架构实践指南',
    cover:
      'https://blog-ultimate.oss-cn-beijing.aliyuncs.com/9b959cd0-a50c-4e14-b510-9b5c25cbd586.jpg',
    summary:
      '微服务架构已成为现代应用开发的主流选择。本文将分享使用Node.js构建微服务的实践经验，包括服务拆分、通信方案、部署策略等...',
    publishDate: '2024-02-28',
    views: 2891,
    comments: 98,
    likes: 167,
    tags: ['Node.js', '微服务'],
  },
]

const goToDetail = (id) => {
  router.push(`/article/${id}`)
}
</script>

<template>
  <div class="bg-white rounded-lg shadow p-4 sm:p-6">
    <h1 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">文章列表</h1>
    <div class="space-y-4 sm:space-y-6">
      <!-- 文章列表 -->
      <div
        v-for="article in articles"
        :key="article.id"
        class="flex gap-3 sm:gap-6 pb-4 sm:pb-6 border-b border-gray-100 last:border-0 cursor-pointer"
        @click="goToDetail(article.id)"
      >
        <!-- 文章封面 -->
        <div class="shrink-0">
          <img
            :src="article.cover"
            :alt="article.title"
            class="w-[120px] h-[80px] sm:w-[200px] sm:h-[134px] object-cover rounded-lg"
          />
        </div>

        <!-- 文章信息 -->
        <div class="flex flex-col flex-grow min-w-0">
          <!-- 标题 -->
          <h2
            class="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 hover:text-blue-600 line-clamp-1 sm:line-clamp-2"
          >
            {{ article.title }}
          </h2>

          <!-- 摘要 - 在小屏幕下隐藏 -->
          <p class="sm:block text-gray-600 mb-4 line-clamp-1 sm:line-clamp-2">
            {{ article.summary }}
          </p>

          <!-- 文章元信息 -->
          <div
            class="mt-auto flex flex-wrap items-center text-xs sm:text-sm text-gray-500 gap-2 sm:gap-4"
          >
            <!-- 发布日期 -->
            <div class="flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {{ article.publishDate }}
            </div>

            <!-- 浏览量 -->
            <div class="hidden sm:flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {{ article.views }}
            </div>

            <!-- 评论数 -->
            <div class="hidden sm:flex items-center">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {{ article.comments }}
            </div>

            <!-- 点赞数 - 在小屏幕下隐藏 -->
            <div class="flex items-center">
              <svg
                class="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {{ article.likes }}
            </div>

            <!-- 标签 - 在小屏幕下隐藏 -->
            <div class="hidden sm:flex items-center space-x-2">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200"
              >
              <svg class="w-3 h-3 inline fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tag-outline</title><path d="M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L11.59 21.42A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M13 20L4 11V4H11L20 13M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z" /></svg>
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页组件 -->
    <Pagination v-model:currentPage="currentPage" :total-pages="totalPages" />
  </div>
</template>

<script setup>
import ArticleList from '@/views/ArticleList.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import RecentPosts from '@/components/RecentPosts.vue'
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
    <!-- 文章列表/详情区域 -->
    <div class="lg:col-span-9">
      <ArticleList />
    </div>

    <!-- 侧边栏 -->
    <aside class="hidden lg:block lg:col-span-3">
      <ProfileCard />
      <RecentPosts />
    </aside>
  </div>
</template>

import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/Layout/index.vue'
import Dashboard from '@/views/Dashboard.vue';
const articleDetail = () => import('@/views/ArticleDetail.vue');
const Tag = () => import('@/views/Tag.vue');
const Category = () => import('@/views/Category.vue');
const Archive = () => import('@/views/Archive.vue');
const About = () => import('@/views/About.vue');

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'article/:id',
        component: articleDetail,
      },
      {
        path: 'tag',
        component: Tag,
      },
      {
        path: 'category',
        component: Category,
      },
      {
        path: 'archive',
        component: Archive,
      },
      {
        path: 'about',
        component: About,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

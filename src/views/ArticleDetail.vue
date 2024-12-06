<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import Catalog from '@/components/Catalog.vue'


const route = useRoute()
const articleId = route.params.id

// 切换目录显示状态
const showMobileCatalog = ref(false)
const toggleCatalog = () => {
  showMobileCatalog.value = !showMobileCatalog.value
}

const article = ref({
  id: articleId,
  title: '2024年前端开发趋势展望',
  cover: 'https://picsum.photos/1200/400?random=1',
  publishDate: '2024-03-15',
  updateDate: '2024-03-16',
  author: '学会微笑',
  views: 1234,
  comments: 56,
  likes: 88,
  tags: ['前端开发', 'Web技术'],
  content: `
   <h2 class="text-3xl font-bold mb-4">Web前端技术分析</h2>
<p>随着互联网技术的飞速发展，Web前端技术已经成为构建现代互联网应用的基石。从基础的HTML、CSS、JavaScript到现代的前端框架与工具，前端技术不断进化，旨在为用户提供更加流畅、高效、美观的交互体验。本文将带您回顾前端技术的基础，探讨其发展趋势，并深入解析一些现代前端技术栈中的关键技术。</p>

<h3 class="text-2xl font-bold mb-4">1. HTML/CSS/JavaScript的演进</h3>
<p>HTML（HyperText Markup Language）作为网页内容的结构化标记语言，定义了网页的基本结构。CSS（Cascading Style Sheets）负责网页的样式和布局，让网页看起来更加美观和易用。JavaScript则是一种运行在浏览器中的脚本语言，赋予了网页动态交互的能力。这三种技术构成了前端开发的“黄金三角”，是所有前端项目的基础。</p>

<h3 class="text-2xl font-bold mb-4">2. CSS的演变及其对前端工作方式的影响</h3>
<p>CSS从最初的简单样式定义，发展到如今的CSS3，引入了动画、渐变、阴影等高级视觉效果，极大地丰富了网页的视觉表现力。CSS预处理器如Sass和Less的出现，使得CSS的编写更加灵活和可维护。CSS模块化和BEM命名方法等实践，进一步提高了CSS的可维护性和可扩展性，改变了前端开发的工作方式。</p>

<h3 class="text-2xl font-bold mb-4">3. JavaScript面临的挑战</h3>
<p>JavaScript作为一种动态脚本语言，随着单页应用（SPA）的流行，其在前端开发中的作用越来越重要。然而，JavaScript也面临着性能优化、代码可维护性、异步编程等挑战。ES6及以后的版本引入了箭头函数、模板字符串、模块化等新特性，提高了JavaScript的表达力和开发效率。</p>

<h3 class="text-2xl font-bold mb-4">4. TypeScript的机遇</h3>
<p>TypeScript作为JavaScript的超集，添加了静态类型系统，提供了更好的工具支持和类型推断，减少了运行时错误。TypeScript在大型项目中尤其受欢迎，因为它提供了更好的开发体验和代码质量保证。随着TypeScript的普及，越来越多的前端项目开始采用TypeScript作为开发语言。</p>

<h3 class="text-2xl font-bold mb-4">5. Vue与React的比较</h3>
<p>Vue和React是当前最流行的两个前端框架。Vue以其渐进式框架、易上手和灵活性而受到开发者的喜爱。React则以其组件化、虚拟DOM和庞大的生态系统而闻名。两者在设计理念、性能、生态系统等方面有所不同，但都能有效地解决现代Web开发中的问题。</p>

<h3     class="text-2xl font-bold mb-4">6. 前端框架的发展趋势</h3>
<p>随着前端技术的不断发展，前端框架也在不断演进。Angular、React和Vue等主流框架都在积极拥抱新的Web标准和技术，如Web Components、Serverless架构等。同时，前端框架也在向更高的抽象层次发展，提供了更多的抽象和工具来简化开发流程。</p>

<h3     class="text-2xl font-bold mb-4">7. 前端性能优化</h3>
<p>性能优化是前端开发中的一个重要环节。从代码分割、懒加载、服务端渲染（SSR）到使用CDN和HTTP/2，前端开发者们正在采用各种方法来提升网页的加载速度和用户体验。性能优化工具如Lighthouse、Webpack Bundle Analyzer等，帮助开发者分析和优化应用的性能。</p>

<h3 class="text-2xl font-bold mb-4">8. 前端工程化与模块化</h3>
<p>前端工程化是使用软件工程的技术和方法来进行前端开发流程、技术、工具、经验等规范化、标准化。它包括构建工具、模块化、自动化测试、持续集成/持续部署（CI/CD）等方面，旨在提高开发效率和降低成本。模块化是前端工程化的核心，它通过将代码分解成更小的、可复用的模块或组件，提高了代码的可维护性和可扩展性。</p>

<h3 class="text-2xl font-bold mb-4">9. 用户体验(UX)和可访问性(Accessibility)</h3>
<p>前端开发不仅仅是编写代码，还需要具备一定的设计基础，能够设计出美观、易用的界面。用户体验设计和可访问性在前端开发中的重要性日益凸显，它们直接影响到用户的使用体验和产品的成功。前端开发者需要了解基本的用户体验设计原则，并在设计和开发中考虑到可访问性。</p>

<h3     class="text-2xl font-bold mb-4">10. 总结</h3>
<p>前端技术正处于一个不断演进和创新的时代。作为开发者，持续学习新技术，理解其背后的原理，才能在快速变化的技术栈中保持竞争力，创造出更加优秀的用户体验。</p>
<h2>Web前端技术分析与未来展望</h2>
<p>在数字化时代，前端技术作为连接用户与数据的桥梁，其重要性日益凸显。本文将深入探讨Web前端技术的最新分析、未来展望以及面临的挑战。</p>

<h3 class="text-2xl font-bold mb-4">1. 前端框架的演变</h3>
<p>随着用户对网页交互和响应速度的要求提高，前端框架不断演进。从早期的jQuery到现在的React、Vue和Angular，前端框架的发展标志着从简单页面展示到复杂应用构建的转变。</p>

<h3 class="text-2xl font-bold mb-4">2. CSS的演进及其对前端的影响</h3>
<p>CSS从最初的样式定义，发展到今天的CSS3，引入了动画、渐变、阴影等视觉效果，极大地丰富了网页的视觉表现力。CSS预处理器如Sass和Less的出现，使得CSS的编写更加灵活和可维护。</p>

<h3 class="text-2xl font-bold mb-4">3. JavaScript的挑战与机遇</h3>
<p>JavaScript作为前端开发的核心，面临着性能优化、代码可维护性、异步编程等挑战。ES6及以后的版本引入了箭头函数、模板字符串、模块化等新特性，提高了JavaScript的表达力和开发效率。</p>

<h3 class="text-2xl font-bold mb-4">4. TypeScript的崛起</h3>
<p>TypeScript作为JavaScript的超集，添加了静态类型系统，提供了更好的工具支持和类型推断，减少了运行时错误。它在大型项目中尤其受欢迎，因为它提供了更好的开发体验和代码质量保证。</p>

<h3 class="text-2xl font-bold mb-4">5. Vue与React的比较</h3>
<p>Vue和React是当前最流行的两个前端框架。Vue以其渐进式框架、易上手和灵活性而受到开发者的喜爱。React则以其组件化、虚拟DOM和庞大的生态系统而闻名。两者在设计理念、性能、生态系统等方面有所不同，但都能有效地解决现代Web开发中的问题。</p>

<h3     class="text-2xl font-bold mb-4">6. 前端性能优化</h3>
<p>性能优化是前端开发中的一个重要环节。从代码分割、懒加载、服务端渲染（SSR）到使用CDN和HTTP/2，前端开发者们正在采用各种方法来提升网页的加载速度和用户体验。</p>

<h3     class="text-2xl font-bold mb-4">7. 前端工程化与模块化</h3>
<p>前端工程化是使用软件工程的技术和方法来进行前端开发流程、技术、工具、经验等规范化、标准化。它包括构建工具、模块化、自动化测试、持续集成/持续部署（CI/CD）等方面，旨在提高开发效率和降低成本。</p>

<h3     class="text-2xl font-bold mb-4">8. 用户体验(UX)和可访问性(Accessibility)</h3>
<p>前端开发不仅仅是编写代码，还需要具备一定的设计基础，能够设计出美观、易用的界面。用户体验设计和可访问性在前端开发中的重要性日益凸显，它们直接影响到用户的使用体验和产品的成功。</p>

<h3     class="text-2xl font-bold mb-4">9. 前端技术的未来发展</h3>
<p>随着技术的不断进步，前端技术也在不断创新。未来的趋势包括静态网站生成器（SSG）的流行，WebAssembly和WebGPU等技术的应用，以及人工智能与前端结合的进一步发展。</p>

<h3     class="text-2xl font-bold mb-4">10. 结论</h3>
<p>前端技术正处于一个不断演进和创新的时代。作为开发者，持续学习新技术，理解其背后的原理，才能在快速变化的技术栈中保持竞争力，创造出更加优秀的用户体验。</p>
   <h2 class="text-3xl font-bold mb-4">Web前端技术分析</h2>
<p>随着互联网技术的飞速发展，Web前端技术已经成为构建现代互联网应用的基石。从基础的HTML、CSS、JavaScript到现代的前端框架与工具，前端技术不断进化，旨在为用户提供更加流畅、高效、美观的交互体验。本文将带您回顾前端技术的基础，探讨其发展趋势，并深入解析一些现代前端技术栈中的关键技术。</p>

<h3 class="text-2xl font-bold mb-4">1. HTML/CSS/JavaScript的演进</h3>
<p>HTML（HyperText Markup Language）作为网页内容的结构化标记语言，定义了网页的基本结构。CSS（Cascading Style Sheets）负责网页的样式和布局，让网页看起来更加美观和易用。JavaScript则是一种运行在浏览器中的脚本语言，赋予了网页动态交互的能力。这三种技术构成了前端开发的“黄金三角”，是所有前端项目的基础。</p>

<h3 class="text-2xl font-bold mb-4">2. CSS的演变及其对前端工作方式的影响</h3>
<p>CSS从最初的简单样式定义，发展到如今的CSS3，引入了动画、渐变、阴影等高级视觉效果，极大地丰富了网页的视觉表现力。CSS预处理器如Sass和Less的出现，使得CSS的编写更加灵活和可维护。CSS模块化和BEM命名方法等实践，进一步提高了CSS的可维护性和可扩展性，改变了前端开发的工作方式。</p>

<h3 class="text-2xl font-bold mb-4">3. JavaScript面临的挑战</h3>
<p>JavaScript作为一种动态脚本语言，随着单页应用（SPA）的流行，其在前端开发中的作用越来越重要。然而，JavaScript也面临着性能优化、代码可维护性、异步编程等挑战。ES6及以后的版本引入了箭头函数、模板字符串、模块化等新特性，提高了JavaScript的表达力和开发效率。</p>

<h3 class="text-2xl font-bold mb-4">4. TypeScript的机遇</h3>
<p>TypeScript作为JavaScript的超集，添加了静态类型系统，提供了更好的工具支持和类型推断，减少了运行时错误。TypeScript在大型项目中尤其受欢迎，因为它提供了更好的开发体验和代码质量保证。随着TypeScript的普及，越来越多的前端项目开始采用TypeScript作为开发语言。</p>

<h3 class="text-2xl font-bold mb-4">5. Vue与React的比较</h3>
<p>Vue和React是当前最流行的两个前端框架。Vue以其渐进式框架、易上手和灵活性而受到开发者的喜爱。React则以其组件化、虚拟DOM和庞大的生态系统而闻名。两者在设计理念、性能、生态系统等方面有所不同，但都能有效地解决现代Web开发中的问题。</p>

<h3     class="text-2xl font-bold mb-4">6. 前端框架的发展趋势</h3>
<p>随着前端技术的不断发展，前端框架也在不断演进。Angular、React和Vue等主流框架都在积极拥抱新的Web标准和技术，如Web Components、Serverless架构等。同时，前端框架也在向更高的抽象层次发展，提供了更多的抽象和工具来简化开发流程。</p>

<h3     class="text-2xl font-bold mb-4">7. 前端性能优化</h3>
<p>性能优化是前端开发中的一个重要环节。从代码分割、懒加载、服务端渲染（SSR）到使用CDN和HTTP/2，前端开发者们正在采用各种方法来提升网页的加载速度和用户体验。性能优化工具如Lighthouse、Webpack Bundle Analyzer等，帮助开发者分析和优化应用的性能。</p>

<h3 class="text-2xl font-bold mb-4">8. 前端工程化与模块化</h3>
<p>前端工程化是使用软件工程的技术和方法来进行前端开发流程、技术、工具、经验等规范化、标准化。它包括构建工具、模块化、自动化测试、持续集成/持续部署（CI/CD）等方面，旨在提高开发效率和降低成本。模块化是前端工程化的核心，它通过将代码分解成更小的、可复用的模块或组件，提高了代码的可维护性和可扩展性。</p>

<h3 class="text-2xl font-bold mb-4">9. 用户体验(UX)和可访问性(Accessibility)</h3>
<p>前端开发不仅仅是编写代码，还需要具备一定的设计基础，能够设计出美观、易用的界面。用户体验设计和可访问性在前端开发中的重要性日益凸显，它们直接影响到用户的使用体验和产品的成功。前端开发者需要了解基本的用户体验设计原则，并在设计和开发中考虑到可访问性。</p>

<h3     class="text-2xl font-bold mb-4">10. 总结</h3>
<p>前端技术正处于一个不断演进和创新的时代。作为开发者，持续学习新技术，理解其背后的原理，才能在快速变化的技术栈中保持竞争力，创造出更加优秀的用户体验。</p>
<h2>Web前端技术分析与未来展望</h2>
<p>在数字化时代，前端技术作为连接用户与数据的桥梁，其重要性日益凸显。本文将深入探讨Web前端技术的最新分析、未来展望以及面临的挑战。</p>

<h3 class="text-2xl font-bold mb-4">1. 前端框架的演变</h3>
<p>随着用户对网页交互和响应速度的要求提高，前端框架不断演进。从早期的jQuery到现在的React、Vue和Angular，前端框架的发展标志着从简单页面展示到复杂应用构建的转变。</p>

<h3 class="text-2xl font-bold mb-4">2. CSS的演进及其对前端的影响</h3>
<p>CSS从最初的样式定义，发展到今天的CSS3，引入了动画、渐变、阴影等视觉效果，极大地丰富了网页的视觉表现力。CSS预处理器如Sass和Less的出现，使得CSS的编写更加灵活和可维护。</p>

<h3 class="text-2xl font-bold mb-4">3. JavaScript的挑战与机遇</h3>
<p>JavaScript作为前端开发的核心，面临着性能优化、代码可维护性、异步编程等挑战。ES6及以后的版本引入了箭头函数、模板字符串、模块化等新特性，提高了JavaScript的表达力和开发效率。</p>

<h3 class="text-2xl font-bold mb-4">4. TypeScript的崛起</h3>
<p>TypeScript作为JavaScript的超集，添加了静态类型系统，提供了更好的工具支持和类型推断，减少了运行时错误。它在大型项目中尤其受欢迎，因为它提供了更好的开发体验和代码质量保证。</p>

<h3 class="text-2xl font-bold mb-4">5. Vue与React的比较</h3>
<p>Vue和React是当前最流行的两个前端框架。Vue以其渐进式框架、易上手和灵活性而受到开发者的喜爱。React则以其组件化、虚拟DOM和庞大的生态系统而闻名。两者在设计理念、性能、生态系统等方面有所不同，但都能有效地解决现代Web开发中的问题。</p>

<h3     class="text-2xl font-bold mb-4">6. 前端性能优化</h3>
<p>性能优化是前端开发中的一个重要环节。从代码分割、懒加载、服务端渲染（SSR）到使用CDN和HTTP/2，前端开发者们正在采用各种方法来提升网页的加载速度和用户体验。</p>

<h3     class="text-2xl font-bold mb-4">7. 前端工程化与模块化</h3>
<p>前端工程化是使用软件工程的技术和方法来进行前端开发流程、技术、工具、经验等规范化、标准化。它包括构建工具、模块化、自动化测试、持续集成/持续部署（CI/CD）等方面，旨在提高开发效率和降低成本。</p>

<h3     class="text-2xl font-bold mb-4">8. 用户体验(UX)和可访问性(Accessibility)</h3>
<p>前端开发不仅仅是编写代码，还需要具备一定的设计基础，能够设计出美观、易用的界面。用户体验设计和可访问性在前端开发中的重要性日益凸显，它们直接影响到用户的使用体验和产品的成功。</p>

<h3     class="text-2xl font-bold mb-4">9. 前端技术的未来发展</h3>
<p>随着技术的不断进步，前端技术也在不断创新。未来的趋势包括静态网站生成器（SSG）的流行，WebAssembly和WebGPU等技术的应用，以及人工智能与前端结合的进一步发展。</p>

<h3     class="text-2xl font-bold mb-4">10. 结论</h3>
<p>前端技术正处于一个不断演进和创新的时代。作为开发者，持续学习新技术，理解其背后的原理，才能在快速变化的技术栈中保持竞争力，创造出更加优秀的用户体验。</p>

  `,
})
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
    <article
        class="lg:col-span-9 bg-white rounded-lg shadow-md overflow-hidden"
    >
      <!-- 封面图 -->
      <div class="relative h-[400px]">
        <img
            :src="article.cover"
            :alt="article.title"
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 class="absolute bottom-8 left-8 text-3xl font-bold text-white">
          {{ article.title }}
        </h1>
      </div>

      <!-- 文章信息 -->
      <div class="border-b border-gray-100">
        <div class="container max-w-4xl mx-auto px-6 py-4">
          <div class="flex flex-wrap items-center text-sm text-gray-500 space-x-6">
            <!-- 作者 -->
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {{ article.author }}
            </div>

            <!-- 发布日期 -->
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {{ article.publishDate }}
            </div>

            <!-- 浏览量 -->
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {{ article.comments }}
            </div>
          </div>

          <!-- 标签 -->
          <div class="flex items-center space-x-2 mt-4">
            <span
                v-for="tag in article.tags"
                :key="tag"
                class="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200"
            >
              <svg
                  class="w-3 h-3 inline fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
              >
                <title>tag-outline</title>
                <path
                    d="M21.41 11.58L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.42L11.59 21.42A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M13 20L4 11V4H11L20 13M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5Z"
                />
              </svg>
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- 文章内容 -->
      <div class="container max-w-4xl mx-auto px-6 py-8">
        <div
            class="article-content prose prose-lg max-w-none"
            v-html="article.content"
        ></div>
      </div>
    </article>

    <!-- 目录 -->
    <aside class="hidden lg:block lg:col-span-3">
      <div class="sticky top-4 bg-white rounded-lg shadow-md p-4">
        <h3 class="text-lg font-bold mb-4">文章目录</h3>
        <div class="catalog-wrapper max-h-[calc(100vh-8rem)] overflow-y-auto">
          <Catalog/>
        </div>
      </div>
    </aside>
  </div>

  <!-- 移动端目录按钮 -->
  <button
      class="lg:hidden fixed right-6 bottom-20 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-700 transition-colors"
      @click="toggleCatalog"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>

  <!-- 遮罩层 -->
  <div
      v-show="showMobileCatalog"
      class="fixed inset-0 z-20 bg-gray-600 bg-opacity-50"
      @click="toggleCatalog"
  ></div>

  <!-- 移动端目录弹窗 -->
  <div
      class="mobile-catalog fixed right-0 top-0 z-30 bottom-0 w-64 bg-white p-4 transform transition-transform duration-300"
      :class="showMobileCatalog ? 'translate-x-0' : 'translate-x-full'"
      @click.stop
  >
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-lg font-bold">文章目录</h3>
      <button
          class="text-gray-500 hover:text-gray-700"
          @click="toggleCatalog"
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
    </div>
    <div class="catalog-wrapper overflow-y-auto max-h-[calc(100vh-6rem)]">
      <Catalog/>
    </div>
  </div>
</template>

<style>
.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.prose p {
  @apply mb-4 leading-relaxed text-gray-700;
}

.prose ul {
  @apply list-disc list-inside mb-4 text-gray-700;
}

.prose li {
  @apply mb-2;
}

/* 自定义滚动条样式 */
.catalog-wrapper::-webkit-scrollbar {
  width: 4px;
}

.catalog-wrapper::-webkit-scrollbar-track {
  @apply bg-gray-100 rounded;
}

.catalog-wrapper::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded hover:bg-gray-400;
}
</style>

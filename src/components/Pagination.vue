<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:currentPage'])

const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page)
  }
}

const getPageNumbers = () => {
  const pages = []
  const showEllipsis = props.totalPages > 5

  if (!showEllipsis) {
    // 如果总页数小于等于5，显示所有页码
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i)
    }
  } else {
    // 显示1-4页
    for (let i = 1; i <= 4; i++) {
      pages.push(i)
    }

    // 如果当前页大于4，显示当前页
    if (props.currentPage > 4 && props.currentPage < props.totalPages) {
      pages.push('...')
      pages.push(props.currentPage)
    }

    // 如果末页不是当前页，显示省略号和末页
    if (props.currentPage !== props.totalPages) {
      if (props.currentPage <= 4) {
        pages.push('...')
      }
      pages.push(props.totalPages)
    }
  }

  return pages
}
</script>

<template>
  <div class="flex flex-wrap justify-center items-center gap-2 my-8">
    <!-- 首页 - 小屏幕隐藏 -->
    <button
      class="hidden sm:block px-3 py-1 rounded border text-sm hover:bg-gray-100 transition-colors"
      :class="currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600'"
      :disabled="currentPage === 1"
      @click="changePage(1)"
    >
      首页
    </button>

    <!-- 上一页 -->
    <button
      class="px-3 py-1 rounded border text-sm hover:bg-gray-100 transition-colors"
      :class="currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600'"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      <span class="hidden sm:inline">上一页</span>
      <span class="sm:hidden">&lt;</span>
    </button>

    <!-- 页码 -->
    <button
      v-for="page in getPageNumbers()"
      :key="page"
      class="px-3 py-1 rounded border text-sm transition-colors"
      :class="[
        page === '...' ? 'text-gray-600 cursor-default border-gray-200' : 'border-gray-200',
        page === currentPage 
          ? 'bg-blue-500 text-white border-blue-500 hover:!bg-blue-600 !text-white' 
          : 'text-gray-600 hover:bg-gray-100'
      ]"
      @click="page !== '...' && changePage(page)"
    >
      {{ page }}
    </button>

    <!-- 下一页 -->
    <button
      class="px-3 py-1 rounded border text-sm hover:bg-gray-100 transition-colors"
      :class="currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600'"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      <span class="hidden sm:inline">下一页</span>
      <span class="sm:hidden">&gt;</span>
    </button>

    <!-- 末页 - 小屏幕隐藏 -->
    <button
      class="hidden sm:block px-3 py-1 rounded border text-sm hover:bg-gray-100 transition-colors"
      :class="currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600'"
      :disabled="currentPage === totalPages"
      @click="changePage(totalPages)"
    >
      末页
    </button>
  </div>
</template> 
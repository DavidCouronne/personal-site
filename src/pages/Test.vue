<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div class="container sm:pxi-0 mx-auto overflow-x-hidden">
        <div class="flex flex-wrap with-large pt-16 pb-16 mx-4 sm:-mx-4">
          <PostListItem
            v-for="edge in $page.entries.edges"
            :key="edge.node.id"
            :record="edge.node"
          />
        </div>
        <pagination-posts
          v-if="$page.entries.pageInfo.totalPages > 1"
          base="/test"
          :totalPages="$page.entries.pageInfo.totalPages"
          :currentPage="$page.entries.pageInfo.currentPage"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>

query($page:Int) {

  entries: allPost(perPage: 4, page: $page, sortBy: "date") @paginate {
    totalCount
    
    pageInfo {
      totalPages
      currentPage
     
    }
    edges {
      node {
        title
        description
        cover_image
        path
        timeToRead
        humanTime : date(format:"DD MMM YYYY")
        date (format: "D. MMMM YYYY")
        
       
      }
    }
  }
}

</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'
import PostListItem from '~/components/PostListItem.vue'
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    PaginationPosts,
    PostListItem,
  },
}
</script>

<style></style>

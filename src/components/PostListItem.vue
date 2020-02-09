<template>
  <div
    class="flex flex-post px-0 sm:px-4 pb-8 mb-8"
    v-bind:class="{ 'no-border': !border }"
  >
    <g-link :to="record.path" class="post-card-image-link">
      <g-image
        :src="record.cover_image"
        :alt="record.title"
        class="post-card-image"
      ></g-image>
    </g-link>
    <div class="post-card-content">
      <g-link :to="record.path">
        <!-- <p class="uppercase font-medium text-xs text-blue-700 mt-3">
          {{ record.category.title }}
        </p>-->
        <h2 class="post-card-title mt-0">{{ record.title }}</h2>
        <p class="post-card-description">{{ record.description }}</p>
      </g-link>
      <div class="w-full post-card-meta pt-4">
        <div class="avatars">
          <div class="flex items-center">
            <div class="flex justify-between items-center">
              <!-- <ul class="list-none flex author-list">
                <li
                  v-for="author in record.author"
                  :key="author.id"
                  class="author-list-item"
                >
                  <g-link :to="author.path" v-tooltip="author.name">
                    <g-image
                      :src="author.image"
                      :alt="author.name"
                      class="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                    />
                  </g-link>
                </li>
              </ul>-->
            </div>
            <div
              class="ml-3 pl-3 border-l flex flex-col text-xs leading-none uppercase"
            >
              <p>
                <time :datetime="record.datetime">{{ record.humanTime }}</time>
              </p>
              <p>{{ record.timeToRead }} min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    record: {},
    border: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss">
// casper theme

.flex-post {
  @apply border-b;
  //@apply border-b-gray-300;
  @apply flex-col;
  @apply w-full;

  .post-card-image {
    @apply h-56;
    @apply w-full;
    @apply object-cover;
    @apply rounded;
    @apply relative;
  }

  .post-card-title {
    @apply leading-none;
    @apply text-2xl;
    @apply font-medium;
  }

  .post-card-description {
    @apply font-serif;
  }
}

.author-list-item:nth-child(n + 2) {
  @apply -ml-3;
}

@media (min-width: 768px) {
  .with-large > .flex-post:nth-child(6n + 1) {
    @apply flex-100;
    @apply flex-row;

    .post-card-image-link {
      @apply flex-auto;
      @apply relative;
      min-height: 380px;
      @apply mr-6;
    }

    .post-card-image {
      @apply absolute;
      @apply h-full;
      @apply w-full;
      @apply object-cover;
      @apply rounded-lg;
    }

    .post-card-content {
      @apply flex-post-large-content;
      @apply self-center;
    }

    .post-card-title {
      @apply text-4xl;
    }

    .post-card-description {
      @apply text-xl;
    }
  }
}

body[data-theme='dark'] {
  background-color: #191b1f;
  @apply text-gray-300;

  .post-content-text {
    @apply text-gray-300;
  }

  .post-card-description {
    @apply text-gray-500;
  }

  .pagination li {
    @apply bg-gray-700;
    @apply text-gray-200;
    @apply border-gray-600;

    &:hover {
      @apply bg-gray-600;
      @apply text-gray-900;
    }
  }

  .pagination li.border-l-black {
    //    @apply border-l-gray-300;
  }

  .flex-post {
    //   @apply border-b-gray-800;
  }

  .author-list-item img {
    border-color: #191b1f;
  }

  .author-social {
    a {
      &:hover {
        @apply text-white;
      }
    }
  }
}
</style>

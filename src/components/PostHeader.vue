<template>
  <header>
    <div class="pt-20">
      <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center">
        <p class="text-blackContrast-100 text-xs mb-2 uppercase">
          {{ post.timeToRead }} min read
        </p>
        <h1 class="text-3xl sm:text-4xl leading-tight font-sans font-bold mb-2">
          {{ post.title }}
        </h1>
        <p class="leading-none m-0 text-blackContrast-100">
          <time :datetime="post.datetime" class="text-xs mb-2 uppercase">{{
            formattedPublishDate
          }}</time>
        </p>
      </div>
    </div>
    <nav class="absolute top-0 left-0 z-20">
      <g-link
        to="/blog"
        :class="[
          post.cover
            ? 'text-white border-white'
            : 'text-gray-900 border-gray-400'
        ]"
        class="text-sm px-4 py-2"
        >&larr; Blog</g-link
      >
    </nav>
  </header>
</template>

<script>
import moment from "moment";
import Parallax from "vue-parallaxy";

export default {
  props: ["post"],
  components: {
    Parallax
  },
  methods: {
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  },
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    },
    speedFactor() {
      return this.post.fullscreen ? 0.21 : 0.37;
    }
  }
};
</script>

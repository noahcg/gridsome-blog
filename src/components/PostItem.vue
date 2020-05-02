<template>
  <article>
    <div class="mx-auto max-w-3xl">
      <div class="pt-4 pb-8 sm:py-10 border-b border-gray-300">
        <header class="text-center mb-8">
          <time
            :datetime="post.datetime"
            class="text-blackContrast-100 text-xs mb-2 uppercase"
            >{{ formatPublishDate(post.datetime) }}</time
          >
          <h2 class="text-3xl sm:text-4xl leading-tight font-sans mb-1 sm:mb-2">
            <g-link :to="`${post.path}/`" class="text-linkColor font-bold">{{
              post.title
            }}</g-link>
          </h2>
          <p class="text-blackContrast-100 leading-normal text-sm sm:text-base">
            <span>{{ post.timeToRead }} min read</span>
          </p>
        </header>
        <p
          class="leading-normal text-blackContrast-100 text-lg px-2 sm:px-4 md:px-5"
          v-html="excerpt(post, 280, ' ...')"
        ></p>
      </div>
    </div>
  </article>
</template>

<script>
import moment from "moment";

export default {
  props: ["post"],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    }
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format("DD MMMM, YYYY");
    },
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt;
      }

      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  }
};
</script>

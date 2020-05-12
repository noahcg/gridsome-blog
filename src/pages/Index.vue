<template>
  <Layout>
    <main class="flex flex-col">
      <section class="font-sans text-md leading-normal list-none pb-5 pt-4">
        <h1 class="leading-none mb-8 text-3xl">
          As a
          <span class="leading-tight text-4xl font-bold"
            >Front End Developer</span
          >...
        </h1>
        <div class="callout my-12">
          <p class="mb-2 text-2xl">
            I <span class="leading-tight text-3xl font-bold">Build</span> custom
            user interfaces and web layouts
          </p>
          <p class="mx-4 text-sm">
            I write HTML, CSS and Javascript using Vue, Bootstrap-vue, Vuetify,
            Tailwind, and Gridsome. Most of my personal projects are hosted on
            Netlify. Occassionally I still enjoy writing code without any
            frameworks, just pure <em>vanilla</em>.
          </p>
        </div>
        <div class="callout my-12">
          <p class="mb-2 text-2xl">
            I
            <span class="leading-tight text-3xl font-bold">Write</span> articles
            and blog posts
          </p>
          <p class="mx-4 text-sm">
            My hope is to help others in the web community learn new things, or
            gain a better understanding of things they already know. I also want
            to also give back to the community that has taught be so much.
          </p>
        </div>
        <div class="callout mb-8">
          <p class="mb-2 text-2xl">
            I <span class="leading-tight text-3xl font-bold">Advocate</span> for
            accessible design and development
          </p>
          <p class="mx-4 text-sm">
            I promote proper accessible design and development best practices. I
            also to try teach, or otherwise educate, designers and developers
            how to create products with accessibility in mind.
          </p>
        </div>
      </section>
      <site-footer class="py-4 sm:py-8" />
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import SiteFooter from "@/components/Footer";
import PostItem from "@/components/PostItem";
import Pagination from "@/components/Pagination";

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription
        },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        {
          name: "twitter:description",
          content: this.$static.metadata.siteDescription
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  computed: {
    config() {
      return config;
    },
    ogImageUrl() {
      return `${this.config.siteUrl}/images/default.jpg`;
    }
  }
};
</script>
<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>

<template>
  <Layout class="h-full">
    <main class="flex flex-col">
      <header class="mx-auto pb-0 pt-4 text-left w-full">
        <h1 class="text-3xl sm:text-4xl leading-tight font-sans font-bold">
          Writing
        </h1>
        <p class="text-base my-0">
          A list of other articles and other posts I've written
        </p>
      </header>

      <section class="font-sans text-md leading-normal list-none mb-10">
        <ul>
          <li>
            <h2 class="font-bold mb-4 mt-8 text-xl">
              <a
                href="https://alistapart.com/article/a-designers-life-with-color-vision-deficiency/"
                class="default-link"
                target="_blank"
                >Color Craft & Counterpoint: A Designer’s Life with Color Vision
                Deficiency</a
              >
              - A List Apart
            </h2>
            <p>
              An article that details my personal experience being a designer
              living with color blindness.
            </p>
          </li>
          <li>
            <h2 class="font-bold mb-4 mt-8 text-xl">
              <a
                href="https://dev.to/noahcg/reading-position-indicator-in-vue-5cbd"
                class="default-link"
                target="_blank"
                >How to Create a Reading Position Indicator in Vue</a
              >
              - DEV
            </h2>
            <p>
              A quick post about how to set up a reading position indicator in
              VueJS.
            </p>
          </li>
        </ul>
      </section>
      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import SiteFooter from "@/components/Footer";

export default {
  components: {
    SiteFooter,
  },
  metaInfo() {
    return {
      title: "Writing",
      meta: [
        {
          key: "description",
          name: "description",
          content: "A collection of articles and posts I've written",
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: "Writing" },
        {
          property: "og:description",
          content: "A collection of articles and posts I've written",
        },
        { property: "og:url", content: `${this.config.siteUrl}/writing/` },
        { property: "og:image", content: "/images/default.jpg" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Writing" },
        {
          name: "twitter:description",
          content: "A collection of articles and posts I've written",
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: "/images/default.jpg" },
      ],
    };
  },
  computed: {
    config() {
      return config;
    },
  },
};
</script>

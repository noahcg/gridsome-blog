<template>
  <Layout>
    <main>
      <header class="mx-auto pb-0 pt-4 text-left">
        <h1 class="text-3xl sm:text-4xl leading-tight font-sans font-bold">
          Writing
        </h1>
        <p class="text-base my-0">
          A list of other articles and other posts I've written
        </p>
      </header>

      <section class="font-sans text-md leading-normal list-none mb-10">
        <ul>
          <!-- <li>
            <h3 class="font-bold mb-4 mt-8 text-xl">
              <a href="" class="default-link">Being a Colorblind Designer</a> -
              A List Apart
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati est saepe omnis ea a nobis quibusdam unde eius! Commodi
              voluptates asperiores sit, at sequi perferendis molestias atque
              porro debitis assumenda ipsa unde repellendus nulla inventore
              blanditiis! Odit earum ipsam facere!
            </p>
          </li> -->
          <li>
            <h3 class="font-bold mb-4 mt-8 text-xl">
              <a
                href="https://dev.to/noahcg/reading-position-indicator-in-vue-5cbd"
                class="default-link"
                >How to Create a Reading Position Indicator in Vue</a
              >
              - DEV
            </h3>
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
    SiteFooter
  },
  metaInfo() {
    return {
      title: "About",
      meta: [
        {
          key: "description",
          name: "description",
          content: "Introduction to the Bleda blog starter for Gridsome."
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: "About" },
        {
          property: "og:description",
          content: "Introduction to the Bleda blog starter for Gridsome."
        },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: "/images/default.jpg" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "About" },
        {
          name: "twitter:description",
          content: "Introduction to the Bleda blog starter for Gridsome."
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: "/images/default.jpg" }
      ]
    };
  },
  computed: {
    config() {
      return config;
    }
  }
};
</script>

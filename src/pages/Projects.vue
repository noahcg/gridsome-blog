<template>
  <Layout>
    <main>
      <header class="mx-auto pb-0 pt-4 text-left">
        <h1 class="text-3xl sm:text-4xl leading-tight font-sans font-bold">
          Projects
        </h1>
      </header>

      <section class="font-sans text-md leading-normal list-none pb-5 pt-4">
        <h2 class="font-bold my-4 text-2xl">Recent Work</h2>
        <ul>
          <li>
            <h3 class="font-bold mb-4 mt-8 text-xl">
              <a
                class="default-link"
                href="https://earlywarningproject.ushmm.org/"
                target="_blank"
                >Early Warning Project</a
              >
            </h3>
            <p>
              The Early Warning Project, a first-of-its-kind public system, is a
              joint initiative of the Simon-Skjodt Center for the Prevention of
              Genocide at the United States Holocaust Memorial Museum and the
              Dickey Center for International Understanding at Dartmouth
              College. This project aims to provide governments, civil society
              groups, and other influential actors early and reliable warnings
              of mass atrocities and, as a result, greater opportunities to take
              preventive action.
            </p>
          </li>
          <li>
            <h3 class="font-bold mb-4 mt-8 text-xl">
              <a
                class="default-link"
                href="https://exhibitions.ushmm.org/americans-and-the-holocaust/main"
                target="_blank"
                >Americans and the Holocaust</a
              >
            </h3>
            <p>
              This online exhibition examines the motives, pressures, and fears
              that shaped Americans’ responses to Nazism, war, and genocide.
            </p>
          </li>
        </ul>
      </section>
      <section class="font-sans text-md leading-normal list-none pb-10 pt-4">
        <h2 class="font-bold my-4 text-2xl">Personal Github Repos</h2>
        <p>These are my personal projects</p>
        <ul>
          <li v-for="project in githubProjects" :key="project.id">
            <h3 class="font-bold mb-4 mt-8 text-xl">
              <a class="default-link" :href="project.html_url">{{
                project.name
              }}</a>
            </h3>
            <p>{{ project.description }}</p>
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
import { mapState } from "vuex";

export default {
  components: {
    SiteFooter
  },
  metaInfo() {
    return {
      title: "Projects",
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
        { name: "twitter:title", content: "Projects" },
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
    ...mapState(["githubProjects"]),
    config() {
      return config;
    }
  },
  mounted() {
    this.$store.dispatch("getGithubProjects");
  }
};
</script>

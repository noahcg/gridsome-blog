<template>
  <Layout>
    <main>
      <header
        class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24"
      >
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">
          Projects
        </h1>
        <!-- <p class="text-grey-dark text-lg sm:text-3xl">Lorem ipsum subtitle &hellip;</p> -->
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link
          to="/"
          class="text-gray-900 border-gray-400 text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity"
          >&larr; Home</g-link
        >
      </nav>
      <section class="work-related">
        <h2>Recent Work</h2>
        <ul>
          <li>
            <h3>Early Warning Project</h3>
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
            <a
              class="default-link"
              href="https://earlywarningproject.ushmm.org/"
              target="_blank"
              >Project Link</a
            >
          </li>
          <li>
            <h3>Americans and the Holocaust</h3>
            <p>
              This online exhibition examines the motives, pressures, and fears
              that shaped Americans’ responses to Nazism, war, and genocide.
            </p>
            <a
              class="default-link"
              href="https://exhibitions.ushmm.org/americans-and-the-holocaust/main"
              target="_blank"
              >Project Link</a
            >
          </li>
        </ul>
      </section>
      <section class="personal-projects">
        <h2>Personal Github Repos</h2>
        <p>These are my personal projects</p>
        <ul>
          <li v-for="project in githubProjects" :key="project.id">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <a class="default-link" :href="project.html_url">Repo Link</a>
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
        { property: "og:image", content: "/images/bleda-card.png" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Projects" },
        {
          name: "twitter:description",
          content: "Introduction to the Bleda blog starter for Gridsome."
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: "/images/bleda-card.png" }
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
<style lang="scss" scoped>
@import "../assets/mixins";
h1 {
  @include page-title;
}
.work-related,
.personal-projects {
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 40px;
    }
  }
  h2,
  h3 {
    margin-bottom: 0;
  }

  h3 + p {
    font-weight: 300;
    margin-bottom: 5px;
    margin-top: 0;
  }
}
</style>

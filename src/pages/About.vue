<template>
  <Layout>
    <main>
      <header class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">About</h1>
        <!-- <p class="text-grey-dark text-lg sm:text-3xl">Lorem ipsum subtitle &hellip;</p> -->
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link to="/" class="text-gray-900 border-gray-400 text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity">&larr; Home</g-link>
      </nav>
      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 border-b border-gray-300 pb-10 mb-16">
        <div class="markdown text-lg leading-normal text-gray-700">
          <p>I don't typically enjoy writing about myself but it makes sense to give you a little background about me. I'll try to keep this relevant and brief. </p>
          <p>Ok, where should I start...</p>
          <hr>
          <h2>Currently</h2>
          <p>I currently work at the US Holocaust Memorial Museum in Washington, D.C. as a front end developer. I work on projects ranging from website redesigns to large scale front end applications for supporting custom online exhibitions.</p>
          <p>I am also a web accessibility advocate, meaning I strive to not only make sure that products I produce are usable by everyone, but I also try to teach what I learn. I believe that ensuring inclusivity is the responsibility of the entire team and each member has a role to play.</p>
          <h2>Previously</h2>
          <p>Before moving to Washington, D.C., with my wife back in 2017, I lived in the Boston area. I worked for TechTarget in Newton for 4 years and Cambridge Healthtech Institute in Needham for 7 years. I worked as a front end developer for both companies.</p>
          <p>Going all the way back before that, I did web design and Flash animation for 3 years at Del Padre Digital in Western, MA.</p>
        </div>
      </article>
      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'

export default {
  components: {
    SiteFooter
  },
  metaInfo () {
    return {
      title: 'About',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Introduction to the Bleda blog starter for Gridsome.'
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content:'About' },
        { property: "og:description", content: 'Introduction to the Bleda blog starter for Gridsome.' },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: '/images/bleda-card.png' },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'About' },
        { name: "twitter:description", content: 'Introduction to the Bleda blog starter for Gridsome.' },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: '/images/bleda-card.png' },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
  },
}
</script>

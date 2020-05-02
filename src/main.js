import DefaultLayout from "~/layouts/Default.vue";
import Vuex from "vuex";

export default function(Vue, { head, appOptions }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(Vuex);

  head.htmlAttrs = { lang: "en", class: "h-full" };
  head.bodyAttrs = { class: "antialiased font-sans-serif" };

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo"
  });

  appOptions.store = new Vuex.Store({
    state: () => ({
      githubProjects: []
    }),

    mutations: {
      updateGithubProjects: (state, payload) => {
        state.githubProjects = payload;
      }
    },
    actions: {
      async getGithubProjects({ state, commit }) {
        if (state.githubProjects.length) return;

        try {
          let githubProjects = await fetch(
            `https://api.github.com/users/noahcg/repos?page=1&per_page=100`
          ).then(res => res.json());

          githubProjects = githubProjects
            .filter(el => el.fork === false)
            .map(({ id, name, description, html_url }) => ({
              id,
              name,
              description,
              html_url
            }));
          commit("updateGithubProjects", githubProjects);
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
}

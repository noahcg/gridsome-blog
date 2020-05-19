<template>
  <div class="bg-appbkg flex flex-col items-stretch px-2 sm:px-4 relative">
    <!-- this parent div has the ID #app -->
    <app-nav />
    <slot />
  </div>
</template>

<script>
import config from "~/.temp/config.js";
import AppNav from "~/components/AppNav.vue";
export default {
  components: {
    AppNav
  },
  computed: {
    config() {
      return config;
    }
  }
};
</script>

<style src="~/assets/css/main.css"></style>
<style lang="scss">
.personal-meta img {
  display: block;
  margin: 0 auto 40px;
  width: 50%;
}

.personal-meta p {
  font-size: 14px;
  font-weight: 100;
  text-align: center;
}

.personal-meta ul {
  text-align: center;
  list-style-type: none;
  padding: 0;

  li {
    display: inline;
    font-size: 2em;
    font-weight: 100;
    margin-right: 10px;
    padding-right: 10px;

    &:last-child {
      margin: 0;
      padding: 0;
    }
  }
}
</style>

<template>
  <div>
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
@import "~/assets/_variables.scss";
html {
  box-sizing: border-box;
  color: #eee;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 100%;
  line-height: 24px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

a,
a:visited,
a:active {
  color: $link-color;
  font-family: $link-font;
  position: relative;
  text-decoration: none;

  &.default-link {
    box-shadow: inset 0 -0.475em 0 darken(rgba(61, 77, 93, 0.5), 40%);
    padding: 2px 5px;
    transition: all 200ms 50ms ease;

    &:hover,
    &:focus {
      background-color: darken(rgba(61, 77, 93, 0.5), 40%);
      box-shadow: inset 0 -0.475em 0 transparent;
    }
  }
}

body {
  height: 100%;
  margin: 0;
  padding: 0;

  &:before {
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    background: #3d4e5d url("../assets/img/background@2x.png") no-repeat 0 0;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-position: 20% 0;
    background-size: cover;
  }
}

#app {
  background: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 15px;
  position: relative;

  &:before {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));
    content: "";
    display: block;
    left: 0;
    height: 60px;
    position: absolute;
    top: -60px;
    width: 100%;
  }
}

main {
  flex-grow: 1;
  position: relative;
}

header,
main,
footer {
  flex-shrink: 0;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  float: right;
  width: 50%;
  height: 100vh;
}

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

@media (min-width: 576px) {
  body:before {
    background-position: 0 0;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 0 50px;
  }
}

@media (min-width: 992px) {
  body:before {
    background-size: contain;
  }
  #app {
    background: none;
    float: right;
    padding: 0 15px;
    width: 50%;
  }
}
</style>

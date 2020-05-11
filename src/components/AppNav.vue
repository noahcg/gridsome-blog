<template>
  <header
    class="site-header border-solid border-b border-blackContrast-100 justify-between my-8 pb-4 xl:flex"
  >
    <div class="header-content">
      <p class="mb-2 mt-0">
        Noah Glushien
      </p>
      <p class="text-sm m-0 leading-snug">
        Front End Developer / Writer / Accessibility Advocate
      </p>
    </div>
    <nav class="sm:flex sm:flex-column">
      <ul>
        <li>
          <g-link to="/">Home</g-link>
        </li>
        <li>
          <g-link to="/projects">Projects</g-link>
        </li>
        <li>
          <g-link to="/blog">Blog</g-link>
        </li>
        <li>
          <g-link to="/writing">Writing</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.site-header {
  // border-bottom: 1px solid #eee;
  // margin-bottom: 20px;
  // margin-top: 30px;
}

header {
  p {
    font-size: 1.75em;
    font-weight: 100;
    margin: 0.5em 0 0;

    span {
      font-size: 0.9rem;
    }
  }

  nav {
    align-items: center;
    display: flex;

    ul {
      margin: 1em 0;
      padding-left: 0;

      li {
        display: inline-block;
        font-weight: 300;
        margin-right: 10px;
      }
    }
  }
}
// @media (min-width: 1200px) {
//   .site-header {
//     display: flex;
//     padding-bottom: 20px;

//     p {
//       width: 60%;
//     }

//     nav {
//       width: auto;
//     }
//   }
// }
</style>
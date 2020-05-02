<template>
  <header class="site-header">
    <p>
      Noah Glushien <br />
      <span>Front End Developer / Accessibility Advocate</span>
    </p>
    <nav>
      <ul>
        <li>
          <g-link to="/">Home</g-link>
        </li>
        <li>
          <g-link to="/projects">Projects</g-link>
        </li>
        <li>
          <g-link to="/about">About</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
// @import "~assets/variables";

.site-header {
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  margin-top: 30px;
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
    width: 100%;

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

// @media (min-width: 768px) {
//   header {
//     // display: flex;
//     // flex-direction: row;
//     // justify-content: space-between;

//     nav {
//       height: 100px;
//       justify-content: flex-end;
//       width: 50%;
//     }
//   }
// }
</style>
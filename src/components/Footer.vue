<template>
  <footer
    class="text-blackContrast-100 text-sm leading-normal flex flex-wrap justify-between mx-auto mt-auto px-2 sm:px-0 w-full"
  >
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
      <p>
        Built with
        <a href="https://gridsome.org">Gridsome</a>
        &amp;
        <a href="https://tailwindcss.com/">Tailwind CSS</a>.
      </p>
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="flex sm:justify-end -mx-2">
          <li class="px-1 md:px-2">
            <a href="/sitemap.xml">Sitemap</a>
          </li>
          <li class="px-1 md:px-2">
            <a href="/feed.xml">RSS Feed</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

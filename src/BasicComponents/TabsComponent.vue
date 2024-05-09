<template>
  <div class="d-flex">
    <router-link
      v-for="item in tabItems"
      :key="item.title"
      :to="item.route"
      class="bg-danger text-white rounded-3 border-0 p-2 gap-4 m-3 text-decoration-none"
    >
      <component :is="item.icon" class="h-5 w-5" />
      <div>{{ item.title }}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedDate: "",
      tabItems: [
        {
          title: "Home",
          route: "/homecomp",
        },
        {
          title: "About",
          route: "/about",
        },
        {
          title: "Help",
          route: "/help",
        },
        {
          title: "Contact",
          route: "/contact",
        },
      ],
    };
  },
};
</script>
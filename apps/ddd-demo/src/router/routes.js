export default [
    {
      path: "/ddd",
      component: () => import("@/views/workbench.vue"),
      redirect: "/ddd/workbench",

    },
  ];
// 最简代码，也就是这些字段必须有
export default {
  path: "/fighting",
  meta: {
    title: "前端"
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        title: "HTML",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    }
  ]
};

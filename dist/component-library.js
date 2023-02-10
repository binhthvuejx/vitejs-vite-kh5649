import { ref as _, openBlock as d, createElementBlock as u, Fragment as p, createElementVNode as t, toDisplayString as a, pushScopeId as i, popScopeId as h, createTextVNode as o } from "vue";
const v = (e, l) => {
  const c = e.__vccOpts || e;
  for (const [n, r] of l)
    c[n] = r;
  return c;
}, s = (e) => (i("data-v-a1de4649"), e = e(), h(), e), g = { class: "card" }, m = /* @__PURE__ */ s(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Edit "),
  /* @__PURE__ */ t("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ o(" to test HMR ")
], -1)), f = /* @__PURE__ */ s(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Check out "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ o(", the official Vue + Vite starter ")
], -1)), k = /* @__PURE__ */ s(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ o(" Install "),
  /* @__PURE__ */ t("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ o(" in your IDE for a better DX ")
], -1)), V = /* @__PURE__ */ s(() => /* @__PURE__ */ t("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), b = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(e) {
    const l = _(0);
    return (c, n) => (d(), u(p, null, [
      t("h1", null, a(e.msg), 1),
      t("div", g, [
        t("button", {
          type: "button",
          onClick: n[0] || (n[0] = (r) => l.value++)
        }, "count is " + a(l.value), 1),
        m
      ]),
      f,
      k,
      V
    ], 64));
  }
}, I = /* @__PURE__ */ v(b, [["__scopeId", "data-v-a1de4649"]]);
export {
  I as HelloWorld
};

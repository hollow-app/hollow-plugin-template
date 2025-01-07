/*
Bundled with Esbuild.
For source code, please refer to the plugin's repository.
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var hollow_sample_plugin_exports = {};
__export(hollow_sample_plugin_exports, {
  default: () => Main
});
module.exports = __toCommonJS(hollow_sample_plugin_exports);
var import_react2 = __toESM(require("react"));
var import_client = require("react-dom/client");

// src/iComponent.tsx
var import_react = require("react");

// src/Settings.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Settings = ({ Card }) => {
  const exit = () => {
    Card.stateEvent.emit(`Kanban-${Card.name}-settings`, false);
  };
  const save = async () => {
    exit();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "settings", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "settings-window-hollow", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "settings-properties", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "settings-property", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "settings-property-name", children: "Property Name" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "settings-property-des", children: "Property's small description." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "settings-separator" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "settings-end", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "button-secondary", onClick: exit, children: "Exit" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "button-primary", onClick: save, children: "Save" })
    ] })
  ] }) });
};

// src/iComponent.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var IComponent = ({ Card, MyData }) => {
  const [isSettsVisi, setSettsVisi] = (0, import_react.useState)(false);
  const [count, setCount] = (0, import_react.useState)(1);
  (0, import_react.useEffect)(() => {
    Card.stateEvent.on(`HollowSamplePlugin-${Card.name}-settings`, setSettsVisi);
    return () => {
      Card.stateEvent.off(`HollowSamplePlugin-${Card.name}-settings`, setSettsVisi);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    isSettsVisi && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Settings, { Card }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { width: "var(--card-width)", height: "var(--card-height)" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
        "Hello? ",
        count
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "button-primary", onClick: (i) => setCount(count + 1), children: "Count" })
    ] })
  ] });
};
var iComponent_default = IComponent;

// index.ts
var Main = class {
  // the following method is called to create a card.
  async onCreate(card_name, db) {
    const request = await db?.putData(card_name, { name: "sample" });
    return request || false;
  }
  // the following method is called to delete a card.
  async onDelete(card_name, db) {
    const request = await db?.deleteData(card_name);
    return request || false;
  }
  // the following method is called to load a card.
  async onLoad(card) {
    const data = await card.db?.getData(card.name);
    if (!data)
      return false;
    const div = document.getElementById(card.containerID);
    if (div) {
      const myRoot = (0, import_client.createRoot)(div);
      myRoot.render(
        import_react2.default.createElement(iComponent_default, {
          Card: card,
          MyData: data
        })
      );
    }
    return true;
  }
};

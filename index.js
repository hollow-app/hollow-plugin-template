/*
Bundled with Esbuild.
For source code, please refer to the plugin's repository.
*/

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// node_modules/esm-env/true.js
var init_true = __esm({
  "node_modules/esm-env/true.js"() {
  }
});

// node_modules/esm-env/dev-fallback.js
var node_env, dev_fallback_default;
var init_dev_fallback = __esm({
  "node_modules/esm-env/dev-fallback.js"() {
    node_env = globalThis.process?.env?.NODE_ENV;
    dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");
  }
});

// node_modules/esm-env/false.js
var init_false = __esm({
  "node_modules/esm-env/false.js"() {
  }
});

// node_modules/esm-env/index.js
var init_esm_env = __esm({
  "node_modules/esm-env/index.js"() {
    init_true();
    init_dev_fallback();
    init_false();
  }
});

// node_modules/svelte/src/internal/shared/utils.js
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
var is_array, index_of, array_from, object_keys, define_property, get_descriptor, get_descriptors, object_prototype, array_prototype, get_prototype_of;
var init_utils = __esm({
  "node_modules/svelte/src/internal/shared/utils.js"() {
    is_array = Array.isArray;
    index_of = Array.prototype.indexOf;
    array_from = Array.from;
    object_keys = Object.keys;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    get_descriptors = Object.getOwnPropertyDescriptors;
    object_prototype = Object.prototype;
    array_prototype = Array.prototype;
    get_prototype_of = Object.getPrototypeOf;
  }
});

// node_modules/svelte/src/internal/client/constants.js
var DERIVED, EFFECT, RENDER_EFFECT, BLOCK_EFFECT, BRANCH_EFFECT, ROOT_EFFECT, BOUNDARY_EFFECT, UNOWNED, DISCONNECTED, CLEAN, DIRTY, MAYBE_DIRTY, INERT, DESTROYED, EFFECT_RAN, EFFECT_TRANSPARENT, LEGACY_DERIVED_PROP, INSPECT_EFFECT, HEAD_EFFECT, EFFECT_HAS_DERIVED, STATE_SYMBOL, STATE_SYMBOL_METADATA, LEGACY_PROPS, LOADING_ATTR_SYMBOL;
var init_constants = __esm({
  "node_modules/svelte/src/internal/client/constants.js"() {
    DERIVED = 1 << 1;
    EFFECT = 1 << 2;
    RENDER_EFFECT = 1 << 3;
    BLOCK_EFFECT = 1 << 4;
    BRANCH_EFFECT = 1 << 5;
    ROOT_EFFECT = 1 << 6;
    BOUNDARY_EFFECT = 1 << 7;
    UNOWNED = 1 << 8;
    DISCONNECTED = 1 << 9;
    CLEAN = 1 << 10;
    DIRTY = 1 << 11;
    MAYBE_DIRTY = 1 << 12;
    INERT = 1 << 13;
    DESTROYED = 1 << 14;
    EFFECT_RAN = 1 << 15;
    EFFECT_TRANSPARENT = 1 << 16;
    LEGACY_DERIVED_PROP = 1 << 17;
    INSPECT_EFFECT = 1 << 18;
    HEAD_EFFECT = 1 << 19;
    EFFECT_HAS_DERIVED = 1 << 20;
    STATE_SYMBOL = Symbol("$state");
    STATE_SYMBOL_METADATA = Symbol("$state metadata");
    LEGACY_PROPS = Symbol("legacy props");
    LOADING_ATTR_SYMBOL = Symbol("");
  }
});

// node_modules/svelte/src/internal/client/reactivity/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
var init_equality = __esm({
  "node_modules/svelte/src/internal/client/reactivity/equality.js"() {
  }
});

// node_modules/svelte/src/internal/client/errors.js
function bind_invalid_checkbox_value() {
  if (dev_fallback_default) {
    const error = new Error(`bind_invalid_checkbox_value
Using \`bind:value\` together with a checkbox input is not allowed. Use \`bind:checked\` instead
https://svelte.dev/e/bind_invalid_checkbox_value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/bind_invalid_checkbox_value`);
  }
}
function derived_references_self() {
  if (dev_fallback_default) {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/derived_references_self`);
  }
}
function effect_in_teardown(rune) {
  if (dev_fallback_default) {
    const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function effect_in_unowned_derived() {
  if (dev_fallback_default) {
    const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function effect_orphan(rune) {
  if (dev_fallback_default) {
    const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function effect_update_depth_exceeded() {
  if (dev_fallback_default) {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
https://svelte.dev/e/effect_update_depth_exceeded`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  if (dev_fallback_default) {
    const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function rune_outside_svelte(rune) {
  if (dev_fallback_default) {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
  }
}
function state_descriptors_fixed() {
  if (dev_fallback_default) {
    const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  if (dev_fallback_default) {
    const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_local_read() {
  if (dev_fallback_default) {
    const error = new Error(`state_unsafe_local_read
Reading state that was created inside the same derived is forbidden. Consider using \`untrack\` to read locally created state
https://svelte.dev/e/state_unsafe_local_read`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_local_read`);
  }
}
function state_unsafe_mutation() {
  if (dev_fallback_default) {
    const error = new Error(`state_unsafe_mutation
Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
var init_errors = __esm({
  "node_modules/svelte/src/internal/client/errors.js"() {
    init_esm_env();
  }
});

// node_modules/svelte/src/internal/flags/index.js
var legacy_mode_flag, tracing_mode_flag;
var init_flags = __esm({
  "node_modules/svelte/src/internal/flags/index.js"() {
    legacy_mode_flag = false;
    tracing_mode_flag = false;
  }
});

// node_modules/svelte/src/constants.js
var EACH_INDEX_REACTIVE, EACH_IS_CONTROLLED, EACH_IS_ANIMATED, EACH_ITEM_IMMUTABLE, PROPS_IS_RUNES, PROPS_IS_UPDATED, PROPS_IS_BINDABLE, PROPS_IS_LAZY_INITIAL, TRANSITION_OUT, TRANSITION_GLOBAL, TEMPLATE_FRAGMENT, TEMPLATE_USE_IMPORT_NODE, HYDRATION_START, HYDRATION_END, HYDRATION_ERROR, ELEMENT_PRESERVE_ATTRIBUTE_CASE, UNINITIALIZED, FILENAME, HMR;
var init_constants2 = __esm({
  "node_modules/svelte/src/constants.js"() {
    EACH_INDEX_REACTIVE = 1 << 1;
    EACH_IS_CONTROLLED = 1 << 2;
    EACH_IS_ANIMATED = 1 << 3;
    EACH_ITEM_IMMUTABLE = 1 << 4;
    PROPS_IS_RUNES = 1 << 1;
    PROPS_IS_UPDATED = 1 << 2;
    PROPS_IS_BINDABLE = 1 << 3;
    PROPS_IS_LAZY_INITIAL = 1 << 4;
    TRANSITION_OUT = 1 << 1;
    TRANSITION_GLOBAL = 1 << 2;
    TEMPLATE_FRAGMENT = 1;
    TEMPLATE_USE_IMPORT_NODE = 1 << 1;
    HYDRATION_START = "[";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
    UNINITIALIZED = Symbol();
    FILENAME = Symbol("filename");
    HMR = Symbol("hmr");
  }
});

// node_modules/svelte/src/internal/shared/warnings.js
var init_warnings = __esm({
  "node_modules/svelte/src/internal/shared/warnings.js"() {
    init_esm_env();
  }
});

// node_modules/svelte/src/internal/shared/clone.js
var init_clone = __esm({
  "node_modules/svelte/src/internal/shared/clone.js"() {
    init_esm_env();
    init_warnings();
    init_utils();
  }
});

// node_modules/svelte/src/internal/client/dev/tracing.js
function get_stack(label) {
  let error = Error();
  const stack2 = error.stack;
  if (stack2) {
    const lines = stack2.split("\n");
    const new_lines = ["\n"];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line === "Error") {
        continue;
      }
      if (line.includes("validate_each_keys")) {
        return null;
      }
      if (line.includes("svelte/src/internal")) {
        continue;
      }
      new_lines.push(line);
    }
    if (new_lines.length === 1) {
      return null;
    }
    define_property(error, "stack", {
      value: new_lines.join("\n")
    });
    define_property(error, "name", {
      // 'Error' suffix is required for stack traces to be rendered properly
      value: `${label}Error`
    });
  }
  return error;
}
var tracing_expressions;
var init_tracing = __esm({
  "node_modules/svelte/src/internal/client/dev/tracing.js"() {
    init_constants2();
    init_clone();
    init_utils();
    init_constants();
    init_effects();
    init_runtime();
    tracing_expressions = null;
  }
});

// node_modules/svelte/src/internal/client/reactivity/sources.js
function set_inspect_effects(v) {
  inspect_effects = v;
}
function source(v, stack2) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = stack2 ?? get_stack("CreatedAt");
    signal.debug = null;
  }
  return signal;
}
function state(v) {
  return /* @__PURE__ */ push_derived_source(source(v));
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && component_context !== null && component_context.l !== null) {
    (component_context.l.s ??= []).push(s);
  }
  return s;
}
// @__NO_SIDE_EFFECTS__
function push_derived_source(source2) {
  if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
    if (derived_sources === null) {
      set_derived_sources([source2]);
    } else {
      derived_sources.push(source2);
    }
  }
  return source2;
}
function set(source2, value) {
  if (active_reaction !== null && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (derived_sources === null || !derived_sources.includes(source2))) {
    state_unsafe_mutation();
  }
  return internal_set(source2, value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    source2.v = value;
    source2.wv = increment_write_version();
    if (dev_fallback_default && tracing_mode_flag) {
      source2.updated = get_stack("UpdatedAt");
      if (active_effect != null) {
        source2.trace_need_increase = true;
        source2.trace_v ??= old_value;
      }
    }
    mark_reactions(source2, DIRTY);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0) {
      if (new_deps !== null && new_deps.includes(source2)) {
        set_signal_status(active_effect, DIRTY);
        schedule_effect(active_effect);
      } else {
        if (untracked_writes === null) {
          set_untracked_writes([source2]);
        } else {
          untracked_writes.push(source2);
        }
      }
    }
    if (dev_fallback_default && inspect_effects.size > 0) {
      const inspects = Array.from(inspect_effects);
      var previously_flushing_effect = is_flushing_effect;
      set_is_flushing_effect(true);
      try {
        for (const effect2 of inspects) {
          if ((effect2.f & CLEAN) !== 0) {
            set_signal_status(effect2, MAYBE_DIRTY);
          }
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
          }
        }
      } finally {
        set_is_flushing_effect(previously_flushing_effect);
      }
      inspect_effects.clear();
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    if (!runes && reaction === active_effect) continue;
    if (dev_fallback_default && (flags & INSPECT_EFFECT) !== 0) {
      inspect_effects.add(reaction);
      continue;
    }
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
var inspect_effects;
var init_sources = __esm({
  "node_modules/svelte/src/internal/client/reactivity/sources.js"() {
    init_esm_env();
    init_runtime();
    init_equality();
    init_constants();
    init_errors();
    init_flags();
    init_tracing();
    inspect_effects = /* @__PURE__ */ new Set();
  }
});

// node_modules/svelte/src/internal/client/warnings.js
function hydration_attribute_changed(attribute, html2, value) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
  }
}
function hydration_mismatch(location) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function lifecycle_double_unmount() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function ownership_invalid_mutation(component2, owner) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] ownership_invalid_mutation
%c${component2 ? `${component2} mutated a value owned by ${owner}. This is strongly discouraged. Consider passing values to child components with \`bind:\`, or use a callback instead` : "Mutating a value outside the component that created it is strongly discouraged. Consider passing values to child components with `bind:`, or use a callback instead"}
https://svelte.dev/e/ownership_invalid_mutation`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/ownership_invalid_mutation`);
  }
}
function state_proxy_equality_mismatch(operator) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
  }
}
var bold, normal;
var init_warnings2 = __esm({
  "node_modules/svelte/src/internal/client/warnings.js"() {
    init_esm_env();
    bold = "font-weight: bold";
    normal = "font-weight: normal";
  }
});

// node_modules/svelte/src/internal/client/dom/hydration.js
function set_hydrating(value) {
  hydrating = value;
}
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
function reset(node) {
  if (!hydrating) return;
  if (get_next_sibling(hydrate_node) !== null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  hydrate_node = node;
}
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
var hydrating, hydrate_node;
var init_hydration = __esm({
  "node_modules/svelte/src/internal/client/dom/hydration.js"() {
    init_constants2();
    init_warnings2();
    init_operations();
    hydrating = false;
  }
});

// node_modules/svelte/src/internal/client/dev/ownership.js
function get_stack2() {
  const stack2 = new Error().stack;
  if (!stack2) return null;
  const entries = [];
  for (const line of stack2.split("\n")) {
    let match = chrome_pattern.exec(line) ?? firefox_pattern.exec(line);
    if (match) {
      entries.push({
        file: match[1],
        line: +match[2],
        column: +match[3]
      });
    }
  }
  return entries;
}
function get_component() {
  const stack2 = get_stack2()?.slice(4);
  if (!stack2) return null;
  for (let i = 0; i < stack2.length; i++) {
    const entry = stack2[i];
    const modules = boundaries[entry.file];
    if (!modules) {
      if (i === 0) return null;
      continue;
    }
    for (const module2 of modules) {
      if (module2.end == null) {
        return null;
      }
      if (module2.start.line < entry.line && module2.end.line > entry.line) {
        return module2.component;
      }
    }
  }
  return null;
}
function widen_ownership(from, to) {
  if (to.owners === null) {
    return;
  }
  while (from) {
    if (from.owners === null) {
      to.owners = null;
      break;
    }
    for (const owner of from.owners) {
      to.owners.add(owner);
    }
    from = from.parent;
  }
}
function has_owner(metadata, component2) {
  if (metadata.owners === null) {
    return true;
  }
  return metadata.owners.has(component2) || metadata.parent !== null && has_owner(metadata.parent, component2);
}
function get_owner(metadata) {
  return metadata?.owners?.values().next().value ?? get_owner(
    /** @type {ProxyMetadata} */
    metadata.parent
  );
}
function check_ownership(metadata) {
  if (skip) return;
  const component2 = get_component();
  if (component2 && !has_owner(metadata, component2)) {
    let original = get_owner(metadata);
    if (original[FILENAME] !== component2[FILENAME]) {
      ownership_invalid_mutation(component2[FILENAME], original[FILENAME]);
    } else {
      ownership_invalid_mutation();
    }
  }
}
var boundaries, chrome_pattern, firefox_pattern, ADD_OWNER, skip;
var init_ownership = __esm({
  "node_modules/svelte/src/internal/client/dev/ownership.js"() {
    init_constants();
    init_effects();
    init_runtime();
    init_utils();
    init_warnings2();
    init_constants2();
    boundaries = {};
    chrome_pattern = /at (?:.+ \()?(.+):(\d+):(\d+)\)?$/;
    firefox_pattern = /@(.+):(\d+):(\d+)$/;
    ADD_OWNER = Symbol("ADD_OWNER");
    skip = false;
  }
});

// node_modules/svelte/src/internal/client/proxy.js
function proxy(value, parent = null, prev) {
  var stack2 = null;
  if (dev_fallback_default && tracing_mode_flag) {
    stack2 = get_stack("CreatedAt");
  }
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = source(0);
  if (is_proxied_array) {
    sources.set("length", source(
      /** @type {any[]} */
      value.length,
      stack2
    ));
  }
  var metadata;
  if (dev_fallback_default) {
    metadata = {
      parent,
      owners: null
    };
    if (prev) {
      const prev_owners = prev.v?.[STATE_SYMBOL_METADATA]?.owners;
      metadata.owners = prev_owners ? new Set(prev_owners) : null;
    } else {
      metadata.owners = parent === null ? component_context !== null ? /* @__PURE__ */ new Set([component_context.function]) : null : /* @__PURE__ */ new Set();
    }
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          s = source(descriptor.value, stack2);
          sources.set(prop2, s);
        } else {
          set(s, proxy(descriptor.value, metadata));
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            sources.set(prop2, source(UNINITIALIZED, stack2));
          }
        } else {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n < ls.v) {
              set(ls, n);
            }
          }
          set(s, UNINITIALIZED);
          update_version(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        if (dev_fallback_default && prop2 === STATE_SYMBOL_METADATA) {
          return metadata;
        }
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
          s = source(proxy(exists ? target[prop2] : UNINITIALIZED, metadata), stack2);
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get(s);
          if (dev_fallback_default) {
            var prop_metadata = v?.[STATE_SYMBOL_METADATA];
            if (prop_metadata && prop_metadata?.parent !== metadata) {
              widen_ownership(metadata, prop_metadata);
            }
          }
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        if (dev_fallback_default && prop2 === STATE_SYMBOL_METADATA) {
          return true;
        }
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
          if (s === void 0) {
            s = source(has ? proxy(target[prop2], metadata) : UNINITIALIZED, stack2);
            sources.set(prop2, s);
          }
          var value2 = get(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = source(UNINITIALIZED, stack2);
              sources.set(i + "", other_s);
            }
          }
        }
        if (s === void 0) {
          if (!has || get_descriptor(target, prop2)?.writable) {
            s = source(void 0, stack2);
            set(s, proxy(value2, metadata));
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          set(s, proxy(value2, metadata));
        }
        if (dev_fallback_default) {
          var prop_metadata = value2?.[STATE_SYMBOL_METADATA];
          if (prop_metadata && prop_metadata?.parent !== metadata) {
            widen_ownership(metadata, prop_metadata);
          }
          check_ownership(metadata);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          update_version(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key2) => {
          var source3 = sources.get(key2);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key in target)) {
            own_keys.push(key);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function update_version(signal, d = 1) {
  set(signal, signal.v + d);
}
function get_proxied_value(value) {
  if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
    return value[STATE_SYMBOL];
  }
  return value;
}
var init_proxy = __esm({
  "node_modules/svelte/src/internal/client/proxy.js"() {
    init_esm_env();
    init_runtime();
    init_utils();
    init_ownership();
    init_sources();
    init_constants();
    init_constants2();
    init_errors();
    init_tracing();
    init_flags();
  }
});

// node_modules/svelte/src/internal/client/dev/equality.js
function init_array_prototype_warnings() {
  const array_prototype2 = Array.prototype;
  const cleanup = Array.__svelte_cleanup;
  if (cleanup) {
    cleanup();
  }
  const { indexOf, lastIndexOf, includes } = array_prototype2;
  array_prototype2.indexOf = function(item, from_index) {
    const index2 = indexOf.call(this, item, from_index);
    if (index2 === -1) {
      for (let i = from_index ?? 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.indexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.lastIndexOf = function(item, from_index) {
    const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
    if (index2 === -1) {
      for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.includes = function(item, from_index) {
    const has = includes.call(this, item, from_index);
    if (!has) {
      for (let i = 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.includes(...)");
          break;
        }
      }
    }
    return has;
  };
  Array.__svelte_cleanup = () => {
    array_prototype2.indexOf = indexOf;
    array_prototype2.lastIndexOf = lastIndexOf;
    array_prototype2.includes = includes;
  };
}
var init_equality2 = __esm({
  "node_modules/svelte/src/internal/client/dev/equality.js"() {
    init_warnings2();
    init_proxy();
  }
});

// node_modules/svelte/src/internal/client/dom/operations.js
function init_operations2() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  element_prototype.__click = void 0;
  element_prototype.__className = "";
  element_prototype.__attributes = null;
  element_prototype.__styles = null;
  element_prototype.__e = void 0;
  Text.prototype.__t = void 0;
  if (dev_fallback_default) {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function child(node, is_text) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var child2 = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ get_first_child(hydrate_node)
  );
  if (child2 === null) {
    child2 = hydrate_node.appendChild(create_text());
  } else if (is_text && child2.nodeType !== 3) {
    var text2 = create_text();
    child2?.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(child2);
  return child2;
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = hydrating ? hydrate_node : node;
  var last_sibling;
  while (count--) {
    last_sibling = next_sibling;
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  if (!hydrating) {
    return next_sibling;
  }
  var type = next_sibling?.nodeType;
  if (is_text && type !== 3) {
    var text2 = create_text();
    if (next_sibling === null) {
      last_sibling?.after(text2);
    } else {
      next_sibling.before(text2);
    }
    set_hydrate_node(text2);
    return text2;
  }
  set_hydrate_node(next_sibling);
  return (
    /** @type {TemplateNode} */
    next_sibling
  );
}
function clear_text_content(node) {
  node.textContent = "";
}
var $window, $document, first_child_getter, next_sibling_getter;
var init_operations = __esm({
  "node_modules/svelte/src/internal/client/dom/operations.js"() {
    init_hydration();
    init_esm_env();
    init_equality2();
    init_utils();
  }
});

// node_modules/svelte/src/internal/client/reactivity/deriveds.js
function destroy_derived_children(derived2) {
  var children = derived2.children;
  if (children !== null) {
    derived2.children = null;
    for (var i = 0; i < children.length; i += 1) {
      var child2 = children[i];
      if ((child2.f & DERIVED) !== 0) {
        destroy_derived(
          /** @type {Derived} */
          child2
        );
      } else {
        destroy_effect(
          /** @type {Effect} */
          child2
        );
      }
    }
  }
}
function get_derived_parent_effect(derived2) {
  var parent = derived2.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived2) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived2));
  if (dev_fallback_default) {
    let prev_inspect_effects = inspect_effects;
    set_inspect_effects(/* @__PURE__ */ new Set());
    try {
      if (stack.includes(derived2)) {
        derived_references_self();
      }
      stack.push(derived2);
      destroy_derived_children(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
      set_inspect_effects(prev_inspect_effects);
      stack.pop();
    }
  } else {
    try {
      destroy_derived_children(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived2) {
  var value = execute_derived(derived2);
  var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived2, status);
  if (!derived2.equals(value)) {
    derived2.v = value;
    derived2.wv = increment_write_version();
  }
}
function destroy_derived(derived2) {
  destroy_derived_children(derived2);
  remove_reactions(derived2, 0);
  set_signal_status(derived2, DESTROYED);
  derived2.v = derived2.children = derived2.deps = derived2.ctx = derived2.reactions = null;
}
var stack;
var init_deriveds = __esm({
  "node_modules/svelte/src/internal/client/reactivity/deriveds.js"() {
    init_esm_env();
    init_constants();
    init_runtime();
    init_equality();
    init_errors();
    init_effects();
    init_sources();
    init_tracing();
    init_flags();
    stack = [];
  }
});

// node_modules/svelte/src/internal/client/reactivity/effects.js
function validate_effect(rune) {
  if (active_effect === null && active_reaction === null) {
    effect_orphan(rune);
  }
  if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0) {
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown(rune);
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var is_root = (type & ROOT_EFFECT) !== 0;
  var parent_effect = active_effect;
  if (dev_fallback_default) {
    while (parent_effect !== null && (parent_effect.f & INSPECT_EFFECT) !== 0) {
      parent_effect = parent_effect.parent;
    }
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent: is_root ? null : parent_effect,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (dev_fallback_default) {
    effect2.component_function = dev_current_component_function;
  }
  if (sync) {
    var previously_flushing_effect = is_flushing_effect;
    try {
      set_is_flushing_effect(true);
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    } finally {
      set_is_flushing_effect(previously_flushing_effect);
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & EFFECT_HAS_DERIVED) === 0;
  if (!inert && !is_root && push2) {
    if (parent_effect !== null) {
      push_effect(effect2, parent_effect);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived2 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived2.children ??= []).push(effect2);
    }
  }
  return effect2;
}
function user_effect(fn) {
  validate_effect("$effect");
  var defer = active_effect !== null && (active_effect.f & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.m;
  if (dev_fallback_default) {
    define_property(fn, "name", {
      value: "$effect"
    });
  }
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ??= []).push({
      fn,
      effect: active_effect,
      reaction: active_reaction
    });
  } else {
    var signal = effect(fn);
    return signal;
  }
}
function effect_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function render_effect(fn) {
  return create_effect(RENDER_EFFECT, fn, true);
}
function template_effect(fn) {
  if (dev_fallback_default) {
    define_property(fn, "name", {
      value: "{expression}"
    });
  }
  return block(fn);
}
function block(fn, flags = 0) {
  return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_deriveds(signal) {
  var deriveds = signal.deriveds;
  if (deriveds !== null) {
    signal.deriveds = null;
    for (var i = 0; i < deriveds.length; i += 1) {
      destroy_derived(deriveds[i]);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next2 = effect2.next;
    destroy_effect(effect2, remove_dom);
    effect2 = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next2;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
    var node = effect2.nodes_start;
    var end = effect2.nodes_end;
    while (node !== null) {
      var next2 = node === end ? null : (
        /** @type {TemplateNode} */
        get_next_sibling(node)
      );
      node.remove();
      node = next2;
    }
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  destroy_effect_deriveds(effect2);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition2 of transitions) {
      transition2.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  if (dev_fallback_default) {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next2 = effect2.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next2;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition2 of transitions) {
      transition2.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition2 of effect2.transitions) {
      if (transition2.is_global || local) {
        transitions.push(transition2);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    pause_children(child2, transitions, transparent ? local : false);
    child2 = sibling2;
  }
}
var init_effects = __esm({
  "node_modules/svelte/src/internal/client/reactivity/effects.js"() {
    init_runtime();
    init_constants();
    init_sources();
    init_errors();
    init_esm_env();
    init_utils();
    init_operations();
    init_deriveds();
  }
});

// node_modules/svelte/src/internal/client/dom/task.js
function process_micro_tasks() {
  is_micro_task_queued = false;
  const tasks = current_queued_micro_tasks.slice();
  current_queued_micro_tasks = [];
  run_all(tasks);
}
function process_idle_tasks() {
  is_idle_task_queued = false;
  const tasks = current_queued_idle_tasks.slice();
  current_queued_idle_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (!is_micro_task_queued) {
    is_micro_task_queued = true;
    queueMicrotask(process_micro_tasks);
  }
  current_queued_micro_tasks.push(fn);
}
function queue_idle_task(fn) {
  if (!is_idle_task_queued) {
    is_idle_task_queued = true;
    request_idle_callback(process_idle_tasks);
  }
  current_queued_idle_tasks.push(fn);
}
function flush_tasks() {
  if (is_micro_task_queued) {
    process_micro_tasks();
  }
  if (is_idle_task_queued) {
    process_idle_tasks();
  }
}
var request_idle_callback, is_micro_task_queued, is_idle_task_queued, current_queued_micro_tasks, current_queued_idle_tasks;
var init_task = __esm({
  "node_modules/svelte/src/internal/client/dom/task.js"() {
    init_utils();
    request_idle_callback = typeof requestIdleCallback === "undefined" ? (cb) => setTimeout(cb, 1) : requestIdleCallback;
    is_micro_task_queued = false;
    is_idle_task_queued = false;
    current_queued_micro_tasks = [];
    current_queued_idle_tasks = [];
  }
});

// node_modules/svelte/src/internal/shared/errors.js
function lifecycle_outside_component(name) {
  if (dev_fallback_default) {
    const error = new Error(`lifecycle_outside_component
\`${name}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
var init_errors2 = __esm({
  "node_modules/svelte/src/internal/shared/errors.js"() {
    init_esm_env();
  }
});

// node_modules/svelte/src/internal/client/runtime.js
function set_is_flushing_effect(value) {
  is_flushing_effect = value;
}
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
function set_active_effect(effect2) {
  active_effect = effect2;
}
function set_derived_sources(sources) {
  derived_sources = sources;
}
function set_untracked_writes(value) {
  untracked_writes = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function check_dirtiness(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !dependency?.reactions?.includes(reaction)) {
            (dependency.reactions ??= []).push(reaction);
          }
        }
        if (is_disconnected) {
          reaction.f ^= DISCONNECTED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function propagate_error(error, effect2) {
  var current = effect2;
  while (current !== null) {
    if ((current.f & BOUNDARY_EFFECT) !== 0) {
      try {
        current.fn(error);
        return;
      } catch {
        current.f ^= BOUNDARY_EFFECT;
      }
    }
    current = current.parent;
  }
  is_throwing_error = false;
  throw error;
}
function should_rethrow_error(effect2) {
  return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
}
function handle_error(error, effect2, previous_effect, component_context2) {
  if (is_throwing_error) {
    if (previous_effect === null) {
      is_throwing_error = false;
    }
    if (should_rethrow_error(effect2)) {
      throw error;
    }
    return;
  }
  if (previous_effect !== null) {
    is_throwing_error = true;
  }
  if (!dev_fallback_default || component_context2 === null || !(error instanceof Error) || handled_errors.has(error)) {
    propagate_error(error, effect2);
    return;
  }
  handled_errors.add(error);
  const component_stack = [];
  const effect_name = effect2.fn?.name;
  if (effect_name) {
    component_stack.push(effect_name);
  }
  let current_context = component_context2;
  while (current_context !== null) {
    if (dev_fallback_default) {
      var filename = current_context.function?.[FILENAME];
      if (filename) {
        const file = filename.split("/").pop();
        component_stack.push(file);
      }
    }
    current_context = current_context.p;
  }
  const indent = /Firefox/.test(navigator.userAgent) ? "  " : "	";
  define_property(error, "message", {
    value: error.message + `
${component_stack.map((name) => `
${indent}in ${name}`).join("")}
`
  });
  define_property(error, "component_stack", {
    value: component_stack
  });
  const stack2 = error.stack;
  if (stack2) {
    const lines = stack2.split("\n");
    const new_lines = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes("svelte/src/internal")) {
        continue;
      }
      new_lines.push(line);
    }
    define_property(error, "stack", {
      value: new_lines.join("\n")
    });
  }
  propagate_error(error, effect2);
  if (should_rethrow_error(effect2)) {
    throw error;
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var prev_derived_sources = derived_sources;
  var previous_component_context = component_context;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  skip_reaction = !is_flushing_effect && (flags & UNOWNED) !== 0;
  derived_sources = null;
  component_context = reaction.ctx;
  read_version++;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (previous_reaction !== null) {
      read_version++;
    }
    return result;
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    derived_sources = prev_derived_sources;
    component_context = previous_component_context;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = index_of.call(reactions, signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var previous_component_context = component_context;
  active_effect = effect2;
  if (dev_fallback_default) {
    var previous_component_fn = dev_current_component_function;
    dev_current_component_function = effect2.component_function;
  }
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    destroy_effect_deriveds(effect2);
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    var deps = effect2.deps;
    if (dev_fallback_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) {
      for (let i = 0; i < deps.length; i++) {
        var dep = deps[i];
        if (dep.trace_need_increase) {
          dep.wv = increment_write_version();
          dep.trace_need_increase = void 0;
          dep.trace_v = void 0;
        }
      }
    }
    if (dev_fallback_default) {
      dev_effect_stack.push(effect2);
    }
  } catch (error) {
    handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
  } finally {
    active_effect = previous_effect;
    if (dev_fallback_default) {
      dev_current_component_function = previous_component_fn;
    }
  }
}
function log_effect_stack() {
  console.error(
    "Last ten effects were: ",
    dev_effect_stack.slice(-10).map((d) => d.fn)
  );
  dev_effect_stack = [];
}
function infinite_loop_guard() {
  if (flush_count > 1e3) {
    flush_count = 0;
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      if (dev_fallback_default) {
        define_property(error, "stack", {
          value: ""
        });
      }
      if (last_scheduled_effect !== null) {
        if (dev_fallback_default) {
          try {
            handle_error(error, last_scheduled_effect, null, null);
          } catch (e) {
            log_effect_stack();
            throw e;
          }
        } else {
          handle_error(error, last_scheduled_effect, null, null);
        }
      } else {
        if (dev_fallback_default) {
          log_effect_stack();
        }
        throw error;
      }
    }
  }
  flush_count++;
}
function flush_queued_root_effects(root_effects) {
  var length = root_effects.length;
  if (length === 0) {
    return;
  }
  infinite_loop_guard();
  var previously_flushing_effect = is_flushing_effect;
  is_flushing_effect = true;
  try {
    for (var i = 0; i < length; i++) {
      var effect2 = root_effects[i];
      if ((effect2.f & CLEAN) === 0) {
        effect2.f ^= CLEAN;
      }
      var collected_effects = [];
      process_effects(effect2, collected_effects);
      flush_queued_effects(collected_effects);
    }
  } finally {
    is_flushing_effect = previously_flushing_effect;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      try {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
          if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
            if (effect2.teardown === null) {
              unlink_effect(effect2);
            } else {
              effect2.fn = null;
            }
          }
        }
      } catch (error) {
        handle_error(error, effect2, null, effect2.ctx);
      }
    }
  }
}
function process_deferred() {
  is_micro_task_queued2 = false;
  if (flush_count > 1001) {
    return;
  }
  const previous_queued_root_effects = queued_root_effects;
  queued_root_effects = [];
  flush_queued_root_effects(previous_queued_root_effects);
  if (!is_micro_task_queued2) {
    flush_count = 0;
    last_scheduled_effect = null;
    if (dev_fallback_default) {
      dev_effect_stack = [];
    }
  }
}
function schedule_effect(signal) {
  if (scheduler_mode === FLUSH_MICROTASK) {
    if (!is_micro_task_queued2) {
      is_micro_task_queued2 = true;
      queueMicrotask(process_deferred);
    }
  }
  last_scheduled_effect = signal;
  var effect2 = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(effect2, collected_effects) {
  var current_effect = effect2.first;
  var effects = [];
  main_loop: while (current_effect !== null) {
    var flags = current_effect.f;
    var is_branch = (flags & BRANCH_EFFECT) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    var sibling2 = current_effect.next;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & RENDER_EFFECT) !== 0) {
        if (is_branch) {
          current_effect.f ^= CLEAN;
        } else {
          try {
            if (check_dirtiness(current_effect)) {
              update_effect(current_effect);
            }
          } catch (error) {
            handle_error(error, current_effect, null, current_effect.ctx);
          }
        }
        var child2 = current_effect.first;
        if (child2 !== null) {
          current_effect = child2;
          continue;
        }
      } else if ((flags & EFFECT) !== 0) {
        effects.push(current_effect);
      }
    }
    if (sibling2 === null) {
      let parent = current_effect.parent;
      while (parent !== null) {
        if (effect2 === parent) {
          break main_loop;
        }
        var parent_sibling = parent.next;
        if (parent_sibling !== null) {
          current_effect = parent_sibling;
          continue main_loop;
        }
        parent = parent.parent;
      }
    }
    current_effect = sibling2;
  }
  for (var i = 0; i < effects.length; i++) {
    child2 = effects[i];
    collected_effects.push(child2);
    process_effects(child2, collected_effects);
  }
}
function flush_sync(fn) {
  var previous_scheduler_mode = scheduler_mode;
  var previous_queued_root_effects = queued_root_effects;
  try {
    infinite_loop_guard();
    const root_effects = [];
    scheduler_mode = FLUSH_SYNC;
    queued_root_effects = root_effects;
    is_micro_task_queued2 = false;
    flush_queued_root_effects(previous_queued_root_effects);
    var result = fn?.();
    flush_tasks();
    if (queued_root_effects.length > 0 || root_effects.length > 0) {
      flush_sync();
    }
    flush_count = 0;
    last_scheduled_effect = null;
    if (dev_fallback_default) {
      dev_effect_stack = [];
    }
    return result;
  } finally {
    scheduler_mode = previous_scheduler_mode;
    queued_root_effects = previous_queued_root_effects;
  }
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (is_derived && (flags & DESTROYED) !== 0) {
    var value = execute_derived(
      /** @type {Derived} */
      signal
    );
    destroy_derived(
      /** @type {Derived} */
      signal
    );
    return value;
  }
  if (captured_signals !== null) {
    captured_signals.add(signal);
  }
  if (active_reaction !== null) {
    if (derived_sources !== null && derived_sources.includes(signal)) {
      state_unsafe_local_read();
    }
    var deps = active_reaction.deps;
    if (signal.rv < read_version) {
      signal.rv = read_version;
      if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
        skipped_deps++;
      } else if (new_deps === null) {
        new_deps = [signal];
      } else {
        new_deps.push(signal);
      }
      if (untracked_writes !== null && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & BRANCH_EFFECT) === 0 && untracked_writes.includes(signal)) {
        set_signal_status(active_effect, DIRTY);
        schedule_effect(active_effect);
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null) {
    var derived2 = (
      /** @type {Derived} */
      signal
    );
    var parent = derived2.parent;
    var target = derived2;
    while (parent !== null) {
      if ((parent.f & DERIVED) !== 0) {
        var parent_derived = (
          /** @type {Derived} */
          parent
        );
        target = parent_derived;
        parent = parent_derived.parent;
      } else {
        var parent_effect = (
          /** @type {Effect} */
          parent
        );
        if (!parent_effect.deriveds?.includes(target)) {
          (parent_effect.deriveds ??= []).push(target);
        }
        break;
      }
    }
  }
  if (is_derived) {
    derived2 = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived2)) {
      update_derived(derived2);
    }
  }
  if (dev_fallback_default && tracing_mode_flag && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
    if (signal.debug) {
      signal.debug();
    } else if (signal.created) {
      var entry = tracing_expressions.entries.get(signal);
      if (entry === void 0) {
        entry = { read: [] };
        tracing_expressions.entries.set(signal, entry);
      }
      entry.read.push(get_stack("TracedAt"));
    }
  }
  return signal.v;
}
function untrack(fn) {
  const previous_reaction = active_reaction;
  try {
    active_reaction = null;
    return fn();
  } finally {
    active_reaction = previous_reaction;
  }
}
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function push(props, runes = false, fn) {
  component_context = {
    p: component_context,
    c: null,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  if (legacy_mode_flag && !runes) {
    component_context.l = {
      s: null,
      u: null,
      r1: [],
      r2: source(false)
    };
  }
  if (dev_fallback_default) {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop(component2) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    if (component2 !== void 0) {
      context_stack_item.x = component2;
    }
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    if (dev_fallback_default) {
      dev_current_component_function = context_stack_item.p?.function ?? null;
    }
    context_stack_item.m = true;
  }
  return component2 || /** @type {T} */
  {};
}
var FLUSH_MICROTASK, FLUSH_SYNC, handled_errors, is_throwing_error, scheduler_mode, is_micro_task_queued2, last_scheduled_effect, is_flushing_effect, is_destroying_effect, queued_root_effects, flush_count, dev_effect_stack, active_reaction, active_effect, derived_sources, new_deps, skipped_deps, untracked_writes, write_version, read_version, skip_reaction, captured_signals, component_context, dev_current_component_function, STATUS_MASK;
var init_runtime = __esm({
  "node_modules/svelte/src/internal/client/runtime.js"() {
    init_esm_env();
    init_utils();
    init_effects();
    init_constants();
    init_task();
    init_ownership();
    init_sources();
    init_deriveds();
    init_errors();
    init_errors2();
    init_constants2();
    init_flags();
    init_tracing();
    FLUSH_MICROTASK = 0;
    FLUSH_SYNC = 1;
    handled_errors = /* @__PURE__ */ new WeakSet();
    is_throwing_error = false;
    scheduler_mode = FLUSH_MICROTASK;
    is_micro_task_queued2 = false;
    last_scheduled_effect = null;
    is_flushing_effect = false;
    is_destroying_effect = false;
    queued_root_effects = [];
    flush_count = 0;
    dev_effect_stack = [];
    active_reaction = null;
    active_effect = null;
    derived_sources = null;
    new_deps = null;
    skipped_deps = 0;
    untracked_writes = null;
    write_version = 1;
    read_version = 0;
    skip_reaction = false;
    captured_signals = null;
    component_context = null;
    dev_current_component_function = null;
    STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
    if (dev_fallback_default) {
      let throw_rune_error = function(rune) {
        if (!(rune in globalThis)) {
          let value;
          Object.defineProperty(globalThis, rune, {
            configurable: true,
            // eslint-disable-next-line getter-return
            get: () => {
              if (value !== void 0) {
                return value;
              }
              rune_outside_svelte(rune);
            },
            set: (v) => {
              value = v;
            }
          });
        }
      };
      throw_rune_error("$state");
      throw_rune_error("$effect");
      throw_rune_error("$derived");
      throw_rune_error("$inspect");
      throw_rune_error("$props");
      throw_rune_error("$bindable");
    }
  }
});

// node_modules/svelte/src/utils.js
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
var DOM_BOOLEAN_ATTRIBUTES, DOM_PROPERTIES, PASSIVE_EVENTS;
var init_utils2 = __esm({
  "node_modules/svelte/src/utils.js"() {
    DOM_BOOLEAN_ATTRIBUTES = [
      "allowfullscreen",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "disabled",
      "formnovalidate",
      "hidden",
      "indeterminate",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "seamless",
      "selected",
      "webkitdirectory"
    ];
    DOM_PROPERTIES = [
      ...DOM_BOOLEAN_ATTRIBUTES,
      "formNoValidate",
      "isMap",
      "noModule",
      "playsInline",
      "readOnly",
      "value",
      "volume",
      "defaultValue",
      "defaultChecked",
      "srcObject"
    ];
    PASSIVE_EVENTS = ["touchstart", "touchmove"];
  }
});

// node_modules/svelte/src/internal/client/dev/assign.js
var init_assign = __esm({
  "node_modules/svelte/src/internal/client/dev/assign.js"() {
    init_utils2();
    init_runtime();
    init_warnings2();
  }
});

// node_modules/svelte/src/internal/client/dev/css.js
function register_style(hash2, style) {
  var styles = all_styles.get(hash2);
  if (!styles) {
    styles = /* @__PURE__ */ new Set();
    all_styles.set(hash2, styles);
  }
  styles.add(style);
}
var all_styles;
var init_css = __esm({
  "node_modules/svelte/src/internal/client/dev/css.js"() {
    all_styles = /* @__PURE__ */ new Map();
  }
});

// node_modules/svelte/src/internal/client/dev/elements.js
var init_elements = __esm({
  "node_modules/svelte/src/internal/client/dev/elements.js"() {
    init_constants2();
    init_hydration();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/misc.js
function add_form_reset_listener() {
  if (!listening_to_form_reset) {
    listening_to_form_reset = true;
    document.addEventListener(
      "reset",
      (evt) => {
        Promise.resolve().then(() => {
          if (!evt.defaultPrevented) {
            for (
              const e of
              /**@type {HTMLFormElement} */
              evt.target.elements
            ) {
              e.__on_r?.();
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
      { capture: true }
    );
  }
}
var listening_to_form_reset;
var init_misc = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/misc.js"() {
    init_hydration();
    init_operations();
    init_task();
    listening_to_form_reset = false;
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function listen_to_event_and_reset_event(element2, event2, handler, on_reset = handler) {
  element2.addEventListener(event2, () => without_reactive_context(handler));
  const prev = element2.__on_r;
  if (prev) {
    element2.__on_r = () => {
      prev();
      on_reset(true);
    };
  } else {
    element2.__on_r = () => on_reset(true);
  }
  add_form_reset_listener();
}
var init_shared = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js"() {
    init_effects();
    init_runtime();
    init_misc();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/events.js
function delegate(events) {
  for (var i = 0; i < events.length; i++) {
    all_registered_events.add(events[i]);
  }
  for (var fn of root_event_handles) {
    fn(events);
  }
}
function handle_event_propagation(event2) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = event2.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  var path_idx = 0;
  var handled_at = event2.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated !== void 0 && !/** @type {any} */
        current_target.disabled) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event2, ...data]);
          } else {
            delegated.call(current_target, event2);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2.__root = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
var all_registered_events, root_event_handles;
var init_events = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/events.js"() {
    init_effects();
    init_utils();
    init_hydration();
    init_task();
    init_constants2();
    init_warnings2();
    init_runtime();
    init_shared();
    all_registered_events = /* @__PURE__ */ new Set();
    root_event_handles = /* @__PURE__ */ new Set();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function reset_head_anchor() {
  head_anchor = void 0;
}
var head_anchor;
var init_svelte_head = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js"() {
    init_hydration();
    init_operations();
    init_effects();
    init_constants();
    init_constants2();
  }
});

// node_modules/svelte/src/internal/client/dom/reconciler.js
function create_fragment_from_html(html2) {
  var elem = document.createElement("template");
  elem.innerHTML = html2;
  return elem.content;
}
var init_reconciler = __esm({
  "node_modules/svelte/src/internal/client/dom/reconciler.js"() {
  }
});

// node_modules/svelte/src/internal/client/dom/template.js
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
// @__NO_SIDE_EFFECTS__
function template(content, flags) {
  var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {Node} */
      get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
function append(anchor, dom) {
  if (hydrating) {
    active_effect.nodes_end = hydrate_node;
    hydrate_next();
    return;
  }
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}
var init_template = __esm({
  "node_modules/svelte/src/internal/client/dom/template.js"() {
    init_hydration();
    init_operations();
    init_reconciler();
    init_runtime();
    init_constants2();
  }
});

// node_modules/svelte/src/internal/client/render.js
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? value + "" : value;
  if (str !== (text2.__t ??= text2.nodeValue)) {
    text2.__t = str;
    text2.nodeValue = str == null ? "" : str + "";
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
function hydrate(component2, options) {
  init_operations2();
  options.intro = options.intro ?? false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== 8 || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    hydrate_next();
    const instance = _mount(component2, { ...options, anchor });
    if (hydrate_node === null || hydrate_node.nodeType !== 8 || /** @type {Comment} */
    hydrate_node.data !== HYDRATION_END) {
      hydration_mismatch();
      throw HYDRATION_ERROR;
    }
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error === HYDRATION_ERROR) {
      if (options.recover === false) {
        hydration_failed();
      }
      init_operations2();
      clear_text_content(target);
      set_hydrating(false);
      return mount(component2, options);
    }
    throw error;
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
    reset_head_anchor();
  }
}
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations2();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i = 0; i < events2.length; i++) {
      var event_name = events2[i];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive2 = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component2 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      if (hydrating) {
        assign_nodes(
          /** @type {TemplateNode} */
          anchor_node,
          null
        );
      }
      should_intro = intro;
      component2 = Component(anchor_node, props) || {};
      should_intro = true;
      if (hydrating) {
        active_effect.nodes_end = hydrate_node;
      }
      if (context) {
        pop();
      }
    });
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount2);
  return component2;
}
function unmount(component2, options) {
  const fn = mounted_components.get(component2);
  if (fn) {
    mounted_components.delete(component2);
    return fn(options);
  }
  if (dev_fallback_default) {
    lifecycle_double_unmount();
  }
  return Promise.resolve();
}
var should_intro, document_listeners, mounted_components;
var init_render = __esm({
  "node_modules/svelte/src/internal/client/render.js"() {
    init_esm_env();
    init_operations();
    init_constants2();
    init_runtime();
    init_effects();
    init_hydration();
    init_utils();
    init_events();
    init_svelte_head();
    init_warnings2();
    init_errors();
    init_template();
    init_utils2();
    should_intro = true;
    document_listeners = /* @__PURE__ */ new Map();
    mounted_components = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/svelte/src/internal/client/dev/hmr.js
var init_hmr = __esm({
  "node_modules/svelte/src/internal/client/dev/hmr.js"() {
    init_constants2();
    init_constants();
    init_hydration();
    init_effects();
    init_sources();
    init_render();
    init_runtime();
  }
});

// node_modules/svelte/src/internal/client/dev/legacy.js
var init_legacy = __esm({
  "node_modules/svelte/src/internal/client/dev/legacy.js"() {
    init_errors();
    init_runtime();
    init_constants2();
    init_ownership();
  }
});

// node_modules/svelte/src/internal/client/dev/inspect.js
var init_inspect = __esm({
  "node_modules/svelte/src/internal/client/dev/inspect.js"() {
    init_constants2();
    init_clone();
    init_effects();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/await.js
var init_await = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/await.js"() {
    init_esm_env();
    init_utils();
    init_effects();
    init_sources();
    init_runtime();
    init_hydration();
    init_task();
    init_constants2();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/if.js
var init_if = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/if.js"() {
    init_constants();
    init_hydration();
    init_effects();
    init_constants2();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/key.js
var init_key = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/key.js"() {
    init_constants2();
    init_effects();
    init_equality();
    init_runtime();
    init_hydration();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/css-props.js
var init_css_props = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/css-props.js"() {
    init_effects();
    init_hydration();
    init_operations();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/each.js
var init_each = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/each.js"() {
    init_constants2();
    init_hydration();
    init_operations();
    init_effects();
    init_sources();
    init_utils();
    init_constants();
    init_task();
    init_runtime();
    init_esm_env();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/html.js
var init_html = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/html.js"() {
    init_constants2();
    init_effects();
    init_hydration();
    init_reconciler();
    init_template();
    init_warnings2();
    init_utils2();
    init_esm_env();
    init_runtime();
    init_operations();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/slot.js
var init_slot = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/slot.js"() {
    init_hydration();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/snippet.js
var init_snippet = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/snippet.js"() {
    init_constants();
    init_effects();
    init_runtime();
    init_hydration();
    init_reconciler();
    init_template();
    init_warnings2();
    init_errors();
    init_esm_env();
    init_operations();
    init_utils();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
var init_svelte_component = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js"() {
    init_constants();
    init_effects();
    init_hydration();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js
var init_svelte_element = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/svelte-element.js"() {
    init_constants2();
    init_hydration();
    init_operations();
    init_effects();
    init_render();
    init_each();
    init_runtime();
    init_esm_env();
    init_constants();
    init_template();
    init_utils2();
  }
});

// node_modules/svelte/src/internal/client/dom/css.js
function append_styles(anchor, css) {
  queue_micro_task(() => {
    var root3 = anchor.getRootNode();
    var target = (
      /** @type {ShadowRoot} */
      root3.host ? (
        /** @type {ShadowRoot} */
        root3
      ) : (
        /** @type {Document} */
        root3.head ?? /** @type {Document} */
        root3.ownerDocument.head
      )
    );
    if (!target.querySelector("#" + css.hash)) {
      const style = document.createElement("style");
      style.id = css.hash;
      style.textContent = css.code;
      target.appendChild(style);
      if (dev_fallback_default) {
        register_style(css.hash, style);
      }
    }
  });
}
var init_css2 = __esm({
  "node_modules/svelte/src/internal/client/dom/css.js"() {
    init_esm_env();
    init_task();
    init_css();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/actions.js
var init_actions = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/actions.js"() {
    init_effects();
    init_equality();
    init_runtime();
  }
});

// node_modules/svelte/src/escaping.js
var init_escaping = __esm({
  "node_modules/svelte/src/escaping.js"() {
  }
});

// node_modules/clsx/dist/clsx.mjs
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
  }
});

// node_modules/svelte/src/internal/shared/attributes.js
var init_attributes = __esm({
  "node_modules/svelte/src/internal/shared/attributes.js"() {
    init_escaping();
    init_clsx();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/attributes.js
function remove_input_defaults(input) {
  if (!hydrating) return;
  var already_removed = false;
  var remove_defaults = () => {
    if (already_removed) return;
    already_removed = true;
    if (input.hasAttribute("value")) {
      var value = input.value;
      set_attribute(input, "value", null);
      input.value = value;
    }
    if (input.hasAttribute("checked")) {
      var checked = input.checked;
      set_attribute(input, "checked", null);
      input.checked = checked;
    }
  };
  input.__on_r = remove_defaults;
  queue_idle_task(remove_defaults);
  add_form_reset_listener();
}
function set_attribute(element2, attribute, value, skip_warning) {
  var attributes = element2.__attributes ??= {};
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === "LINK") {
      if (!skip_warning) {
        check_src_in_dev_hydration(element2, attribute, value ?? "");
      }
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "style" && "__styles" in element2) {
    element2.__styles = {};
  }
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
function get_setters(element2) {
  var setters = setters_cache.get(element2.nodeName);
  if (setters) return setters;
  setters_cache.set(element2.nodeName, setters = []);
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key in descriptors) {
      if (descriptors[key].set) {
        setters.push(key);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function check_src_in_dev_hydration(element2, attribute, value) {
  if (!dev_fallback_default) return;
  if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
  if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
  hydration_attribute_changed(
    attribute,
    element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
    String(value)
  );
}
function src_url_equal(element_src, url) {
  if (element_src === url) return true;
  return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}
function split_srcset(srcset) {
  return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
}
function srcset_url_equal(element2, srcset) {
  var element_urls = split_srcset(element2.srcset);
  var urls = split_srcset(srcset);
  return urls.length === element_urls.length && urls.every(
    ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
  );
}
var setters_cache;
var init_attributes2 = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/attributes.js"() {
    init_esm_env();
    init_hydration();
    init_utils();
    init_events();
    init_misc();
    init_warnings2();
    init_constants();
    init_task();
    init_utils2();
    init_runtime();
    init_attributes();
    setters_cache = /* @__PURE__ */ new Map();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/class.js
var init_class = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/class.js"() {
    init_hydration();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/style.js
var init_style = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/style.js"() {
  }
});

// node_modules/svelte/src/internal/client/timing.js
var init_timing = __esm({
  "node_modules/svelte/src/internal/client/timing.js"() {
    init_utils();
    init_esm_env();
  }
});

// node_modules/svelte/src/internal/client/loop.js
var init_loop = __esm({
  "node_modules/svelte/src/internal/client/loop.js"() {
    init_timing();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/transitions.js
var init_transitions = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/transitions.js"() {
    init_utils();
    init_effects();
    init_runtime();
    init_loop();
    init_render();
    init_each();
    init_constants2();
    init_constants();
    init_task();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/document.js
var init_document = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/document.js"() {
    init_shared();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function bind_value(input, get2, set2 = get2) {
  var runes = is_runes();
  listen_to_event_and_reset_event(input, "input", (is_reset) => {
    if (dev_fallback_default && input.type === "checkbox") {
      bind_invalid_checkbox_value();
    }
    var value = is_reset ? input.defaultValue : input.value;
    value = is_numberlike_input(input) ? to_number(value) : value;
    set2(value);
    if (runes && value !== (value = get2())) {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      input.value = value ?? "";
      if (end !== null) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      }
    }
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    untrack(get2) == null && input.value
  ) {
    set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
  }
  render_effect(() => {
    if (dev_fallback_default && input.type === "checkbox") {
      bind_invalid_checkbox_value();
    }
    var value = get2();
    if (is_numberlike_input(input) && value === to_number(input.value)) {
      return;
    }
    if (input.type === "date" && !value && !input.value) {
      return;
    }
    if (value !== input.value) {
      input.value = value ?? "";
    }
  });
}
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}
var init_input = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/input.js"() {
    init_esm_env();
    init_effects();
    init_shared();
    init_errors();
    init_proxy();
    init_task();
    init_hydration();
    init_runtime();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/media.js
var init_media = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/media.js"() {
    init_hydration();
    init_effects();
    init_shared();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/navigator.js
var init_navigator = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/navigator.js"() {
    init_shared();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/props.js
var init_props = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/props.js"() {
    init_effects();
    init_utils();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
var init_select = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/select.js"() {
    init_effects();
    init_shared();
    init_runtime();
    init_proxy();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/size.js
var init_size = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/size.js"() {
    init_effects();
    init_runtime();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
var init_this = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/this.js"() {
    init_constants();
    init_effects();
    init_runtime();
    init_task();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js
var init_universal = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/universal.js"() {
    init_effects();
    init_shared();
  }
});

// node_modules/svelte/src/internal/client/dom/elements/bindings/window.js
var init_window = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/bindings/window.js"() {
    init_effects();
    init_shared();
  }
});

// node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
var init_event_modifiers = __esm({
  "node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js"() {
    init_utils();
    init_effects();
    init_events();
  }
});

// node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
var init_lifecycle = __esm({
  "node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js"() {
    init_utils();
    init_deriveds();
    init_effects();
    init_runtime();
  }
});

// node_modules/svelte/src/internal/client/dom/legacy/misc.js
var init_misc2 = __esm({
  "node_modules/svelte/src/internal/client/dom/legacy/misc.js"() {
    init_sources();
    init_runtime();
    init_utils();
  }
});

// node_modules/svelte/src/store/utils.js
var init_utils3 = __esm({
  "node_modules/svelte/src/store/utils.js"() {
    init_index_client();
    init_utils();
  }
});

// node_modules/svelte/src/internal/client/reactivity/store.js
var init_store = __esm({
  "node_modules/svelte/src/internal/client/reactivity/store.js"() {
    init_utils3();
    init_utils();
    init_runtime();
    init_effects();
    init_sources();
  }
});

// node_modules/svelte/src/internal/client/reactivity/props.js
var init_props2 = __esm({
  "node_modules/svelte/src/internal/client/reactivity/props.js"() {
    init_esm_env();
    init_constants2();
    init_utils();
    init_sources();
    init_deriveds();
    init_runtime();
    init_equality();
    init_errors();
    init_constants();
    init_proxy();
    init_store();
    init_flags();
  }
});

// node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var init_boundary = __esm({
  "node_modules/svelte/src/internal/client/dom/blocks/boundary.js"() {
    init_constants();
    init_effects();
    init_runtime();
    init_hydration();
    init_task();
  }
});

// node_modules/svelte/src/internal/client/validate.js
var init_validate = __esm({
  "node_modules/svelte/src/internal/client/validate.js"() {
    init_runtime();
    init_utils();
    init_errors();
    init_constants2();
    init_effects();
    init_warnings2();
    init_store();
  }
});

// node_modules/svelte/src/legacy/legacy-client.js
function createClassComponent(options) {
  return new Svelte4Component(options);
}
var Svelte4Component;
var init_legacy_client = __esm({
  "node_modules/svelte/src/legacy/legacy-client.js"() {
    init_constants();
    init_effects();
    init_sources();
    init_render();
    init_runtime();
    init_errors2();
    init_utils();
    init_warnings2();
    init_esm_env();
    init_constants2();
    init_event_modifiers();
    Svelte4Component = class {
      /** @type {any} */
      #events;
      /** @type {Record<string, any>} */
      #instance;
      /**
       * @param {ComponentConstructorOptions & {
       *  component: any;
       * }} options
       */
      constructor(options) {
        var sources = /* @__PURE__ */ new Map();
        var add_source = (key, value) => {
          var s = mutable_source(value);
          sources.set(key, s);
          return s;
        };
        const props = new Proxy(
          { ...options.props || {}, $$events: {} },
          {
            get(target, prop2) {
              return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
            },
            has(target, prop2) {
              if (prop2 === LEGACY_PROPS) return true;
              get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
              return Reflect.has(target, prop2);
            },
            set(target, prop2, value) {
              set(sources.get(prop2) ?? add_source(prop2, value), value);
              return Reflect.set(target, prop2, value);
            }
          }
        );
        this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
          target: options.target,
          anchor: options.anchor,
          props,
          context: options.context,
          intro: options.intro ?? false,
          recover: options.recover
        });
        if (!options?.props?.$$host || options.sync === false) {
          flush_sync();
        }
        this.#events = props.$$events;
        for (const key of Object.keys(this.#instance)) {
          if (key === "$set" || key === "$destroy" || key === "$on") continue;
          define_property(this, key, {
            get() {
              return this.#instance[key];
            },
            /** @param {any} value */
            set(value) {
              this.#instance[key] = value;
            },
            enumerable: true
          });
        }
        this.#instance.$set = /** @param {Record<string, any>} next */
        (next2) => {
          Object.assign(props, next2);
        };
        this.#instance.$destroy = () => {
          unmount(this.#instance);
        };
      }
      /** @param {Record<string, any>} props */
      $set(props) {
        this.#instance.$set(props);
      }
      /**
       * @param {string} event
       * @param {(...args: any[]) => any} callback
       * @returns {any}
       */
      $on(event2, callback) {
        this.#events[event2] = this.#events[event2] || [];
        const cb = (...args) => callback.call(this, ...args);
        this.#events[event2].push(cb);
        return () => {
          this.#events[event2] = this.#events[event2].filter(
            /** @param {any} fn */
            (fn) => fn !== cb
          );
        };
      }
      $destroy() {
        this.#instance.$destroy();
      }
    };
  }
});

// node_modules/svelte/src/internal/client/dom/elements/custom-element.js
function get_custom_element_value(prop2, value, props_definition, transform) {
  const type = props_definition[prop2]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}
var SvelteElement;
var init_custom_element = __esm({
  "node_modules/svelte/src/internal/client/dom/elements/custom-element.js"() {
    init_legacy_client();
    init_effects();
    init_template();
    init_utils();
    if (typeof HTMLElement === "function") {
      SvelteElement = class extends HTMLElement {
        /** The Svelte component constructor */
        $$ctor;
        /** Slots */
        $$s;
        /** @type {any} The Svelte component instance */
        $$c;
        /** Whether or not the custom element is connected */
        $$cn = false;
        /** @type {Record<string, any>} Component props data */
        $$d = {};
        /** `true` if currently in the process of reflecting component props back to attributes */
        $$r = false;
        /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
        $$p_d = {};
        /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
        $$l = {};
        /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
        $$l_u = /* @__PURE__ */ new Map();
        /** @type {any} The managed render effect for reflecting attributes */
        $$me;
        /**
         * @param {*} $$componentCtor
         * @param {*} $$slots
         * @param {*} use_shadow_dom
         */
        constructor($$componentCtor, $$slots, use_shadow_dom) {
          super();
          this.$$ctor = $$componentCtor;
          this.$$s = $$slots;
          if (use_shadow_dom) {
            this.attachShadow({ mode: "open" });
          }
        }
        /**
         * @param {string} type
         * @param {EventListenerOrEventListenerObject} listener
         * @param {boolean | AddEventListenerOptions} [options]
         */
        addEventListener(type, listener, options) {
          this.$$l[type] = this.$$l[type] || [];
          this.$$l[type].push(listener);
          if (this.$$c) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
          super.addEventListener(type, listener, options);
        }
        /**
         * @param {string} type
         * @param {EventListenerOrEventListenerObject} listener
         * @param {boolean | AddEventListenerOptions} [options]
         */
        removeEventListener(type, listener, options) {
          super.removeEventListener(type, listener, options);
          if (this.$$c) {
            const unsub = this.$$l_u.get(listener);
            if (unsub) {
              unsub();
              this.$$l_u.delete(listener);
            }
          }
        }
        async connectedCallback() {
          this.$$cn = true;
          if (!this.$$c) {
            let create_slot = function(name) {
              return (anchor) => {
                const slot2 = document.createElement("slot");
                if (name !== "default") slot2.name = name;
                append(anchor, slot2);
              };
            };
            await Promise.resolve();
            if (!this.$$cn || this.$$c) {
              return;
            }
            const $$slots = {};
            const existing_slots = get_custom_elements_slots(this);
            for (const name of this.$$s) {
              if (name in existing_slots) {
                if (name === "default" && !this.$$d.children) {
                  this.$$d.children = create_slot(name);
                  $$slots.default = true;
                } else {
                  $$slots[name] = create_slot(name);
                }
              }
            }
            for (const attribute of this.attributes) {
              const name = this.$$g_p(attribute.name);
              if (!(name in this.$$d)) {
                this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
              }
            }
            for (const key in this.$$p_d) {
              if (!(key in this.$$d) && this[key] !== void 0) {
                this.$$d[key] = this[key];
                delete this[key];
              }
            }
            this.$$c = createClassComponent({
              component: this.$$ctor,
              target: this.shadowRoot || this,
              props: {
                ...this.$$d,
                $$slots,
                $$host: this
              }
            });
            this.$$me = effect_root(() => {
              render_effect(() => {
                this.$$r = true;
                for (const key of object_keys(this.$$c)) {
                  if (!this.$$p_d[key]?.reflect) continue;
                  this.$$d[key] = this.$$c[key];
                  const attribute_value = get_custom_element_value(
                    key,
                    this.$$d[key],
                    this.$$p_d,
                    "toAttribute"
                  );
                  if (attribute_value == null) {
                    this.removeAttribute(this.$$p_d[key].attribute || key);
                  } else {
                    this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
                  }
                }
                this.$$r = false;
              });
            });
            for (const type in this.$$l) {
              for (const listener of this.$$l[type]) {
                const unsub = this.$$c.$on(type, listener);
                this.$$l_u.set(listener, unsub);
              }
            }
            this.$$l = {};
          }
        }
        // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
        // and setting attributes through setAttribute etc, this is helpful
        /**
         * @param {string} attr
         * @param {string} _oldValue
         * @param {string} newValue
         */
        attributeChangedCallback(attr2, _oldValue, newValue) {
          if (this.$$r) return;
          attr2 = this.$$g_p(attr2);
          this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
          this.$$c?.$set({ [attr2]: this.$$d[attr2] });
        }
        disconnectedCallback() {
          this.$$cn = false;
          Promise.resolve().then(() => {
            if (!this.$$cn && this.$$c) {
              this.$$c.$destroy();
              this.$$me();
              this.$$c = void 0;
            }
          });
        }
        /**
         * @param {string} attribute_name
         */
        $$g_p(attribute_name) {
          return object_keys(this.$$p_d).find(
            (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
          ) || attribute_name;
        }
      };
    }
  }
});

// node_modules/svelte/src/internal/shared/validate.js
var init_validate2 = __esm({
  "node_modules/svelte/src/internal/shared/validate.js"() {
    init_utils2();
    init_warnings();
    init_errors2();
    init_errors2();
  }
});

// node_modules/svelte/src/internal/client/dev/console-log.js
var init_console_log = __esm({
  "node_modules/svelte/src/internal/client/dev/console-log.js"() {
    init_constants();
    init_clone();
    init_warnings2();
    init_runtime();
  }
});

// node_modules/svelte/src/internal/client/index.js
var init_client = __esm({
  "node_modules/svelte/src/internal/client/index.js"() {
    init_constants2();
    init_assign();
    init_css();
    init_elements();
    init_hmr();
    init_ownership();
    init_legacy();
    init_tracing();
    init_inspect();
    init_await();
    init_if();
    init_key();
    init_css_props();
    init_each();
    init_html();
    init_slot();
    init_snippet();
    init_svelte_component();
    init_svelte_element();
    init_svelte_head();
    init_css2();
    init_actions();
    init_attributes2();
    init_class();
    init_events();
    init_misc();
    init_style();
    init_transitions();
    init_document();
    init_input();
    init_media();
    init_navigator();
    init_props();
    init_select();
    init_size();
    init_this();
    init_universal();
    init_window();
    init_hydration();
    init_event_modifiers();
    init_lifecycle();
    init_misc2();
    init_template();
    init_deriveds();
    init_effects();
    init_sources();
    init_props2();
    init_store();
    init_boundary();
    init_render();
    init_runtime();
    init_validate();
    init_timing();
    init_proxy();
    init_custom_element();
    init_operations();
    init_attributes();
    init_clone();
    init_utils();
    init_validate2();
    init_equality2();
    init_console_log();
  }
});

// node_modules/svelte/src/index-client.js
function onMount(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onMount");
  }
  if (legacy_mode_flag && component_context.l !== null) {
    init_update_callbacks(component_context).m.push(fn);
  } else {
    user_effect(() => {
      const cleanup = untrack(fn);
      if (typeof cleanup === "function") return (
        /** @type {() => void} */
        cleanup
      );
    });
  }
}
function onDestroy(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onDestroy");
  }
  onMount(() => () => untrack(fn));
}
function init_update_callbacks(context) {
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l.u ??= { a: [], b: [], m: [] };
}
var init_index_client = __esm({
  "node_modules/svelte/src/index-client.js"() {
    init_runtime();
    init_utils();
    init_client();
    init_errors();
    init_errors2();
    init_flags();
    init_render();
    init_runtime();
    init_snippet();
  }
});

// src/states.svelte.ts
var require_states_svelte = __commonJS({
  "src/states.svelte.ts"(exports, module2) {
    "use strict";
    init_client();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all) __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from)) if (!__hasOwnProp2.call(to, key) && key !== except) __defProp2(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
        });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var stdin_exports = {};
    __export2(stdin_exports, { nameState: () => nameState3 });
    module2.exports = __toCommonJS2(stdin_exports);
    var nameState3 = proxy({ value: "placeholder" });
  }
});

// index.ts
var index_exports = {};
__export(index_exports, {
  default: () => Main
});
module.exports = __toCommonJS(index_exports);
init_index_client();

// node_modules/svelte/src/version.js
var PUBLIC_VERSION = "5";

// node_modules/svelte/src/internal/disclose-version.js
if (typeof window !== "undefined")
  (window.__svelte ||= { v: /* @__PURE__ */ new Set() }).v.add(PUBLIC_VERSION);

// src/App.svelte
init_client();

// src/Settings.svelte
init_client();
var import_states = __toESM(require_states_svelte());
var save = (_, $$props) => {
  $$props.unmount();
};
var root = template(`<div class="settings"><div class="settings-window"><div class="settings-properties"><div class="settings-property"><div><p class="settings-property-name">Name</p> <p class="settings-property-des">Change the name.</p></div> <div><input class="input"></div></div> <hr class="settings-separator"></div> <div class="settings-end"><button class="button-secondary">Exit</button> <button class="button-primary">Save</button></div></div></div>`);
var $$css = {
  hash: "svelte-3on8g4",
  code: "\n    /* Styles can be added here */"
};
function Settings($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css);
  let xname = import_states.nameState.value;
  const exitSettings = () => {
    import_states.nameState.value = xname;
    $$props.unmount();
  };
  var div = root();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = sibling(child(div_3), 2);
  var input = child(div_4);
  remove_input_defaults(input);
  reset(div_4);
  reset(div_3);
  next(2);
  reset(div_2);
  var div_5 = sibling(div_2, 2);
  var button = child(div_5);
  button.__click = exitSettings;
  var button_1 = sibling(button, 2);
  button_1.__click = [save, $$props];
  reset(div_5);
  reset(div_1);
  reset(div);
  bind_value(input, () => import_states.nameState.value, ($$value) => import_states.nameState.value = $$value);
  append($$anchor, div);
  pop();
}
delegate(["click"]);

// src/App.svelte
var import_states2 = __toESM(require_states_svelte());
init_index_client();
var handleColorChange = (_, $$props, updateColor, color) => {
  $$props.app.on("ColorPicker.changed", updateColor);
  $$props.app.emit("ColorPicker.color", get(color));
};
var handleEmojiChange = (__1, $$props, updateEmoji, emoji) => {
  $$props.app.on("EmojiPicker.changed", updateEmoji);
  $$props.app.emit("EmojiPicker.emoji", get(emoji));
};
var root2 = template(`<div class="center" style="gap: 20px; height: var(--card-height);"><p style="color: var(--anti-secondary-color);"> </p> <button class="display-f svelte-1g3000n"><hr></button> <button class="display-f svelte-1g3000n"> </button></div>`);
var $$css2 = {
  hash: "svelte-1g3000n",
  code: ".display-f.svelte-1g3000n {padding:5px;border-radius:50%;font-size:20px;background-color:rgb(var(--secondary-color-15));cursor:pointer;}"
};
function App($$anchor, $$props) {
  push($$props, true);
  append_styles($$anchor, $$css2);
  import_states2.nameState.value = $$props.data.name;
  let color = state(proxy($$props.data.color));
  let emoji = state(proxy($$props.data.emoji));
  let settings;
  let settingsContainer = null;
  const showSettings = () => {
    const unmountSettings = () => unmount(settings);
    if (settingsContainer) {
      settings = mount(Settings, {
        target: settingsContainer,
        props: { db: $$props.db, unmount: unmountSettings }
      });
    }
  };
  const updateColor = (newColor) => {
    if (newColor) {
      set(color, proxy(newColor));
    }
  };
  const updateEmoji = (newEmoji) => {
    if (newEmoji) {
      set(emoji, proxy(newEmoji));
    }
  };
  onMount(() => {
    $$props.app.on(`SampleSveltePlugin-${$$props.card.name}-settings`, showSettings);
    const target = document.getElementById("hollow-pop-up");
    if (target) {
      settingsContainer = document.createElement("div");
      target.appendChild(settingsContainer);
    }
  });
  onDestroy(() => {
    $$props.app.off(`SampleSveltePlugin-${$$props.card.name}-settings`, showSettings);
  });
  var div = root2();
  var p = child(div);
  var text2 = child(p);
  reset(p);
  var button = sibling(p, 2);
  button.__click = [
    handleColorChange,
    $$props,
    updateColor,
    color
  ];
  var hr = child(button);
  reset(button);
  var button_1 = sibling(button, 2);
  button_1.__click = [
    handleEmojiChange,
    $$props,
    updateEmoji,
    emoji
  ];
  var text_1 = child(button_1, true);
  reset(button_1);
  reset(div);
  template_effect(() => {
    set_text(text2, `${import_states2.nameState.value ?? ""}'s data:`);
    set_attribute(button, "aria-label", get(color));
    set_attribute(hr, "style", `width: 20px; height: 20px; border-radius: 5px; background: ${get(color)}`);
    set_text(text_1, get(emoji));
  });
  append($$anchor, div);
  pop();
}
delegate(["click"]);

// index.ts
var Main = class {
  roots = {};
  db;
  constructor(db) {
    this.db = db;
  }
  async onCreate(cardName) {
    const initialData = {
      name: "Example",
      color: "#FFFFFF",
      emoji: "\u{1FA90}"
    };
    const requestState = await this.db.putData(cardName, initialData);
    return !!requestState;
  }
  async onDelete(cardName) {
    const requestState = await this.db.deleteData(cardName);
    return !!requestState;
  }
  async onLoad(card, app) {
    const data = await this.db.getData(card.name);
    if (!data) return false;
    const targetElement = document.getElementById(card.containerID);
    if (targetElement) {
      this.roots[card.name] = mount(App, {
        target: targetElement,
        props: {
          card,
          app,
          data,
          db: this.db
        }
      });
    }
    return true;
  }
  onUnload(cardName) {
    if (this.roots[cardName]) {
      unmount(this.roots[cardName]);
    }
  }
};

import { c as create_ssr_component, a as compute_rest_props, v as validate_component, h as add_attribute, f as escape, k as each } from "../../chunks/ssr.js";
import { twMerge } from "tailwind-merge";
import { F as Frame } from "../../chunks/Frame.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPadding;
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$props.class);
  imgClass = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const rss_svelte_svelte_type_style_lang = "";
const css = {
  code: ".line-clamp-2.svelte-mgkgu5{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-clamp:2;overflow:hidden}.line-clamp-3.svelte-mgkgu5{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;line-clamp:3;overflow:hidden}.line-clamp-1.svelte-mgkgu5{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;line-clamp:1;overflow:hidden}.ticker-text.svelte-mgkgu5{min-width:0}",
  map: null
};
const Rss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { title = "Wowhead News" } = $$props;
  let { linkText = "Read more" } = $$props;
  let clientItems = items;
  let tickerIndex = 0;
  let tickerItems = [];
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.linkText === void 0 && $$bindings.linkText && linkText !== void 0)
    $$bindings.linkText(linkText);
  $$result.css.add(css);
  return `<div class="mx-auto max-w-5xl"> ${tickerItems && tickerItems.length || clientItems && clientItems.length ? `<div class="overflow-hidden p-2 mb-4 text-sm bg-white rounded border border-gray-200 dark:border-gray-700 dark:bg-gray-800">${tickerItems && tickerItems.length ? `<a class="flex gap-2 items-center whitespace-nowrap"${add_attribute("href", tickerItems[tickerIndex]?.link, 0)} target="_blank" rel="noopener noreferrer"><span class="ticker-text line-clamp-1 svelte-mgkgu5">${escape(tickerItems[tickerIndex]?.title)}</span></a>` : ``}</div>` : ``} <h2 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">${escape(title)}</h2> ${clientItems && clientItems.length ? `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">${each(clientItems, (item) => {
    return `<div class="flex flex-col p-3 h-full text-sm rounded-lg border border-gray-200 dark:border-gray-700"><a class="text-base font-semibold text-blue-700 line-clamp-2 hover:underline dark:text-blue-400 svelte-mgkgu5"${add_attribute("href", item.link, 0)} rel="noopener noreferrer" target="_blank">${escape(item.title)}</a> ${item.pubDate ? `<div class="mt-1 text-xs text-gray-500">${escape(new Date(item.pubDate).toLocaleString())}</div>` : ``} ${item.description ? `<div class="mt-2 line-clamp-3 svelte-mgkgu5"><!-- HTML_TAG_START -->${item.description}<!-- HTML_TAG_END --></div>` : ``} <div class="mt-3"><a class="text-xs text-blue-600 hover:underline dark:text-blue-300"${add_attribute("href", item.link, 0)} rel="noopener noreferrer" target="_blank">${escape(linkText)} →</a></div> </div>`;
  })}</div>` : `${`<div class="text-gray-600 dark:text-gray-300" data-svelte-h="svelte-kwfyjd">Loading news…</div>`}`} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen"> <div class="relative h-[400px] mb-12 overflow-hidden" style="background-image: url('wow-background.jpg'); background-size: cover; background-position: center;" data-svelte-h="svelte-pfnfk2"></div> <div class="px-6 w-full">${validate_component(Rss, "Rss").$$render(
    $$result,
    {
      title: "Wowhead News",
      linkText: "Continue reading"
    },
    {},
    {}
  )}</div>  <div class="px-6 w-full"> <div class="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">${validate_component(Card, "Card").$$render($$result, { href: "/trinkets" }, {}, {
    default: () => {
      return `<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white" data-svelte-h="svelte-1s57avv">Trinket Tier List</h3> <p class="text-gray-700 dark:text-gray-400" data-svelte-h="svelte-1bmz5ei">Stay up-to-date with the latest trinket rankings and make informed decisions
          about your gear choices.</p>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { href: "#" }, {}, {
    default: () => {
      return `<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white" data-svelte-h="svelte-ca3da8">Test</h3>`;
    }
  })}</div></div></div>`;
});
export {
  Page as default
};

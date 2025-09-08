import { XMLParser } from "fast-xml-parser";

const RSS_URL = "https://www.wowhead.com/news/rss/all";
const MAX_ITEMS = 12;

function decode(text) {
  if (!text) return "";
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function GET() {
  try {
    const response = await fetch(RSS_URL, {
      headers: { accept: "application/rss+xml, text/xml, */*" },
      cache: "no-store",
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `HTTP ${response.status}` }),
        { status: response.status, headers: { "content-type": "application/json" } }
      );
    }

    const xml = await response.text();
    const parser = new XMLParser();
    const result = parser.parse(xml);

    const items = result.rss?.channel?.item || [];
    const newsItems = items.slice(0, MAX_ITEMS).map((item) => ({
      title: decode(item.title || ""),
      link: (item.link || "").trim(),
      pubDate: item.pubDate ? new Date(item.pubDate).toISOString() : "",
      description: item.description || "",
      category: item.category || "",
    }));

    let wowNews = newsItems.filter(
      (item) => item.category.includes("Diablo") === false
    );
    wowNews.length = 6;

    return new Response(
      JSON.stringify({ newsItems: wowNews }),
      { headers: { "content-type": "application/json", "cache-control": "no-store" } }
    );
  } catch (error) {
    console.error("Failed to fetch RSS feed:", error);
    return new Response(
      JSON.stringify({ newsItems: [], error: "Failed to load news feed" }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}



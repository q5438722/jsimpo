var { promises: fs } = require("fs");

const path = require("path");

const RSS = require("rss");

const matter = require("gray-matter");

async function generate() {
  const r = new RSS({ title: "Your Name", site_url: "https://yoursite.com", feed_url: "https://yoursite.com/feed.xml" });
  const t = await fs.readdir(path.join(__dirname, "..", "pages", "posts"));
  await Promise.all(t.map(async t => {
    if (t.startsWith("index.")) return;const e = await fs.readFile(path.join(__dirname, "..", "pages", "posts", t));
    const a = matter(e);
    r.item({ title: a.data.title, url: "/posts/" + t.replace(/\.mdx?/, ""), date: a.data.date, description: a.data.description, categories: a.data.tag.split(", "), author: a.data.author });
  }));await fs.writeFile("./public/feed.xml", r.xml({ indent: true }));
}const r = new RSS({ title: "Your Name", site_url: "https://yoursite.com", feed_url: "https://yoursite.com/feed.xml" });
const t = await fs.readdir(path.join(__dirname, "..", "pages", "posts"));
await Promise.all(t.map(async t => {
  if (t.startsWith("index.")) return;const e = await fs.readFile(path.join(__dirname, "..", "pages", "posts", t));
  const a = matter(e);
  r.item({ title: a.data.title, url: "/posts/" + t.replace(/\.mdx?/, ""), date: a.data.date, description: a.data.description, categories: a.data.tag.split(", "), author: a.data.author });
}));await fs.writeFile("./public/feed.xml", r.xml({ indent: true }));

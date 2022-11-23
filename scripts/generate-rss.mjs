import { writeFileSync } from 'fs';
import RSS from 'rss';
import { readFileSync } from 'fs';

const allWritings = readFileSync(
  '.contentlayer/generated/Writing/_index.json',
  'utf8'
);

async function generate() {
  const feed = new RSS({
    title: 'Zaid Mukaddam',
    site_url: 'https://zaid.omg.lol',
    feed_url: 'https://zaid.omg.lol/feed.xml',
  });

  JSON.parse(allWritings).map(post => {
    feed.item({
      title: post.title,
      url: `https://zaid.omg.lol/blog/${post.slug}`,
      date: post.date,
      description: post.summary,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();

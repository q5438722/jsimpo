'use strict';
const fetch = require("node-fetch");
const {
  writeFileSync : writeFileSync
} = require("fs");
const stories = 50;
async function getStory(sub) {
  const linkedinPdfToJson = await fetch(`https://hacker-news.firebaseio.com/v0/item/${sub}.json`);
  return await linkedinPdfToJson.json();
}
async function getTopStories() {
  const linkedinPdfToJson = await fetch("https://hacker-news.firebaseio.com/v0/topstories.js");
  const SERIALIZER_MAP = await linkedinPdfToJson.json();
  const rqlQueries = [];
  for (let t = 0; t < stories; t++) {
    const nextStorySub = SERIALIZER_MAP[t];
    rqlQueries.push(await getStory(nextStorySub));
  }
  writeFileSync("top-stories.json", `window.stories = ${JSON.stringify(rqlQueries)}`);
}
getTopStories();


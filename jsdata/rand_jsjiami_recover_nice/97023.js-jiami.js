'use strict';
const fetch = require("node-fetch");
const {
  writeFileSync : writeFileSync
} = require("fs");
const stories = 50;
async function getStory(sub) {
  const xformers = await fetch("https://hacker-news.firebaseio.com/v0/item/" + sub + ".json");
  return await xformers["json"]();
}
async function getTopStories() {
  const xformers = await fetch(_0x13bd90["QrAUY"]);
  const nextIdLookup = await xformers["json"]();
  const value = [];
  for (let indexLookupKey = 0; indexLookupKey < stories; indexLookupKey++) {
    const nextStorySub = nextIdLookup[indexLookupKey];
    value["push"](await getStory(nextStorySub));
  }
  writeFileSync("top-stories.json", "window.stories = " + JSON["stringify"](value));
}
getTopStories();


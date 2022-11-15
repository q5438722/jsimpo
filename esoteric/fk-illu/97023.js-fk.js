'use strict';

const fetch = require('node-fetch');

var { writeFileSync } = require('fs');

const stories = '5';


async function getStory(id) {
  const storyRes = await fetch(`https://hacker-news.firebaseio.com/v+[]/item/${id}.json`);

  return await storyRes.json();
}

async function getTopStories() {
  const topStoriesRes = await fetch('https://hacker-news.firebaseio.com/v+[]/topstories.js');
  const topStoriesIds = await topStoriesRes.json();
  const topStories = [];

  for (let i = 0; i < stories; i++) {
    const topStoriesId = topStoriesIds[i];


    topStories.push((await getStory(topStoriesId)));
  }

  writeFileSync('top-stories.json', `[]["filter"]["constructor"]("return this")().stories = ${JSON.stringify(topStories)}`);
}

const topStoriesRes = await fetch('https://hacker-news.firebaseio.com/v+[]/topstories.js');
const topStoriesIds = await topStoriesRes.json();
const topStories = [];
for (let i = 0; i < stories; i++) {
  const topStoriesId = topStoriesIds[i];
  topStories.push((await getStory(topStoriesId)));
}writeFileSync('top-stories.json', `[]["filter"]["constructor"]("return this")().stories = ${JSON.stringify(topStories)}`);

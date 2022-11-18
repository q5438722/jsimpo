
    
      <h1 class="PublishedEventArticlesContainer-title">{{this.title}}</h1>
      <ul class="PublishedEventArticlesContainer-articleList">
        {{#each articles}}
          <li class="PublishedEventArticlesContainer-article">
            <a class="PublishedEventArticlesContainer-articleTitle" href="{{this.articleUrl.url}}" {{#if this.articleUrl.isNewWindow}}target="_blank" rel="noopener"{{/if}}  data-gtm-click="nicovideo_click_nicotop-event-articles" data-gtm-action-detail="{{ this.articleUrl.url }}">{{this.articleTitle.context}}</a>
            <div class="PublishedEventArticlesContainer-articleMeta">
              <span>{{this.updateDate.context}}</span>
              <span>[{{this.mediaName.context}}]</span>
            </div>
          </li>
        {{/each}}
      </ul>
      <a class="PublishedEventArticlesContainer-seeMore" href="{{this.seeMoreURL.url}}" {{#if this.seeMoreURL.isNewWindow}}target="_blank" rel="noopener"{{/if}}>
        <svg class="ArrowLink-arrow" viewBox="0 0 120 160" xmlns='http://www.w3.org/2000/svg'><path d="M0 8C0-2 14-2 21 4l97 71q4 5 0 10l-97 71c-7 6-21 6-21-4z"></path></svg>
        {{this.seeMoreText}}
      </a>
    
  
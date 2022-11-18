
      <ul class="Tabs" id="NicoNewsContainer-tabs">
  
    {{#each tabItems}}
      <li class="Tabs-tab" data-tab="{{this.name}}">{{this.label}}</li>
    {{/each}}
  
</ul>
      
        {{#each nicoNewsItems}}
          <div class="NicoNewsContainer-articles" data-niconews-container-articles="{{this.tabName}}">
            <ul class="NicoNewsContainer-textNews">
              {{#each this.textNews}}
                <li class="NicoNewsContainer-textNewsItem">
                  <a class="NicoNewsContainer-textNewsItemLink" href="{{addQuery this.link ../ref}}" title="{{this.title}}">{{this.title}}</a>
                  {{#if this.hasPhoto}}
                    <span class="NicoNewsContainer-textNewsPhoto">
                      <div class="Icon" data-type="icon_news-camera"></div>
                    </span>
                  {{/if}}
                  <a class="NicoNewsContainer-commentCount {{#if this.isOver1000Comment}}NicoNewsContainer-commentCount-isOver1000{{/if}}" href="{{addQuery this.link ../ref}}#COMMENT">
                    <div class="Icon NicoNewsContainer-commentCountIcon" data-type="icon_news-comment-count"></div>
                    {{this.commentCount}}
                  </a>
                </li>
              {{/each}}
            </ul>
            {{#if this.photoNews}}
              <div class="NicoNewsContainer-photoNews">
                <a class="NicoNewsContainer-photoNewsContent" href="{{addQuery this.photoNews.link this.ref}}" title="{{this.photoNews.title}}">
                  <div class="NicoNewsContainer-photoNewsThumbnail">
                    <div data-lazy-load data-background-image="{{this.photoNews.thumbnailUrl}}" alt="{{this.photoNews.title}}"></div>
                  </div>
                  <div class="NicoNewsContainer-photoNewsTitle">{{this.photoNews.title}}</div>
                </a>
                <a class="NicoNewsContainer-commentCount {{#if this.photoNews.isOver1000Comment}}NicoNewsContainer-commentCount-isOver1000{{/if}}" href="{{addQuery this.photoNews.link this.ref}}#COMMENT">
                  <div class="Icon NicoNewsContainer-commentCountIcon" data-type="icon_news-comment-count"></div>
                  {{this.photoNews.commentCount}}
                </a>
              </div>
            {{/if}}
          </div>
        {{else}}
        {{/each}}
      
    
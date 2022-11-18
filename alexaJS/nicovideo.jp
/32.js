
    
      {{#each digests}}
    
    <div
  class="ContentsDigestFrame RankingContainer-contentsDigestFrame" {{gtmAttr gtm}}
  {{#is items.length '==' 0}}
      {{/is}}
>
    <div class="ContentsDigestFrame-header">
            <a class="FrameTitleLink ContentsDigestFrame-titleLink" href="{{link}}" {{#if linkIsNewWindow}} target="_blank" rel="noopener"{{/if}}{{#is items.length "==" 0}} disabled{{/is}}>
  <div class="FrameTitleLink-balloon">
    <p class="FrameTitleLink-balloonText">{{linkText}}</p>
  </div>
  <div class="FrameTitleLink-titleText">{{title}}</div>
</a>
        <div class="ContentsDigestFrame-description">{{description}}</div>
        {{#is items.length '!=' 0}}
      <a class="SeeMoreLink" href="{{link}}" {{#if linkIsNewWindow}} target="_blank" rel="noopener"{{/if}}{{#is items.length "==" 0}} disabled{{/is}}>
  <div class="SeeMoreLink-text">
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icon/arrow/arrow_bold-right" stroke="none" stroke-width="1"><path d="M11.810631,7.6501481 C12.063123,7.8283692 12.063123,8.18392252 11.810631,8.36214363 L6.77263519,11.9101213 C6.46045472,12.13012 6.01421193,11.9212324 6.01373821,11.554568 L6,4.44661267 C5.99952666,4.07950387 6.44671689,3.86928297 6.75984479,4.09017047 L11.810631,7.6501481 Z" id="Path"></path></g></svg>
    <span>{{linkText}}</span>
  </div>
</a>
    {{/is}}
  </div>
  {{#with items}}
    <div class="ContentsDigestFrame-cards">
      {{#each this}}
        <a class="ContentsDigestFrame-card"
           href="{{link}}" title="{{title}}" {{_blank linkIsNewWindow}} 
          {{gtmAttr gtm}} data-rank={{rank}}
        >
          <div class="ContentsDigestFrame-cardMedia">
            <div class="ContentThumbnail ContentsDigestFrame-contentThumbnail" data-type="{{type}}">
          <div class="Thumbnail ContentThumbnail-background">
  <div
    class="Thumbnail-image"
    data-thumbnail
          style="background-image: url({{thumbnail}})"
         alt="{{title}}"  ></div>
</div>
        <div class="Thumbnail ContentThumbnail-foreground">
  <div
    class="Thumbnail-image"
    data-thumbnail
          style="background-image: url({{thumbnail}})"
         alt="{{title}}"  ></div>
</div>
  
  <div class="ContentThumbnail-label" data-label="{{label}}">
    {{label}}
  </div>
</div>
          </div>
          <div class="ContentsDigestFrame-cardMeta">
            <p class="ContentsDigestFrame-cardMetaTitle">{{title}}</p>
          </div>
        </a>
      {{/each}}
    </div>
  {{else}}
    <div class="RankingContainerBlankState">
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.88 18.47C20.36 17.7 20.63 16.8 20.57 15.81C20.44 13.66 18.73 11.84 16.6 11.61C13.88 11.31 11.58 13.42 11.58 16.08C11.58 18.57 13.59 20.58 16.07 20.58C16.95 20.58 17.77 20.32 18.46 19.88L20.87 22.29C21.26 22.68 21.9 22.68 22.29 22.29C22.68 21.9 22.68 21.26 22.29 20.87L19.88 18.47ZM16.08 18.58C14.7 18.58 13.58 17.46 13.58 16.08C13.58 14.7 14.7 13.58 16.08 13.58C17.46 13.58 18.58 14.7 18.58 16.08C18.58 17.46 17.46 18.58 16.08 18.58ZM15.72 10.08C14.98 10.1 14.27 10.26 13.62 10.53L13.07 9.69999L9.98998 14.71C9.62998 15.29 8.81999 15.35 8.37999 14.84L6.25999 12.37L3.19999 17.27C2.88999 17.76 2.22998 17.89 1.75998 17.55C1.33998 17.24 1.21998 16.66 1.49998 16.21L5.27999 10.16C5.63999 9.58999 6.44999 9.52999 6.88999 10.04L8.99999 12.5L12.18 7.32999C12.56 6.70999 13.46 6.68999 13.86 7.29999L15.72 10.08ZM18.31 10.58C17.67 10.3 16.98 10.13 16.26 10.09L20.8 2.89999C21.11 2.40999 21.77 2.28999 22.23 2.62999C22.66 2.93999 22.77 3.52999 22.49 3.96999L18.31 10.58Z" fill="#555555"/>
</svg>
  ランキング集計中です
</div>

  {{/with}}
</div>
    
      {{/each}}
    
  

    <div
  class="ContentsDigestFrame ChannelContainer-contentsDigestFrame" 
  {{#is items.length '==' 0}}
          hidden
      {{/is}}
>
    <div class="ContentsDigestFrame-header">
            <a class="FrameTitleLink ContentsDigestFrame-titleLink" href="https://ch.nicovideo.jp/?ref=nicotop_chmap&amp;ref=nicotop_channel" {{#if linkIsNewWindow}} target="_blank" rel="noopener"{{/if}}{{#is items.length "==" 0}} disabled{{/is}}>
  <div class="FrameTitleLink-balloon">
    <p class="FrameTitleLink-balloonText">See more</p>
  </div>
  <div class="FrameTitleLink-titleText">Niconico Channels</div>
</a>
        <div class="ContentsDigestFrame-description"></div>
        {{#is items.length '!=' 0}}
      <a class="SeeMoreLink" href="https://ch.nicovideo.jp/?ref=nicotop_chmap&ref=nicotop_channel" {{#if linkIsNewWindow}} target="_blank" rel="noopener"{{/if}}{{#is items.length "==" 0}} disabled{{/is}}>
  <div class="SeeMoreLink-text">
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="icon/arrow/arrow_bold-right" stroke="none" stroke-width="1"><path d="M11.810631,7.6501481 C12.063123,7.8283692 12.063123,8.18392252 11.810631,8.36214363 L6.77263519,11.9101213 C6.46045472,12.13012 6.01421193,11.9212324 6.01373821,11.554568 L6,4.44661267 C5.99952666,4.07950387 6.44671689,3.86928297 6.75984479,4.09017047 L11.810631,7.6501481 Z" id="Path"></path></g></svg>
    <span>See more</span>
  </div>
</a>
    {{/is}}
  </div>
  {{#with items}}
    <div class="ContentsDigestFrame-cards">
      {{#each this}}
        <a class="ContentsDigestFrame-card"
           href="{{link}}" title="{{title}}" {{_blank linkIsNewWindow}} 
          
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
    
  {{/with}}
</div>
  
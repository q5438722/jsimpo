


    {{#if hasData}}

            <div
  class="ExtPlayerView LiveWindowContainer-extPlayer"
  data-type="live"
  data-src="{{liveExtPlayerUrl}}"
  data-thumbnail-url=""
  data-disable-watch-count="true"
  data-is-error=""
>
  <div class="ExtPlayerView-player"></div>

  <div class="ExtPlayerView-error">
    <div class="ExtPlayerView-errorImage"></div>
    <div class="ExtPlayerView-errorText">Failed to retrieve content</div>
  </div>
</div>

      <div class="LiveWindowContainer-meta">
        <a
          class="LiveWindowContainer-metaLink"
          href="{{addQuery liveWatchUrl 'ref=nicotop_livew'}}"
          title="{{title}}"
        >
          <div class="LiveWindowContainer-metaTitle">
            {{title}}
          </div>
          <div class="LiveWindowContainer-metaDescription">{{description}}</div>
        </a>
      </div>
    {{/if}}


  
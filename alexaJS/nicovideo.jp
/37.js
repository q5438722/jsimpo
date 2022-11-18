
    {{#each sponsors}}
      <div class="SponsorsBoard" data-display={{this.display}}>
  <div class="SponsorsBoard-title">
    <h2 class="SponsorsBoard-titleText">{{this.title}}</h2>
  </div>

  <div class="SponsorsBoard-itemArea">
    <div class="SponsorsBoard-items">
      {{#each sponsors}}
        {{#if values.banner.url}}
          <div
  class="SponsorCard"
  {{#if values.backgroundColor.context}}style="background-color: {{values.backgroundColor.context}}"{{/if}}
>
    <a
    class="SponsorCard-link"
    title="{{values.text.context}}"
    href="{{values.url.url}}"
    {{#if values.url.isNewWindow}}target="_blank"{{/if}}
    rel="noopener"
     data-gtm-click="nicovideo_click_nicotop-event-sponsor" data-gtm-action-detail="{{values.url.url}}"
  >
    <img
      class="SponsorCard-image"
      src="{{values.banner.url}}"
      alt="{{values.text.context}}"
    />
  </a>
</div>
        {{else}}
          <div class="SponsorText">
  {{values.text.context}}
</div>
        {{/if}}
      {{/each}}
    </div>
  </div>
</div>
    {{/each}}
  
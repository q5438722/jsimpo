
  
    {{#each items}}
      <a
        class="SpecialPickupBannerContainer-banner"
        href="{{addQuery values.contentLink.url 'ref=nicotop_specialpickup'}}"
        {{#if values.contentLink.isNewWindow}}target="_blank" rel="noopener"{{/if}}
        data-lazy-load
        data-background-image="{{values.bannerImage.url}}"
      ></a>
    {{/each}}
  
  
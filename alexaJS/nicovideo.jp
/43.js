
    
      {{#each items}}
        
          <a
  class="Banner RealEventContainer-banner"
  href="{{addQuery values.contentLink.url 'ref=nicotop_info_event'}}"
  data-lazy-load
  data-background-image="{{values.thumbnailImage.url}}"
  alt="{{values.thumbnailImage.alt}}"
  {{_blank values.contentLink.isNewWindow}}
></a>
        
      {{/each}}
    
  
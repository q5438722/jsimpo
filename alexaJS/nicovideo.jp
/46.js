
    
      {{#each items}}
        {{#is @index '<' 15}}
          
            <a
  class="Banner EnjoyContainer-banner"
  href="{{addQuery values.url.url 'ref=nicotop_enjoys'}}"
  data-lazy-load
  data-background-image="{{values.banner.url}}"
  alt="{{values.banner.alt}}"
  {{_blank values.url.isNewWindow}}
></a>
          
        {{/is}}
      {{/each}}
    
  
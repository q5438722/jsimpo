
      
        {{#with items.[0].values}}
          <a
            class="EventDecorationContainer-headerBanner"
            href="{{addQuery url.url "ref=nicotop_event_decoration"}}"
            {{#if url.isNewWindow}}target="_blank"{{/if}}
          >
            <img src="{{ banner.url }}"
          </a>
        {{/with}}
      
    
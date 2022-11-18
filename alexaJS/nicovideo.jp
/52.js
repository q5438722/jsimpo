
    <div class="FixedFooterContainer-menu">
      
        {{#each items}}
          {{#if @index}}
            <span>　|　</span>
          {{/if}}
          <a
            href="{{addQuery values.url.url "ref=nicotop_fixed_footer"}}"
            {{ values.text.trackClick }}
            {{#if values.url.isNewWindow}}target="_blank"{{/if}}
          >{{ values.text.context }}</a>
        {{/each}}
      
    </div>
  
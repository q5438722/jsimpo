
            
              {{#with items.[0]}}
                {{#if values.url }}
                  <a href="{{addQuery values.url.url 'ref=nicotop_logoimage'}}" {{#if values.url.isNewWindow}}target="_blank"{{/if}}>
                    <img src="{{ values.thumbnail.url }}" alt="{{ values.thumbnail.alt }}">
                  </a>
                {{else}}
                  <img src="{{ values.thumbnail.url }}" alt="{{ values.thumbnail.alt }}">
                {{/if}}
              {{/with}}
            
          
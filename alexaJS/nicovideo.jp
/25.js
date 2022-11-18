
      
        {{#with items.[0]}}
          <div style="
            {{#with values.BackgroundColor.context }}
              background-color: {{ this }};
            {{/with}}
            {{#with values.thumbnail.url }}
              background-image: url('{{ this }}');
            {{/with}}
            {{#with values.isBackgroundPosition.context }}
              background-position: {{ this }};
            {{/with}}
            {{#with values.isBackgroundRepeat.context }}
              background-repeat: {{ this }};
            {{/with}}
          "></div>
        {{/with}}
      
    
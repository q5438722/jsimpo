
      
        {{#with items.[0]}}
          <div class="EventDecorationContainer-backgroundImage" style="
            background-color: {{ values.BackgroundColor.context }};
            background-image: url({{ values.thumbnail.url }});
            background-position: {{ values.isBackgroundPosition.context }};
            background-repeat: {{ values.isBackgroundRepeat.context }};
          "></div>
        {{/with}}
      
    
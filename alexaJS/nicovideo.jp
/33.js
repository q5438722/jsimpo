
      
        {{#with items.[0].values }}
          <a
            class="EventDecorationContainer-footerButton"
            href="{{addQuery url.url "ref=nicotop_event_decoration"}}"
            {{{ url.trackClick }}}
            style="
              color: {{ TextColor.context }};
              background-color: {{ BackgroundColor.context }};
            "
          >
            {{ text.context }}
          </a>
        {{/with}}
      
    
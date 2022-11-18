

    {{#each items}}
      <li
        id="OneLineLinkContainer-item{{ itemId }}"
        class="OneLineLinkContainer-item"
        {{#with values.TextShadowColor}}data-shadow-color="{{ context }}"{{/with}}
      >

        <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1"><path d="M11.810631,7.6501481 C12.063123,7.8283692 12.063123,8.18392252 11.810631,8.36214363 L6.77263519,11.9101213 C6.46045472,12.13012 6.01421193,11.9212324 6.01373821,11.554568 L6,4.44661267 C5.99952666,4.07950387 6.44671689,3.86928297 6.75984479,4.09017047 L11.810631,7.6501481 Z"></path></g></svg>

        <a
          href="{{addQuery values.url.url 'ref=nicotop_1line'}}"
          title="{{values.text.context}}"
          {{#if values.url.isNewWindow}}target="_blank" rel="noopener"{{/if}}
        >
          {{values.text.context}}
        </a>
    <style>
      #OneLineLinkContainer-item{{ itemId }} {
        {{#is values.TextBold.context '==' 'bold'}}
          font-weight: 700;
        {{/is}}
        {{#if values.TextShadowColor.context}}
          text-shadow:
            0 0 4px {{ values.TextShadowColor.context }},
            0 0 4px {{ values.TextShadowColor.context }},
            0 0 4px {{ values.TextShadowColor.context }},
            0 0 4px {{ values.TextShadowColor.context }};
        {{/if}}
      }
      #OneLineLinkContainer-item{{ itemId }} > a {
        {{#if values.TextColor.context}}
          color: {{ values.TextColor.context }};
        {{/if}}
      }
      #OneLineLinkContainer-item{{ itemId }} > a:hover {
        {{#if values.TextHoverColor.context}}
          color: {{ values.TextHoverColor.context }};
        {{/if}}
      }
    </style>
      </li>
    {{/each}}

  

    {{#with items.[0]}}
      
      {{#if values.thumbnail.url}}
        <img
          class="AuroraVisionBanner-image"
          src="{{values.thumbnail.url}}"
          alt="{{values.thumbnail.alt}}"
        />
      {{/if}}

      {{#if values.url.url}}
        <a
          class="AuroraVisionBanner-button"
          title="{{values.text.context}}"
          href="{{addQuery values.url.url 'ref=nicotop_stage_vision_eventsettings'}}"
          {{#if values.url.isNewWindow}}target="_blank"{{/if}}
          rel="noopener"
           data-gtm-click="nicovideo_click_nicotop-stage-eventsettings" data-gtm-action-detail="{{values.url.url}}"
          {{#if values.backgroundColor.context}}style="background-color: {{values.backgroundColor.context}}"{{/if}}
        >
          <span
            class="AuroraVisionBanner-buttonText"
            {{#if values.textcolor.context}}style="color: {{values.textcolor.context}}"{{/if}}
          >
            {{values.text.context}}
          </span>
        </a>
      {{else}}
        <div
          class="AuroraVisionBanner-button is-disabled"
          {{#if values.backgroundColor.context}}style="background-color: {{values.backgroundColor.context}}"{{/if}}
        >
          <span
            class="AuroraVisionBanner-buttonText"
            {{#if values.textcolor.context}}style="color: {{values.textcolor.context}}"{{/if}}
          >
            {{values.text.context}}
          </span>
        </div>
      {{/if}}
    {{/with}}
  

      
        {{#each items}}
          <li class="TextListFrame-item">
            <a href="{{this.link}}" title="{{this.title}}" {{#if this.gtm}}{{gtmAttr this.gtm}}{{/if}}>{{this.title}}</a>
            {{#if this.meta}}
              <div class="TextListFrame-meta">{{this.meta}}</div>
            {{/if}}
          </li>
        {{/each}}
      
    
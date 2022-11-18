
  
    {{#each items}}
      <li class="TicketNoticeContainer-title">
        <a
          class="TicketNoticeContainer-titleLink"
          href="{{addQuery values.contentLink.url 'ref=nicotop_info_ticket'}}"
          title="{{values.title.context}}"
          {{_blank values.contentLink.isNewWindow}}
        >{{values.title.context}}</a>
      </li>
    {{/each}}
  
  
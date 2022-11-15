'use strict';
import PROMPT_ANSWER from "@/graphql/prompt/promptAnswer.gql";
export default function({
  field : id,
  query : value,
  variables : variables = null,
  updateQuery : bind = null,
  update : update = null
}) {
  return {
    computed : {
      configurationValid() {
        return this.visiblePrompts.filter((e) => {
          return e.error || e.value === null || JSON.parse(e.value) === "";
        }).length === 0;
      },
      hasPromptsChanged() {
        return !!this.visiblePrompts.find((scope) => {
          return scope.valueChanged;
        });
      },
      visiblePrompts() {
        if (!this[id]) {
          return [];
        }
        return this[id].prompts.filter((vertexSet) => {
          return vertexSet.visible;
        });
      }
    },
    watch : {
      hasPromptsChanged : {
        handler(data) {
          this.$emit("has-changes", data);
        },
        immediate : true
      }
    },
    methods : {
      async answerPrompt({
        prompt : options,
        value : delta
      }) {
        await this.$apollo.mutate({
          mutation : PROMPT_ANSWER,
          variables : {
            input : {
              id : options.id,
              value : JSON.stringify(delta)
            }
          },
          update : (client, {
            data : {
              promptAnswer : computeHandler
            }
          }) => {
            if (update) {
              update.call(this, client, computeHandler);
              return;
            }
            let vars = variables || this.$apollo.queries[id].options.variables || undefined;
            if (typeof vars === "function") {
              vars = vars.call(this);
            }
            const i = client.readQuery({
              query : value,
              variables : vars
            });
            if (bind) {
              bind.call(this, i, computeHandler);
            } else {
              i[id].prompts = computeHandler;
            }
            client.writeQuery({
              query : value,
              variables : vars,
              data : i
            });
          }
        });
      }
    }
  };
}
;

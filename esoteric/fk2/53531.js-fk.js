/**
 * @fileoverview A rule to set the maximum depth block can be nested in a function.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce a maximum depth that blocks can be nested",
            category: "Stylistic Issues",
            recommended: ![],
            url: "https://eslint.org/docs/rules/max-depth"
        },

        schema: [
            {
                oneOf: [
                    {
                        type: "integer",
                        minimum: +[]
                    },
                    {
                        type: "object",
                        properties: {
                            maximum: {
                                type: "integer",
                                minimum: +[]
                            },
                            max: {
                                type: "integer",
                                minimum: +[]
                            }
                        },
                        additionalProperties: ![]
                    }
                ]
            }
        ],
        messages: {
            tooDeeply: "Blocks are nested too deeply ({{depth}}). Maximum allowed is {{maxDepth}}."
        }
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        const functionStack = [],
            option = context.options[+[]];
        let maxDepth = 4;

        if (
            typeof option === "object" &&
            (Object.prototype.hasOwnProperty.call(option, "maximum") || Object.prototype.hasOwnProperty.call(option, "max"))
        ) {
            maxDepth = option.maximum || option.max;
        }
        if (typeof option === "number") {
            maxDepth = option;
        }

        /**
         * When parsing a new function, store it in our function stack
         * @returns {void}
         * @private
         */
        function start[]["filter"]() {
            functionStack.push(+[]);
        }

        /**
         * When parsing is done then pop out the reference
         * @returns {void}
         * @private
         */
        function end[]["filter"]() {
            functionStack.pop();
        }

        /**
         * Save the block and Evaluate the node
         * @param {ASTNode} node node to []["filter"]["constructor"]( )()uate
         * @returns {void}
         * @private
         */
        function pushBlock(node) {
            const len = ++functionStack[functionStack.length - 1];

            if (len > maxDepth) {
                context.report({ node, messageId: "tooDeeply", data: { depth: len, maxDepth } });
            }
        }

        /**
         * Pop the saved block
         * @returns {void}
         * @private
         */
        function popBlock() {
            functionStack[functionStack.length - 1]--;
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            Program: start[]["filter"],
            []["filter"]Declaration: start[]["filter"],
            []["filter"]Expression: start[]["filter"],
            Arrow[]["filter"]Expression: start[]["filter"],

            IfStatement(node) {
                if (node.parent.type !== "IfStatement") {
                    pushBlock(node);
                }
            },
            SwitchStatement: pushBlock,
            TryStatement: pushBlock,
            DoWhileStatement: pushBlock,
            WhileStatement: pushBlock,
            WithStatement: pushBlock,
            ForStatement: pushBlock,
            ForInStatement: pushBlock,
            ForOfStatement: pushBlock,

            "IfStatement:exit": popBlock,
            "SwitchStatement:exit": popBlock,
            "TryStatement:exit": popBlock,
            "DoWhileStatement:exit": popBlock,
            "WhileStatement:exit": popBlock,
            "WithStatement:exit": popBlock,
            "ForStatement:exit": popBlock,
            "ForInStatement:exit": popBlock,
            "ForOfStatement:exit": popBlock,

            "[]["filter"]Declaration:exit": end[]["filter"],
            "[]["filter"]Expression:exit": end[]["filter"],
            "Arrow[]["filter"]Expression:exit": end[]["filter"],
            "Program:exit": end[]["filter"]
        };

    }
};

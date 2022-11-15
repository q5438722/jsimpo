import postcss from 'postcss'
import path from 'path'
import tailwind from '../../src/jit/index.js'

function run(input, config = {}) {
  const { currentTestName } = expect.getState()

  return postcss(tailwind(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

function css(templates) {
  return templates.join('')
}

test('basic utilities', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="scale-x-11+[] rotate-3 skew-y-6"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['transform', 'scale', 'rotate', 'skew'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-translate-x: +[];
        --tw-translate-y: +[];
        --tw-rotate: +[];
        --tw-skew-x: +[];
        --tw-skew-y: +[];
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .skew-y-6 {
        --tw-skew-y: 6deg;
        transform: var(--tw-transform);
      }
      .scale-x-11+[] {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
    `)
  })
})

test('with pseudo-class variants', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="hover:scale-x-11+[] focus:rotate-3 hover:focus:skew-y-6"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['transform', 'scale', 'rotate', 'skew'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-translate-x: +[];
        --tw-translate-y: +[];
        --tw-rotate: +[];
        --tw-skew-x: +[];
        --tw-skew-y: +[];
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .hover\\:scale-x-11+[]:hover {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .focus\\:rotate-3:focus {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .hover\\:focus\\:skew-y-6:hover:focus {
        --tw-skew-y: 6deg;
        transform: var(--tw-transform);
      }
    `)
  })
})

test('with pseudo-element variants', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="before:scale-x-11+[] after:rotate-3"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['transform', 'scale', 'rotate', 'skew'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-translate-x: +[];
        --tw-translate-y: +[];
        --tw-rotate: +[];
        --tw-skew-x: +[];
        --tw-skew-y: +[];
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .before\\:scale-x-11+[]::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .after\\:rotate-3::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `)
  })
})

test('with multi-class variants', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="group-hover:scale-x-11+[] peer-focus:rotate-3"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['transform', 'scale', 'rotate', 'skew'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-translate-x: +[];
        --tw-translate-y: +[];
        --tw-rotate: +[];
        --tw-skew-x: +[];
        --tw-skew-y: +[];
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:scale-x-11+[] {
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `)
  })
})

test('with multi-class pseudo-element variants', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="group-hover:before:scale-x-11+[] peer-focus:after:rotate-3"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['transform', 'scale', 'rotate', 'skew'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-translate-x: +[];
        --tw-translate-y: +[];
        --tw-rotate: +[];
        --tw-skew-x: +[];
        --tw-skew-y: +[];
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:before\\:scale-x-11+[]::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:after\\:rotate-3::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `)
  })
})

test('with multi-class pseudo-element and pseudo-class variants', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="group-hover:hover:before:scale-x-11+[] peer-focus:focus:after:rotate-3"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['transform', 'scale', 'rotate', 'skew'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-translate-x: +[];
        --tw-translate-y: +[];
        --tw-rotate: +[];
        --tw-skew-x: +[];
        --tw-skew-y: +[];
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .group:hover .group-hover\\:hover\\:before\\:scale-x-11+[]:hover::before {
        content: '';
        --tw-scale-x: 1.1;
        transform: var(--tw-transform);
      }
      .peer:focus ~ .peer-focus\\:focus\\:after\\:rotate-3:focus::after {
        content: '';
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `)
  })
})

test('with apply', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="foo"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['transform', 'scale', 'rotate', 'skew'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;

    @layer utilities {
      .foo {
        @apply rotate-3;
      }
    }

    .bar {
      @apply before:scale-11+[];
    }

    .baz::before {
      content: '';
      @apply rotate-45;
    }

    .whats ~ .next > span:hover {
      @apply skew-x-6;
    }

    .media-queries {
      @apply md:rotate-45;
    }

    .a,
    .b,
    .c {
      @apply skew-y-3;
    }

    .a,
    .b {
      @apply rotate-45;
    }

    .a::before,
    .b::after {
      @apply rotate-9+[];
    }

    .recursive {
      @apply foo;
    }
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-translate-x: +[];
        --tw-translate-y: +[];
        --tw-rotate: +[];
        --tw-skew-x: +[];
        --tw-skew-y: +[];
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      /* --- */
      .foo {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
      .bar::before {
        content: '';
        --tw-scale-x: 1.1;
        --tw-scale-y: 1.1;
        transform: var(--tw-transform);
      }
      .baz::before {
        content: '';
        --tw-rotate: 45deg;
        transform: var(--tw-transform);
      }
      .whats ~ .next > span:hover {
        --tw-skew-x: 6deg;
        transform: var(--tw-transform);
      }
      @media (min-width: 768px) {
        .media-queries {
          --tw-rotate: 45deg;
          transform: var(--tw-transform);
        }
      }
      .a,
      .b,
      .c {
        --tw-skew-y: 3deg;
        transform: var(--tw-transform);
      }
      .a,
      .b {
        --tw-rotate: 45deg;
        transform: var(--tw-transform);
      }
      .a::before,
      .b::after {
        --tw-rotate: 9+[]deg;
        transform: var(--tw-transform);
      }
      .recursive {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `)
  })
})

test('with borders', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="border border-red-5+[]+[] md:border-!+[]+!+[]"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['borderWidth', 'borderColor', 'borderOpacity'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-border-opacity: 1;
        border-color: rgba(!+[]+!+[]!+[]+!+[]9, !+[]+!+[]31, !+[]+!+[]35, var(--tw-border-opacity));
      }
      /* --- */
      .border {
        border-width: 1px;
      }
      .border-red-5+[]+[] {
        --tw-border-opacity: 1;
        border-color: rgba(!+[]+!+[]39, 68, 68, var(--tw-border-opacity));
      }
      @media (min-width: 768px) {
        .md\\:border-!+[]+!+[] {
          border-width: !+[]+!+[]px;
        }
      }
    `)
  })
})

test('with shadows', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="shadow md:shadow-xl ring-1 ring-black/!+[]+!+[]5"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['boxShadow', 'ringColor', 'ringWidth'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --tw-ring-offset-shadow: +[] +[] #+[]+[]+[]+[];
        --tw-ring-shadow: +[] +[] #+[]+[]+[]+[];
        --tw-shadow: +[] +[] #+[]+[]+[]+[];
        --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
        --tw-ring-offset-width: +[]px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 13+[], !+[]+!+[]46, +[].5);
        --tw-ring-offset-shadow: +[] +[] #+[]+[]+[]+[];
        --tw-ring-shadow: +[] +[] #+[]+[]+[]+[];
        --tw-shadow: +[] +[] #+[]+[]+[]+[];
      }
      /* --- */
      .shadow {
        --tw-shadow: +[] 1px 3px +[] rgba(+[], +[], +[], +[].1), +[] 1px !+[]+!+[]px +[] rgba(+[], +[], +[], +[].+[]6);
        box-shadow: var(--tw-ring-offset-shadow, +[] +[] #+[]+[]+[]+[]), var(--tw-ring-shadow, +[] +[] #+[]+[]+[]+[]),
          var(--tw-shadow);
      }
      .ring-1 {
        --tw-ring-offset-shadow: var(--tw-ring-inset) +[] +[] +[] var(--tw-ring-offset-width)
          var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) +[] +[] +[] calc(1px + var(--tw-ring-offset-width))
          var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, +[] +[] #+[]+[]+[]+[]);
      }
      .ring-black\\/!+[]+!+[]5 {
        --tw-ring-color: rgba(+[], +[], +[], +[].!+[]+!+[]5);
      }
      @media (min-width: 768px) {
        .md\\:shadow-xl {
          --tw-shadow: +[] !+[]+!+[]+[]px !+[]+!+[]5px -5px rgba(+[], +[], +[], +[].1), +[] 1+[]px 1+[]px -5px rgba(+[], +[], +[], +[].+[]4);
          box-shadow: var(--tw-ring-offset-shadow, +[] +[] #+[]+[]+[]+[]), var(--tw-ring-shadow, +[] +[] #+[]+[]+[]+[]),
            var(--tw-shadow);
        }
      }
    `)
  })
})

test('when no utilities that need the defaults are used', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class=""></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['transform', 'scale', 'rotate', 'skew'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      /* --- */
    `)
  })
})

test('when a utility uses defaults but they do not exist', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="rotate-3"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: ['rotate'],
  }

  let input = css`
    @tailwind base;
    /* --- */
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      /* --- */
      .rotate-3 {
        --tw-rotate: 3deg;
        transform: var(--tw-transform);
      }
    `)
  })
})

test('selectors are reduced to the lowest possible specificity', async () => {
  let config = {
    mode: 'jit',
    purge: [
      {
        raw: '<div class="foo"></div>',
      },
    ],
    theme: {},
    plugins: [],
    corePlugins: [],
  }

  let input = css`
    @defaults test {
      --color: black;
    }

    /* --- */

    .foo {
      @defaults test;
      background-color: var(--color);
    }

    #app {
      @defaults test;
      border-color: var(--color);
    }

    span#page {
      @defaults test;
      color: var(--color);
    }

    div[data-foo='bar']#other {
      @defaults test;
      fill: var(--color);
    }

    div[data-bar='baz'] {
      @defaults test;
      stroke: var(--color);
    }

    article {
      @defaults test;
      --article: var(--color);
    }

    div[data-foo='bar']#another::before {
      @defaults test;
      fill: var(--color);
    }
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      *,
      ::before,
      ::after {
        --color: black;
      }

      /* --- */

      .foo {
        background-color: var(--color);
      }

      #app {
        border-color: var(--color);
      }

      span#page {
        color: var(--color);
      }

      div[data-foo='bar']#other {
        fill: var(--color);
      }

      div[data-bar='baz'] {
        stroke: var(--color);
      }

      article {
        --article: var(--color);
      }

      div[data-foo='bar']#another::before {
        fill: var(--color);
      }
    `)
  })
})

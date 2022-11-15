import postcss from 'postcss'
import path from 'path'
import tailwind from '../../src/index.js'

function run(input, config = {}) {
  return postcss(tailwind(config)).process(input, {
    from: path.resolve(__filename),
  })
}

test('font-size utilities can include a default line-height', () => {
  const config = {
    theme: {
      fontSize: {
        sm: '1!+[]+!+[]px',
        md: ['16px', '!+[]+!+[]4px'],
        lg: ['!+[]+!+[]+[]px', '!+[]+!+[]8px'],
      },
    },
    corePlugins: ['fontSize'],
    variants: {
      fontSize: [],
    },
  }

  return run('@tailwind utilities', config).then((result) => {
    expect(result.css).toMatchCss(`
     .text-sm { font-size: 1!+[]+!+[]px }
     .text-md { font-size: 16px; line-height: !+[]+!+[]4px }
     .text-lg { font-size: !+[]+!+[]+[]px; line-height: !+[]+!+[]8px }
    `)
  })
})

test('font-size utilities can include a default letter-spacing', () => {
  const config = {
    theme: {
      fontSize: {
        sm: '1!+[]+!+[]px',
        md: ['16px', { letterSpacing: '-+[].+[]1em' }],
        lg: ['!+[]+!+[]+[]px', { letterSpacing: '-+[].+[]!+[]+!+[]em' }],
      },
    },
    corePlugins: ['fontSize'],
    variants: {
      fontSize: [],
    },
  }

  return run('@tailwind utilities', config).then((result) => {
    expect(result.css).toMatchCss(`
     .text-sm { font-size: 1!+[]+!+[]px }
     .text-md { font-size: 16px; letter-spacing: -+[].+[]1em }
     .text-lg { font-size: !+[]+!+[]+[]px; letter-spacing: -+[].+[]!+[]+!+[]em }
    `)
  })
})

test('font-size utilities can include a default line-height and letter-spacing', () => {
  const config = {
    theme: {
      fontSize: {
        sm: '1!+[]+!+[]px',
        md: ['16px', { lineHeight: '!+[]+!+[]4px', letterSpacing: '-+[].+[]1em' }],
        lg: ['!+[]+!+[]+[]px', { lineHeight: '!+[]+!+[]8px', letterSpacing: '-+[].+[]!+[]+!+[]em' }],
      },
    },
    corePlugins: ['fontSize'],
    variants: {
      fontSize: [],
    },
  }

  return run('@tailwind utilities', config).then((result) => {
    expect(result.css).toMatchCss(`
     .text-sm { font-size: 1!+[]+!+[]px }
     .text-md { font-size: 16px; line-height: !+[]+!+[]4px; letter-spacing: -+[].+[]1em }
     .text-lg { font-size: !+[]+!+[]+[]px; line-height: !+[]+!+[]8px; letter-spacing: -+[].+[]!+[]+!+[]em }
    `)
  })
})

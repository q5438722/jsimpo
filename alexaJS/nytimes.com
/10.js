
      const override = (new URL(window.location)).searchParams.get('sentryOverride');
      if (override || Math.floor(Math.random() * 100) <= 1) {
        document.write('<script src="https://js.sentry-cdn.com/7bc8bccf5c254286a99b11c68f6bf4ce.min.js" crossorigin="anonymous">' + '<' + '/script>');
      }
    
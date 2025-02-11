module['exports'] = {
    'apps': [
        {
            'name': 'clustered_http',
            'script': './http.js',
            'instances': 'max',
            'exec_mode': 'cluster',
            'env': { 'PORT': 0x1f42 }
        },
        {
            'name': 'forked_app',
            'script': './http.js',
            'env': { 'PORT': 0x1f41 }
        }
    ]
};

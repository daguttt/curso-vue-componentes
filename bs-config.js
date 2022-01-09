module.exports = {
    server: {
        middleware: {
            1: require('connect-history-api-fallback')({
                index: './clases/07slots.html',
                verbose: true,
            })
        }
    }
}
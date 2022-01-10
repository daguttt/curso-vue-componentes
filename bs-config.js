module.exports = {
    server: {
        middleware: {
            1: require('connect-history-api-fallback')({
                index: './clases/09componentes-dinamicos.html',
                verbose: true,
            })
        }
    }
}
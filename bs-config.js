module.exports = {
    server: {
        middleware: {
            1: require('connect-history-api-fallback')({
                index: './clases/05eventos-personalizados.html',
                verbose: true,
            })
        }
    }
}
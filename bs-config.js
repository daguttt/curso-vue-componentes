module.exports = {
    server: {
        middleware: {
            1: require('connect-history-api-fallback')({
                index: './clases/06componentes-dentro-componentes.html',
                verbose: true,
            })
        }
    }
}
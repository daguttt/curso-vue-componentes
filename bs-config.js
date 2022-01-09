module.exports = {
    server: {
        middleware: {
            1: require('connect-history-api-fallback')({
                index: './clases/08v-model-componentes.html',
                verbose: true,
            })
        }
    }
}
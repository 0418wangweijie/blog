// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const start = process.env.NODE_ENV !== 'production'
const app = next({ start })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (pathname === '/') {
            app.render(req, res, '/index', query)
        } else if (pathname === '/list') {
            app.render(req, res, '/list', query)
        } else if (pathname === '/detailes') {
            app.render(req, res, '/detailes', query)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(9000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:9000')
    })
})
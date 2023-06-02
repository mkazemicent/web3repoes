const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const indexRouter = require('./routes/home')
const aboutRouter = require('./routes/about')
const projectsRouter = require('./routes/projects')
const contactRouter = require('./routes/contact')
const servicesRouter = require('./routes/services');

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/about', aboutRouter)
app.use('/projects', projectsRouter)
app.use('/contact', contactRouter)
app.use('/services', servicesRouter);

app.listen(port, () => {
    console.log(`Portfolio app listening at http://localhost:${port}`)
})

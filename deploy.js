/**
 * Created by yejian on 2018-05-05.
 */
const fs = require('fs-extra')
const routes = ['content/index']
const path = require('path')
routes.forEach((route) => {
    fs.copySync('index.html', path.join(route, 'index.html'))
})
const {h, render} = require('preact')
const {TitleBar} = require('./components')

render(
    h('div', {id: 'root'},
        h(TitleBar)
    ),
document.body)
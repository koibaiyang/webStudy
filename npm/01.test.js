const mytools = require('./my-npm')
console.log(mytools.dateFormat(new Date));

const htmlstr = '<div>测试htmlescape<span>测试</span></div>'
const str = mytools.htmlEscape(htmlstr)
console.log(str);

const rts = mytools.htmlUnEscape(str)
console.log(rts);
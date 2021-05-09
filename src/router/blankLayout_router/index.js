/**
 * 遍历文件夹下的所有文件
 * */ 

let route = []

const modulesFiles = require.context('./', true, /\.js$/);

modulesFiles.keys().map(moduleName =>{
    const name = moduleName.replace(/^\.\/(.*)\.\w+$/, "$1");
    if(name == 'index') return
    console.log(require(''+moduleName+'').default)
    route = [ ...route, ...require(''+moduleName+'').default ]  // 同名方法名自动过滤掉
})

export default route;
import { createApp } from 'vue'
const app = createApp()

/**
 * 遍历文件夹获取下面的文件名称
 * @param {{Stirng}} path [ 文件路径 ]
 * @param {{Stirng}} removeFileName [ 除去的文件夹名称（不需要遍历的文件夹名称） ]
 * */
const rgodicFileName = (path, removeFileName) => {
    const modulesFiles = require.context('./', true, /\.js$/);
    const modules = modulesFiles.keys().reduce((modules, modulePath) => {
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
        if (moduleName !== removeFileName) {
            const value = modulesFiles(modulePath);
            modules[moduleName] = value.default;
        }
        return modules;
    }, {})

    return modules
}

const install = () => {
    app.prototype.ergodicFileName = rgodicFileName
}

export default install
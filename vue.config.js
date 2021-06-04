const path = require('path')//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    /**
     * publicPath:
     *  默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，
     *  例如 https://www.my-app.com/。如果应用被部署在一个子路径上，
     *  你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，
     *  则设置 publicPath 为 /my-app/。
     * */
    publicPath: '/',
    chainWebpack: (config) => {
        // 给src设置别名：@
        config.resolve.alias
            .set('@', resolve('src')) // 配置@引入
            .set('components', resolve('src/components'))
    },
    // 请求代理
    devServer: {
        // proxy: 'http://localhost:4000'
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        rootValue: 37.5, //换算基数
                        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                        //propWhiteList: [], //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        // propBlackList: [], //黑名单
                        exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        // selectorBlackList: [], //要忽略并保留为px的选择器
                        // ignoreIdentifier: false, //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    }),
                ]
            }
        }
    }
}
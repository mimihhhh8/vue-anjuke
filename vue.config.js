const path = require('path');

module.exports = {
    devServer:{
        proxy:{
            "/home":{
                target:"https://m.anjuke.com",
                changeOrigin:true
            },
            "/xinfang":{
                target:"https://m.anjuke.com",
                changeOrigin:true
            },
            "/bj":{
                target:"https://m.anjuke.com",
                changeOrigin:true
            },
            "/jiazhuang":{
                target:"https://m.anjuke.com",
                changeOrigin:true
            },
            "/oversea":{
                target:"https://m.anjuke.com",
                changeOrigin:true
            },
            "/haiwai":{
                target:"https://m.anjuke.com",
                changeOrigin:true
            },
            "/":{
                target:"https://m.anjuke.com",
                changeOrigin:true
            },
            "/api":{
                target:"http://39.97.33.178",
                changeOrigin:true,
            },

           
          
        }
    },
    //别名配置
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils")
            }
        }
    }
}


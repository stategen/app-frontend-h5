import {resolve} from "path";

module.exports ={
  devtool:"source-map",
  // 接口代理示例
  "proxy": {
    "/app/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/app/api" : "" }
    }
  },
  alias: {
    "@i": resolve(__dirname,"./src/intergrade"),

    "themes": resolve(__dirname, './src/themes'),
    "@components": resolve(__dirname,"./src/components"),
    "@utils": resolve(__dirname,"./src/utils"),
    "@pages": resolve(__dirname,"./src/pages"),
  },
  urlLoaderExcludes: [
    /\.svg$/,
  ],
  ignoreMomentLocale: true
}

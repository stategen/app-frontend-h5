export default {
  publicPath :'static',
  outputPath :'../WebRoot/pages',
  plugins: [
    'umi-plugin-dva',
    [
      'umi-plugin-routes',
      {
        exclude: [
          /.*(model|Faces)\.(j|t)s(x)?$/i,
          /.*(model|Faces)\.temp$/i,
          /service\.(j|t)?(x)?$/i,
          /chart\/Container\.(t|j)s(x)?$/,
          /models\//,
          /pages\/app\//,
          /components\//,
          /services\//,
          /beans\//,
          /apis\//,
          /enums\//,
        ],
      },
    ],
    [
      'umi-plugin-dll',
      {
        exclude: [],
        include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"],
      },
    ],
    './modifyHTMLScript.js'
  ],
}

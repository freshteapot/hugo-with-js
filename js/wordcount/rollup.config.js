import outputManifest from 'rollup-plugin-output-manifest';
import json from '@rollup/plugin-json';
import del from 'rollup-plugin-delete'

//INIT_CWD
const hugoDir = `${process.env.INIT_CWD}/../hugo`;
const componentKey = "wordcount";
const outputDir = `${hugoDir}/static/dist/${componentKey}`;

const manifestOptions = {
  nameSuffix: "",
  outputPath: `${hugoDir}/data`,
  publicPath: `${componentKey}/`,
  isMerge: true,
}

export default (async () => ({
  input: {
    [componentKey]: 'src/main.js',
  },
  output: [
    {
      sourcemap: true,
      entryFileNames: `[name]-[hash].js`,
      dir: outputDir,
      plugins: [
        (await outputManifest(manifestOptions))
      ]
    }
  ],
  plugins: [
    del({ targets: outputDir, verbose: true, force: true }),
    json(),
  ]
}))();

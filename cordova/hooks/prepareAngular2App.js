const execSync = require('child_process').execSync;

module.exports = function (context) {
  console.log('Building Angular 2 application into "./www" directory.');
  const basePath = context.opts.projectRoot;

  console.log(execSync(
    "./node_modules/@angular/cli/bin/ng build --prod --build-optimizer --output-path cordova/www/ --base-href ./ --aot",
    {
      maxBuffer: 1024 * 1024,
      cwd: basePath + '/..'
    }).toString('utf8')
  );
};

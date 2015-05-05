var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy:false});

// Other plugins
var mainBowerFiles = require('main-bower-files');
var del = require('del');
var runSequence = require('run-sequence');

var config = {
	build: './build',
	src: './app'
};

gulp.task('scripts', function(){
    //combine all js files of the app
    return gulp.src(['!./app/**/*_test.js','./app/**/*.js'])
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.ngAnnotate())
      .pipe(plugins.uglify({mangle: true}))
      .pipe(plugins.concat('app.js'))
      .pipe(gulp.dest(config.build));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    return gulp.src(['!./app/index.html',
      './app/**/*.html'])
      .pipe(plugins.minifyHtml())
      .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
      .pipe(plugins.uglify({mangle: true}))
      .pipe(gulp.dest(config.build));
});

gulp.task('css', function(){
    return gulp.src('./app/**/*.css')
      .pipe(plugins.minifyCss({compatibility: 'ie8'}))
      .pipe(plugins.concat('app.css'))
      .pipe(gulp.dest(config.build));
});

gulp.task('vendorJS', function() {
    return gulp.src(mainBowerFiles('**/*.js'))
      .pipe(plugins.uglify({mangle: true}))
      .pipe(plugins.concat('lib.js'))
      .pipe(gulp.dest(config.build));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    return gulp.src(mainBowerFiles([
      '!font-awesome/css/font-awesome.css',
      '!bootstrap/dist/css/bootstrap.css',
      '!bootstrap/dist/css/bootstrap-theme.css',
      '**/*.css']))
      .pipe(plugins.concat('lib.css'))
      .pipe(plugins.minifyCss({compatibility: 'ie8'}))
      .pipe(gulp.dest(config.build));
});

gulp.task('faCSS', function(){
    //concatenate vendor CSS files
    return gulp.src('./bower_components/font-awesome/css/font-awesome.css')
      .pipe(plugins.concat('fa.css'))
      .pipe(plugins.minifyCss({compatibility: 'ie8'}))
      .pipe(gulp.dest(config.build + '/facss'));
});

gulp.task('glyphicons', function(){
  return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css',
    './bower_components/bootstrap/dist/css/bootstrap-theme.css'])
    .pipe(plugins.concat('bootstrap.css'))
     .pipe(plugins.minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build + '/bootstrapcss'));
});

gulp.task('glyphmaps', function(){
  return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap-theme.css.map',
    './bower_components/bootstrap/dist/css/bootstrap.css.map'])
    .pipe(gulp.dest(config.build + '/bootstrapcss'));
});

gulp.task('fonts', function(){
    return gulp.src(['./bower_components/font-awesome/fonts/*', './bower_components/bootstrap/fonts/*'])
      .pipe(gulp.dest(config.build + '/fonts'));
});

gulp.task('copy-favicons', function(){
    return gulp.src(config.src + '/assets/favicons/*')
      .pipe(gulp.dest(config.build));
});

gulp.task('copy-index', function() {
    return gulp.src(config.src + '/index.html')
      .pipe(plugins.minifyHtml())
      .pipe(gulp.dest(config.build));
});

gulp.task('copy-images', function() {
  return gulp.src('./app/assets/images/**')
     .pipe(gulp.dest(config.build + '/images'));
});

gulp.task('watch',function(){
    gulp.watch([
        config.build + '/**/*.html',
        config.build + '/**/*.js',
        config.build + '/**/*.css'
        ], function(event) {
           return gulp.src(event.path)
              .pipe(plugins.connect.reload());
        });

    gulp.watch([config.src + '/**/*.js', '!' + config.src + '/**/*test.js'],['scripts']);
    gulp.watch(['!' + config.src + '/index.html', config.src + '/**/*.html'],['templates']);
    gulp.watch(config.src + '/**/*.css',['css']);
    gulp.watch(config.src + '/assets/images/**',['copy-images']);
    gulp.watch(config.src + '/assets/favicons/**',['copy-favicons']);
    gulp.watch(config.src + '/index.html',['copy-index']);
});

gulp.task('connect', function() {
  plugins.connect.server({
    root: [config.build],
    port: 9000,
    livereload: true
  });
});

gulp.task('deploy', function() {
    return gulp.src(config.build + '/**/*')
      .pipe(plugins.ghPages({
        cacheDir: '.temp'
      }));
});

gulp.task('clean', function(callback) {
    del([config.build, '.temp'], callback);
});

gulp.task('build', ['scripts', 'copy-images', 'templates', 'fonts', 'glyphicons', 'glyphmaps', 'copy-favicons', 'css', 'copy-index', 'faCSS', 'vendorJS', 'vendorCSS']);

gulp.task('cb', function(callback) {
    runSequence('clean', 'build', callback);
});

gulp.task('default', function(callback) {
    runSequence(
      'clean',
      'build',
      ['connect', 'watch'],
      callback
    );
});

gulp.task('doc', function(){
    gulp.src('./app/**/*.js')
        .pipe(plugins.angularArchitectureGraph({
            dest: 'architecture'
        }));
});

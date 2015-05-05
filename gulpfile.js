var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy:false});
var deploy = require('gulp-gh-pages');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var mainBowerFiles = require('main-bower-files');

var config = {
	build: './build'
}

gulp.task('scripts', function(){
    //combine all js files of the app
    gulp.src(['!./app/**/*_test.js','./app/**/*.js'])
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(uglify({mangle: false}))
      .pipe(plugins.concat('app.js'))
      .pipe(gulp.dest(config.build));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
      './app/**/*.html'])
      .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
      .pipe(gulp.dest(config.build));
});

gulp.task('css', function(){
    gulp.src('./app/**/*.css')
      .pipe(minifyCss({compatibility: 'ie8'}))
      .pipe(plugins.concat('app.css'))
      .pipe(gulp.dest(config.build));
});

gulp.task('vendorJS', function() {
    return gulp.src(mainBowerFiles('**/*.js'))
      .pipe(uglify({mangle: false}))
      .pipe(plugins.concat('lib.js'))
      .pipe(gulp.dest(config.build));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    gulp.src(mainBowerFiles([
      '!font-awesome/css/font-awesome.css',
      '!bootstrap/dist/css/bootstrap.css',
      '!bootstrap/dist/css/bootstrap-theme.css',
      '**/*.css']))
      .pipe(plugins.concat('lib.css'))
      .pipe(minifyCss({compatibility: 'ie8'}))
      .pipe(gulp.dest(config.build));
});

gulp.task('faCSS', function(){
    //concatenate vendor CSS files
    gulp.src('./bower_components/font-awesome/css/font-awesome.css')
      .pipe(plugins.concat('fa.css'))
      .pipe(minifyCss({compatibility: 'ie8'}))
      .pipe(gulp.dest(config.build + '/facss'));
});

gulp.task('glyphicons', function(){
  gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css',
    './bower_components/bootstrap/dist/css/bootstrap-theme.css'])
    .pipe(plugins.concat('bootstrap.css'))
     .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.build + '/bootstrapcss'));
});

gulp.task('glyphmaps', function(){
  gulp.src(['./bower_components/bootstrap/dist/css/bootstrap-theme.css.map',
    './bower_components/bootstrap/dist/css/bootstrap.css.map'])
    .pipe(gulp.dest(config.build + '/bootstrapcss'));
});

gulp.task('fonts', function(){
    gulp.src(['./bower_components/font-awesome/fonts/*', './bower_components/bootstrap/fonts/*'])
      .pipe(gulp.dest(config.build + '/fonts'));
});

gulp.task('favicon', function(){
    gulp.src(['./app/assets/images/favicons/*'])
      .pipe(gulp.dest(config.build));
});

gulp.task('copy-index', function() {
    gulp.src('./app/index.html')
      .pipe(gulp.dest(config.build));
});

gulp.task('copy-images', function() {
  gulp.src('./app/assets/images/**')
  .pipe(gulp.dest(config.build + '/images'));
});

gulp.task('watch',function(){
    gulp.watch([
        'build/**/*.html',
        'build/**/*.js',
        'build/**/*.css'
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plugins.connect.reload());
    });

    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.css',['css']);
    gulp.watch('./app/assets/images/**',['copy-images']);
    gulp.watch('./app/index.html',['copy-index']);

});

gulp.task('connect', function() {
  plugins.connect.server({
    root: ['build'],
    port: 9000,
    livereload: true
  });
});

gulp.task('deploy', function() {
    gulp.src(config.build + '/**/*')
      .pipe(deploy({
        cacheDir: '.temp'
      }));
});

gulp.task('build', ['scripts', 'copy-images', 'templates', 'fonts', 'glyphicons', 'glyphmaps', 'favicon', 'css', 'copy-index', 'faCSS', 'vendorJS', 'vendorCSS']);
gulp.task('default', ['connect', 'build', 'watch']);

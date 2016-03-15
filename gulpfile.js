var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');

var browserSync = require('browser-sync').create();

// var lib = require('bower-files')();
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var buildProduction = util.env.prod;

//BASIC GULP TASK
gulp.task('myTask', function(){
	console.log('hello gulp');
})

gulp.task('jshint', function(){
	return gulp.src(['js/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('concatInterface', function(){
	//gulp.src pulls in all source files we want concatenated, it takes an array of file names
	// return gulp.src(['./js/browser.js','./js/signup-interface.js'])
	return gulp.src(['./js/*-interface.js'])
	.pipe(concat('allConcat.js'))
	.pipe(gulp.dest('./tmp'));
});

//'['concatInterface']' represents an array of dependencies, meaning this task will run
// before the jsBrowserify task when the jsBrowserify task is invoked
gulp.task('jsBrowserify', ['concatInterface'], function(){
	//call browserify function, indicate which files we want to browserify by passing in an object
	// 'entries' is the key
	// '['./tmp/allConcat.js']' is the value
	return browserify({ entries: ['./tmp/allConcat.js']})
	//call bundle function on result of browserify
	.bundle()
	//create app.js file
	.pipe(source('app.js'))
	//put the app.js file inside of /build/js
	.pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function(){
	return gulp.src('./build/js/app.js')
	.pipe(uglify())
	.pipe(gulp.dest('./build/js'));
});

gulp.task('clean', function(){
	return del(['build','tmp']);
});

gulp.task('build', ['clean'], function(){
	if(buildProduction){
		gulp.start('minifyScripts');
	} else {
		gulp.start('jsBrowserify');
	}
	gulp.start('bower');
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
});
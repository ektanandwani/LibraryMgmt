var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify    = require('browserify');



// gulp.task('default', function() {
//     gulp.src('views/login/login.component.js')
//     .pipe(babel({
//         presets: ['env']
//     }))
//     .pipe(gulp.dest('build'))
  // place code for your default task here
//   folder = {
//     src: 'src/',
//     build: 'build/'
//   }
//});

//Where files are located
//var jsFiles   = "views/**/*.js";
//var viewFiles   = "views/**/*.html";

gulp.task('compile-es6', function () {
  gulp.src('views/**/*.js')
      .pipe(babel())
  .pipe(gulp.dest('dest'));

  gulp.src('index.js')
  .pipe(babel())
.pipe(gulp.dest('index'));
});

//gulp.watch("src/index.html", ['html']);
//gulp.watch(viewFiles, ['views']);
//gulp.watch(jsFiles, ['browserify']);
// gulp.task('default', function(){
//     return gulp.src(['index.js','views/*.js','views/**/*.js','views/**/**/*.js'])
//       .pipe(babel())
//       .pipe(gulp.dest('dest/'));
//   });

  // gulp.task('browserify', function() {
  //   return gulp.src('index')

  //   .pipe(gulp.dest('build'))

  // });



  gulp.task('browserify', function() {
    return browserify('index.js')
        .transform(babelify, {presets: ["es2015"]})
        .bundle()
        .pipe(gulp.src('index.js'))
        .pipe(gulp.dest('build'));
  });
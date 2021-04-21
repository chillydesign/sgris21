var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
//var browserSync = require('browser-sync');


gulp.task('heya', function (done) {
  console.log('I live! Gulp is alive!');
  done();
});


gulp.task('sass', function (done) {
  return gulp.src('scss/global.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('css'));
  done();

});


// gulp.task('compress', function() {
//   gulp.src('js/*.js')
//     .pipe(minify({
//         ext:{
//             src:'-debug.js',
//             min:'.js'
//         },
//         exclude: ['tasks'],
//         ignoreFiles: ['.combo.js', '-min.js' , 'jquery.js' , '.min.js' ]
//     }))
//     .pipe(gulp.dest('js/min'))
// });







gulp.task('watch', function () {
  watch('scss/*.scss', gulp.series('sass'));
});




// Run all Gulp tasks and serve application
gulp.task('default', gulp.series('sass', 'watch'), function () {
  // sass function now incldes the watching of files

});

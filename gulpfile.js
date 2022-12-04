
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// a function to compile SASS into CSS.
function buildStyles() {
  // the source file (i.e. "index.scss") will be piped/compiled to the destination folder (i.e. "css") which will contain the css file compiled.
  return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

// function to watch the source SASS file (i.e. "index.scss").
function watchTask() {
  watch( ['index.scss'], buildStyles ); // whenever there's a change in the "index.scss" file, run the "buildStyles" function.
}

exports.default = series( buildStyles , watchTask );

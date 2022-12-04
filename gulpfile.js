
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  /*
  asterics (i.e. "*") means look for any file with ".scss" extention and compile; multiple SASS files will be compiled.
  "agoSASS/ ** /*" : this path means find any SASS file, or any subfolder with a SASS file inside the "agoSASS" folder and compile. "**" means subfolder.
  */
  return src('agoSASS/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

function watchTask() {
  // the asterics (i.e. "*") means this function will watch multiple SASS files.
  watch( ['agoSASS/**/*.scss'], buildStyles ); // to watch any/all SASS files inside the "agoSASS" folder.
}

exports.default = series( buildStyles , watchTask );
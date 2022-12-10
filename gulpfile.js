
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("agoSASS/**/*.scss")
    .pipe( sass() )
    .pipe( purgecss({ content: ["*.html"] }) ) // to look into all(*) files with a ".html" extension to determine css rules that are used and unused.
    .pipe(dest("css"));
}

function watchTask() {
  watch( [ "agoSASS/**/*.scss", "*.html" ], buildStyles );
}

exports.default = series( buildStyles , watchTask );

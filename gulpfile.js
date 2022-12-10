
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  // path to build the "index.scss" file inside "custOwnSASS" folder instead of the one inside "agoSASS".
  return src("custOwnSASS/**/*.scss")
    .pipe( sass() )
    .pipe( purgecss({ content: ["*.html"] }) ) // to look into all(*) files with a ".html" extension to determine css rules that are used and unused.
    .pipe(dest("css"));
}

function watchTask() {
  // path to watch the "index.scss" file inside "custOwnSASS" folder instead of the one inside "agoSASS".
  watch( [ "custOwnSASS/**/*.scss", "*.html" ], buildStyles );
}

exports.default = series( buildStyles , watchTask );
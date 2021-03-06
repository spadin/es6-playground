var gulp    = require('gulp');
var traceur = require('gulp-traceur');

var paths = {
  src:  'src/**/*.js',
  dest: 'public/javascript'
};

gulp.task('default', function() {
  return gulp.src(paths.src)
             .pipe(traceur({sourceMap: true, modules: 'inline'}))
             .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['default']);
});

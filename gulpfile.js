var gulp = require('gulp');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
 
var files = "./js/*.js";
 
gulp.task('lint', function() {
 
	return gulp.src(files)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('clean', function(){
	return gulp.src('./dist/')
	.pipe(clean());
})
 
gulp.task('dist', function() {
 
	return gulp.src("js/main.js")
	.pipe(rename('dist.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist'));
});
 
gulp.task('default', function(cb) {
 
	return runSequence('lint', 'clean', 'dist', cb);

});
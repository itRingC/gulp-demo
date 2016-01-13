var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	del = require('del');

gulp.task('concat',function(){
	return gulp.src('src/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('tmp'));
});
gulp.task('uglify',['concat'],function(){
	return gulp.src('tmp/all.js')
	.pipe(uglify())
	.pipe(rename('all.min.js'))
	.pipe(gulp.dest('dest'));
});

gulp.task('del',['uglify'],function(){
	del('tmp');
});


gulp.task('default',['concat','uglify','del']);




'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('compile-scss', function () {
    gulp.watch('*.scss', function(){
        console.log("compiling scss...");
        return gulp.src('*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
    });
});
var gulp = require('gulp');

var ts = require('gulp-typescript');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');
var tsProject = ts.createProject('./tsconfig.json');

gulp.task('compile', function() {    
    var stream = gulp.src(['./src/**/*.ts'],{ base: './src' })
    .pipe(tsProject())
	.pipe(gulp.dest('./test'));
    return stream;
});

gulp.task('test', function() {    
    var stream = gulp.src(['./test/**/*.test.js'],{ base: '.' })
    .pipe(mocha({
        reporter: 'spec'
    }));
    return stream;
});


// gulp.series는 컴파일과 test 태스크를 순차적으로 실행한다.
// gulp.parallel는 병렬로 실행
/* 
    컴파일 작업과 test 작업이 순차적으로 실행되지 않는다면 
    최초 test 태스크를 수행할 때는 컴파일된 파일이 없으므로 
    test 태스크가 제대로 동작하지 않는다.
*/
gulp.task('default', gulp.series("compile","test"));
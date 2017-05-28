var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    connect = require('gulp-connect');

gulp.task('sass', function() {
    gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
})
gulp.task('connect', function() {
    connect.server({
        host: 'localhost', //地址，可不写，不写的话，默认localhost
        port: 3000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass', 'html']); //监控css文件
}); //执行gulp server开启服务器

gulp.task('server', ['connect', 'watch', 'sass']);
let gulp = require('gulp'),
    browserify = require('browserify'),
    connect = require('gulp-connect'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require('gulp-rename');

const vendors = [
    'angular',
    'jquery'
];

gulp.task('build:vendor', () => {
    const b = browserify({
        debug: false
    });
    vendors.forEach(lib => {
        b.require(lib);
    });
    b.bundle()
        .pipe(source('vendor.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('compress:vendor', ['build:vendor'], (cb) => {
    pump([
        gulp.src('./public/js/vendor.js'),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('./public/js/')
    ],
        cb
    );
});

gulp.task('build:app', function () {
    return browserify({ entries: ['./build/app.js'] })
        .external(vendors)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(connect.reload());
});

gulp.task('compress:app', ['build:app'], (cb) => {
    pump([
        gulp.src('./public/js/app.js'),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('./public/js/')
    ],
        cb
    )
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        root: ['./public'],
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./public/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./public/**/*.html'], ['html']);
    gulp.watch(['./build/**/*.js'], ['compress:app']);
});

gulp.task('default', [
    'compress:vendor',
    'compress:app',
    'connect',
    'watch'
]);
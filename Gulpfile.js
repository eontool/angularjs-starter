let gulp = require('gulp'),
    browserify = require('browserify'),
    cleanCSS = require('gulp-clean-css'),
    concatCSS = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    babelify = require('babelify');

//vendor libraries
const vendors = [
    'jquery',
    'angular',
    'angular-ui-router'
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

//main App
gulp.task('build:app', function () {
    return browserify({ entries: ['./build/app.js'] })
        .transform("babelify", { presets: ["es2015"] })
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

//templates and layouts
gulp.task('build:views', function () {
    return gulp.src('source/views/**/*.html')
        .pipe(templateCache({
            module: 'Templates',
            standalone: true,
            moduleSystem: 'IIFE',
        }))
        .pipe(gulp.dest('./build/views/'))
        .pipe(gulp.dest('./public/js/'));
});

//utility libraries
gulp.task('build:utilities', function () {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/spin/dist/spin.js'
    ])
        .pipe(concat('utilities.js'))
        .pipe(gulp.dest('./public/js/'));
});

//all css
gulp.task('concat-css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ])
        .pipe(concatCSS('vendor.css'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('minify-css', ['concat-css'], function () {
    return gulp.src([
        './public/css/vendor.css'
    ])
        .pipe(cleanCSS({ debug: true }, (details) => {
            console.log(details.name, ':', details.stats.originalSize);
            console.log(details.name, ':', details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./public/css/'));
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
    'build:utilities',
    'build:views',
    'minify-css',
    'connect',
    'watch'
]);
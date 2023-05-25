const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber =require('gulp-plumber'); 

function css (done){
    src('src/scss/**/*.scss') // identificar el arhcivo Sass
    .pipe(plumber())
    .pipe(sass()) // compilarlo
    .pipe(dest('build/css')); //almacenerla en el disco duro

    done();// Caback que avisa a gulp cuando llegamoas al final
}

function dev(done) {
    watch('src/scss/**/*.scss',css)

    done()
}
exports.css = css;
exports.dev = dev;


//npm run o npx gulp
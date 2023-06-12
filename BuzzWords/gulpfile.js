const { src, dest, watch, series } = require('gulp')
const through = require('through2')
const concat = require('gulp-concat')

const FILE_PATHS = {
	html: [
		'./src/htmlitems/*.html'
	]
}

// function compilecss() {
// 	return src(FILE_PATHS.css).pipe(minify()).pipe(concat('main.min.css')).pipe(dest('./src/public/css'))
// }

// function compilejs() {
// 	return src(FILE_PATHS.js).pipe(concat('herptiles.min.js'))/*.pipe(uglify())*/.pipe(dest('./src/public/js'))
// }

function createJSON() {
    console.log(FILE_PATHS.html)
    let counter = 1;
    return src(FILE_PATHS.html).pipe(
        through.obj((file, enc, cb) => {
            const html = file.contents.toString()
            console.log(html)
            const transformed = transformJson(html, 'NAMEGIT', counter)
            const stringified = JSON.stringify(transformed, null, 2)
            file.contents = Buffer.from(stringified)
            counter++
            cb(null, file)
        })
    ).pipe((items) => { console.log(items)}).pipe(concat('dataitems.json')).pipe(dest('./src/'))
}

function transformJson(html, name, index) {
    return {
        id: index,
        name: name,
        html: html,
    }
}


function watchTask() {
	// watch(FILE_PATHS.css, compilecss)
	// watch(FILE_PATHS.js, compilejs)
    watch(FILE_PATHS.html, createJSON)
}

exports.default = series(createJSON, watchTask)

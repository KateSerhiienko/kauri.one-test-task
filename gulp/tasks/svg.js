import svgSprite from "gulp-svg-sprite";

export const svg = () => {
  return app.gulp.src(app.path.src.svg)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>"
      })
    )).pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg",
          example: false
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.build.svg));
}
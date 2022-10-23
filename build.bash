! test -d "dist" && mkdir dist

cp "public/index.html" "dist"
cp "public/styles.css" "dist"

webpack --watch
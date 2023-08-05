echo "building..."
! test -d "dist" && mkdir dist

echo "dist directory exists. copying html and css"

cp "public/index.html" "dist"
cp "public/styles.css" "dist"
cp -r "public/images" "dist"
echo "html and css successfully copied." 

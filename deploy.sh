echo ">> Start"

git config core.autocrlf true

git add .
git commit -am "$1"
git push heroku master

heroku open

echo ">> End"
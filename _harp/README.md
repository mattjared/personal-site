Start server and run site locally.

```
cd in/to/directory/_harp
harp server
```
Compile, commit and deploy to gh-pages

```
cd in/to/directory
harp compile _harp ./
git add . && git commit -m "message" && git push origin master
git checkout gh-pages && git pull origin master && git push origin gh-pages && git checkout master
```


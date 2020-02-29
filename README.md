# Concept
- Create interactive components in javascript
- Save them for use in hugo
- Specify specific layout in hugo to be fully spa (localhost:8080/posts/editor.html)

# Try it

- Install and run dev environment
```
cd js
npm install
npm run dev-all
```

- Open in browser
```
http://localhost:1313/posts/editor.html
```

- Open js/login_header/src/login_header.js
- Edit it, hit save.
- Look at the browser

# Editor.html
- Specific content type with type and layout set, to get a very different look and feel.


# Development

```
cd js
npm run dev-all
```

# Build static files
```
cd js
npm build
```


# View output
Run public directory with nginx via docker
```
docker run --name lal-sample \
-p 8080:80 \
-v $PWD/hugo/public:/usr/share/nginx/html:ro \
-P -d nginx:1.17-alpine
```

Remove container
```
docker container rm --force lal-sample
```


# Reference
- https://gohugo.io/
- [organization of content by type and layout](https://gohugo.io/content-management/organization/#type)
- https://rollupjs.org/

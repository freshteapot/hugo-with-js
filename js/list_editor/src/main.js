export default (function () {
    console.log("Hello  Chris.");
    import('./foo.js').then(({ default: foo }) => console.log(foo));
})()

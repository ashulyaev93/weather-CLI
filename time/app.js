const start = performance.now();
setTimeout(() => {
    console.log(performance.now() - start)
    console.log('Two seconds');
}, 2000)
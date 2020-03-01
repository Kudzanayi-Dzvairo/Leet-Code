//Promisify turns a callback accepting function into a promise accepting one 

function loadScript(src, callback) {
    let script = document.createElememt('script')
    script.src = src 

    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`Mutombo for ${src}`))

    document.head.append(script)
}

let loadScriptPromise = functio(src {
    retunr newPromise((resolve, reject) => {
        loadSrcipt(src, (err, script) => {
            if(err) reject(err)
            else resolve(script)
        })
    })
})
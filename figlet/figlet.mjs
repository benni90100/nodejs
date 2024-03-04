import figlet from "figlet"

figlet('Hello Word' , function (err, data) {
    if (err) {
        console.log("qualcosa non ha funzionato")
        console.dir(err)
        return
    }
    console.log(data)
})
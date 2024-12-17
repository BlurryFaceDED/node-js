const ps=require ("generate-password")
const generator = ()=>{
    const password = ps.generate({
        legnth:8,numbers:true,lowercase:true,uppercase:true
    })
    console.log(password)
}
generator()
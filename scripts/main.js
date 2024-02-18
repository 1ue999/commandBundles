Events.on(openConsole,(router)=>{
function router(e){Http.get("https://raw.githubusercontent.com/1ue999/cmdBundles/main/"+e+".js",(res)=>{eval(res.getResultAsString());})};
});

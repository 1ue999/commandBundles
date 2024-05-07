Events.run(Trigger.newGame,()=>{
  Http.get("https://raw.githubusercontent.com/1ue999/cmdBundles/main/init.js",(res)=>{eval(res.getResultAsString());});
});
this.router=function(routerrouterrouter){Http.get("https://raw.githubusercontent.com/1ue999/cmdBundles/main/"+routerrouterrouter+".js",(res)=>{eval(res.getResultAsString());})};
this.locks=function(thing){Object.keys(thing).forEach(q=>print(q));};
print('commandBundles is initialised.');

export const createSession = function(request,response){
    console.log(request.body);
    console.log("investor Signed In");
    
    response.json({
        status: "ok"
    })
}
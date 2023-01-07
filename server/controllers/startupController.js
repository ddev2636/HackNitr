export const createSession = function(request,response){
    console.log(request.body);
    console.log("startup Signed In");
    
    response.json({
        status: "ok"
    })
}
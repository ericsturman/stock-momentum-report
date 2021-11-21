exports.handler = function(event, context) {
    console.log("REQUEST RECEIVED:\n" + JSON.stringify(event))    
    console.log("CONTEXT:  " + JSON.stringify(context))
}
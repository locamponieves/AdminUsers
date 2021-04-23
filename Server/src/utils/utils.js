exports.validarEmail = function(email){
    var re  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    var val = re.test(String(email).toLowerCase())
    
    return val
}

exports.validarNumber = function(number){
    var re  = /^[0-9]{0,}$/
    
    var val = re.test(String(number).toLowerCase())
    
    return val
}
var objectMapper = require('object-mapper');

var mapUserState = (_user)=>{
   return objectMapper(_user,map)
}
var map = {
    "email":"email",
    "firstName":"firstName",
    "lastName":"lastName",
    "isAdmin":"isAdmin",
}

export default mapUserState;
Manshour Danesh front

## 6/11

Register Page => {
{
url : '/api/auth/register-start'
parameters : {
phone_number : String,
reference_phone_number : String //Optional
}
},
{
url : '/api/auth/register-complete'
parameters : {
code : String
}
}

}

Login Page => {

{
url : '/api/auth/login-start'
parameters : {
phone_number : String,
}
},
{
url : '/api/auth/login-complete'
parameters : {
code : String
}
}

}

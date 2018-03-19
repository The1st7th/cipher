var user = prompt("Enter a sentence.")
console.log(user);

var firstcharacter = user.charAt(0).toUpperCase();
var lastcharacter = user.charAt(user.length-1).toUpperCase();

var change = function(string){
var newstr;
newstr = string.replace(user.charAt(0), firstcharacter);
newstr = newstr.replace(user.charAt(user.length-1), lastcharacter);
console.log(newstr);
return;
}
change(user);
var reverse = function(string){
var newstr;
newstr = string.replace(user.charAt(0), lastcharacter);
newstr = newstr.replace(user.charAt(user.length-1), firstcharacter);
console.log(newstr);
return;
}
reverse(user);

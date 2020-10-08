function tinyFriend(name){
var smaller = name[0];
for(var i=0; i<name.length; i++){
    var element = name[i];
    if(element<smaller){
        smaller=element;
    }
}
return smaller;
}
var output = tinyFriend(["karim","hasibul","rahmat"]);
console.log("small friend :");

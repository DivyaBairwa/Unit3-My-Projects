var string1="abc";
var string2="aabbc";
var obj1={}
var obj2={}
for(var i=0; i<string1.length; i++){
    if(obj1[string1[i]]==undefined){
        obj1[string1[i]]=1
    }
    else{
        obj1[string1[i]]++;
    }
    

}
console.log(obj1);
for(var i=0; i<string2.length; i++){
    if(obj2[string2[i]]==undefined){
        obj2[string2[i]]=1
    }
    else{
        obj2[string2[i]]++;
    }
    

} 
console.log(obj2);
var flag=true;
for( key in obj2)
{
    console.log(key,obj2[key], obj1[key]);
    if(obj1[key]){
        if(obj2[key]>obj1[key]){
            flag=false;
            break;
        }
        
    }
   
}
if(flag==true){
    console.log("yes");
}
else{
    console.log("no");
}

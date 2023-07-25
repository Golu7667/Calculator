let iny=document.getElementById("in")
let result=""
iny.value=0
let flag=1
let symbol=""
let i=0;
function call(val){
    if(val!='=' && val!='D'){
           let n=result.length;
            if(n==0 && val!='*' && val!='-' && val!='+' && val!='/' && val!='='){
                result+=val
                iny.value=result
                console.log(result[0])
            }
            else if(n!==0){
                let k=result.length-1;
                console.log(k)
                if(val=='*' || val=='-' || val=='+'|| val=='/' ){
                    if(result[k]=='*' || result[k]=='-' || result[k]=='+' || result[k]=='/'){
                         result= result.replace(result[k],val)
                          iny.value=result
                         // console.log(result)
                    }
                    else{
                        result+=val
                        iny.value=result
                    }
                }    
                else {
                          
                    result+=val
                    iny.value=result
                    //console.log(result)
                    //console.log("goal")
                }
                
                
            }

        
    }
    else if(val==='=' && result.length!=0){
        iny.value=eval(result)
    }
   else if(val==='D'){
        result=""
        iny.value=0
    }

    
}


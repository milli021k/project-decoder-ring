function caesar(input, shift, encode = true) {
    
    if(shift===0 || shift >25 || shift <-25)
       {
           return false;
       }
    let                      inputString = input.toLowerCase();
    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let message ="";
    for(let i=0;i<inputString.length;i++)
    {
        let currentCarracter =inputString[i];
        let newValueIndex;
        // checks if current character is not a letter in alphabet
        if(!(/[a-zA-Z]/).test(currentCarracter))
        {        
           message=message+currentCarracter;
        }
   
        else  
        {// adds and do encoding of messgae if endcoe is true;
            if(encode === true)
            {
              newValueIndex = shift+alphabets.indexOf(currentCarracter);
            }
            // subtract and do decoding if encode input is false; 
            else {
              newValueIndex = alphabets.indexOf(currentCarracter)-shift;
            }
           if(newValueIndex>25)
           {
              newValueIndex = newValueIndex-26;
              message=message+alphabets[newValueIndex];
           }
           else if(newValueIndex<0)
           {
              newValueIndex = newValueIndex+26;
              message=message+alphabets[newValueIndex];
           }
           else{
              message=message+alphabets[newValueIndex];
           }
           
        }
    }
   
    return message;
   }

   module.exports = caesar;
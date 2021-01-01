function substitution(input, alphabet, encode = true) { 
    let inputString =input.toLowerCase();
    let answer ="";
    let orderdAplhabet = "abcdefghijklmnopqrstuvwxyz"
    
    if (encode!=false)
      {
       answer = encoder(inputString,alphabet,orderdAplhabet);
      }
     
     else
      {
       answer = decoder(inputString,alphabet,orderdAplhabet);
      }
     
    return answer;
     
   }
   
   // decoder
   function decoder(inputString,alphabet,orderdAplhabet)
   {
     
     let result ="";
     for(let i=0;i<inputString.length;i++)
       {
         for(let j=0;j<alphabet.length;j++)
           {
             if(inputString[i]===alphabet[j])
               {
                 result =result+orderdAplhabet[j];
               }
           }
       }
     
     return result;
   }
   
   
   // encode function 
   function encoder(inputString,alphabet,orderdAplhabet)
   {
     let result ="";
     for(let i=0;i<inputString.length;i++)
       {
         for(let j=0;j<orderdAplhabet.length;j++)
           {
             if(inputString[i]===orderdAplhabet[j])
               {
                 result =result+alphabet[j];
               }
           }
       }
     
     return result;
   }
   
   module.exports = substitution;
   
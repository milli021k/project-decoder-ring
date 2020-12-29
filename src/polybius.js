function polybius(input, encode = true) {
    let answer ="";
     if (encode!=false)
      {
       answer = encoder(input);
      }
     else
      {
       answer = decode(input);
      }
    return answer;
     
   }
     
   // custom helper function 
   function encoder(input){
   
   let result="";
   let grid = [
             ['#','#','#','#','#','#'],
             ['#','a', 'b','c','d','e'],
             ['#','f','g','h','i/j','k' ],
             ['#','l','m','n','o','p'],
             ['#','q','r','s','t','u',],
             ['#','v','w','x','y','z']
         ];
   
       let inputString =input.toLowerCase();   
      for(let i=0 ; i<inputString.length;i++)
      {
       let letter = inputString[i];
       if(letter==='i'||letter==='j')
         {
           letter ='i/j';  
         }
         if(letter===' ')
         {
           result = result+letter;
           continue;
         }
   
      for(let row=0;row<grid.length;row++){
       for(let column =0;column<6;column++)
        {
       
         if(grid[row][column]===letter)
          {
           result=result+column;
           result=result+row;
         }
       }
   
      }
    }
   return result;
   
   }
   
module.exports = polybius;

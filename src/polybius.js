function polybius(input, encode = true) {
    let inputString =input.toLowerCase();    
    let answer ="";
    let grid = [
     ['#','#','#','#','#','#'],
     ['#','a', 'b','c','d','e'],
     ['#','f','g','h','(i/j)','k' ],
     ['#','l','m','n','o','p'],
     ['#','q','r','s','t','u',],
     ['#','v','w','x','y','z']
   ];
   
    if (encode!=false)
      {
       answer = encoder(inputString,grid);
      }
     else
      {
       answer = decoder(inputString,grid);
      }
    return answer;
     
   }
     
   // custom helper function 
   function encoder(inputString,grid){
   
   let result="";
      for(let i=0 ; i<inputString.length;i++)
      {
       let letter = inputString[i];
       if(letter==='i'||letter==='j')
         {
           letter ='(i/j)';  
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
   
   
   // function to decode a number to string 
   
   function decoder(inputString,grid){
   
   let processedString = inputString.split(" ");
   let removedSpaces =processedString.join('');
   if((removedSpaces.length%2)!=0)
   {
     return false;
   }
   let result ="";
     
   for(let i=0 ; i<inputString.length;i=i+2)
   {
    let letterCoordinate = inputString[i]+inputString[i+1];
   
    if(letterCoordinate[0]===' ')
      { i =i-1;
        result = result+letterCoordinate[0];
        continue;
      }
   
   for(let row=0;row<grid.length;row++){
    for(let column =0;column<6;column++)
     {
     if(row===parseInt(letterCoordinate[0])&&column===parseInt(letterCoordinate[1]))
       {
        result=result+grid[column][row];
      }
    }
   }
   }
     return result;
   }
   module.exports = polybius;
   
function polybius(input, encode = true) {
  let answer ="";
  let grid = [
   ['#','#','#','#','#','#'],
   ['#','a', 'b','c','d','e'],
   ['#','f','g','h','i/j','k' ],
   ['#','l','m','n','o','p'],
   ['#','q','r','s','t','u',],
   ['#','v','w','x','y','z']
 ];
 
  if (encode!=false)
    {
     answer = encoder(input,grid);
    }
   else
    {
     answer = decoder(input,grid);
    }
  return answer;
   
 }
   
 // custom helper function 
 function encoder(input,grid){
 
 let result="";
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
 
 
 // function to decode a number to string 
 
 function decoder(input,grid){
 let result ="";
 let controler=0;
 for(let i=0 ; i<input.length;i=i+2)
 {
  let letterCoordinate = input[i]+input[i+1];
   
 
  if(letterCoordinate[i]===' ')
    {controler =controler-1;
      result = result+letterCoordinate;
      continue;
    }
 
 for(let row=0;row<grid.length;row++){
  for(let column =0;column<6;column++)
   {
   if(row===parseInt(letterCoordinate[0])&&column===parseInt(letterCoordinate[1]))
     {
      result=result+grid[row][column];
    }
  }
 
 }
 }
   return result;
 }
 
   
module.exports = polybius;

function polybius(input, encode = true) {

if (endcode===true)
{
    encode(input);
}
else
decode(input);
}




const encode = (input)=>{
let result="";
let allSmallInput = input.toLowwerCase();
let grid = [
        ['a', 'b','c','d','e'],
        ['f','g','h','i/j','k' ],
        ['l','m','n','o','p'],
        ['q','r','s','t','u',],
        ['v','w','x','y','z']
    ];
grid.forEach(row=>{
  row.forEach(column=>{
      
if(column === 'a')
{const rowIndex = row.indexOf('a');
const ColumnIndex = column.indexOf('a');
    result= result+column;
    result= result+row;
}
  });
    });


}




module.exports = polybius;

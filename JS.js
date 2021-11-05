// 1 задание
/*
let arr = [], i;
let min=0;
let max=10;
let size =20;
for ( i=0; i<size;i++){
    arr[i]=Math.floor(Math.random() * (max-min + 1 ) + min);
}
for (i=0;i<size;i++){
    document.write(arr[i]);
    if (i!=size-1){
        document.write(";");
    }
}
*/

// 2 задание
/*
max = 100;
min = 0;

let k = Math.floor(Math.random()* (max - min + 1)+ min);

let p = parseInt( prompt("Введите число"));


 while( p != k){
    if (p < k){
        p = parseInt( prompt("Мало взял"));
    }
    else{
         p = parseInt( prompt("Много взял"));
    }
 }
 document.write("Да, ты угадал! Загаданным число было " + k)
 */

 //3 задание
 /*
 var string = "Егор - покоритель гор";
let k=0;
 for (let i = 0; i< string.length; i++){
     if (string[i] == "о"){
         k=i;
         if(k!=0){
             document.write(string[k].bold().fontcolor("red"));
             k=0;
             i++;
         }
     }
     document.write(string[i]);

 }
*/

//4 задание

var columns = 6;
var rows    = 6;

var table = document.createElement('table');
var tbody = document.createElement('tbody');

for (var i = 0; i < rows; i++){
  var row = document.createElement('tr');

  for (var j = 0; j < columns; j++){
    var column = document.createElement('td');
    var text = document.createTextNode('text');
    column.appendChild(text);
    row.appendChild(column);
  }

  tbody.appendChild(row);
}

table.appendChild(tbody);

document.body.appendChild(table);
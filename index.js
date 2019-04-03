// add solution here
function theBeatlesPlay(musicians, instruments){
  var list = [];
  
  for(i = 0; i < musicians.length; i++){
    list.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  console.log(list);
  return list;
}


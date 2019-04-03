// add solution here
function theBeatlesPlay(musicians, instruments){
  var list = [];
  
  for(i = 0; i < musicians.length; i++){
    list.push(`${musicians[i+1]} plays ${instruments[i+1]}`)
  }
  return list;
}


var render = function(){
  searchingTypes();
}

var showNoms = function() {
  for (var i=0; i<db.length; i++)
    $(".restos").append($("<div>"+db[i].name+"</div>"));

}


// Cherche les types de tous les restaurants qui apparaissent dans le SEARCH
var tableauTypes = []
var searchingTypes = function() {
  for (var i=0; i<db.length; i++){
    for (var j=0; j<db[i].types.length; j++){
    if (tableauTypes.indexOf(db[i].types[j]) === -1) {
      tableauTypes.push(db[i].types[j]);
    }
    }
  }
  for (var k=0; k<tableauTypes.length; k++)
    $(".searchtypes").append($('<p><label> <input id="'+tableauTypes[k]+'" type="checkbox" name="types" value="'+tableauTypes[k]+'"> '+tableauTypes[k]+' </label></p>'));
}

  var restosAvecTypes = []
// Trouve les restaurants avec les types selectiones a l'aide de checkboxes a l'interieur du SEARCH
var refreshSearch = function() {
  $(".restos").empty();
  var typesChecked = []
//var restosAvecTypes = []

// RECHERCHE PAR TYPE
  for (var x=0; x<tableauTypes.length; x++){
    if (document.getElementById(tableauTypes[x]).checked){
      typesChecked.push(tableauTypes[x]);
    }
  }
  if (typesChecked.length===0){
    for ()
  }
  for (var i=0; i<db.length; i++){
        var typeEstPresent = function(){
          for (var r=0; r<typesChecked.length; r++){      //Determine si tous les types checker sont presents
            if (db[i].types.indexOf(typesChecked[r]) === -1){
              return false;
              break;
            }
            if (r === typesChecked.length-1){
              return true;
            }
          }
        }
        if (typeEstPresent()){
          restosAvecTypes.push(db[i]);
        }
  }

  // RECHERCHE PAR HEURE SOUHAITEE






}

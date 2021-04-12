var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjQxNjE3NjYxN15BMl5BanBnXkFtZTgwMTk2NDQ3NjM@._V1_UY268_CR3,0,182,268_AL_.jpg"]

var filme = parseInt(prompt("Digite seu filme favorito: 1 - Harry Potter/ 2 - Mágico de Oz/ 3 - Mary Poppins"))

for (var i = 0; i < listaFilmes.length; i++){
  if (filme == 1){
    document.write("<img src=" + listaFilmes[0] + ">")
    break
  }else if (filme == 2){
    document.write("<img src=" + listaFilmes[1] + ">")
    break
  }else if (filme == 3){
    document.write("<img src=" + listaFilmes[2] + ">")
    break
  } 
  else{
    alert("Filme inexistente!")
    
    for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">")
      
   }
break
}
}
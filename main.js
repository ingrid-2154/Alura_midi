function tocaSom (idElementoaudio) {
   document.querySelector(idElementoaudio).play(); 
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9){

   const tecla = ListaDeTeclas[contador];

   const instrumento = tecla.classList[1];

   const idAudio = `#som_${instrumento}`
   
   ListaDeTeclas[contador].onclick = () => {
      tocaSom(idAudio);
   }

   contador = contador + 1;

   
}



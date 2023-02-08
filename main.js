function tocaSom (idElementoaudio) {
   document.querySelector(idElementoaudio).play(); 
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador<ListaDeTeclas.length; contador++) {

   const tecla = ListaDeTeclas[contador];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`;
   
   ListaDeTeclas[contador].onclick = () => {
      tocaSom(idAudio);
   }

}



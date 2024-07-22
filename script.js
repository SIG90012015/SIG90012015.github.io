
function verificarValor(){   
    const opciones=document.querySelector("#Clinicas"); 
    const boton=document.querySelector("#operar");
    const Opciones_misional=document.querySelector("#OpcionM");
    boton.addEventListener('click', () => {
        valor=opciones.value;
        console.log(valor)
        if(valor==1){
            document.querySelector("#mensaje").textContent="funciono"
            document.querySelector("#ProdimientoEst").href="https://drive.google.com/drive/folders/1fShp0MmXxkLyucfATQKGfce-MHA3BUUQ?usp=drive_link"



        }else{
             document.querySelector("#mensaje").textContent="No funciono"
        }
    });
}




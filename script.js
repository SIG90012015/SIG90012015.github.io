function verificarValor(){   
    const opcionesClinicas=document.querySelector("#Clinicas");
    const documentosEste=document.querySelector("#EstrategicoProces");
    const documentosApoy=document.querySelector("#EstrategicoApoy");
    const boton=document.querySelector("#operar");
    const Opciones_misional=document.querySelector("#OpcionM");
    boton.addEventListener('click', () => {
        const valor=opcionesClinicas.value;
        const datosEst=documentosEste.value;
        const datosApy=documentosApoy.value;
        console.log(valor)
        if(valor==1){
            //documentos estrategicos
            document.querySelector("#mensaje").textContent="Proceso encontrado"
            if(datosEst==1){
                document.querySelector("#ProcedimientoEst").href="";
                document.querySelector("#CaracterizacionEst").href="";
                document.querySelector("#IndicadoresEst").href="";
                document.querySelector("#RiesgoEst").href="";
                document.querySelector("#ManualesEst").href="";
                document.querySelector("#flujogramaEst").href="";
                document.querySelector("#FormatosEst").href="";
            }
            if(datosEst==2){
                document.querySelector("#ProcedimientoEst").href="https://drive.google.com/drive/folders/1NWW1kzlis3bNl-MD8C4Za2q33zksotRU?usp=drive_link";
                document.querySelector("#CaracterizacionEst").href="https://drive.google.com/drive/folders/1R_oKse_Luq67gpcaKoKWFrqU-h7NwxLW?usp=drive_link";
                document.querySelector("#IndicadoresEst").href="https://drive.google.com/drive/folders/1Hly1fCi0y7S7rBBPTAthlZ5LpUQns3nS?usp=drive_link";
                document.querySelector("#RiesgoEst").href="https://drive.google.com/drive/folders/1_EMZkiE3DeIf6wfGvz7P54VrZswJNie7?usp=drive_link";
                document.querySelector("#ManualesEst").href="https://drive.google.com/drive/folders/1nQKGkfZXIk7TTMH-pu7dGxYj4pQ56ah6?usp=drive_link";
                document.querySelector("#FlujogramaEst").href="https://drive.google.com/drive/folders/1KxWG0QJ_icRbnWoiDjJOmMEkELFSyh7N?usp=drive_link";
                document.querySelector("#FormatosEst").href="https://drive.google.com/drive/folders/1U_xv6vhWQAk5eslhSRnQoPgdKtjlEiEA?usp=drive_link";
            }
            if(datosEst==3){
                document.querySelector("#ProcedimientoEst").href="https://drive.google.com/drive/folders/17K4tkZ9cn6xedFWDstbr4zKA55NtsT9b?usp=drive_link";
                document.querySelector("#CaracterizacionEst").href="https://drive.google.com/drive/folders/1nf5zRgfWqu8gUyX88sEGfxDgbWJoqZ7m?usp=drive_link";
                document.querySelector("#IndicadoresEst").href="https://drive.google.com/drive/folders/1H40rCoqptssPev9UucsXLg8WxFKI9Bgd?usp=drive_link";
                document.querySelector("#RiesgoEst").href="https://drive.google.com/drive/folders/1eDvB5bZVTC7GTy7yFpQ6dTBt5zv6sffK?usp=drive_link";
                document.querySelector("#ManualesEst").href="https://drive.google.com/drive/folders/1qTe44phrh9eFur5f5rrl0KtUh425W5qV?usp=drive_link";
                document.querySelector("#FlujogramaEst").href="https://drive.google.com/drive/folders/1_raqKUGshHxh3yhpRZ_jYgsFRsX-Y7fM?usp=drive_link";
                document.querySelector("#FormatosEst").href="https://drive.google.com/drive/folders/1rlBcfc2G7FE1gqGn9SnA3INpk6lATh40?usp=drive_link";
            }
            //document.querySelector("#mensaje").textContent="funciono"
            //document.querySelector("#ProcedimientoEst").href="https://drive.google.com/drive/folders/1fShp0MmXxkLyucfATQKGfce-MHA3BUUQ?usp=drive_link"

            //documentos de apoyo
            if(datosApy==4){
                document.querySelector("#ProcedimientoApy").href="https://drive.google.com/drive/folders/1HOCOlsCeSdQ3Inv0Y08a3G-1pYF8qaGW?usp=drive_link";
                document.querySelector("#CaracterizacionApy").href="https://drive.google.com/drive/folders/1qtU5JK1ebUpD75HeOzhPRLwCvslIMYbn?usp=drive_link";
                document.querySelector("#IndicadoresApy").href="https://drive.google.com/drive/folders/1bkQ8Y9MkMrdBi9ugxdcqtApyW3yr-GqF?usp=drive_link";
                document.querySelector("#RiesgoApy").href="https://drive.google.com/drive/folders/1xegmlFWotltlkEoQKkqJ2ow_hwGxcnnf?usp=drive_link";
                document.querySelector("#ManualesApy").href="https://drive.google.com/drive/folders/1z9kKZHB9SDUHkz2lJb-_rwciKaEZ_TsJ?usp=drive_link";
                document.querySelector("#FlujogramaApy").href="https://drive.google.com/drive/folders/1DMO8ahXORKYT2r96kaGTTN8vt0rJ_dTJ?usp=drive_link";
                document.querySelector("#FormatosApy").href="https://drive.google.com/drive/folders/1tc7Wt26kEEy9q7IbwJ-pcKL6iBjGNvtn?usp=drive_link";
            }
            if(datosApy==5){
                document.querySelector("#ProcedimientoApy").href="https://drive.google.com/drive/folders/1TZpyXZZzeD7HD83QHKJ6U1Aunjm5-EUb?usp=drive_link";
                document.querySelector("#CaracterizacionApy").href="https://drive.google.com/drive/folders/167m5tUzKaX5Tw490wPo4JlDSBGCarNkX?usp=drive_link";
                document.querySelector("#IndicadoresApy").href="https://drive.google.com/drive/folders/1ML7aRGD15XKDaadnH8cHqR3-fVvAqh9C?usp=drive_link";
                document.querySelector("#RiesgoApy").href="https://drive.google.com/drive/folders/1TT9L1CBf8T2AyjH5oZSRyjjKSmagxHBy?usp=drive_link";
                document.querySelector("#ManualesApy").href="https://drive.google.com/drive/folders/1Pz8PmXbRQhspFdXUK2uY56336MYJ-487?usp=drive_link";
                document.querySelector("#FlujogramaApy").href="https://drive.google.com/drive/folders/188KOvIyrNu8M13Tdw62UfC8huL4GrgAK?usp=drive_link";
                document.querySelector("#FormatosApy").href="https://drive.google.com/drive/folders/1jrprmgaydA3EwzK2Oh-9yqVx3T5Kw_UZ?usp=drive_link";
            }
            if(datosApy==6){
                document.querySelector("#ProcedimientoApy").href="https://drive.google.com/drive/folders/1vFcjqwqeUM5rWB-U06Yfb2l5bUBV9DvU?usp=drive_link";
                document.querySelector("#CaracterizacionApy").href="https://drive.google.com/drive/folders/1vnj9Bc8klBttEIQ2usp6IKbMiNXCJi8C?usp=drive_link";
                document.querySelector("#IndicadoresApy").href="https://drive.google.com/drive/folders/1CnHNr8PYwTjP6M17pKgJ1F1vr53Sk2x4?usp=drive_link";
                document.querySelector("#RiesgoApy").href="https://drive.google.com/drive/folders/1erBU2IV-CuyConC6ArQWa1Gfgc_6HtnT?usp=drive_link";
                document.querySelector("#ManualesApy").href="https://drive.google.com/drive/folders/1uEDhmukAhBMLUbyK3LPdpqJbBDPB9GJX?usp=drive_link";
                document.querySelector("#FlujogramaApy").href="https://drive.google.com/drive/folders/1qg4-guWZiY5UnxkAxegJAiMJ9g-vqFH3?usp=drive_link";
                document.querySelector("#FormatosApy").href="https://drive.google.com/drive/folders/1NOlRvJwZKpXloXHm-43VLE8EqRJr0AZT?usp=drive_link";
            }
        }else{
             document.querySelector("#mensaje").textContent="No funciono"
        }
    });
}

function adicionar(){
    const boton=document.querySelector(".Ayuda");
    boton.addEventListener('click', () => {
        confirm("correos gestordecalidad2@sonria.com.co, practicante.sig@sonria.com.co");
    });
}

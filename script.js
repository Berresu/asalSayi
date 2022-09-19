let sayac=0;
let sayi=document.getElementById("numberAsal").value;
let button=document.getElementById("btnAsal");
let sonuc=document.getElementById("sonuc");

button.addEventListener("click", ()=>{
    for(let i=2; i<sayi; i++){
        if(sayi%i==0){
            sayac++;
        }
    }
    if(sayac==0){
        sonuc.innerHTML="Asal Sayı.";
    }
    else{
        sonuc.innerHTML="Asal Sayı Değil. 1 ve Kendisi Hariç"+sayac+" Adet Böleni Var."
    }
});

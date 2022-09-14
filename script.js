let hesapla=document.getElementById("hesapla");
hesapla.addEventListener("click", ()=>{
  let sayi=document.getElementById("sayi").value;
  let sonuc=document.getElementById("sonuc");
  
  if(sayi/2!==1){
    sonuc.innerHTML="Asal Sayı Değil";
    
      if(sayi/3!==1){
      sonuc.innerHTML="Asal Sayı Değil"
      }  
      else if(sayi/1==sayi){
      sonuc.innerHTML="Asal Sayı";
      }
      else if(sayi/sayi==1){
      sonuc.innerHTML="Asal Sayı";
      }
  }
  else{
    sonuc.innerHTML="Asal Sayı";
  }
});

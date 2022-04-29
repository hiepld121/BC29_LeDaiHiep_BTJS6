//Bài 1
document.getElementById("btnMot").onclick = function(){
    
    
    var n = 0;
    var dem = 0;
    
    

while(dem == 0){
         var sum = 0;
        for(var i = 0; i <= n; i++){

            sum += i;

         }
        
        if(sum > 10000){

            dem++;
    
        }else{
    
             n++;
        }

   
}
    
    document.getElementById("kqMot").innerHTML = "số nguyên dương nhỏ nhất là: " + n;
}

//Bài 2
document.getElementById("btnTinhTong").onclick = function(){
    var sox = document.getElementById("nhapSo1").value*1;
    var soy = document.getElementById("nhapSo2").value*1;
    var kqBaiHai = 0;

    for(var i = 1; i <= soy; i++){
        kqBaiHai += Math.pow(sox,i);

    }


    
    document.getElementById("kqHai").innerHTML = "Tổng là: " + kqBaiHai;
}

//Bài 3

document.getElementById("btnTinhGt").onclick = function(){
    
    var n = document.getElementById("soGiaiThua").value*1;
    var soGiaiThua=1;
    for(var i = 1; i <= n; i++){

        soGiaiThua *= i;
    
    }



    document.getElementById("kqBa").innerHTML = "Giai thừa của " + n + " là : " + soGiaiThua;
}

//Bài 4

document.getElementById("btnTaoThe").onclick = function(){
    
    
    
    var content="";

    for(var i = 1; i <= 10; i++){
       
        

        if(i % 2 == 0){
            content += "<div> Div chẵn </div>";
            

            
        }else{
            content += "<div class='bg-danger'> Div lẻ </div>";
            
        }
    }
    
  
    document.getElementById("kqBon").innerHTML = content;



}
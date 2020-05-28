$(function(){

    generuj();
    chcecked();

});

/*
1a - 43
2b - 48
3c - 41
4d - 147
5e - 81
6f - 125
7g - 175
9h - 250
11s - 164
13j - 187
14k - 76
15l - 108
16m - 28
17n - 10
18o - 26
19p - 15
*/

function generuj() {
    
    $("#clickos").click(function(){


        // ziska pocet prikladu
        var count = $("#count").val();

        for( var i = 0; i< count; i++){

            var lekce = Math.floor(Math.random() * 19) + 1;

            var priklad = 0;
            
            if( lekce == 1){

                priklad = Math.floor(Math.random() * 43) + 1;
            }else{
                if(lekce == 2){
                    priklad = Math.floor(Math.random() * 48) + 1;
                }else{
                    if(lekce == 3){
                        priklad = Math.floor(Math.random() * 41) + 1;
                    }else{
                        if(lekce == 4){
                            priklad = Math.floor(Math.random() * 147) + 1;
                        }else{
                            if(lekce == 5){
                                priklad = Math.floor(Math.random() * 81) + 1;
                            }else{
                                if(lekce == 6){
                                    priklad = Math.floor(Math.random() * 125) + 1;
                                }else{
                                    if(lekce == 7 || lekce == 8){
                                        priklad = Math.floor(Math.random() * 175) + 1;
                                    }else{
                                        if(lekce == 9 || lekce == 10){
                                            priklad = Math.floor(Math.random() * 250) + 1;
                                        }else{
                                            if(lekce == 11 || lekce == 12){
                                                priklad = Math.floor(Math.random() * 164) + 1;
                                            }else{
                                                if(lekce == 13){
                                                    priklad = Math.floor(Math.random() * 187) + 1;
                                                }else{
                                                    if(lekce == 14){
                                                        priklad = Math.floor(Math.random() * 76) + 1;
                                                    }else{
                                                        if(lekce == 15){
                                                            priklad = Math.floor(Math.random() * 108) + 1;
                                                        }else{
                                                            if(lekce == 16){
                                                                priklad = Math.floor(Math.random() * 28) + 1;
                                                            }else{
                                                                if(lekce == 17){
                                                                    priklad = Math.floor(Math.random() * 10) + 1;
                                                                }else{
                                                                    if(lekce == 18){
                                                                        priklad = Math.floor(Math.random() * 26) + 1;
                                                                    }else{
                                                                        if(lekce == 19){
                                                                            priklad = Math.floor(Math.random() * 15) + 1;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            var final = "<div class='generator__gen__prv'><input type='checkbox' id='check'><p> kapitola: " + lekce + ", příklad: " + priklad + "</p></div>";

            $("#gen").append(final);
        }
    });
    
}

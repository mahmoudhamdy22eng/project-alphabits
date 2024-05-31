        // letters
        var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

                        $(document).ready(function(){
                            $(".newbtn").hide();
                        })
        document.getElementById("form1").addEventListener("submit", function(event) {
            event.preventDefault();

            //reset image
            var imgreset = document.getElementById('imgpic');
                imgreset.src = '';
                document.getElementById("imgpic").style.display = 'none';

            // Check Number in text1
            var txtin = document.getElementById("in").value;
            if (isNaN(txtin) || txtin < 1 || txtin > 26) {
                document.getElementById("textmessage").textContent = "Please Enter Numbers between 1-26";
            //reset button
                $(".newbtn").hide();
            } 
            else {
                document.getElementById("textmessage").textContent = "";

                //get random letter from (shuffled letters array) & store as array(slice()) in genLetters
                arrayRandom(letters);
                var genLetters = letters.slice(0, txtin);  // (start, end)
                var genLettersDiv = document.getElementById("genLetters");
                    genLettersDiv.innerHTML = "";
                
                //creating buttons for shuffled letters (genLetters[])
                for (var i = 0; i < genLetters.length; i++) {
                    var newbtn = document.createElement("button");
                    newbtn.type = "button";
                    newbtn.textContent = genLetters[i];
                    newbtn.className = "newbtn";
                    $(".newbtn").show();
                //adding img path to each btn
                    newbtn.addEventListener('click', function() {
                        var letter = this.textContent;
                        // console.log(letter);  
                        // uppercase letters to lowercase in imgpath() array
                        var imagePath = imgpath(letter);
                        document.getElementById("imgpic").src = imagePath;
                        document.getElementById("imgpic").style.display = 'block';
                    });
                    genLettersDiv.appendChild(newbtn);
                }
            }
                
                
                
        });


            //give image path to each letter
            function imgpath(letter) {
                return ('images/' + letter.toLowerCase() + '.png');
                // console.log(imgpath(letter));    
            }


            //get random letter from (letters array)
            function arrayRandom(array) {
                for (var i = array.length - 1; i > 0; i--) {            //26-1=(25)       ////25-1=(24)
                    var x = Math.floor(Math.random() * (i + 1));        //0 ~ 26-1     x = random value every loop turn
                    var test = array[i];                                //(25)             letters array in test variable
                    // console.log(test);                                  
                    array[i] = array[x];                                //letters array in x array  (shuffled)
                    // console.log(array[x]);
                    array[x] = test;    
                    // console.log(array[x]);
                    // console.log(test)
                }
            }

    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// images
// var pics = []
//     pics[0] = "images/a.png";
//     pics[1] = "images/b.png";
//     pics[2] = "images/c.png";
//     pics[3] = "images/d.png";
//     pics[4] = "images/e.png";
//     pics[5] = "images/f.png";
//     pics[6] = "images/g.png";
//     pics[7] = "images/h.png";
//     pics[8] = "images/i.png";
//     pics[9] = "images/j.png";
//     pics[10] = "images/k.png";
//     pics[11] = "images/l.png";
//     pics[12] = "images/m.png";
//     pics[13] = "images/n.png";
//     pics[14] = "images/o.png";
//     pics[15] = "images/p.png";
//     pics[16] = "images/q.png";
//     pics[17] = "images/r.png";
//     pics[18] = "images/s.png";
//     pics[19] = "images/t.png";
//     pics[20] = "images/u.png";
//     pics[21] = "images/v.png";
//     pics[22] = "images/w.png";
//     pics[23] = "images/x.png";
//     pics[24] = "images/y.png";
//     pics[25] = "images/z.png";
        
    // console.log(letter[0]);

        // let txt = document.getElementsByClassName("text1");
        // let n = txt.value;
        // n = Number(n);
        // console.log(n);

        // $(document).ready(function(){
            
        //         $("#text3").hide()
        // });
                
            
        
    // function chechN(){
    //     if(n < 1 || n > 26){
    //         document.getElementById("text3").style.display = "block";
    //         console.log(n);
    //     }
    //     // switch(n){
    //     //     case n < 1 || n > 26:
    //     //         document.getElementById("text3").style.display = "block";
    //     //         break;
    //     // }
    // }
//         // console.log(txt);
//     function resultletters(){
//         check()
//         // var index = parseInt(txt) --;
//         let result = letter[(Math.floor(Math.random() * letter.length))];
        
//         // let divletter = document.getElementById("letter").value;
//         // divletter = result;
//         // document.getElementById("letter").value = result;
//         // document.getElementById("letter").style.display = "block";
//         // console.log(result);
//         // let result = document.getElementById("letter");
//         // let lettimg = document.getElementById("img");   
//         // let next_img = document.getElementsByTagName("img")[0];
//         let val = document.getElementById("in").value;
        
//         for(let i = 0; i <val ; i++){
//             // btn.innerText = result;
//             let btn = document.createElement("button");
//             btn.innerText = result;
//             // console.log(btn.innerText);
//             document.getElementById("buttons").appendChild(btn);
//             let arrnumber = [i];
//             // arrnumber[i] = document.getElementById("buttons").childElementCount;
//             // console.log(arrnumber[i])
//             arrnumber.push(btn.innerText);
//             // console.log(arrnumber[i]);
//             console.log(letter[i]);
//             console.log(result);



//             if(arrnumber[i] == letter[i]){
//                 for(let i = 0; i <val ; i++){
//                     let result = letter[(Math.floor(Math.random() * letter.length))];
//                     let btn = document.createElement("button");
//                     btn.innerText = result;
//                     document.getElementById("buttons").appendChild(btn);
//                     let arrnumber = [i];
//                     arrnumber[i] = document.getElementById("buttons").childElementCount;
//                     console.log(arrnumber.push(result));
//             }
            
//             console.log(arrnumber);
//             console.log(arrnumber.push(result));
//         }
//         // else {
//         //     document.getElementById("btn1").addEventListener("click", function(event){
//         //         event.preventDefault()
//         //     });
//         // }
//     }
// }






    // function check(){
        //     let val = document.getElementById("in").value;
        //     if(val < 1 || val > 26){
        //         document.getElementById("text3").style.display = "block";
        //     }
        //     else {
        //         document.getElementById("text3").style.display = "none";
        //         document.getElementById("btn1").addEventListener("click", function resultletters(event){
        //             event.preventDefault()
        //         });
        //     }
            
        // }



    // $(document).ready(function(){
    //     var n = $(".text1").val();
    //     console.log(n)
    // }
    // )
        
    // function showimg(){
    //     var n = $(".text1").val();
    //     // let index = parseInt(n)-1;
    //     // console.log(index)
    //     // let l = letter[n - 1];
    //     let p = pics[n - 1];
    //     // console.log(p); 
    //     l = p       
        
    //     console.log(l);
    //     document.getElementsByClassName("imgpic").src = l;
    //     document.getElementById("imgpic").style.display = "block";
    // }
    // function hideimg(){
    //     document.getElementById("imgpic").style.display = "none";
    // }


    

    // var numbers = "/[^1-26]/"
    // var pattern = "[^1-26\.]+";
    // var text1 = document.getElementById("text1");
    // function showtext (event){
    // if(event.key.val() < 1 || event.key.val() > 26){
    // if(event.key.Match(numbers) ){
    //     $(".text3").show();
    // }
    // else {
    //     $(".text3").hide();
    // }}


//     // var intext1 = document.getElementById("text1").value();
//     // console.log(intext1);
//     var intext1 = $("#text1").val();
//     var index = parseInt(intext1) - 1;
//     // document.getElementById("img1").src = pics[index];
//     var result = letter[(Math.floor(Math.random() * letter.length))];
//     console.log(result);

    
    
    // function showletter (){
    //     // $("#intext1")= result;
    //     console.log($("btn2").val(result));
    // }
        // $("#btn2").val(result);
    
    // function showletter (event){
    //     if(event.key.match(numbers)){
    //         $("#text3").show();
    //     }
    //     else {
    //         $("#text3").hide();
    //     }
    // }
    
    
    



// $(document).ready(

// $(".text3").hide(),

// $("#btn1").click(function(){
//     var intext1 = $("#text1").val();
//     var index = parseInt(intext1) - 1;},
//     console.log(index),
//     // $("#img1").attr("src",pics[index]);
//     $("#btn2").val(result),
// ),


// $("btn2").hide(),
// $("#text1").keydown (function (event){
//     if(event.key.match(pattern) ){
//         $(".text3").show();
//     }else{
//         $(".text3").hide();
//     }
// }),

// $("#text1").click(function(){
//     console.log($("#text1").val())
// })

    

// $("#img1").attr("src",pics[index]);

// )

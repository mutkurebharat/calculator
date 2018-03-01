
         var operator = "";
         var number = "";
         var index = '';
         var lastOperation = false;
         var checkOperation =true;

                function c(val){
                                  document.getElementById("display").value = val;
                                  lastOperation = false;
                                  checkOperation= false;
                               }
                function p(val){
                                  lastOperation = false;

                                  document.getElementById("display").value += val;
                                  if(val == '+' || val == '-' || val == '*' || val == '/'){
                                  operator = val;
                                  var index = document.getElementById("display").value.indexOf(operator);
                                  console.log(operator);
                                  }
                                  if(val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7'  || val == '8'  || val == '9' || val == '0'){
                                  number = document.getElementById("display").value.substring(document.getElementById("display").value.lastIndexOf(operator));
                                  console.log(number)
                                  }
                              }
                  function e(){
                                  z = document.getElementById("display").value;
                                  if(z.includes('+')||z.includes('-')||z.includes('*')||z.includes('/')){
                                  checkOperation=true;
                                  }
                              try{
                                  if(lastOperation == false && checkOperation==true){
                                    console.log("working");
                                    console.log(z);
                                    document.getElementById("display").value = eval(z);
                                    lastOperation = true;
                                }
                              else{
                                   var combine = z + number;
                                   console.log(combine);
                                   console.log("number is"+number);
                                   console.log("z is"+z);
                                   console.log("lastOpeartion is"+lastOperation)
                                   console.log("checkOpeartion is"+checkOperation)
                                   document.getElementById("display").value = eval(combine);
                                  }
                                  }
                          catch(e){
                                  c('Error')
                                  }
                              }
                          window.onkeyup = function(event){
                                                           if ((event.keyCode >= 48 && event.keyCode <= 55)  ||
                                                           (event.key === "8") || (event.keyCode === 57) ||
                                                           (event.keyCode >= 96 && event.keyCode <= 105)){
                                                             p(event.key);
                                                           } else if (event.keyCode === 27) {
                                                             c('');
                                                           } else if (event.keyCode === 8) {
                                                             c('');
                                                           } else if (event.key === "+") {
                                                             p(event.key);
                                                           } else if (event.key === "-") {
                                                             p(event.key);
                                                           } else if (event.key === "*") {
                                                             p(event.key);
                                                           } else if (event.key === "/") {
                                                             p(event.key);
                                                           } else if (event.key === ".") {
                                                             p(event.key);         // decimal
                                                           } else if (event.keyCode === 13) {
                                                             e();
                                                           }
                                                         };

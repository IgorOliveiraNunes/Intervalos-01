let timer ;
function comecar(){
 timer = setInterval(showTime, 1000)
 }
function parar(){
 clearInterval(timer)
}

function showTime() {
    let d = new Date();    //Cria em d uma data 'bruta'
    let h = d.getHours();   // de d pegar a hora
    let m = d.getMinutes();  //de d pegar os minutos
    let s = d.getSeconds();   // de d pegar segundos 
    let txt = h+':'+m+':'+s;   // em txt concatenar h,m,s
    document.querySelector('.demo').innerHTML = txt;    //buscar com query a div e inserir o novo html
    }

    

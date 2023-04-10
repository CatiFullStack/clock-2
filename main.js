
function clock() {
    const elementClock = document.querySelector('.clock');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formatoHours = hours.toString().padStart(2, "0");
    const formatoMinutes = minutes.toString().padStart(2, "0");
    const formatoSeconds = seconds.toString().padStart(2, "0");
    
    elementClock.textContent = `${formatoHours}:${formatoMinutes}:${formatoSeconds}`;


    const frase = document.querySelector ('.frase');
    
    dia = new Array ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    month = new Array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December');

    hoje = new Date();

    frase.innerHTML = `${dia[hoje.getDay()]}, ${month[hoje.getMonth()]} ${hoje.getDate().toString().padStart(2, "0")}th, ${hoje.getFullYear()}`

    const imagem = document.querySelector ('#imagem');

    /*
    if ( 0 < formatoHours < 12) {
        document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/691901/pexels-photo-691901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover"
        imagem.src = "img/sol.png" 
    }
    
    else if (12 <= formatoHours < 18) {
        document.body.style.backgroundImage = "url(https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg)";
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover"
        imagem.src = "img/sorriso.png"
    }
    
    else {
        document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
        imagem.src = "img/lua.png"
    } 

    */
    

    if (formatoHours >= 0 && formatoHours < 12) {
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844226_1280.png'
    document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover"
    imagem.src = "img/sol.png"
      } else if (formatoHours >= 12 && formatoHours <= 18) {
    document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2017/08/13/09/20/tower-2636594_1280.png)'
    document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover"
    imagem.src = "img/sorriso.png"
      } else {
    document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
    document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover"
    imagem.src = "img/lua.png"
     }

}



setInterval(clock, 1000);

// PadStart é a forma que será vísivel a string, exemplo número de caracteres.

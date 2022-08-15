var index = 0;
var fade = setInterval(function(){fading()} , 50)
setInterval(function(){slider()} , 2000)

function slider()
{
    var slides = document.getElementById('slides').getElementsByTagName('img')
    ++index;
    if(index==slides.length)
        index = 0;
        
    if(index==0)
        slides[slides.length-1].style.display = "none"
    else
        slides[index-1].style.display = "none"
        
    slides[index].style.display = "inline"
    slides[index].style.opacity = 1;
    clearInterval(fade)
    fade = setInterval(function(){fading()} , 100)
    
}

function fading()
{
    var slides = document.getElementById('slides').getElementsByTagName('img')
    var opacity = slides[index].style.opacity >=0.5 ? slides[index].style.opacity : 1;
    slides[index].style.opacity = opacity-0.025
    
}
document.getElementById("img").addEventListener('click',function() {
    let display = document.getElementById("img");
    if(display.src.match("https://s36496.pcdn.co/wp-content/uploads/2017/11/9-si-foto-cv.png")){
        display.src="https://www.modelocurriculum.net/wp-content/debo-sonreir-en-la-foto-de-mi-curriculum-e1559210644111.jpg";
    }else{
        display.src="https://s36496.pcdn.co/wp-content/uploads/2017/11/9-si-foto-cv.png"
    }
}
);
document.getElementById("botonImp").addEventListener('click',function() {
    
    window.print()
    
});
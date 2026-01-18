const sites = document.getElementById("sites");
const game = document.getElementById("game");




addEventListener('click', function() {
	let  check = document.querySelector('[type="radio"]:checked').value;
    if (check==="site"){
        game.style.display = "None" ;
        sites.style.display = "block";
    }
    else{
        game.style.display = "block";
        sites.style.display = "None";
    }
});


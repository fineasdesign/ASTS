window.onload = function(){
    document.querySelector(".menuPrincipal, .menuMobile").addEventListener("click", function(){
        if(document.querySelector(".menuPrincipal ul").style.display == 'flex') {
            document.querySelector(".menuPrincipal ul").style.display = 'none';
        } else {
            document.querySelector(".menuPrincipal ul").style.display = 'flex';
        }
    });
};

var $input    = document.getElementById('uploadCV')
    $arquivoCV = document.getElementById('arquivoCV')

$input.addEventListener('change', function(){
  $arquivoCV.textContent = this.value;
});
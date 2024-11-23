// Mostra la finestra modale quando la pagina è caricata
window.onload = function() {
    var modal = document.getElementById("contactModal");
    var closeBtn = document.getElementsByClassName("close")[0];
    
    // Mostra la finestra modale
    modal.style.display = "block";
    
    // Chiudi la finestra modale quando si clicca sulla "x"
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    // Chiudi la finestra modale cliccando fuori di essa
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

$(document).ready(function() {
    /*lien entre produits et page contact*/
    $('.lq_link-more').click(function() {
        var value =  $(this).attr("name");
        $('#productValue').val(value);
        
        /*Affiche le champ produit dans le formulaire de contact*/
        $('#productField').removeClass("d-none");
    });

});
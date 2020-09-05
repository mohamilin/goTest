//autocomplete
$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
        "Jakarta Barat" : null,
      },
    });
  });
  


// form select
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });


$(document).ready(function(){
    $('select').formSelect();
  });

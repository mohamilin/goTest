// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems, options);
//   });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });

  //autocomplete

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.autocomplete');
  //   var instances = M.Autocomplete.init(elems, options);
  // });
  
  $(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250',
        'Jakarta Barat': null,
      },
    });
  });

  //colapsible host profile
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });


  //date picker
  $(document).ready(function(){
    $('.datepicker').datepicker();
  });

  
  // collapsible
  var coll = document.getElementsByClassName("collapsible");
  var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// const getDataGithub = async () => {
//   try {
//     let response = await fetch("https://5f55a45f39221c00167fb0c7.mockapi.io/covid19/RumahSakit");
//     let data = await response.json();
//     console.log("data rs", data);
//   } catch {
//     console.log("maaf server sedang maintenance");
//   }
// }

// getDataGithub()
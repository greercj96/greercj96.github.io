$(document).ready(function){

  var lazyloadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ...more custom settings
  });

var content = {
      "navbar": [
          {
              "title": "about",
              "url" : "about.html"
          },
          {
              "title": "photography",
              "url" : "photography.html"
          },
          {
              "title": "resume",
              "url" : "resume.html"
          },
          {
              "title": "contact",
              "url" : "contact.html"
          }
      ]



      for(var i=0; i<content.navbar.length; i++){
          console.log(content.navbar[i].title + ' | ' + content.navbar[i].url);
          $("#navbar").append('<li class="nav-item"><a class="nav-link" href="'+ content.navbar[i].url +'">'+ content.navbar[i].title +'</a></li>')
      }

      // MDB Lightbox Init
      $(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
}

$(document).ready(function(){
  function jumbotron(data){
  var  htmlcode = '<div class = "jumbotron">'+
                      '<div class = "container">'+
                        '<h1>' + data.heading + '</h1>'+
                        '<p>'+ data.subheading +'</p>'+
                        '</div>' +
                      '</div>';
            $("#main").append(htmlcode)

  };

  var content = {
        "navbar": [
            {
                "title": "Home",
                "url" : "index.html"
            },
            {
                "title": "About Us",
                "url" : "about.html"
            },
            {
                "title": "Our Team",
                "url" : "team.html"
            },
            {
                "title": "Contact Us",
                "url" : "contact.html"
            }
        ],
        "index.html" :{
          "blocks": [
            {
              "type" : "jumbotron",
              "heading" : "This is a pretty cool title",
              "subheading" : "This is our cool subheading that goes here",
            }
          ]
        },
        "about.html" : {
            "blocks" : [
                {
                    "type" : "jumbotron",
                    "heading" : "This is a pretty cool title",
                    "subheading": "This is our cool subheading that goes here"
                },
            ]
        }
    }
    for(var i=0; i<content.navbar.length; i++){
        console.log(content.navbar[i].title + ' | ' + content.navbar[i].url);
        $("#mynav").append('<li class="nav-item"><a class="nav-link" href="'+ content.navbar[i].url +'">'+ content.navbar[i].title +'</a></li>')
    }

console.log(window.location);
console.log(window.location.pathname);
var pagefile = window.location.pathname.split("/").pop();
console.log(pagefile);
console.log(content[pagefile]);



  var b = content[pagefile].blocks;
  console.log(b);
  for(var i = 0; i < b.length; i++){

    if(b[i].type == "jumbotron"){
      console.log("im here")
      jumbotron(b[i]);
    }
  }

  $.ajax({  //request info from another site
    url: 'https://randomuser.me/api/?results=20',
    dataType: 'json',
    success: function(data) {
    console.log(data);



        for(var i = 0; i < data.results.length; i++){

          var nation = data.results[i].nat;
          nation = nation.toLowerCase();

          if(data.results[i].gender == "male"){
        $("#users").append('<div class = " col xs-6 col-md-2 "><img class = " rounded-circle" src=' + data.results[i].picture.medium + '><div><p>' + data.results[i].name.first + ' ' + data.results[i].name.last+ '</p></div><div><span class = " flag-icon flag-icon-' + nation + '"></span></div><div><i class = "male fab fa-github id = "test""></i><i class = "male fab fa-facebook-f"</i><i class="male fab fa-twitter"></i></div></div>');
      }
      else if (data.results[i].gender == "female"){
          $("#users").append('<div class = " col xs-6 col-md-2 "><img class = " rounded-circle" src=' + data.results[i].picture.medium + '><div><p>' + data.results[i].name.first + ' ' + data.results[i].name.last+ '</p></div><div><span class = " flag-icon flag-icon-' + nation + '"></span></div><div><i class = "female fab fa-github id = "test""></i><i class = "female fab fa-facebook-f"</i><i class="female fab fa-twitter"></i></div></div>');

      }


    }
  }





  });

});

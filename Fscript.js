function openUp(){
    event.preventDefault();
    event.stopPropagation();
        $("#posts2-form2").show();
    }

$(document).ready(function () {

    $("#posts2-form2").hide();

$(document).on("click",".view", function (event) {
        console.log("click event");
        id = $(this).data("id");
        console.log("id... " + id);
        window.sessionStorage.setItem("idE", id);
    });

    var idN = window.sessionStorage.getItem("idE");
    function listPosts(idN){
        console.log("start of listing contacts");
        var apiKey = "5e43f919e9571b29c13c8976";
        var myDB = "syyyy-726a";
        var myCollection = "forum";

          var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://"+ myDB +".restdb.io/rest/" + myCollection + "/" + idN,
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": apiKey,
            "cache-control": "no-cache"
          }
        }
  
        $.ajax(settings).done(function (data) {
            console.log("successfully log into db");
            console.log(data);
  
              $("#posts-bodyB").append( `<tr style="background-color: rgba(22, 65, 102, 0.733);"><td style="padding: 80px 0 80px 0!important;">${data.name}</td><td>${data.topic}</td><td>${data.msg}</td>
              <td><a href="" class="sub btn" style="background-color: rgba(165, 178, 184, 0.671)" onclick="openUp();" id="reply-${data.idN}" data-id="${data.idN}">Reply</a>
              `);
          });
        
        }//end listContacts


        listPosts(idN);
    })
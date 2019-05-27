$(document).ready(function () {

    var pageId = decodeURIComponent(window.location.search.trim());
    console.log(pageId);



    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/notAgo/JSONserver/drivers",
        "method": "GET",
        "dataType": "json"
    }

    $.ajax(itemSettings).done(function (response) {

        var myItem = "";
        $.each(response, function (i, obj) {
            console.log(pageId);
            if ("?id=" + obj.team == pageId) {
                myItem += '<div class="col-lg-4">';
                myItem += '<div class="card ' + obj.id + '" id="' + obj.id + '" style="margin-bottom: 30px;">';
                myItem += '<a href="detail.html?id=' + obj.id + '" class="link-card">';
                myItem += '<img src="' + obj.img + '" class="card-img-top" alt="...">';
                myItem += '<div class="card-body">';
                myItem += '<h5 class="card-title">' + obj.title + '</h5>';
                myItem += '<h5 class="card-title">' + obj.salary + '</h5>';
                myItem += '<p class="card-text">' + obj.desc + '</p>';
                myItem += '</div>';
                myItem += '<div class="card-footer text-muted" >';
                myItem += '' + obj.team + '';
                myItem += '</div>';
                myItem += '</a>';
                myItem += '</div>';
                myItem += '</div>';
            }


        });

        $("#listItems").append(myItem);
    });


    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/notAgo/JSONserver/teams",
        "method": "GET",
        "dataType": "json"
    }

    $.ajax(itemSettings).done(function (response) {
        var myItem = "";
        $.each(response, function (i, obj) {

            if ("?id=" + obj.team == pageId) {
                myItem += '<a href="category.html?id=' + obj.team + '" class="list-group-item list-group-item-action active">' + obj.team + '</a>';
            }
            else {
                myItem += '<a href="category.html?id=' + obj.team + '" class="list-group-item list-group-item-action">' + obj.team + '</a>';
            }




        });

        $("#listBrand").append(myItem);
    });



});
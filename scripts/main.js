//This is the JavaScript file for the index.html page.
//Author: R. Wood
//Date: Sept, 2016

$(document).ready(function() {

  function getValue() {
    var search = $('#search-input').val();
    var wikipURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&srsearch=";
    wikipURL += search + "&srlimit=8&callback=?";
    return wikipURL;
  }

  function showArticle(title, snippet) {
    var $article = $("<a href='https://en.wikipedia.org/wiki/" + title
      + "' class='list-group-item' target='_blank'><i class='fa fa-newspaper-o'></i><strong> " + title + "</strong>: "
      + snippet + "</a>");
    $('.result-field').append($article);
  }

  function getData(url) {
    $.getJSON(url).done(function(data) {
      var title, snippet;
      for (var i = 0; i < 8; i++) {
        title = data.query.search[i].title;
        snippet = data.query.search[i].snippet;
        showArticle(title, snippet);
      }
    }).fail(function(err) {
      $('.result-field').append("<p>Something has gone wrong! " + err + "</p>");
    });
  }

  function doActions(e) {
    e.preventDefault();
    $('.result-field').empty();
    var url = getValue();
    getData(url);
  }

  $('#submit').on('click', function(e) {
    doActions(e);
  });

  $('#search-input').keydown(function(e) {

    if (e.which == 13) {
      doActions(e);
    }
  });



});

//This is the JavaScript file for the index.html page.
//Author: R. Wood
//Date: Sept, 2016

$(document).ready(function() {
  var search = "";//write this
  var wikipURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&rvprop=content&titles=";
  wikipURL += search + "&callback=?";;

  $('#submit').on('click', function(e) {
    e.preventDefault;
    $('.result-field').empty();
    getData();

  });

  function getData(wikipURL) {
    $.getJSON(wikipURL).done(function(data) {
      var result = data.query.pages;
      var numberOfPages = Object.keys(data).length;
      var arr = [result, numberOfPages];
      return arr;
    }).fail(function(err) {
      $('.result-field').append("<p>Something has gone wrong! " + err + "</p>");
    });
  }

  function showArticles() {
//write this
  }

});

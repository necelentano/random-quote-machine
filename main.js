$(document).ready(function() {
  $("#btn").on("click", function() {
    $.getJSON("https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en", function(json) {
      
        if (json.quoteAuthor === "") json.quoteAuthor = "Unknown";

        $("#quote").html(json.quoteText);
        $("#author").html("- " + json.quoteAuthor);
        $("#twitter").attr("href","https://twitter.com/intent/tweet?text=" + encodeURIComponent(json.quoteText) + " - " + json.quoteAuthor);
      }
    );
  });
});

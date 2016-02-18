    $(function () {
      var randomQuote = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=';
      var $quote = $('.quote');
      var $author = $('.author');
      $("footer").hide();

      function getQuote() {
        $("footer").show();

        var rand = Math.round(Math.random() * 10);
        $.get(randomQuote + rand).then(function (response) {
          $quote.html(response[0].content.trim());
          $author.find('span').text(response[0].title);
          $('#link').attr('href', response[0].link);
          var tweet = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURI('"' + $quote.text().trim() + '"' + '\n' + $author.text().trim() + '\n');
          $("#tweet").attr("href", tweet);
        });
      }
      // getQuote();
      $("#refresh").on("click", function (e) {
        e.preventDefault();
        getQuote();
      });
    });

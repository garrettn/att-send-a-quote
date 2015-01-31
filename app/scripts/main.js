(function ($) {
  var quoteText;
  var quoteTitle = 'Charlie Sheen';

  $(function () {
    var $quote = $('[data-hook~=quote]');
    var $title = $('[data-hook~=title]');

    getNewQuote();

    $('[data-hook~=new]').on('click', getNewQuote);
    $('[data-hook~=send]').on('click', sendText);

    function getNewQuote () {
      WikiquoteApi.getRandomQuote(quoteTitle, function (quote) {
        quoteText = quote.quote;
        $quote.text(quote.quote);
        $title.text(quote.titles);
      });
    }

    function sendText () {
      console.log('Sending text: ' + quoteText);
    }

  });

})(jQuery);

(function ($) {
  var quoteText;
  var quoteTitle = 'Charlie Sheen';

  $(function () {
    var $quote = $('[data-hook~=quote]');
    var $quoteText = $('[data-hook~=quote-text]');
    var $quoteTitle = $('[data-hook~=quote-title]');
    var $spinner = $('[data-hook~=spinner]');

    getNewQuote();

    $('[data-hook~=new]').on('click', getNewQuote);
    $('[data-hook~=send]').on('click', sendText);

    function getNewQuote () {
      showSpinner();
      WikiquoteApi.getRandomQuote(quoteTitle, function (quote) {
        $quoteText.text(quote.quote);
        $quoteTitle.text(quote.titles);
        showQuote();
      });
    }

    function showQuote () {
      $spinner.hide();
      $quote.show();
    }

    function showSpinner () {
      $quote.hide();
      $spinner.show();
    }

    function sendText () {
      console.log('Sending text: ' + quoteText);
    }

  });

})(jQuery);

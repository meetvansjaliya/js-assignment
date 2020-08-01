console.log("random_quotes");

// ================================ Static Method =================================


var quotes =['The Way Get Started Is To Quit Talking And Being Doing. -Walt Disney',
'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Seees The Opportunity In Every Difficulty. -Winston Churchill ',
'Don\'t Let Yesterday Take Up Too Much Of Today. -Will Rogers',
'You Learn More From Failures Than From Success. Don\'t Let It Stop You. Failure Builds Character. -Unknown',
'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up. - Vince Lombardi',
'If You Are Working On something That You Really Care About, You Don\'t Have To Be Pushed. The Vision Pulls You. - Steve Jobs ',
'People Who Are Crazy Enough To Think They Can Change The World , Are The Ones Who Do. -Rob Siltanen', 
'Failure will Never Overtake Me If My Determination To Succeed Is Strong Enough. -Og Mandino',
'Enterpreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That\'s The Classic Enterpreneur. - Mohnish Pabrai',
'We May Encounter Many Defeats But We Must Not Be Defeated. - Maya Angelou','"if you always put limit on everything you do, physical or anything else. it will spread into your work and into your life. there are no limits. there are only plateaus, and you must not stay there, you must go beyond them.- bruce lee',
'I know where I\'m going and I know the truth, and I don\'t have to be what you want me to be. I\'m free to be what I want.- muhammad ali',
'you are never too old to set another goal or to dream a new dream.- c.s lewis',
'never give up, for that is just the place and time that the tide will turn.- harriet beecher stowe','our greatest weakness lies in giving up. the most certain way to succeed is always to try just one more time. - thomas a. edison','either i will find a way, or i will make one. - philip sidney'];


function newQuote(){
var randomNumber = Math.floor(Math.random() * (quotes.length) );
var display = document.getElementById('quotesDisplay');
display.innerHTML = quotes[randomNumber];
}


// ============================ Dynamic Method ========================================

const twitterButton = document.querySelector('#js-tweet');
const spinner = document.querySelector('#js-spinner');
const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
  spinner.classList.remove('hidden');
  newQuoteButton.disabled = true;

  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.message);
		setTweetButton(json.message);
  } catch {
    alert('Failed to fetch new quote');
  } finally {
    newQuoteButton.disabled = false;
    spinner.classList.add('hidden');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

function setTweetButton(quote) {
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

getQuote();
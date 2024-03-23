function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var quotes = [
    'I am the punishment of God... If you had not committed great sins, God would not have sent a punishment like me upon you. - Genghis Khan',
    'It is not sufficient that I succeed - all others must fail. - Genghis Khan',
    'That city is well fortified which has a wall of men instead of brick. - Lycurgus of Sparta',
    'The daughters of Sparta are never at home! They mingle with the young men in wrestling matches. - Euripides',
    'You have power over your mind — not outside events. Realize this, and you will find strength. - Marcus Aurelius',
    'How much more grievous are the consequences of anger than the causes of it. - Marcus Aurelius',
    'I came, I saw, I conquered. - Julius Caesar',
    'I have been baptized twice, once in water, once in flame. I will carry the fire of the holy spirit inside until I stand before my lord for judgement.',
    'Thou art my battle axe and weapons of war: for with thee will I break in pieces the nations, and with thee will I destroy kingdoms. - Jeremiah 51:20',
    'It does not matter how slowly you go as long as you do not stop. - Confucius'
]
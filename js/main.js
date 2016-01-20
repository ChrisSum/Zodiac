var zodiac = [ // array for zodiacs
	{
		sign: "aquarius",
		fortune: "AQUARIUS: You're a bucket of knowledge!",
		image: "img/aquarius.jpg"
	},
	{
		sign: "aries",
		fortune: "ARIES: Aggressive & expressive!",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "CANCER: Get out of your feelings!",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		fortune: "CAPRICORN: Stubborn as a goat huh?",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: "GEMINI: You're a gemini with two sides!",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "LEO: A regular king of the jungle!",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune: "LIBRA: Fair and balanced, like Faux News?",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune: "PISCES: Make up your mind!",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune: "SAGITTARIUS: You tell it like it is!",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune: "SCORPIO: I wouldn't mess with you!",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune: "TAURUS: Ford a car named after your sign!",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune: "VIRGO: Like the rapper Ludacris once said, 'Come & chill out with the virgo!'",
		image: "img/virgo.jpg"
	}
]


function horoscope() {
	var sign = document.getElementById("sign").value.toLowerCase() // Store user input


	for(i = 0; i < zodiac.length; i++) { // run through zodiac array
		if(sign === zodiac[i].sign) { // if the user inputs one of the zodiacs
			document.getElementById("yourSign").innerHTML = zodiac[i].sign // return the user's sign
			document.getElementById("icon").src = zodiac[i].image // return the image for user's sign
			document.getElementById("yourHoroscope").innerHTML = zodiac[i].fortune // return info on user's sign
			break

		} else {
			document.getElementById("yourSign").innerHTML = "What? No what's your zodiac sign!"
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}


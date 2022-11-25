const quotes = [
    {
        quote: "뛰어남이란 항상 더 잘 하려고 노력하는 데에서 나온 꾸준한 결과이다.",
        author: "Pat Riley"
    },
    {
        quote: "긴 인내 후의 실패는 충분히 노력하지 않은 것보다 훨씬 더 위대하다.",
        author: "George Eliot"
    },
    {
        quote: "성공의 이전에는 노력이 있음을 항상 기억하라. 심지어 사전에서도 그렇다.",
        author: "Sarah Ban Breathnach"
    },
    {
        quote: "당신의 최대 기적에 가장 가까울 때, 당신은 가장 최대 역경을 마주하게 될 것이다.",
        author: "Shannon L. Alder"
    },
    {
        quote: "천리길도 한걸음부터",
        author: "Lao Tzu"
    },
    {
        quote: "나는 실패한 적이 없다. 그저 작동하지 않는 10,000개의 방법들을 발견했을 뿐이다.",
        author: "Thomas A. Edison"
    },
    {
        quote: "질문은 누가 나를 허락하는가가 아니라, 누가 나를 멈추게 할 것인가이다.",
        author: "Ayn Rand"
    },
    {
        quote: "이 세상에 좋은 사람은 없다. 그저 이용할 뿐",
        author: "Doyoung Kwon"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0])

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]
console.log(quotes[0])

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author




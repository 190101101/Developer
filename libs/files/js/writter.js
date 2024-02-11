const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
                    'hello friend', 
                    ':: My technology stack ::', 
                    '✔ :: JavaScript / Node js / Express js / Electron js',
                    '✔ :: TypeScript / Nest js',
                    '✔ :: React / Redux / GraphQL / Apollo Server / Next js / React Native',
                    '✔ :: MySQL / SQL / PostgreSQL, MongoDb / Mongoose',
                    '✔ :: VCS: / Git / Github / npm / yarn',
                    '✔ :: MVC / SOLID / OOP / Pattern Designs',
                    '✔ :: Html5 / CSS3 / Bootstrap5 / tailwind',
                    '✔ :: REST / GraphQL / API / Swagger',
                    '✔ :: JSON / SOAP/ XML',
                    '✔ :: Microservices / RabbitMQ / Redis / Puppeteer',
                    '✔ :: Docker / Kubernetes / Ansible',
                    '✔ :: Linux / Debian',
                  ];
const typingDelay = 50;
const erasingDelay = 0;
const newTextDelay = 1100;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
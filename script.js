function unwrapGift() {
    document.getElementById('giftContent').style.display = 'block';
    dropMoreConfetti();
}

let confetti = [];
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function ConfettiParticle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.radius = Math.random() * 6 + 2;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.speed = Math.random() * 3 + 2;
    this.angle = Math.random() * Math.PI * 2;
    this.dx = Math.cos(this.angle) * this.speed;
    this.dy = Math.sin(this.angle) * this.speed;
    this.opacity = Math.random() * 0.5 + 0.5;

    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.y > canvas.height) {
            this.x = Math.random() * canvas.width;
            this.y = 0 - this.radius;
            this.dx = Math.cos(this.angle) * this.speed;
            this.dy = Math.sin(this.angle) * this.speed;
        }
    };

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
    };
}

function initConfetti() {
    for (let i = 0; i < 300; i++) {
        confetti.push(new ConfettiParticle());
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animateConfetti);
}

function dropMoreConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push(new ConfettiParticle());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initConfetti();
    animateConfetti();
});

const wishes = [
    "आटे ताकेको पुरा होस्!",
    "जिन्दगीको गाडी सोचे जस्तै चलिराखोस्!",
    "Physics le malai party khana diyos!",
    "GCES ma naam niskiyos!✋ ",
    "Malai birsinxeu🤨?",
    "Malai reels pathauna kailei banda garxeu🤨?",
    "GCES ma naam niskesi mero project haru gardinxeu🤨?",
    "Laa sawal jawaf yeha vanda garina! Feri pani ekdamm janma din ko hardik subhakamana! Sadhai yestai vairakaha, anuhar ko haso kailei nagumau.. I'll always be the biggest supporter of you and always have your back! Man layeko chij garerai xoda, sapana kailei natyaga and keep on giving your best my little nano buggggggg 🪲!"
];

let currentWishIndex = 0;

function revealWish() {
    const wishList = document.getElementById('wishList');

    if (currentWishIndex < wishes.length) {
        const newWish = document.createElement('li');
        const wishText = wishes[currentWishIndex];
        newWish.textContent = wishText;
        wishList.appendChild(newWish);
        currentWishIndex++;

        if (wishText === "Malai reels pathauna kailei banda garxeu🤨?" || wishText ==="Malai birsinxeu🤨?") {
            addButtonsReel(newWish);
        }
        if (wishText === "GCES ma naam niskesi mero project haru gardinxeu🤨?") {
            addButtons(newWish);
        }

        dropMoreConfetti(); // Trigger confetti
    } else {
        alert('(Tyo vanna nahune sabda) 😌');
    }
}

function addButtonsReel(wishElement) {
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    noButton.onclick = function() {
        alert("Hoo good goooddd! 😌");
    };

    noButton.textContent = 'No';

    yesButton.onclick = function(){
        if (yesButton.textContent==="No"){
            alert("Hoo good goooddd! 😌")
        }else{
            yesButton.textContent = 'No';
        }
    }
    yesButton.classList.add("p-1", "bg-red-600", "w-12", "border-none", "rounded", "ml-2")
    noButton.classList.add("p-1", "bg-green-600", "w-12", "border-none", "rounded", "ml-2")
    wishElement.appendChild(yesButton);
    wishElement.appendChild(noButton);
}
function addButtons(wishElement) {
    const yesButton = document.createElement('button');
    const noButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.onclick = function() {
        alert("Hoo good goooddd! 😌");
    };

    noButton.textContent = 'No';

    noButton.onclick = function(){
        if (noButton.textContent==="Yes"){
            alert("Hoo good goooddd! 😌")
        }else{
            noButton.textContent = 'Yes';
        }
    }
    yesButton.classList.add("p-1", "bg-green-600", "w-12", "border-none", "rounded", "ml-2")
    noButton.classList.add("p-1", "bg-red-600", "w-12", "border-none", "rounded", "ml-2")
    wishElement.appendChild(yesButton);
    wishElement.appendChild(noButton);
}
// BUFFERING LOGIC
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('buffer-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('buffer-screen').style.display = 'none';
            document.getElementById('main-header').classList.remove('hidden');
            document.getElementById('main-container').classList.remove('hidden');
        }, 500);
    }, 3000); 
});

// SIDEBAR TOGGLE
function toggleMenu() { 
    document.getElementById('sidebar').classList.toggle('active'); 
}

// LOVE METER CALCULATION
function calculateLove() {
    const name = document.getElementById('herName').value;
    if (!name) return alert("Please enter your name first! 🌹");

    // Start Music
    document.getElementById('loveSong').play();

    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');

    let count = 0;
    let target = Math.floor(Math.random() * 5) + 94; // Rigged: 94-98%
    let fill = document.getElementById('fill');
    let pct = document.getElementById('percent');

    let timer = setInterval(() => {
        count++;
        fill.style.width = count + "%";
        pct.innerText = count + "% Match";
        if(count >= target) {
            clearInterval(timer);
            setTimeout(() => {
                document.getElementById('step2').classList.add('hidden');
                document.getElementById('step3').classList.remove('hidden');
            }, 1000);
        }
    }, 45); 
}

// NO BUTTON RUNAWAY LOGIC
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = Math.random() * maxX + 'px';
    noBtn.style.top = Math.random() * maxY + 'px';
});

// YES BUTTON FINAL SCREEN
function showFinal() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.remove('hidden');
}

const themes = {
    cosmic: {
        name: 'Cosmic',
        background: 'linear-gradient(135deg, #42444aff 0%, #764ba2 50%, #f093fb 100%)',
        accent: '#f093fb',
        textColor: 'light',
        hologram: 'cosmic'
    },
    neon: {
        name: 'Neon Cyber',
        background: 'linear-gradient(135deg, #ffffffff 0%, #16213e 50%, #081d36ff 100%)',
        accent: '#00d9ff',
        textColor: 'light',
        hologram: 'neon'
    },
    ocean: {
        name: 'Ocean Depths',
        background: 'linear-gradient(135deg, #667db6  0%, #00deb1ff 50%, #ffd500ff 100%)',
        accent: '#00ff9f',
        textColor: 'light',
        hologram: 'ocean'
    },
    fire: {
        name: 'Flame Core',
        background: 'linear-gradient(135deg, #fff5f6ff 0%, #ff6a88 50%, #ff416c 100%)',
        accent: '#ff6a88',
        textColor: 'light',
        hologram: 'fire'
    },
    sunset: {
        name: 'Sunset Glow',
        background: 'linear-gradient(135deg, #ff6e7f 0%, #60c7ffff 50%, #a23ddcff 100%)',
        accent: '#a23ddc',
        textColor: 'light',
        hologram: 'sunset'
    },
    midnight: {
        name: 'Midnight',
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #0084ffff 100%)',
        accent: '#3498db',
        textColor: 'light',
        hologram: 'midnight'
    },
    royal: {
        name: 'Royal Purple',
        background: 'linear-gradient(135deg, #8e2de2 0%, #000000ff 50%, #b721ff 100%)',
        accent: '#b721ff',
        textColor: 'light',
        hologram: 'royal'
    },
    azure: {
        name: 'Azure Sky',
        background: 'linear-gradient(135deg, #ff00ddff 0%, #001f54 50%, #0084ffff 100%)',
        accent: '#0084ff',
        textColor: 'light',
        hologram: 'azure'
    }
};

let currentTheme = 'cosmic';
let mouseX = 50;
let mouseY = 50;

// DOM Elements
const nftCard = document.getElementById('nftCard');
const cardTitle = document.getElementById('cardTitle');
const cardDescription = document.getElementById('cardDescription');
const cardRarity = document.getElementById('cardRarity');
const cardNumber = document.getElementById('cardNumber');
const cardOwner = document.getElementById('cardOwner');
const themeSelect = document.getElementById('themeSelect');
const fontSelect = document.getElementById('fontSelect');
const downloadBtn = document.getElementById('downloadBtn');
const themeGrid = document.getElementById('themeGrid');

const displayTitle = document.getElementById('displayTitle');
const displayDescription = document.getElementById('displayDescription');
const displayRarity = document.getElementById('displayRarity');
const displayNumber = document.getElementById('displayNumber');
const displayOwner = document.getElementById('displayOwner');

// Initialize theme buttons
function initThemeButtons() {
    Object.entries(themes).forEach(([key, theme]) => {
        const btn = document.createElement('button');
        btn.className = `theme-btn ${key === currentTheme ? 'active' : ''}`;
        btn.style.background = theme.background;
        btn.innerHTML = `<span>${theme.name}</span>`;
        btn.onclick = () => changeTheme(key);
        themeGrid.appendChild(btn);
    });
}

// Update card display
function updateCard() {
    displayTitle.textContent = cardTitle.value;
    displayDescription.textContent = cardDescription.value;
    displayRarity.textContent = cardRarity.value;
    displayNumber.textContent = cardNumber.value;
    displayOwner.textContent = cardOwner.value;
    displayOwner.style.display = cardOwner.value ? 'block' : 'none';
}

// Change theme
function changeTheme(themeKey) {
    currentTheme = themeKey;
    const theme = themes[themeKey];
    
    nftCard.style.background = theme.background;
    nftCard.style.boxShadow = `0 25px 50px -12px ${theme.accent}80, 0 20px 40px -10px ${theme.accent}60, 0 15px 30px -8px ${theme.accent}40`;

// Tambahkan dynamic neon shadow di belakang kartu
const glowEffect = document.querySelector('.glow-effect');
glowEffect.style.background = `
  radial-gradient(circle at 30% 20%, ${theme.accent}33 0%, transparent 50%),
  radial-gradient(circle at 70% 80%, ${theme.accent}22 0%, transparent 60%)
`;
    
    const rarityBadge = document.getElementById('displayRarity');
    rarityBadge.style.background = `${theme.accent}40`;
    rarityBadge.style.borderColor = `${theme.accent}60`;
    
    // Update theme buttons
    document.querySelectorAll('.theme-btn').forEach((btn, index) => {
        const key = Object.keys(themes)[index];
        btn.classList.toggle('active', key === themeKey);
    });
    
    updateHologramOverlay(theme.hologram);
    updateTextureOverlay(themeKey);
}

// Update hologram overlay
function updateHologramOverlay(hologramType) {
    const hologramOverlay = document.querySelector('.hologram-overlay');
    const gradients = {
        cosmic: 'linear-gradient(45deg, rgba(255,0,150,0.2) 0%, rgba(0,255,255,0.2) 25%, rgba(255,255,0,0.2) 50%, rgba(255,0,150,0.2) 75%, rgba(0,255,255,0.2) 100%)',
        neon: 'linear-gradient(45deg, rgba(0,217,255,0.3) 0%, rgba(0,150,255,0.2) 25%, rgba(0,255,200,0.3) 50%, rgba(0,150,255,0.2) 75%, rgba(0,217,255,0.3) 100%)',
        ocean: 'linear-gradient(45deg, rgba(0,255,159,0.3) 0%, rgba(0,150,255,0.3) 50%, rgba(0,255,159,0.3) 100%)',
        fire: 'linear-gradient(45deg, rgba(255,69,0,0.3) 0%, rgba(255,215,0,0.3) 50%, rgba(255,69,0,0.3) 100%)',
        sunset: 'linear-gradient(45deg, rgba(255,110,127,0.3) 0%, rgba(255,160,122,0.3) 50%, rgba(255,110,127,0.3) 100%)',
        midnight: 'linear-gradient(45deg, rgba(52,152,219,0.3) 0%, rgba(155,89,182,0.3) 50%, rgba(52,152,219,0.3) 100%)',
        royal: 'linear-gradient(45deg, rgba(255,215,0,0.3) 0%, rgba(183,33,255,0.3) 50%, rgba(255,215,0,0.3) 100%)',
        azure: 'linear-gradient(45deg, rgba(77,168,218,0.3) 0%, rgba(3,64,120,0.3) 50%, rgba(10,17,40,0.3) 100%)'
    };
    hologramOverlay.style.background = gradients[hologramType] || gradients.cosmic;
}

// Update texture overlay
function updateTextureOverlay(themeKey) {
    const textureOverlay = document.querySelector('.texture-overlay');
    const textures = {
        cosmic: `
            radial-gradient(circle at 30% 20%, rgba(102,126,234,0.15) 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(118,75,162,0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 90%, rgba(240,147,251,0.1) 0%, transparent 50%),
            repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.02) 30px, rgba(255,255,255,0.02) 60px)
        `,
        neon: `
            radial-gradient(ellipse at 0% 0%, rgba(0,217,255,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(0,217,255,0.1) 0%, transparent 50%),
            repeating-linear-gradient(0deg, transparent 0px, transparent 40px, rgba(0,217,255,0.03) 40px, rgba(0,217,255,0.03) 41px)
        `,
        ocean: `
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,159,0.03) 10px, rgba(0,255,159,0.03) 20px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,150,255,0.03) 10px, rgba(0,150,255,0.03) 20px)
        `,
        fire: `
            repeating-linear-gradient(120deg, transparent, transparent 5px, rgba(255,215,0,0.05) 5px, rgba(255,215,0,0.05) 10px),
            repeating-linear-gradient(240deg, transparent, transparent 5px, rgba(255,69,0,0.05) 5px, rgba(255,69,0,0.05) 10px)
        `,
        sunset: `
            linear-gradient(135deg, rgba(255,110,127,0.05) 0%, transparent 50%, rgba(255,160,122,0.05) 100%),
            repeating-radial-gradient(circle at 30% 30%, transparent 0px, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 40px)
        `,
        midnight: `
            repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(52,152,219,0.08) 15px, rgba(52,152,219,0.08) 30px),
            repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(155,89,182,0.06) 15px, rgba(155,89,182,0.06) 30px)
        `,
        royal: `
            repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 10deg, rgba(255,215,0,0.03) 10deg, rgba(255,215,0,0.03) 20deg),
            radial-gradient(circle at 50% 50%, rgba(183,33,255,0.05) 0%, transparent 60%)
        `,
        azure: `
            repeating-linear-gradient(60deg, transparent, transparent 8px, rgba(77,168,218,0.04) 8px, rgba(77,168,218,0.04) 16px),
            repeating-linear-gradient(-60deg, transparent, transparent 8px, rgba(3,64,120,0.04) 8px, rgba(3,64,120,0.04) 16px)
        `
    };
    textureOverlay.style.background = textures[themeKey] || textures.cosmic;
}

// Change font
function changeFont(font) {
    const fonts = {
        orbitron: 'Orbitron, monospace',
        cyberpunk: '"Courier New", monospace',
        futura: '"Helvetica Neue", sans-serif',
        quantum: '"Arial Black", sans-serif'
    };
    nftCard.style.fontFamily = fonts[font] || fonts.orbitron;
}

// Mouse move effect
nftCard.addEventListener('mousemove', (e) => {
    const rect = nftCard.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    
    const spotlightEffect = document.querySelector('.spotlight-effect');
    const theme = themes[currentTheme];
    spotlightEffect.style.background = `radial-gradient(circle 200px at ${mouseX}% ${mouseY}%, ${theme.accent}30 0%, transparent 70%)`;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const rotateX = ((mouseYPos - centerY) / centerY) * 10;
    const rotateY = ((centerX - mouseXPos) / centerX) * 10;
    
    nftCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});

nftCard.addEventListener('mouseenter', () => {
    nftCard.style.transition = 'transform 0.1s ease-out';
});

nftCard.addEventListener('mouseleave', () => {
    nftCard.style.transition = 'transform 0.5s ease-out';
    nftCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    mouseX = 50;
    mouseY = 50;
});

// Download / Export logic
const downloadSelect = document.getElementById('downloadSelect');

downloadBtn.addEventListener('click', async () => {
    downloadBtn.textContent = 'Rendering...';
    downloadBtn.disabled = true;

    try {
        const card = nftCard.cloneNode(true);
        const original = nftCard.getBoundingClientRect();
        card.style.position = 'absolute';
        card.style.top = '-9999px';
        card.style.left = '-9999px';
        card.style.transform = 'none';
        card.style.transition = 'none';
        document.body.appendChild(card);

        // pastikan semua animasi berhenti supaya efeknya fix di frame yang terlihat
        card.querySelectorAll('*').forEach(el => {
            const style = window.getComputedStyle(el);
            el.style.animationPlayState = 'paused';
            el.style.transition = 'none';
            el.style.opacity = style.opacity;
            el.style.mixBlendMode = style.mixBlendMode;
            el.style.filter = style.filter;
            el.style.background = style.background;
            el.style.backgroundImage = style.backgroundImage;
            el.style.backgroundSize = style.backgroundSize;
            el.style.backgroundPosition = style.backgroundPosition;
        });

        // buat canvas dengan resolusi tinggi
        const scale = 3;
        const canvas = document.createElement('canvas');
        canvas.width = original.width * scale;
        canvas.height = original.height * scale;
        const ctx = canvas.getContext('2d');

        // step 1: render dasar dari html2canvas
        const baseCanvas = await html2canvas(card, {
            scale,
            backgroundColor: null,
            useCORS: true,
            allowTaint: true
        });
        ctx.drawImage(baseCanvas, 0, 0);

        // step 2: tambahkan overlay efek secara manual dengan blending
        const overlayLayers = card.querySelectorAll('.light-strip, .glass-reflection, .hologram-overlay, .texture-overlay, .spotlight-effect, .glow-effect');
        overlayLayers.forEach(layer => {
            const cs = window.getComputedStyle(layer);
            const grad = cs.backgroundImage || cs.background;
            const op = parseFloat(cs.opacity) || 1;
            const blend = cs.mixBlendMode || 'normal';

            if (grad && grad.includes('gradient')) {
                // buat pseudo-layer dari gradient
                const temp = document.createElement('canvas');
                temp.width = canvas.width;
                temp.height = canvas.height;
                const tctx = temp.getContext('2d');
                const g = tctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                g.addColorStop(0, 'rgba(255,255,255,0)');
                g.addColorStop(1, 'rgba(255,255,255,0.1)');
                tctx.fillStyle = g;
                tctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.globalAlpha = op;
                ctx.globalCompositeOperation = blend;
                ctx.drawImage(temp, 0, 0);
            }
        });

        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';

        const link = document.createElement('a');
        link.download = `nft-card-${cardTitle.value.replace(/\s+/g, '-').toLowerCase()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        document.body.removeChild(card);
    } catch (err) {
        console.error(err);
        alert('Gagal generate PNG.');
    } finally {
        downloadBtn.textContent = 'Download NFT Card';
        downloadBtn.disabled = false;
    }
});


// Event listeners
cardTitle.addEventListener('input', updateCard);
cardDescription.addEventListener('input', updateCard);
cardRarity.addEventListener('input', updateCard);
cardNumber.addEventListener('input', updateCard);
cardOwner.addEventListener('input', updateCard);
themeSelect.addEventListener('change', (e) => changeTheme(e.target.value));
fontSelect.addEventListener('change', (e) => changeFont(e.target.value));

// Initialize
initThemeButtons();
updateCard();
changeTheme(currentTheme);

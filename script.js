document.addEventListener('DOMContentLoaded', () => {
    const landingPageImages = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
        "29.jpg",
        "30.jpg",
        "31.jpg",
        "32.jpg",
        "33.jpg",
        "34.jpg",
        "35.jpg",
        "36.jpg",
        "37.jpg",
        "38.jpg",
        "39.jpg",
        "40.jpg",
        "41.jpg",
        "42.jpg",
        "43.jpg",
        "44.jpg",
        "45.jpg",
        "46.jpg",
        "47.jpg",
        "48.jpg",
        "49.jpg",
        "50.jpg",
        "51.jpg",
        "52.jpg",
        "53.jpg",
        "54.jpg",
        "55.jpg",
        "56.jpg",
        "57.jpg",
        "58.jpg",
        "59.jpg",
        "60.jpg",
        "61.jpg",
        "62.jpg",
        "63.jpg",
        "64.jpg",
        "65.jpg",
        "66.jpg",
        "67.jpg",
        "68.jpg",
        "69.jpg",
        "70.jpg",
        "71.jpg",
        "72.jpg",
        "73.jpg",
        "74.jpg",
        "75.jpg",
        "76.jpg",
        "77.jpg",
        "78.jpg",
        "79.jpg",
        "80.jpg",
        "81.jpg",
        "82.jpg",
        "83.jpg",
        "84.jpg",
        "85.jpg",
        "86.jpg",
        "87.jpg",
        "88.jpg",
        "89.jpg",
        "90.jpg"
    ];
    
    const numberTwoImages = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
        "29.jpg",
        "30.jpg",
        "31.jpg",
        "32.jpg",
        "33.jpg",
        "34.jpg",
        "35.jpg",
        "36.jpg",
        "37.jpg",
        "38.jpg",
        "39.jpg",
        "40.jpg",
        "41.jpg",
        "42.jpg",
        "43.jpg",
        "44.jpg",
        "45.jpg",
        "46.jpg",
        "47.jpg",
        "48.jpg",
        "49.jpg",
        "50.jpg",
        "51.jpg",
        "52.jpg",
        "53.jpg",
        "54.jpg",
        "55.jpg",
        "56.jpg",
        "57.jpg",
        "58.jpg",
        "59.jpg",
        "60.jpg",
        "61.jpg",
        "62.jpg",
        "63.jpg",
        "64.jpg",
        "65.jpg",
        "66.jpg",
        "67.jpg",
        "68.jpg",
        "69.jpg",
        "70.jpg",
        "71.jpg",
        "72.jpg",
        "73.jpg",
        "74.jpg",
        "75.jpg",
        "76.jpg",
        "77.jpg",
        "78.jpg",
        "79.jpg",
        "80.jpg",
        "81.jpg",
        "82.jpg",
        "83.jpg",
        "84.jpg",
        "85.jpg",
        "86.jpg",
        "87.jpg",
        "88.jpg",
        "89.jpg",
        "90.jpg"
    ];
    // ===========================================


    let isGalleryActive = false;

    // 10 Columns x 12 Rows for a dense, tall "2"
    const shapeMatrix = [
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    const quotesList = [
        "You're my happily ever after.", "Still falling for you.", "My heart chose you.", "Together is my favorite place.", "You complete my world.", "Love grows deeper every day.", "My person, my forever.", "Years together, still butterflies.", "Home is wherever you are.", "You're my greatest blessing.", "Every day I choose you.", "Our love story continues.", "Still crazy about you.", "You're my best decision.", "Forever starts with you.", "Another year loving you.", "My soulmate, my everything.", "Time stands still with you.", "You're my happy place.", "Love you more each day.", "Our journey, our magic.", "Two souls, one heart.", "You're my dream come true.", "Together we're unstoppable.", "My today and all tomorrows.", "You make life beautiful.", "This is what love looks like.", "Lucky doesn't cover it.", "You're my always and forever.", "Our love never gets old."
    ];

    const bgGrid = document.getElementById('background-grid');
    const introContainer = document.getElementById('intro-container');
    const trigger = document.getElementById('cupcake-trigger');
    const galleryContainer = document.getElementById('gallery-container');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalQuote = document.getElementById('modal-quote');
    const closeModal = document.querySelector('.close-btn');
    const overlay = document.getElementById('modal-overlay');

    // --- 3. Generate Straight Background Grid ---
    function generateBackground() {
        for (let i = 0; i < 80; i++) {
            const div = document.createElement('div');
            div.classList.add('bg-imprint');

            // NO ROTATION applied

            const img = document.createElement('img');
            if (landingPageImages.length > 0) {
                img.src = landingPageImages[i % landingPageImages.length];
            } else {
                img.src = `https://picsum.photos/seed/${i + 50}/150/180`;
            }

            div.appendChild(img);
            bgGrid.appendChild(div);
        }
    }
    generateBackground();

    // --- 4. Handle Interaction ---
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isGalleryActive) return;

        document.body.classList.add('light-mode');
        introContainer.classList.add('fade-out');

        setTimeout(() => {
            galleryContainer.classList.add('active');
            buildDenseNumberTwo();
            isGalleryActive = true;
        }, 600);
    });

    // --- 5. Reset Logic (Border Click Only) ---
    document.addEventListener('click', (e) => {
        if (!isGalleryActive) return;

        if (e.target.closest('.polaroid-item') ||
            e.target.closest('.modal-content') ||
            e.target.closest('#cupcake-trigger')) {
            return;
        }

        const borderThresholdX = window.innerWidth * 0.15;
        const borderThresholdY = window.innerHeight * 0.15;

        const x = e.clientX;
        const y = e.clientY;

        const isLeft = x < borderThresholdX;
        const isRight = x > (window.innerWidth - borderThresholdX);
        const isTop = y < borderThresholdY;
        const isBottom = y > (window.innerHeight - borderThresholdY);

        if (isLeft || isRight || isTop || isBottom) {
            resetToHome();
        }
    });

    function resetToHome() {
        isGalleryActive = false;
        galleryContainer.classList.remove('active');
        galleryContainer.innerHTML = '';
        document.body.classList.remove('light-mode');
        introContainer.classList.remove('fade-out');
    }

    // --- 6. Build the Dense Number "2" (Centered) ---
    function buildDenseNumberTwo() {
        const rows = shapeMatrix.length;
        const cols = shapeMatrix[0].length;

        const itemW = 70;
        const itemH = 85;
        const overlapX = -25;
        const overlapY = -35;

        const totalWidth = cols * (itemW + overlapX) - overlapX;
        const totalHeight = rows * (itemH + overlapY) - overlapY;

        const startX = (window.innerWidth - totalWidth) / 2;
        const startY = (window.innerHeight - totalHeight) / 2;

        let counter = 0;

        shapeMatrix.forEach((row, rIndex) => {
            row.forEach((cell, cIndex) => {
                if (cell === 1) {
                    counter++;
                    const quote = quotesList[counter % quotesList.length];
                    createPolaroid(rIndex, cIndex, startX, startY, itemW, itemH, overlapX, overlapY, counter, quote);
                }
            });
        });
    }

    function createPolaroid(row, col, startX, startY, w, h, ox, oy, index, quoteText) {
        const div = document.createElement('div');
        div.classList.add('polaroid-item');

        const jitterX = (Math.random() * 10) - 5;
        const jitterY = (Math.random() * 10) - 5;

        const left = startX + (col * (w + ox)) + jitterX;
        const top = startY + (row * (h + oy)) + jitterY;

        const rotation = (Math.random() * 40) - 20;

        div.style.left = `${left}px`;
        div.style.top = `${top}px`;
        div.style.setProperty('--rot', `${rotation}deg`);

        const randX = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 1000 + 500) + 'px';
        const randY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 1000 + 500) + 'px';
        const randRot = (Math.random() * 720) + 'deg';

        div.style.setProperty('--rand-x', randX);
        div.style.setProperty('--rand-y', randY);
        div.style.setProperty('--rand-rot', randRot);

        const img = document.createElement('img');

        // Logic to cycle through your custom GALLERY images
        if (numberTwoImages.length > 0) {
            img.src = numberTwoImages[index % numberTwoImages.length];
        } else {
            img.src = `https://picsum.photos/seed/${index * 123}/300/350`;
        }

        div.appendChild(img);
        galleryContainer.appendChild(div);

        setTimeout(() => {
            div.classList.add('fly-in');
        }, Math.random() * 800);

        div.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(img.src, quoteText);
        });
    }

    // --- 7. Modal Logic ---
    function openModal(src, quote) {
        modalImg.src = src;
        modalQuote.textContent = quote;
        modal.classList.add('visible');
    }

    function closeModalFunc() {
        modal.classList.remove('visible');
    }

    closeModal.addEventListener('click', closeModalFunc);
    overlay.addEventListener('click', closeModalFunc);
});
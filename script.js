document.addEventListener('DOMContentLoaded', () => {

    // Element References
    const dictionarySection = document.getElementById('dictionary-section');
    const constellationsSection = document.getElementById('constellations-section');
    const dictionaryGrid = document.getElementById('dictionary-grid');
    const constellationsGrid = document.getElementById('constellations-grid');

    const btnDictionary = document.getElementById('btn-dictionary');
    const btnConstellations = document.getElementById('btn-constellations');

    // Load Data from global variable
    try {
        renderDictionary(appData.words);
        renderConstellations(appData.constellations);
    } catch (error) {
        console.error('There was a problem loading the data:', error);
        dictionaryGrid.innerHTML = '<p>Error loading data. Please check the console.</p>';
    }

    // Event Listeners for Tab Switching
    btnDictionary.addEventListener('click', () => {
        showSection('dictionary');
    });

    btnConstellations.addEventListener('click', () => {
        showSection('constellations');
    });

    // Function to Switch Sections
    function showSection(sectionName) {
        if (sectionName === 'dictionary') {
            dictionarySection.style.display = 'block';
            constellationsSection.style.display = 'none';
            btnDictionary.classList.add('active');
            btnConstellations.classList.remove('active');
        } else {
            dictionarySection.style.display = 'none';
            constellationsSection.style.display = 'block';
            btnDictionary.classList.remove('active');
            btnConstellations.classList.add('active');
        }
    }

    // Function to Render Dictionary Words
    function renderDictionary(words) {
        dictionaryGrid.innerHTML = ''; // Clear existing content

        words.forEach(word => {
            const card = document.createElement('div');
            card.className = 'card';

            // Handle optional image
            let imageHtml = '';
            if (word.image && word.image !== '') {
                imageHtml = `<div class="card-image"><img src="${word.image}" alt="${word.cree}"></div>`;
            }

            card.innerHTML = `
                ${imageHtml}
                <div class="card-content">
                    <div class="cree-word">${word.cree}</div>
                    <div class="english-word">${word.english}</div>
                    <div class="definition">${word.definition}</div>
                </div>
            `;

            dictionaryGrid.appendChild(card);
        });
    }

    // Function to Render Constellations
    function renderConstellations(constellations) {
        constellationsGrid.innerHTML = ''; // Clear existing content

        constellations.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';

            // Handle optional image
            let imageHtml = '';
            if (item.image && item.image !== '') {
                imageHtml = `<div class="card-image"><img src="${item.image}" alt="${item.creeName}"></div>`;
            }

            card.innerHTML = `
                ${imageHtml}
                <div class="card-content">
                    <div class="cree-word">${item.creeName}</div>
                    <div class="english-word">${item.englishName}</div>
                    <div class="definition">${item.description}</div>
                </div>
            `;

            constellationsGrid.appendChild(card);
        });
    }
});

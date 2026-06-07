'use strict';

// Load price data from localStorage (set by admin panel)
function getPriceData() {
    const stored = localStorage.getItem('repairDanData');
    if (stored) {
        return JSON.parse(stored);
    }
    // Fallback to original hardcoded data if nothing in localStorage
    return {
        iPhone: {
            models: [
                "8 / 8 Plus / SE",
                "X / XR / XS / XS Max",
                "11 / 11 Pro / 11 Pro Max",
                "12 / 12 Mini / 12 Pro / 12 Pro Max",
                "13 / 13 Mini / 13 Pro / 13 Pro Max",
                "14 / 14 Plus / 14 Pro / 14 Pro Max",
                "15 / 15 Plus / 15 Pro / 15 Pro Max / 16 Series"
            ],
            repairs: {
                battery: { price: "£40-£100", note: "✅ Fully working" },
                screen: { price: "£35-£230", note: "✅ Multiple options" },
                charge: { price: "£40-£50", note: "✅ Fast service" },
                backglass: { price: "£40-£110", note: "✅ Available for iPhone X+" },
                camera: { price: "£40-£80", note: "" },
                water: { price: "£30", note: "⚠️ Do not charge - bring straight in" },
                clean: { price: "£10", note: "✅ Full deep clean" },
                diagnosis: { price: "FREE", note: "✅ No obligation" }
            }
        },
        Samsung: {
            models: [
                "S20 / S21 / S22 / S23 / S24",
                "S20+ / S21+ / S22+ / S23+ / S24+",
                "S20 Ultra → S24 Ultra",
                "A Series (A12 – A55)"
            ],
            repairs: {
                battery: { price: "£45-£65", note: "✅ Quick service" },
                screen: { price: "£70-£260", note: "✅ Curved & flat available" },
                charge: { price: "£45-£55", note: "" },
                camera: { price: "£40-£80", note: "" },
                water: { price: "£30", note: "⚠️ Do not charge - bring straight in" },
                clean: { price: "£10", note: "✅ Full deep clean" },
                diagnosis: { price: "FREE", note: "✅ No obligation" }
            }
        },
        Other: {
            models: ["Android Phone", "Tablet", "Other Device"],
            repairs: {
                charge: { price: "£40-£50", note: "" },
                camera: { price: "£40-£80", note: "" },
                water: { price: "£30", note: "⚠️ Do not charge - bring straight in" },
                diagnosis: { price: "FREE", note: "✅ No obligation" }
            }
        }
    };
}

let currentBrand, currentModel, currentFault;

window.addEventListener('load', function () {
    history.replaceState({ step: 'brand' }, '');
});

window.addEventListener('popstate', function (e) {
    const step = e.state && e.state.step;
    if (step) goBack(step);
});

function selectBrand(brand) {
    currentBrand = brand;
    document.getElementById('step-brand').classList.add('hidden');
    document.getElementById('selected-brand-model').textContent = brand;
    loadModels(brand);
    document.getElementById('step-model').classList.remove('hidden');
    history.pushState({ step: 'model' }, '');
}

function loadModels(brand) {
    const container = document.getElementById('model-container');
    container.innerHTML = '';
    const priceData = getPriceData();
    const models = priceData[brand] && priceData[brand].models ? priceData[brand].models : [];
    
    if (models.length === 0) {
        container.innerHTML = '<p style="color: #CBD5E1; text-align: center;">No models available yet</p>';
        return;
    }

    models.forEach(model => {
        const btn = document.createElement('button');
        btn.className = 'model-btn';
        btn.textContent = model;
        btn.onclick = () => selectModel(model);
        container.appendChild(btn);
    });
}

function selectModel(model) {
    currentModel = model;
    document.getElementById('step-model').classList.add('hidden');
    document.getElementById('selected-model-fault').textContent = `${currentBrand} • ${model}`;
    loadRepairs();
    document.getElementById('step-fault').classList.remove('hidden');
    history.pushState({ step: 'fault' }, '');
}

function loadRepairs() {
    const container = document.querySelector('.fault-list');
    container.innerHTML = '';
    const priceData = getPriceData();
    const repairs = priceData[currentBrand] && priceData[currentBrand].repairs ? priceData[currentBrand].repairs : {};

    if (Object.keys(repairs).length === 0) {
        container.innerHTML = '<p style="color: #CBD5E1; text-align: center;">No repairs available yet</p>';
        return;
    }

    Object.keys(repairs).forEach(repair => {
        const btn = document.createElement('button');
        btn.className = 'fault-btn';
        btn.textContent = `${capitalizeWords(repair)}`;
        btn.onclick = () => selectFault(repair);
        container.appendChild(btn);
    });
}

function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function selectFault(fault) {
    currentFault = fault;
    document.getElementById('step-fault').classList.add('hidden');
    showPrice();
    document.getElementById('step-result').classList.remove('hidden');
    history.pushState({ step: 'result' }, '');
}

function customQuote() {
    return `<div class="price-tag">Call for quote</div>
            <div class="explanation">📞 Message or call me with your model and I'll give you a fixed price instantly. No obligation.</div>`;
}

function showPrice() {
    const priceData = getPriceData();
    const brandData = priceData[currentBrand];
    const repairData = brandData && brandData.repairs && brandData.repairs[currentFault];

    let priceHTML = '';

    if (!repairData) {
        priceHTML = customQuote();
    } else {
        priceHTML = `<div class="price-tag">${repairData.price}</div>`;
        if (repairData.note) {
            priceHTML += `<div class="explanation">${repairData.note}</div>`;
        }
    }

    priceHTML += `<p class="note-text">ℹ️  All prices estimated & negotiable – part prices vary</p>`;
    document.getElementById('result-content').innerHTML = priceHTML;
}

function goBack(to) {
    document.querySelectorAll('.card').forEach(card => card.classList.add('hidden'));
    if (to === 'brand') document.getElementById('step-brand').classList.remove('hidden');
    if (to === 'model') {
        document.getElementById('step-model').classList.remove('hidden');
    }
    if (to === 'fault') {
        loadRepairs();
        document.getElementById('step-fault').classList.remove('hidden');
    }
}

function contactMe() {
    window.open('https://m.me/therepardan', '_blank');
}

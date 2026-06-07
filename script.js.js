'use strict';

const priceData = {
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
        battery: {
            "8 / 8 Plus / SE": { official: "N/A", budget: "N/A" },
            "X / XR / XS / XS Max": { official: "£50", budget: "£30", note: "✅ Fully working, may show 'Unknown Part'" },
            "11 / 11 Pro / 11 Pro Max": { official: "£40", budget: "£35", note: "✅ Fully working, may show 'Unknown Part'" },
            "12 / 12 Mini / 12 Pro / 12 Pro Max": { official: "£45", budget: "£35", note: "✅ Fully working, may show 'Unknown Part'" },
            "13 / 13 Mini / 13 Pro / 13 Pro Max": { official: "£50", budget: "£40", note: "✅ Fully working, may show 'Unknown Part'" },
            "14 / 14 Plus / 14 Pro / 14 Pro Max": { official: "£60", budget: "£50", note: "✅ Fully working, may show 'Unknown Part'" },
            "15 / 15 Plus / 15 Pro / 15 Pro Max / 16 Series": { official: "£75 – £100", budget: "£50 – £80", note: "✅ Fully working, may show 'Unknown Part'" }
        },
        screen: {
            "8 / 8 Plus / SE": { premium: "£50", official: "£70", note: "✅ Premium = high quality | Official = original" },
            "X / XR / XS / XS Max": { budget: "£35", premium: "£60", official: "£90", note: "✅ Budget = basic working | Premium = high quality | Official = original" },
            "11 / 11 Pro / 11 Pro Max": { budget: "£35", premium: "£80", official: "£100", note: "✅ Budget = basic working | Premium = high quality | Official = original" },
            "12 / 12 Mini / 12 Pro / 12 Pro Max": { budget: "£40", premium: "£90", official: "£120", note: "✅ Budget = basic working | Premium = high quality | Official = original" },
            "13 / 13 Mini / 13 Pro / 13 Pro Max": { budget: "On request", premium: "£110", official: "£150", note: "✅ Budget available on request | Premium = high quality | Official = original" },
            "14 / 14 Plus / 14 Pro / 14 Pro Max": { budget: "On request", premium: "£140", official: "£170", note: "✅ Budget available on request | Premium = high quality | Official = original" },
            "15 / 15 Plus / 15 Pro / 15 Pro Max / 16 Series": { budget: "On request", premium: "£170", official: "£230", note: "✅ Budget available on request | Premium = high quality | Official = original" }
        },
        charge: {
            "8 / 8 Plus / SE": "£40",
            "X / XR / XS / XS Max": "£40",
            "11 / 11 Pro / 11 Pro Max": "£40",
            "12 / 12 Mini / 12 Pro / 12 Pro Max": "£40",
            "13 / 13 Mini / 13 Pro / 13 Pro Max": "£40",
            "14 / 14 Plus / 14 Pro / 14 Pro Max": "£40",
            "15 / 15 Plus / 15 Pro / 15 Pro Max / 16 Series": "£50",
            note: "✅ iPhone 15/16 = USB‑C port"
        },
        backglass: { all: "£40 – £110", note: "✅ Available for iPhone X through 16 series" },
        camera: { all: "£40 – £80" },
        water: { all: "£30", note: "⚠️ DO NOT charge device — bring it straight in. No fix = No fee." }
    },

    Samsung: {
        models: [
            "S20 / S21 / S22 / S23 / S24",
            "S20+ / S21+ / S22+ / S23+ / S24+",
            "S20 Ultra → S24 Ultra",
            "S25 / S25+ / S25 Edge / S25 Ultra",
            "A Series (A12 – A55)"
        ],
        battery: {
            "S20 / S21 / S22 / S23 / S24": "£55+",
            "S20+ / S21+ / S22+ / S23+ / S24+": "£60+",
            "S20 Ultra → S24 Ultra": "£65+",
            "S25 / S25+ / S25 Edge / S25 Ultra": "On request",
            "A Series (A12 – A55)": "£45 – £60"
        },
        screen: {
            "S20 / S21 / S22 / S23 / S24": { premium: "£140", official: "£190", note: "✅ Curved + Flat available" },
            "S20+ / S21+ / S22+ / S23+ / S24+": { premium: "£160", official: "£220", note: "✅ Curved + Flat available" },
            "S20 Ultra → S24 Ultra": { premium: "£180", official: "£260", note: "✅ Curved + Flat available" },
            "S25 / S25+ / S25 Edge / S25 Ultra": { premium: "On request", official: "On request", note: "✨ Dynamic AMOLED Screen Repairs" },
            "A Series (A12 – A55)": { premium: "£70 – £110", official: "On request" }
        },
        charge: { 
            all: "£45 – £55",
            "S25 / S25+ / S25 Edge / S25 Ultra": "On request"
        },
        camera: { all: "£40 – £80" },
        water: { all: "£30", note: "⚠️ DO NOT charge device — bring it straight in. No fix = No fee." }
    },

    Other: {
        models: ["Android Phone", "Tablet", "Other Device"],
        charge: { all: "£40 – £50" },
        camera: { all: "£40 – £80" },
        water: { all: "£30", note: "⚠️ DO NOT charge device — bring it straight in. No fix = No fee." }
    },

    Console: {
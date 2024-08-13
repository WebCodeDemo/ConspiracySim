const gameState = {
    currentLocation: 'townMap',
    plotProgress: 0,
    unlockedBuildings: ['park', 'gym', 'cityHall', 'coffeeShop', 'grocery', 'bank', 'library', 'school', 'infoKiosk']
};

const plotPoints = [
    { npc: 'oldMan', location: 'park', unlocks: [] },
    { npc: 'librarian', location: 'library', unlocks: [] },
    { npc: 'barista', location: 'coffeeShop', unlocks: [] },
    { npc: 'receptionist', location: 'cityHall', unlocks: ['lab'] },
    { npc: 'scientist', location: 'lab', unlocks: ['mayorOffice'] },
    { npc: 'mayor', location: 'mayorOffice', unlocks: [] }
];

const locations = {
    townMap: {
        name: "Town Map",
        description: "Colorado Springs, Colorado. A quiet town with an uneasy atmosphere.",
        getOptions: () => gameState.unlockedBuildings.map(building => ({ text: locations[building].name, action: building }))
    },
	park: {
        name: "Palmer Park",
        description: "A serene space, but something lurks beneath the tranquility.",
        npcs: [ 'jogger', 'dogWalker', 'oldMan']
    },
    gym: {
        name: "Planet Fitness",
        description: "A place for health enthusiasts and those trying to keep up appearances.",
        npcs: ['gymgoer', 'trainer']
    },
    cityHall: {
        name: "City Hall",
        description: "The center of local government. Something feels off.",
        npcs: ['clerk', 'receptionist']
    },
	mayorOffice: {
        name: "Mayor's Office",
        description: "The seat of power, shrouded in mystery.",
        npcs: ['assistant', 'mayor']
    },
	coffeeShop: {
        name: "Starbucks Cafe",
        description: "A popular spot for locals to gather and chat.",
        npcs: ['regularCustomer', 'barista']
    },
    lab: {
        name: "Research Laboratory",
        description: "A sterile environment with an undercurrent of unease.",
        npcs: ['labAssistant', 'scientist']
    },
    grocery: {
        name: "Kroger Grocery",
        description: "A small store with a surprising variety of products.",
        npcs: ['customer', 'shopkeeper']
    },
    bank: {
        name: "Freedom Bank",
        description: "A financial institution with an air of detached professionalism.",
        npcs: ['teller', 'manager']
    },
	library: {
        name: "Public Library",
        description: "A repository of knowledge, or perhaps secrets.",
        npcs: ['student', 'librarian']
    },
	infoKiosk: {
        name: "Information Kiosk",
        description: "A small booth where a friendly attendant offers guidance to visitors.",
        npcs: ['hintGuy']
    },
    school: {
        name: "Elementary School",
        description: "A place of learning, filled with the sounds of children.",
        npcs: [ 'janitor', 'teacher']
    }
};

const dialogues = {
    // Plot-relevant NPCs
    oldMan: {
        default: "Beautiful day, isn't it? Or is it? I can never tell anymore.",
        hint: "Listen, kid. Be careful when trusting your instincts. ... You seem like a smart person. C'mon, did you figure it out already? If not, go pick up a 1968 copy of Dune from the public library.",
        plotPoint: 0
    },
    librarian: {
        default: "Looking for anything specific? Our new arrivals are... interesting.",
        hint: "Dune? Which year? 1968? Do you want the red copy or the blue copy? The red? Very well then. Come with me to my office ... Do you know what this book is about? Do you beleive in genetic predestination? I should tell you about the last person that checked out this book. She worked in town, I don't remember her job.",
        plotPoint: 1
    },
    barista: {
        default: "What can I get for you? Our special today is... um, I forgot.",
        hint: "1968 Dune? Of course. Listen to me, something is going on, and I think I figured it out. Have you ever seen Inception? I called the city and I think by the questions I was asking, someone on the other end of that line knows that I know. It... is so disgusting and horrible. Learning about this truth will instantly make one want to commit suicide. I'm not kidding, that's how I felt, I felt the only escape was killing myself. I went to Denver to get mental assistance.",
        plotPoint: 2
    },
    receptionist: {
        default: "Welcome to City Hall. How may I assist you today?",
        hint: "Hello, I'm sorry I have no idea what you're talking about. I suggest that you, please, help us, by making your request more clear. If you need an insolated place to play the trumpet, may I suggest you follow the trail that starts at the bend of Twinson road. Please, get help, if you need any.",
        plotPoint: 3
    },
    scientist: {
        default: "This is a restricted area. How did you get in here?",
        hint: "The receptionist, huh? ... I used to research linguistics. One day, I randomly had the urge to pursue a career doing Cognitive Engineering. And by chance, I had a connection that gave me the job working here, no need to relocate. It all seemed way too easy. Then I realized… they seem to be doing this to everyone. The CIA is pulling the strings in this town. We are implanting ideas, and the subject freely and 100% believes that they themselves are coming up with the idea, but it’s all orchestrated. Implanted ideas. It is the ultimate mind control, completely undetectable. That’s the work we’re doing in this lab. And I think the delivery method is 5G. It has to be, because the control is everywhere. In every building, in every car, house, at the park, anywhere you can possibly go. Does this sound crazy? Please believe me. This is all for the greater good. This is all for the greater good. ",
        plotPoint: 4
    },
    mayor: {
        default: "Ah, a concerned citizen. What brings you to my office?",
        hint: "The mayor gives you a suitcase with clothes, pills, a fake passport, fake ID, some Chinese credit cards, and a map with Beijing, China circled in red ink. ",
        plotPoint: 5
    },
	hintGuy: {
        default: "Welcome to our town! Need any help finding your way around?",
        hint: "Let me think... I might have heard something that could help you."
    },
    // Filler NPCs
    jogger: {
        default: "Just... trying to... stay... healthy...",
        hint: "Just... trying to... stay... healthy..."
    },
    dogWalker: {
        default: "My dog's been acting strange lately. Must be something in the air.",
        hint: "My dog's been acting strange lately. Must be something in the air."
    },
    student: {
        default: "So much studying to do. It's like they're trying to keep us busy all the time.",
        hint: "So much studying to do. It's like they're trying to keep us busy all the time."
    },
    regularCustomer: {
        default: "The coffee here is the only thing that feels real anymore.",
        hint: "The coffee here is the only thing that feels real anymore."
    },
    clerk: {
        default: "Just another day pushing papers. Nothing ever changes here.",
        hint: "Just another day pushing papers. Nothing ever changes here."
    },
    labAssistant: {
        default: "I'm not authorized to discuss our work. Please speak with the lead scientist.",
        hint: "I'm not authorized to discuss our work. Please speak with the lead scientist."
    },
    assistant: {
        default: "The mayor is very busy. Do you have an appointment?",
        hint: "The mayor is very busy. Do you have an appointment?"
    },
    shopkeeper: {
        default: "Welcome! Let me know if you need help finding anything.",
        hint: "Welcome! Let me know if you need help finding anything."
    },
    customer: {
        default: "Have you noticed the prices lately? Everything's getting so expensive.",
        hint: "Have you noticed the prices lately? Everything's getting so expensive."
    },
    trainer: {
        default: "Push yourself to the limit! No pain, no gain, motherfucker!",
        hint: "Push yourself to the limit! No pain, no gain, motherfucker!"
    },
    gymgoer: {
        default: "I feel compelled to come here everyday. It makes me feel good.",
        hint: "I feel compelled to come here everyday. It makes me feel good."
    },
    teller: {
        default: "How may I assist you with your banking needs today?",
        hint: "How may I assist you with your banking needs today?"
    },
    manager: {
        default: "Everything is in order. Nothing to worry about.",
        hint: "Everything is in order. Nothing to worry about."
    },
    teacher: {
        default: "The children seem... different lately. More compliant.",
        hint: "The children seem... different lately. More compliant."
    },
    janitor: {
        default: "I see everything that goes on in this school. Everything.",
        hint: "I see everything that goes on in this school. Everything."
    }
};

function changeLocation(newLocation) {
    if (locations[newLocation]) {
        gameState.currentLocation = newLocation;
        updateGameDisplay();
    } else {
        console.error(`Location ${newLocation} not found`);
    }
}

const hints = [
    "I've seen an old man at Palmer park who seems to know a lot about this town.",
    "The library is a great place to learn about... well, anything really.",
    "If you're looking for the latest gossip, the coffee shop is the place to be.",
    "City Hall is where all the important decisions are made. Maybe try there?",
    "I've heard whispers about a secret lab, but that's just a rumor... right?",
    "The mayor's office? That's strictly off-limits to the public. But why?"
];

function getHint() {
    if (gameState.plotProgress >= hints.length) {
        return "I'm sorry, but I don't have any more information that could help you.";
    }
    return hints[gameState.plotProgress];
}

function talkTo(npc) {
    const dialogue = dialogues[npc];
    if (dialogue) {
        let message;
        if (npc === 'hintGuy') {
            message = getHint();
        } else if ('plotPoint' in dialogue) {
            // For plot-relevant NPCs
            message = gameState.plotProgress >= dialogue.plotPoint ? dialogue.hint : dialogue.default;
        } else {
            // For filler NPCs
            message = dialogue.default;
        }
        document.getElementById('message-area').textContent = message;
        
        const currentPlotPoint = plotPoints[gameState.plotProgress];
        if (currentPlotPoint && currentPlotPoint.npc === npc && gameState.plotProgress === dialogue.plotPoint) {
            gameState.plotProgress++;
            gameState.unlockedBuildings.push(...currentPlotPoint.unlocks);
            if (gameState.plotProgress >= plotPoints.length) {
                endGame();
            }
        }
    } else {
        console.error(`Dialogue for ${npc} not found`);
    }
}

function endGame() {
    document.getElementById('content-area').innerHTML = `
        <h2>The Veil of Ignorance Lifts</h2>
        <p>The mayor says: So you've made it this far. Congratulations and condolences. Question, have you ever seen The Truman Show?</p>
		<br>
        <p>The mayor says: You see, everything you have experienced has been a part of the plan. Everyone you have met on your little journey of discovery, the old man, the librarian, the barista, the receptionist, the scientist, they were all implanted with the ideas to lead you here. Even your parents were arranged, all for you to be our agent. We have already implanted the idea in you to say yes to joining. And we've already implanted your first mission. Just go with the flow. Trust your instincts, they are all programmed to get you to do what we want you to. Don't worry, it will all have the illusion of free will, it will all feel exactly like you're the one making the decisions.</p>
        <br>
		<p>The mayor says: Welcome to CIA.</p>
    `;
}

function updateGameDisplay() {
    const location = locations[gameState.currentLocation];
    document.getElementById('location-name').textContent = location.name;
    const contentArea = document.getElementById('content-area');
    
    if (gameState.currentLocation === 'townMap') {
        contentArea.innerHTML = `
            <p>${location.description}</p>
            ${location.getOptions().map(option => `
                <button onclick="handleAction('${option.action}')">${option.text}</button>
            `).join('')}
        `;
    } else {
        contentArea.innerHTML = `
            <p>${location.description}</p>
            ${location.npcs.map(npc => `
                <button onclick="talkTo('${npc}')">${npc}</button>
            `).join('')}
            <button onclick="changeLocation('townMap')">Return to Town Map</button>
        `;
    }
}

function handleAction(action) {
    if (locations[action]) {
        changeLocation(action);
    } else {
        talkTo(action);
    }
}

// Initialize the game
updateGameDisplay();

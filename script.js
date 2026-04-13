const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

let userState = {
    step: 'idle', // idle, asking_name, asking_guests, asking_time, confirming
    intent: null,
    name: '',
    guests: 0,
    time: null
};

// Initialize dynamic stats
window.onload = () => {
    const tables = Math.floor(Math.random() * 15) + 5;
    const wait = Math.floor(Math.random() * 25) + 5;
    document.getElementById('dynamic-tables').innerText = tables;
    document.getElementById('dynamic-wait').innerText = `~${wait}m`;
};

// Simulated Database/State
const restaurantState = {
    tablesFree: 12,
    queueLength: 4,
    avgWaitTime: 15,
    hours: { start: 10, end: 23 } // 10 AM to 11 PM
};

function appendMessage(role, text, customHTML = '') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${role}`;
    msgDiv.innerHTML = text + customHTML;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botResponse(text, delay = 600) {
    setTimeout(() => {
        appendMessage('bot', text);
    }, delay);
}

function handleQuickAction(action) {
    appendMessage('user', action);
    processInput(action.toLowerCase());
}

sendBtn.addEventListener('click', () => {
    const input = chatInput.value.trim();
    if (input) {
        appendMessage('user', input);
        chatInput.value = '';
        processInput(input.toLowerCase());
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

function processInput(input) {
    if (userState.step === 'idle') {
        if (input.includes('queue') || input.includes('join')) {
            userState.intent = 'queue';
            userState.step = 'asking_name';
            botResponse("Certainly. May I have the name for the request?");
        } else if (input.includes('reserve') || input.includes('book')) {
            userState.intent = 'reserve';
            userState.step = 'asking_name';
            botResponse("It would be a pleasure. To whom should I address this reservation?");
        } else if (input.includes('wait') || input.includes('time')) {
            const wait = document.getElementById('dynamic-wait').innerText;
            botResponse(`Our current estimated wait time is approximately ${wait}. Would you like to join the virtual queue?`, 
            `<div class="quick-actions"><span class="action-chip" onclick="handleQuickAction('Yes, Join Queue')">Yes, Join Queue</span></div>`);
        } else {
            botResponse("I'm here to manage your dining needs. You can ask to join the queue, reserve a table, or check current wait times.");
        }
    } 
    
    else if (userState.step === 'asking_name') {
        userState.name = input.charAt(0).toUpperCase() + input.slice(1);
        userState.step = 'asking_guests';
        botResponse(`Thank you, ${userState.name}. For how many guests should I prepare a space?`);
    }

    else if (userState.step === 'asking_guests') {
        const guests = parseInt(input.match(/\d+/) ? input.match(/\d+/)[0] : 0);
        if (guests > 0) {
            userState.guests = guests;
            if (userState.intent === 'queue') {
                finalizeBooking();
            } else {
                userState.step = 'asking_time';
                botResponse(`Excellent. And at what time should we expect your arrival? (Please use HH:MM AM/PM format)`);
            }
        } else {
            botResponse("I apologize, could you please specify the number of guests in digits?");
        }
    } 
    
    else if (userState.step === 'asking_time') {
        if (validateTime(input)) {
            userState.time = input;
            finalizeBooking();
        } else {
            showBadTimeModal();
            botResponse("I'm afraid we are closed at that time. Would you like to suggest another time between 10 AM and 11 PM?");
        }
    }
}

function validateTime(timeStr) {
    // Basic time parsing (supports "10am", "10 PM", "22:00")
    const match = timeStr.match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);
    if (!match) return false;
    
    let hour = parseInt(match[1]);
    const ampm = match[3] ? match[3].toLowerCase() : null;
    
    if (ampm === 'pm' && hour < 12) hour += 12;
    if (ampm === 'am' && hour === 12) hour = 0;
    
    return hour >= restaurantState.hours.start && hour < restaurantState.hours.end;
}

function finalizeBooking() {
    const isQueue = userState.intent === 'queue';
    const waitTime = document.getElementById('dynamic-wait').innerText;
    
    let responseText = isQueue 
        ? `Splendid, ${userState.name}. You have been added to our virtual queue. Your position is #${restaurantState.queueLength + 1}.`
        : `Confirmed, ${userState.name}. Your reservation for ${userState.guests} guests is set for ${userState.time}. We look forward to your arrival.`;

    const cardHTML = `
        <div class="booking-card">
            <h4>${isQueue ? 'Queue Confirmation' : 'Reservation Confirmed'}</h4>
            <p><strong>Name:</strong> ${userState.name}</p>
            <p><strong>Guests:</strong> ${userState.guests}</p>
            ${!isQueue ? `<p><strong>Time:</strong> ${userState.time}</p>` : ''}
            <p style="color: var(--gold); margin-top: 5px;">${isQueue ? `Est. wait: ${waitTime}` : 'Tasty food is waiting....'}</p>
        </div>
    `;

    // Persist to localStorage for admin view
    const newBooking = {
        name: userState.name,
        guests: userState.guests,
        time: userState.time || `${waitTime} wait`,
        type: isQueue ? 'Queue' : 'Reservation',
        timestamp: new Date().getTime()
    };
    const currentBookings = JSON.parse(localStorage.getItem('luxeat_bookings') || '[]');
    currentBookings.unshift(newBooking);
    localStorage.setItem('luxeat_bookings', JSON.stringify(currentBookings.slice(0, 10))); // Keep last 10

    botResponse(responseText, 800);
    setTimeout(() => {
        appendMessage('bot', '', cardHTML);
        showModal('confirm-modal');
        resetState();
    }, 1200);
}

function showModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function showBadTimeModal() {
    showModal('bad-time-modal');
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function resetState() {
    userState = { step: 'idle', intent: null, name: '', guests: 0, time: null };
}

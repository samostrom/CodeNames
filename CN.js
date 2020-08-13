// Constants

const WORD_BANK = [
    'Acre', 'Addendum' ,'Advertise', 'Aisle', 'Aircraft', 'Aircraft', 'Alligator',
    'Alphabetize', 'America', 'Ankle', 'Apathy', 'Applause', 'Applesauc', 'Application',
    'Archaeologist', 'Aristocrat', 'Arm', 'Armada', 'Asleep', 'Astronaut', 'Athlete', 'Atlantis',
    'Aunt', 'Avocado', 'Baby-Sitter', 'Backbone', 'Bag', 'Baguette', 'Bald', 'Balloon', 'Banana',
    'Banister', 'Baseball', 'Baseboards', 'Basketball', 'Bat', 'Battery', 'Beach', 'Beanstalk', 
    'Bedbug', 'Beer', 'Beethoven', 'Belt', 'Bib', 'Bicycle', 'Big', 'Bike', 'Billboard', 'Bird', 
    'Birthday', 'Bite', 'Blacksmith', 'Blanket', 'Bleach', 'Blimp', 'Blossom', 'Blueprint', 
    'Blunt', 'Blur', 'Boa', 'Boat', 'Bob', 'Bobsled', 'Body', 'Bomb', 'Bonnet', 'Book', 'Booth', 
    'Bowtie', 'Box', 'Boy', 'Brainstorm', 'Brand', 'Brave', 'Bride', 'Bridge', 'Broccoli', 
    'Broken', 'Broom', 'Bruise', 'Brunette', 'Bubble', 'Buddy', 'Buffalo', 'Bulb', 'Bunny', 
    'Bus', 'Buy', 'Cabin', 'Cafeteria', 'Cake', 'Calculator', 'Campsite', 'Can', 'Canada', 
    'Candle', 'Candy', 'Cape', 'Capitalism', 'Car', 'Cardboard', 'Cartography', 'Cat', 'Cd', 
    'Ceiling', 'Cell', 'Century', 'Chair', 'Chalk', 'Champion', 'Charger', 'Cheerleader', 
    'Chef', 'Chess', 'Chew', 'Chicken', 'Chime', 'China', 'Chocolate', 'Church', 'Circus', 
    'Clay', 'Cliff', 'Cloak', 'Clockwork', 'Clown', 'Clue', 'Coach', 'Coal', 'Coaster', 'Cog', 
    'Cold', 'College', 'Comfort', 'Computer', 'Cone', 'Constrictor', 'Continuum',
    'Conversation', 'Cook', 'Coop', 'Cord', 'Corduroy', 'Cot', 'Cough', 'Cow', 'Cowboy', 
    'Crayon', 'Cream', 'Crisp', 'Criticize', 'Crow', 'Cruise', 'Crumb', 'Crust', 'Cuff', 
    'Curtain', 'Cuticle', 'Czar', 'Dad', 'Dart', 'Dawn', 'Day', 'Deep', 'Defect', 'Dent', 
    'Dentist', 'Desk', 'Dictionary', 'Dimple', 'Dirty', 'Dismantle', 'Ditch', 'Diver', 
    'Doctor', 'Dog', 'Doghouse', 'Doll', 'Dominoes', 'Door', 'Dot', 'Drain', 'Draw', 'Dream', 
    'Dress', 'Drink', 'Drip', 'Drums', 'Dryer', 'Duck', 'Dump', 'Dunk', 'Dust', 'Ear', 'Eat', 
    'Ebony', 'Elbow', 'Electricity', 'Elephant', 'Elevator', 'Elf', 'Elm', 'Engine', 'England', 
    'Ergonomic', 'Escalator', 'Eureka', 'Europe', 'Evolution', 'Extension', 'Eyebrow', 'Fan', 
    'Fancy', 'Fast', 'Feast', 'Fence', 'Feudalism', 'Fiddle', 'Figment', 'Finger', 'Fire', 
    'First', 'Fishing', 'Fix', 'Fizz', 'Flagpole', 'Flannel', 'Flashlight', 'Flock', 'Flotsam', 
    'Flower', 'Flu', 'Flush', 'Flutter', 'Fog', 'Foil', 'Football', 'Forehead', 'Forever', 
    'Fortnight', 'France', 'Freckle', 'Freight', 'Fringe', 'Frog', 'Frown', 'Gallop', 'Game',
    'Garbage', 'Garden', 'Gasoline', 'Gem', 'Ginger', 'Gingerbread', 'Girl', 'Glasses', 
    'Goblin', 'Gold', 'Goodbye', 'Grandpa', 'Grape', 'Grass', 'Gratitude', 'Gray', 'Green', 
    'Guitar', 'Gum', 'Gumball', 'Hair', 'Half', 'Handle', 'Handwriting', 'Hang', 'Happy', 'Hat', 
    'Hatch', 'Headache', 'Heart', 'Hedge', 'Helicopter', 'Hem', 'Hide', 'Hill', 'Hockey', 
    'Homework', 'Honk', 'Hopscotch', 'Horse', 'Hose', 'Hot', 'House', 'Houseboat', 'Hug', 
    'Humidifier', 'Hungry', 'Hurdle', 'Hurt', 'Hut', 'Ice', 'Implode', 'Inn', 'Inquisition', 
    'Intern', 'Internet', 'Invitation', 'Ironic', 'Ivory', 'Ivy', 'Jade', 'Japan', 'Jeans', 
    'Jelly', 'Jet', 'Jig', 'Jog', 'Journal', 'Jump', 'Key', 'Killer', 'Kilogram', 'King', 'Kitchen', 
    'Kite', 'Knee', 'Kneel', 'Knife', 'Knight', 'Koala', 'Lace', 'Ladder', 'Ladybug', 'Lag',
    'Landfill', 'Lap', 'Laugh', 'Laundry', 'Law', 'Lawn', 'Lawnmower', 'Leak', 'Leg', 
    'Letter', 'Level', 'Lifestyle', 'Ligament', 'Light', 'Lightsaber', 'Lime', 'Lion', 
    'Lizard', 'Log', 'Loiterer', 'Lollipop', 'Loveseat', 'Loyalty', 'Lunch', 'Lunchbox', 
    'Lyrics', 'Machine', 'Macho', 'Mailbox', 'Mammoth', 'Mark', 'Mars', 'Mascot', 'Mast', 
    'Matchstick', 'Mate', 'Mattress', 'Mess', 'Mexico', 'Midsummer', 'Mine', 'Mistake', 
    'Modern', 'Mold', 'Mom', 'Monday', 'Money', 'Monitor', 'Monster', 'Mooch', 'Moon', 'Mop', 
    'Moth', 'Motorcycle', 'Mountain', 'Mouse', 'Mower', 'Mud', 'Music', 'Mute', 'Nature',
    'Negotiate', 'Neighbor', 'Nest', 'Neutron', 'Niece', 'Night', 'Nightmare', 'Nose', 
    'Oar', 'Observatory', 'Office', 'Oil', 'Old', 'Olympian', 'Opaque', 'Opener', 'Orbit',
    'Organ', 'Organize', 'Outer', 'Outside', 'Ovation', 'Overture', 'Pail', 'Paint', 
    'Pajamas', 'Palace', 'Pants', 'Paper', 'Paper', 'Park', 'Parody', 'Party', 'Password', 
    'Pastry', 'Pawn', 'Pear', 'Pen', 'Pencil', 'Pendulum', 'Penis', 'Penny', 'Pepper', 
    'Personal', 'Philosopher', 'Phone', 'Photograph', 'Piano', 'Picnic', 'Pigpen', 
    'Pillow', 'Pilot', 'Pinch', 'Ping', 'Pinwheel', 'Pirate', 'Plaid', 'Plan', 'Plank', 
    'Plate', 'Platypus', 'Playground', 'Plow', 'Plumber', 'Pocket', 'Poem', 'Point',
    'Pole', 'Pomp', 'Pong', 'Pool', 'Popsicle', 'Population', 'Portfolio', 'Positive',
    'Post', 'Princess', 'Procrastinate', 'Protestant', 'Psychologist', 'Publisher', 
    'Punk', 'Puppet', 'Puppy', 'Push', 'Puzzle', 'Quarantine', 'Queen', 'Quicksand', 
    'Quiet', 'Race', 'Radio', 'Raft', 'Rag', 'Rainbow', 'Rainwater', 'Random', 'Ray', 
    'Recycle', 'Red', 'Regret', 'Reimbursement', 'Retaliate', 'Rib', 'Riddle', 'Rim', 
    'Rink', 'Roller', 'Room', 'Rose', 'Round', 'Roundabout', 'Rung', 'Runt', 'Rut', 'Sad',
    'Safe', 'Salmon', 'Salt', 'Sandbox', 'Sandcastle', 'Sandwich', 'Sash', 'Satellite',
    'Scar', 'Scared', 'School', 'Scoundrel', 'Scramble', 'Scuff', 'Seashell', 'Season',
    'Sentence', 'Sequins', 'Set', 'Shaft', 'Shallow', 'Shampoo', 'Shark', 'Sheep', 
    'Sheets', 'Sheriff', 'Shipwreck', 'Shirt', 'Shoelace', 'Short', 'Shower', 'Shrink',
    'Sick', 'Siesta', 'Silhouette', 'Singer', 'Sip', 'Skate', 'Skating', 'Ski', 'Slam', 'Sleep', 
    'Sling', 'Slow', 'Slump', 'Smith', 'Sneeze', 'Snow', 'Snuggle', 'Song', 'Space', 'Spare', 
    'Speakers', 'Spider', 'Spit', 'Sponge', 'Spool', 'Spoon', 'Spring', 'Sprinkler', 'Spy', 
    'Square', 'Squint', 'Stairs', 'Standing', 'Star', 'State', 'Stick', 'Stockholder', 
    'Stoplight', 'Stout', 'Stove', 'Stowaway', 'Straw', 'Stream', 'Streamline', 'Stripe', 
    'Student', 'Sun', 'Sunburn', 'Sushi', 'Swamp', 'Swarm', 'Sweater', 'Swimming', 'Swing', 
    'Tachometer', 'Talk', 'Taxi', 'Teacher', 'Teapot', 'Teenager', 'Telephone', 'Ten', 
    'Tennis', 'Thief', 'Think', 'Throne', 'Through', 'Thunder', 'Tide', 'Tiger', 'Time', 
    'Tinting', 'Tiptoe', 'Tiptop', 'Tired', 'Tissue', 'Toast', 'Toilet', 'Tool', 'Toothbrush', 
    'Tornado', 'Tournament', 'Tractor', 'Train', 'Trash', 'Treasure', 'Tree', 'Triangle', 
    'Trip', 'Truck', 'Tub', 'Tuba', 'Tutor', 'Television', 'Twang', 'Twig', 'Twitterpated', 
    'Type', 'Unemployed', 'Upgrade', 'Vest', 'Vision', 'Wag', 'Water', 'Watermelon', 'Wax', 
    'Wedding', 'Weed', 'Welder', 'Whatever', 'Wheelchair', 'Whiplash', 'Whisk', 'Whistle', 
    'White', 'Wig', 'Will', 'Windmill', 'Winter', 'Wish', 'Wolf', 'Wool', 'World', 'Worm', 
    'Wristwatch', 'Yardstick', 'Zamboni', 'Zen', 'Zero', 'Zipper', 'Zone', 'Zoo', 'Acne'
]


COLOR_BANK = ["red", "blue", "grey", "black"]

// State Variables


let turn;

let board;

let winner;

let spy;


// cached elements


const messages = document.getElementById("gameStatus");

const blueEl = document.getElementById('blue-list');

const redEl = document.getElementById('red-list');

let tableEl;

// event listeners (event listeners for tables are in the create board function)

document.getElementById("add-clues").addEventListener("click", addClue);

document.querySelector(".switch").addEventListener("click", showColors);

document.querySelector("#turn").addEventListener("click", changeTurn);

document.querySelector("#newGame").addEventListener("click", newGame);

// Functions

function init() {
    
    spy = false;

    // assign the turn and message content
    turn = "Red Team";

    messages.textContent = `It's ${turn}'s turn`

    // making 25 different tiles here for my board that will have a random word assigned to them. The colors are assigned below. They all have a discovered property that will turn true once click 
    // display the color of the word.
    board = [];
    while (board.length < 25) {
        let tile = {
            discovered: false,
            word: null,
            color: null,
        };
        
        let randomWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
        tile.word = randomWord;
        while (board.some((el) => 
            el.word === tile.word
        )) { 
            randomWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]
            tile.word = randomWord;
        }
        board.push(tile);
        
    }
    
    // here colors are assigned to the words
       
    newColor(1, "black");
    newColor(7, "blue");
    newColor(8, "red");
    newColor(9, "grey");
    
    createBoards()

    render();

};

init();

// putting random colors into my tiles

function newColor(num, color) {
    for (i=0; i < num; i++) {
        let newBoard = board.filter(tile => tile.color === null);
        newBoard[Math.floor(Math.random() * newBoard.length)].color = color;
    }
} 

// creating the board here filled with words

function createBoards() {
    let numRows = 5;
    let count = 0;
    let table = document.createElement("table");
    let row = table.insertRow();

    for (let i of board){
        let cell = row.insertCell();
        cell.innerHTML = i.word;
        count++;
        if(count%numRows == 0) {
            row = table.insertRow();
        }
    }

    //main table (firstTable) creation here
    document.getElementById("mainBoard").appendChild(table);
    firstTable = document.querySelector("table");
    tableEl = document.querySelectorAll('td');

    //adding event listener so that main table elements are clickable
    firstTable.addEventListener('click', boardClick);
}


// listening to the board and changing colors based off words

function boardClick(e) {
    let wordSelected = e.target;
    let tile = board.find(obj => obj.word === wordSelected.textContent);
    tile.discovered = true;
    getWinner()
    render()

}

function getWinner() {
    let redCheck = board.filter(obj => obj.color === "red" && obj.discovered);
    let blueCheck = board.filter(obj => obj.color === "blue" && obj.discovered);
    let blackCheck = board.filter(obj => obj.color === "black" && obj.discovered);
    if (redCheck.length === 8) {
        winner = "Red Team";
    } else if (blueCheck.length === 7) {
        winner = "Blue Team";
    } else if (blackCheck.length === 1) {
        winner = "lose";
    } else {
        winner = 0;
    }
    render()
};


function render() {
    if (winner === "Red Team") {
        messages.textContent = `Red Team Wins`
    } else if (winner === "Blue Team") {
        messages.textContent = 'Blue Team Wins'
    } else if (winner ===  "lose") {
        messages.textContent = `${turn} loses`
    } else { 
        messages.textContent = `It's ${turn}'s turn`
    }

    tableEl.forEach((td, idx) => {
        if(spy || board[idx].discovered) {
            td.style.backgroundColor = board[idx].color;
        } else {
            td.style.backgroundColor = "white"
        }
    })


};

//add to a list of clues
function addClue() {
    let clueEl = document.getElementById('code').value;
    let guessEl = document.getElementById('guess').value;
    if (turn === "Red Team") {
        let li = document.createElement('li');
        li.innerHTML = clueEl + " " + guessEl;
        redEl.appendChild(li);
    } else {
        let li = document.createElement('li');
        li.innerHTML = clueEl + " " + guessEl;
        blueEl.appendChild(li);
    }
};

// when we click the spymaster button it should take all of the false tiles and light them up to show their colors. When unchecked they should all go back
function showColors(e) {
    if (e.target.checked === undefined) {
        return;
    }
    spy = e.target.checked;
    render()
};


function changeTurn() {
    turn = (turn === "Red Team") ? "Blue Team" : "Red Team";
    render()
};


function newGame() {
    
    let tablePlaceholder = document.getElementById("mainBoard")
    let tableDelete = document.querySelector('table');
    tablePlaceholder.removeChild(tableDelete);
    let blueP = document.querySelector('#blue-list');
    let redP = document.querySelector('#red-list')
    let liDelete = document.querySelector('li')
    removeList(blueP)
    removeList(redP)
    init()

}

function removeList(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}


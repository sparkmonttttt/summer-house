// Summer House — Ayan & Jenny
// Full explicit adult visual novel demo

const scenes = {
  start: {
    bg: "kitchen",
    speaker: "",
    text: "It's a warm summer afternoon. You've been living with your roommate Jenny for a few months now. The house is quiet... almost too quiet.",
    next: "kitchen_enter"
  },

  kitchen_enter: {
    bg: "kitchen",
    speaker: "Ayan",
    text: "Jenny? You home?",
    next: "kitchen_hear"
  },

  kitchen_hear: {
    bg: "kitchen",
    speaker: "",
    text: "You hear soft, wet sounds coming from the kitchen. Soft moans. The unmistakable rhythm of skin against skin.",
    next: "kitchen_approach"
  },

  kitchen_approach: {
    bg: "kitchen",
    speaker: "Ayan",
    text: "What the hell...?",
    next: "kitchen_scene"
  },

  kitchen_scene: {
    bg: "kitchen",
    speaker: "",
    text: "You step into the kitchen and freeze.\n\nJenny is bent over the counter, purple shirt hiked up, panties around her thighs. Her ass is shiny with cum, more still dripping down her legs onto the floor.",
    next: "kitchen_jenny_notice",
    explicit: true
  },

  kitchen_jenny_notice: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "A-Ayan?! I... I didn't think you'd be back so early...",
    next: "kitchen_choices1"
  },

  kitchen_choices1: {
    bg: "kitchen",
    speaker: "",
    text: "She's still bent over the counter, breathing hard, cum leaking from her. She doesn't even try to cover up.",
    choices: [
      { text: "\"Who did this to you?\"", next: "ask_who" },
      { text: "Walk up and grab her hips", next: "grab_hips" },
      { text: "Just stare and stroke yourself", next: "stare_stroke" }
    ]
  },

  ask_who: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "I... it was just some guy from class. He left five minutes ago. I couldn't help it... I've been so fucking horny all day.",
    next: "ask_who2"
  },

  ask_who2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Don't look at me like that... You're hard too. I can see it.",
    next: "kitchen_choices2"
  },

  grab_hips: {
    bg: "kitchen",
    speaker: "",
    text: "You step behind her, hands on her soft, cum-slicked hips. She gasps but doesn't pull away. Instead she pushes back against you.",
    next: "grab_hips2"
  },

  grab_hips2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Mmm... already? His cum is still inside me... You don't care, do you?",
    next: "kitchen_choices2"
  },

  stare_stroke: {
    bg: "kitchen",
    speaker: "",
    text: "You pull your pants down and start stroking slowly, eyes locked on her messy pussy and the thick ropes of cum running down her thighs.",
    next: "stare_stroke2"
  },

  stare_stroke2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "God... you're really just going to stand there and jerk off looking at me like this? That's so fucking hot...",
    next: "kitchen_choices2"
  },

  kitchen_choices2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Well? What are you going to do, roommate?",
    choices: [
      { text: "Fuck her right there over the counter", next: "fuck_counter" },
      { text: "Make her clean it up with her mouth", next: "clean_mouth" },
      { text: "Tell her to get on her knees", next: "on_knees" }
    ]
  },

  fuck_counter: {
    bg: "kitchen",
    speaker: "",
    text: "You free your cock and push into her in one smooth thrust. She's still dripping and loose from the previous guy — the wet heat is overwhelming. Jenny moans loudly as you start pounding her against the counter.",
    next: "fuck_counter2",
    explicit: true
  },

  fuck_counter2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "F-fuck yes! Harder! Use me... I don't care that his cum is still inside... just fill me up again!",
    next: "fuck_counter3"
  },

  fuck_counter3: {
    bg: "kitchen",
    speaker: "",
    text: "The kitchen fills with the wet slap of skin and Jenny's desperate moans. You grip her hips hard, watching your cock disappear into her messy cunt over and over.",
    next: "fuck_climax"
  },

  clean_mouth: {
    bg: "kitchen",
    speaker: "",
    text: "You turn her around and push her down. \"Clean it,\" you say. Jenny doesn't hesitate — she drops to her knees and starts licking the cum from your cock and her own thighs, eyes looking up at you the whole time.",
    next: "clean_mouth2",
    explicit: true
  },

  clean_mouth2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Mmph... tastes so dirty... You like watching your roommate clean herself like a slut, don't you?",
    next: "clean_mouth3"
  },

  clean_mouth3: {
    bg: "kitchen",
    speaker: "",
    text: "She takes you into her mouth, sucking hungrily while her fingers play with the cum still leaking from her pussy.",
    next: "fuck_climax"
  },

  on_knees: {
    bg: "kitchen",
    speaker: "",
    text: "\"On your knees.\" Jenny drops immediately, looking up at you with flushed cheeks and messy hair. You slap your cock against her lips.",
    next: "on_knees2",
    explicit: true
  },

  on_knees2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Please... use my mouth. I want to taste you while I'm still full of someone else's cum...",
    next: "on_knees3"
  },

  on_knees3: {
    bg: "kitchen",
    speaker: "",
    text: "You fuck her face roughly, holding her hair. Tears form at the corners of her eyes but she never stops sucking, one hand between her legs.",
    next: "fuck_climax"
  },

  fuck_climax: {
    bg: "kitchen",
    speaker: "Ayan",
    text: "I'm gonna cum...",
    next: "climax_choices"
  },

  climax_choices: {
    bg: "kitchen",
    speaker: "",
    text: "Where do you finish?",
    choices: [
      { text: "Deep inside her", next: "cum_inside" },
      { text: "All over her face and tits", next: "cum_face" },
      { text: "Pull out and cover her ass", next: "cum_ass" }
    ]
  },

  cum_inside: {
    bg: "kitchen",
    speaker: "",
    text: "You bury yourself to the hilt and unload hard. Jenny cries out as she feels your hot cum mixing with the load already inside her. Her legs shake as she cums again from the feeling of being filled a second time.",
    next: "aftercare",
    explicit: true
  },

  cum_face: {
    bg: "kitchen",
    speaker: "",
    text: "You pull out and stroke yourself over her face. Thick ropes of cum land across her cheeks, lips, and the top of her tits. Jenny sticks her tongue out, catching some of it, looking completely ruined.",
    next: "aftercare",
    explicit: true
  },

  cum_ass: {
    bg: "kitchen",
    speaker: "",
    text: "You pull out and aim at her ass. Your cum paints her soft cheeks and runs down into the crack, mixing with everything already there. Jenny reaches back and spreads herself for you, showing off the mess.",
    next: "aftercare",
    explicit: true
  },

  aftercare: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Hah... fuck... That was intense. Guess we're not just roommates anymore, huh?",
    next: "aftercare2"
  },

  aftercare2: {
    bg: "kitchen",
    speaker: "Ayan",
    text: "Guess not.",
    next: "end_demo"
  },

  end_demo: {
    bg: "kitchen",
    speaker: "",
    text: "— End of Demo Scene —\n\nThis is just the starting kitchen scene. More locations, characters, and routes can be added next (bedroom, living room, more of Jenny's story, new girls, etc.).\n\nThanks for playing.",
    choices: [
      { text: "Play again from the beginning", next: "start" },
      { text: "Return to title", next: "title" }
    ]
  }
};

let currentScene = "start";
let gameState = { scene: "start" };

const $ = (sel) => document.querySelector(sel);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(`#${id}`).classList.add("active");
}

function setBackground(name) {
  const bgs = {
    kitchen: "linear-gradient(to bottom, #f0e6d8 0%, #e8d5c0 40%, #d4b89a 100%)",
    default: "#1a1a1a"
  };
  $("#background").style.background = bgs[name] || bgs.default;
}

function renderScene(id) {
  if (id === "title") {
    showScreen("title-screen");
    return;
  }

  const scene = scenes[id];
  if (!scene) {
    console.error("Scene not found:", id);
    return;
  }

  currentScene = id;
  gameState.scene = id;
  showScreen("game-screen");
  setBackground(scene.bg || "kitchen");

  const speakerEl = $("#speaker");
  const textEl = $("#text");
  const choicesEl = $("#choices");
  const hintEl = $("#continue-hint");

  speakerEl.textContent = scene.speaker || "";
  textEl.innerHTML = (scene.text || "").replace(/\n/g, "<br>");

  choicesEl.innerHTML = "";
  if (scene.choices && scene.choices.length) {
    hintEl.style.display = "none";
    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = choice.text;
      btn.onclick = (e) => {
        e.stopPropagation();
        renderScene(choice.next);
      };
      choicesEl.appendChild(btn);
    });
  } else {
    hintEl.style.display = "block";
  }
}

function advance() {
  const scene = scenes[currentScene];
  if (scene && scene.next && !scene.choices) {
    renderScene(scene.next);
  }
}

$("#start-btn").addEventListener("click", () => renderScene("start"));
$("#dialogue-box").addEventListener("click", (e) => {
  if (e.target.classList.contains("choice-btn")) return;
  advance();
});

$("#save-btn").addEventListener("click", () => {
  localStorage.setItem("summerHouseSave", JSON.stringify(gameState));
  alert("Game saved!");
});

$("#load-btn").addEventListener("click", () => {
  const saved = localStorage.getItem("summerHouseSave");
  if (saved) {
    gameState = JSON.parse(saved);
    renderScene(gameState.scene);
  } else {
    alert("No save found.");
  }
});

$("#menu-btn").addEventListener("click", () => {
  if (confirm("Return to title screen?")) {
    showScreen("title-screen");
  }
});

showScreen("title-screen");

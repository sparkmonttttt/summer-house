// Summer House — Ayan & Jenny
// Full explicit adult visual novel – interactive thrusting & actions

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
    chars: [{name: "jenny-bent", pos: "right", anim: "bounce"}, {name: "ayan-standing", pos: "left"}],
    speaker: "",
    text: "You step into the kitchen and freeze.\n\nJenny is bent over the counter, purple shirt hiked up, panties around her thighs. Her ass is shiny with cum, more still dripping down her legs onto the floor.",
    next: "kitchen_jenny_notice"
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
      { text: "Fuck her right there over the counter", next: "sex_start_counter" },
      { text: "Make her clean it up with her mouth", next: "sex_start_mouth" },
      { text: "Tell her to get on her knees", next: "sex_start_knees" }
    ]
  },

  sex_start_counter: {
    bg: "kitchen",
    chars: [{name: "jenny-bent", pos: "right", anim: "thrust"}, {name: "ayan-thrust", pos: "left", anim: "thrust"}],
    speaker: "",
    text: "You free your cock and push into her in one smooth thrust. She's still dripping and loose from the previous guy — the wet heat is overwhelming. Jenny moans loudly.",
    next: "sex_counter_loop"
  },

  sex_counter_loop: {
    bg: "kitchen",
    chars: [{name: "jenny-bent", pos: "right", anim: "thrust"}, {name: "ayan-thrust", pos: "left", anim: "thrust"}],
    speaker: "Jenny",
    text: "F-fuck... you're so deep already... His cum is squishing out around your cock...",
    choices: [
      { text: "Thrust harder", next: "sex_counter_hard" },
      { text: "Slow deep strokes", next: "sex_counter_slow" },
      { text: "Spank her ass while fucking", next: "sex_counter_spank" },
      { text: "Grab her hair and pound her", next: "sex_counter_hair" },
      { text: "I'm about to cum...", next: "fuck_climax" }
    ]
  },

  sex_counter_hard: {
    bg: "kitchen",
    chars: [{name: "jenny-bent", pos: "right", anim: "hard"}, {name: "ayan-thrust", pos: "left", anim: "hard"}],
    speaker: "",
    text: "You slam into her harder. The wet slap of skin fills the kitchen. Jenny's body jerks forward with every thrust, her tits pressing against the cold counter.",
    next: "sex_counter_hard2"
  },

  sex_counter_hard2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Yes! Harder! Break me! I don't care if the neighbors hear!",
    next: "sex_counter_loop"
  },

  sex_counter_slow: {
    bg: "kitchen",
    chars: [{name: "jenny-bent", pos: "right", anim: "bounce"}, {name: "ayan-thrust", pos: "left", anim: "bounce"}],
    speaker: "",
    text: "You slow down, dragging your cock almost all the way out before sliding back in deep. You can feel every ridge of her used pussy gripping you.",
    next: "sex_counter_slow2"
  },

  sex_counter_slow2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Mmm... teasing me... You're making me feel every inch... Keep doing that...",
    next: "sex_counter_loop"
  },

  sex_counter_spank: {
    bg: "kitchen",
    chars: [{name: "jenny-bent", pos: "right", anim: "hard"}, {name: "ayan-thrust", pos: "left", anim: "thrust"}],
    speaker: "",
    text: "You bring your hand down hard on her ass. The wet smack echoes. Jenny yelps, her pussy clenching around you as a fresh wave of the previous guy's cum squeezes out.",
    next: "sex_counter_spank2"
  },

  sex_counter_spank2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Ah! Do it again! Spank your roommate's messy ass while you fuck her!",
    next: "sex_counter_loop"
  },

  sex_counter_hair: {
    bg: "kitchen",
    chars: [{name: "jenny-bent", pos: "right", anim: "hard"}, {name: "ayan-thrust", pos: "left", anim: "hard"}],
    speaker: "",
    text: "You fist her brown hair and yank her head back, pounding her ruthlessly. Her back arches, mouth open in a silent scream of pleasure.",
    next: "sex_counter_hair2"
  },

  sex_counter_hair2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Guh... fuck... use me like a toy... Don't stop...",
    next: "sex_counter_loop"
  },

  sex_start_mouth: {
    bg: "kitchen",
    chars: [{name: "jenny-knees", pos: "center"}, {name: "ayan-standing", pos: "left"}],
    speaker: "",
    text: "You turn her around and push her down. \"Clean it,\" you say. Jenny drops to her knees and starts licking the cum from your cock and her own thighs, eyes looking up at you.",
    next: "sex_mouth_loop"
  },

  sex_mouth_loop: {
    bg: "kitchen",
    chars: [{name: "jenny-knees", pos: "center", anim: "bounce"}, {name: "ayan-standing", pos: "left"}],
    speaker: "Jenny",
    text: "Mmph... tastes so dirty... You like watching your roommate clean herself like a slut, don't you?",
    choices: [
      { text: "Facefuck her", next: "sex_mouth_facefuck" },
      { text: "Make her deepthroat", next: "sex_mouth_deep" },
      { text: "Hold her head still and thrust", next: "sex_mouth_thrust" },
      { text: "Pull out and slap her face with it", next: "sex_mouth_slap" },
      { text: "I'm about to cum...", next: "fuck_climax" }
    ]
  },

  sex_mouth_facefuck: {
    bg: "kitchen",
    chars: [{name: "jenny-knees", pos: "center", anim: "bounce"}, {name: "ayan-standing", pos: "left", anim: "idle"}],
    speaker: "",
    text: "You grab both sides of her head and start thrusting into her mouth. Jenny gags wetly but keeps her hands on your thighs, letting you use her face.",
    next: "sex_mouth_facefuck2"
  },

  sex_mouth_facefuck2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "*glk* *glk* *glk*  ...hnnn...",
    next: "sex_mouth_loop"
  },

  sex_mouth_deep: {
    bg: "kitchen",
    chars: [{name: "jenny-knees", pos: "center", anim: "bounce"}, {name: "ayan-standing", pos: "left", anim: "idle"}],
    speaker: "",
    text: "You push all the way in until her nose presses against your stomach. Her throat bulges. Tears form in her eyes as she tries to swallow around you.",
    next: "sex_mouth_deep2"
  },

  sex_mouth_deep2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "*ghhhk*  ...mmph...!",
    next: "sex_mouth_loop"
  },

  sex_mouth_thrust: {
    bg: "kitchen",
    chars: [{name: "jenny-knees", pos: "center", anim: "bounce"}, {name: "ayan-standing", pos: "left", anim: "idle"}],
    speaker: "",
    text: "You hold her head firmly and fuck her mouth with steady, deep strokes. Drool and leftover cum drip down her chin onto her purple shirt.",
    next: "sex_mouth_thrust2"
  },

  sex_mouth_thrust2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "*slurp*  ...use my throat... it's yours...",
    next: "sex_mouth_loop"
  },

  sex_mouth_slap: {
    bg: "kitchen",
    chars: [{name: "jenny-knees", pos: "center", anim: "bounce"}, {name: "ayan-standing", pos: "left", anim: "idle"}],
    speaker: "",
    text: "You pull out and slap your wet cock across her cheeks and lips. Jenny sticks her tongue out, trying to catch it, looking completely ruined.",
    next: "sex_mouth_slap2"
  },

  sex_mouth_slap2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Yes... treat me like a dirty toy... I love it...",
    next: "sex_mouth_loop"
  },

  sex_start_knees: {
    bg: "kitchen",
    chars: [{name: "jenny-knees", pos: "center"}, {name: "ayan-standing", pos: "left"}],
    speaker: "",
    text: "\"On your knees.\" Jenny drops immediately, looking up at you with flushed cheeks and messy hair. You slap your cock against her lips.",
    next: "sex_knees_loop"
  },

  sex_knees_loop: {
    bg: "kitchen",
    chars: [{name: "jenny-knees", pos: "center", anim: "bounce"}, {name: "ayan-standing", pos: "left"}],
    speaker: "Jenny",
    text: "Please... use my mouth. I want to taste you while I'm still full of someone else's cum...",
    choices: [
      { text: "Fuck her face hard", next: "sex_knees_hard" },
      { text: "Make her worship your cock", next: "sex_knees_worship" },
      { text: "Pull her hair and thrust deep", next: "sex_knees_hair" },
      { text: "Stand up and make her follow with her mouth", next: "sex_knees_follow" },
      { text: "I'm about to cum...", next: "fuck_climax" }
    ]
  },

  sex_knees_hard: {
    bg: "kitchen",
    speaker: "",
    text: "You hold her hair and start fucking her face roughly. The wet sounds of her throat being used fill the kitchen. Her eyes water but she never pulls away.",
    next: "sex_knees_hard2"
  },

  sex_knees_hard2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "*ghhk-ghhk-ghhk*",
    next: "sex_knees_loop"
  },

  sex_knees_worship: {
    bg: "kitchen",
    speaker: "",
    text: "Jenny licks from your balls all the way up the shaft, kissing the tip, then taking you back into her warm mouth. She looks up at you the whole time.",
    next: "sex_knees_worship2"
  },

  sex_knees_worship2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "Your cock tastes so much better than his... I want to be your personal cockslut...",
    next: "sex_knees_loop"
  },

  sex_knees_hair: {
    bg: "kitchen",
    speaker: "",
    text: "You yank her hair and force yourself deep. Jenny's hands grip your legs as you use her throat like a sleeve.",
    next: "sex_knees_hair2"
  },

  sex_knees_hair2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "*glurk*  ...more...",
    next: "sex_knees_loop"
  },

  sex_knees_follow: {
    bg: "kitchen",
    speaker: "",
    text: "You stand up straighter. Jenny crawls forward on her knees, keeping her mouth on your cock, following every movement like a trained pet.",
    next: "sex_knees_follow2"
  },

  sex_knees_follow2: {
    bg: "kitchen",
    speaker: "Jenny",
    text: "I'll follow you anywhere as long as I can keep sucking...",
    next: "sex_knees_loop"
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
      { text: "Deep inside her (or her throat)", next: "cum_inside" },
      { text: "All over her face and tits", next: "cum_face" },
      { text: "Pull out and cover her ass", next: "cum_ass" }
    ]
  },

  cum_inside: {
    bg: "kitchen",
    speaker: "",
    text: "You bury yourself as deep as you can and unload hard. Jenny cries out (or gags) as she feels your hot cum flooding her. Her body shakes as she cums from the feeling of being filled again.",
    next: "aftercare"
  },

  cum_face: {
    bg: "kitchen",
    speaker: "",
    text: "You pull out and stroke yourself over her face. Thick ropes of cum land across her cheeks, lips, and the top of her tits. Jenny sticks her tongue out, catching some of it, looking completely ruined.",
    next: "aftercare"
  },

  cum_ass: {
    bg: "kitchen",
    speaker: "",
    text: "You pull out and aim at her ass. Your cum paints her soft cheeks and runs down into the crack, mixing with everything already there. Jenny reaches back and spreads herself for you, showing off the mess.",
    next: "aftercare"
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
    text: "— End of Demo Scene —\n\nYou can keep thrusting and choosing actions as long as you want during the sex scenes.\n\nMore locations and girls can be added next.",
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

  const charsEl = $("#characters");
  charsEl.innerHTML = "";
  if (scene.chars) {
    scene.chars.forEach(c => {
      const img = document.createElement("img");
      img.src = c.src || "assets/" + c.name + ".svg";
      img.alt = c.name;
      img.className = "character " + (c.pos || "") + (c.anim ? " " + c.anim : "");
      charsEl.appendChild(img);
    });
  }

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

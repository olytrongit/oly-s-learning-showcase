const waterworksHero = { url: "/images/waterworks_kids.jpg" };
const xrSafetyHero = { url: "/images/XR_Safety_2.jpg" };
const wellnessHero = { url: "/images/lifespeak_2.jpg" };
const curriculumHero = { url: "/images/immersive_1.jpg" };
const storylineHero = { url: "/images/storyline_3.png" };
const settlingDiagram = { url: "/images/settling_1.jpg" };
const xrPersona = { url: "/images/persona_Ben_West.png" };
const wellnessStill = { url: "/images/lifespeak_1.jpeg" };
const curriculumBuild = { url: "/images/immersive_2.jpg" };
const storylineBuild = { url: "/images/storyline_2.png" };
const wellnessDogPoster = { url: "/images/dog_licking_face_16_9.jpg" };

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  kicker: string;
  promise: string;
  learner: string;
  challenge: string;
  decisions: string[];
  built: string[];
  outcome: string;
  tools: string[];
  accent: "sky" | "coral" | "leaf" | "plum" | "sun";
  image: string;
  imageAlt: string;
  imagePosition?: "right";
  buildImage?: string;
  buildImageAlt?: string;
  videos?: { title: string; youtubeId: string; poster: string }[];
  demos?: { title: string; purpose: string; href: string; thumb?: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "water-works-for-kids",
    number: "01",
    title: "Water Works for Kids",
    shortTitle: "Water Works",
    kicker: "Micro-learning · Character-driven explanation",
    promise: "Dense water-treatment science, made clear without taking the science out.",
    learner: "Elementary and middle-school students on municipal water-treatment facility tours and outreach programs.",
    challenge: "Dense engineering material had to be simplified without losing scientific accuracy for a young, restless audience.",
    decisions: ["Break the documentation into small learning segments.", "Turn invisible and technical processes into visual explanations.", "Create Dewey, a recurring animated guide who makes the journey coherent.", "Review every segment with facility experts."],
    built: ["4 educational videos", "20+ micro-learning clips", "Motion-graphic concept cards", "The Dewey character"],
    outcome: "The work demonstrates how animation, short-form learning, and character-driven storytelling can make public infrastructure understandable without removing the science.",
    tools: ["Instructional design", "Motion design", "Character animation", "SME review"],
    accent: "sky",
    image: waterworksHero.url,
    imageAlt: "Dewey the water drop teaching in a science lab",
    buildImage: settlingDiagram.url,
    buildImageAlt: "Diagram of settling and sedimentation in a water treatment clarifier: water arrives from coagulation and flocculation, particles settle toward the tank floor, plate settlers and weirs and troughs collect clarified water, and sediment drains to the sanitary sewer.",
  },
  {
    slug: "xr-safety-simulation",
    number: "02",
    title: "XR Safety Simulation",
    shortTitle: "XR Safety",
    kicker: "Experiential learning · Mixed reality",
    promise: "Facing convincing hazards before the risk is real.",
    learner: "New employees and trainees in oil and gas, manufacturing, and large industrial facilities.",
    challenge: "Conventional safety training depends on costly physical mockups and on-site supervision, yet workers can still feel unprepared when they first enter a real facility.",
    decisions: ["Choose experiential learning over lecture.", "Let trainees explore, identify hazards, and practise procedures in context.", "Ground realism in actual facility layouts and subject-matter-expert input.", "Build modular environments so scenarios can recombine."],
    built: ["Portable mixed-reality prototype in Unity / C#", "Meta Quest simulated facilities", "Hazard-identification and emergency-evacuation drills", "Interactive equipment, AI dialogue avatars, and spatial audio", "SketchUp and Blender assets"],
    outcome: "The prototype demonstrates how immersive training can reduce dependence on physical mockups and support off-site onboarding by tying instruction directly to action and spatial decision-making.",
    tools: ["Unity", "C#", "Meta Quest", "SketchUp", "Blender", "Spatial audio"],
    accent: "plum",
    image: xrSafetyHero.url,
    imageAlt: "A scene from the Hitachi XR Safety experience",
    buildImage: xrPersona.url,
    buildImageAlt: "Learner persona card for Ben West, a 27-year-old new industrial trainee: an illustrated avatar in a high-visibility safety vest beside profile details and a summary, above three panels covering content knowledge, motivation for the course, and engagement strategies.",
  },
  {
    slug: "wellness-micro-learning",
    number: "03",
    title: "Wellness Micro-learning",
    shortTitle: "Wellness",
    kicker: "AI-assisted · Human-directed",
    promise: "Lengthy wellness report, transformed into two brief videos.",
    learner: "Corporate employees and managers on a digital workplace learning platform: busy people unlikely to read a long report.",
    challenge: "A 2025 workplace wellness report contained useful findings, but the report format itself was the barrier.",
    decisions: ["Transform the material rather than merely summarize it.", "Give each video one clear idea.", "Aim the two videos at different engagement stages.", "Design scripts, visuals, voiceover, and on-screen text to deliver one message.", "Keep human editorial control over every AI-assisted step."],
    built: ["Two short-form learning videos", "NotebookLM insight extraction", "ChatGPT script drafts", "Veo 3 generated visuals", "ElevenLabs voiceover and HeyGen presenter", "Premiere Pro / After Effects final cut"],
    outcome: "The project shows that AI can accelerate learning-content production without replacing human review, design judgment, or message control.",
    tools: ["NotebookLM", "ChatGPT", "Veo 3", "ElevenLabs", "HeyGen", "Premiere Pro", "After Effects"],
    accent: "leaf",
    image: wellnessHero.url,
    imageAlt: "An AI-generated wellness video still showing two children playing with a dog while their mother looks on",
    buildImage: wellnessStill.url,
    buildImageAlt: "A still from the wellness video: two adults sit laughing on a lawn with cooking pots on their heads, a dog in a dinosaur costume between them, while an older woman claps from a porch chair",
    videos: [
      { title: "Friendly Advice", youtubeId: "0ugmiUneh_M", poster: "/media/wellness-video-1.jpg" },
      { title: "Finding Joy", youtubeId: "y6UeWovMjDU", poster: wellnessDogPoster.url },
    ],
  },
  {
    slug: "immersive-storytelling-curriculum",
    number: "04",
    title: "Immersive Storytelling Curriculum",
    shortTitle: "Immersive Curriculum",
    kicker: "Curriculum design · Post-secondary",
    promise: "From first headset to finished story.",
    learner: "Roughly 40 post-secondary students per term with no prior immersive-media background.",
    challenge: "Teach students to plan, produce, and critique AR, VR, and 360° video stories about their own communities.",
    decisions: ["Scaffold the curriculum from concept through production.", "Use group projects to make collaboration part of the learning.", "Align rubrics directly to learning outcomes.", "Build in milestone feedback to catch quality issues early.", "Introduce AI-assisted workflows alongside explicit ethics discussion."],
    built: ["Taught: Intro to Design, Layout and Immersive Storytelling", "Full course design: Intro to Animation with Social Media Integration", "Assignments, assessments, and outcome-aligned rubrics", "Lecture presentations and seminar discussions on emerging media", "Hands-on training in immersive software and hardware", "Guided group AR, VR, and 360° journalism projects"],
    outcome: "Students shipped community-focused immersive journalism projects while developing technical skill, collaboration habits, and critical awareness of emerging tools.",
    tools: ["Curriculum design", "Rubric design", "AR / VR", "360° video", "AI ethics"],
    accent: "coral",
    image: curriculumHero.url,
    imagePosition: "right",
    imageAlt: "A tester playing a virtual immersive experience beside a computer displaying the experience",
    buildImage: curriculumBuild.url,
    buildImageAlt: "A 3D-rendered scene of a wooden desk holding a red record turntable, a vinyl record, an album sleeve, and a row of upright album cases, with the words \u201cPress here!\u201d in front of them",
  },
  {
    slug: "storyline-360-interactives",
    number: "05",
    title: "Storyline 360 Interactives",
    shortTitle: "Storyline 360",
    kicker: "Authoring · Interactive demonstration",
    promise: "Four compact interactions show assessment, review, recall, and onboarding range.",
    learner: "Learners who need short, purposeful interactions rather than a single long course format.",
    challenge: "Demonstrate breadth in Articulate Storyline 360 across different learning goals and interaction patterns.",
    decisions: ["Match each interaction pattern to a distinct learning purpose.", "Keep instructions and feedback immediately visible.", "Use game mechanics only where they reinforce retrieval and practice.", "Keep each demo short, focused, and self-explanatory."],
    built: ["NDA Drag & Drop: interactive assessment", "Waterworks Jeopardy: gamified review", "Metal Memory Match: game-based recall", "Intro to Nimble 2e: onboarding-style introduction"],
    outcome: "The suite demonstrates practical Storyline range while keeping the learning purpose of each interaction visible.",
    tools: ["Articulate Storyline 360", "xAPI fundamentals", "Assessment design", "Game-based recall"],
    accent: "sun",
    image: storylineHero.url,
    imageAlt: "Metal Memory Match game built in Articulate Storyline 360",
    buildImage: storylineBuild.url,
    buildImageAlt: "A Waterworks Jeopardy game screen showing a multiple-choice question about which measurement shows whether water is too acidic, with four answer buttons: Turbidity, Salinity, pH, and Density",
    demos: [
      { title: "NDA Drag & Drop", purpose: "Interactive assessment", href: "/demos/nda/story.html", thumb: "/images/demo-nda.jpg" },
      { title: "Waterworks Jeopardy", purpose: "Gamified review", href: "/demos/jeopardy/story.html" },
      { title: "Metal Memory Match", purpose: "Game-based recall", href: "/demos/memory/story.html" },
      { title: "Intro to Nimble 2e", purpose: "Onboarding introduction", href: "/demos/nimble/story.html" },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
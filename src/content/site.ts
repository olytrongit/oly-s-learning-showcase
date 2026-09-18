export const site = {
  name: "Oly Balmokune",
  role: "Senior Instructional Designer",
  location: "Calgary, Alberta",
  tagline: "Keep your knowledge. Refresh your delivery.",
  email: "tobalmokune@olytron.com",
  linkedin: "https://www.linkedin.com/in/olytron",
  resume: "[CONFIRM: résumé PDF]",
  availability: "[CONFIRM: remote / hybrid / relocation line]",
  philosophy:
    "I begin with the learner, the context, and the challenge the experience needs to solve. From there, I choose the appropriate format for the job: video, structured onboarding, scenario-based learning, simulation, or modular educational content.",
} as const;

export const skillGroups = [
  {
    title: "Learning design",
    items: ["Needs analysis", "Scenario-based learning", "Micro-learning", "Curriculum design", "Rubric design", "SME review cycles", "xAPI"],
  },
  { title: "Authoring", items: ["Articulate Storyline 360", "Rive", "Figma"] },
  {
    title: "Media",
    items: ["After Effects", "Premiere Pro", "Character Animator", "Toon Boom Harmony", "Blender", "Cinema 4D", "Houdini"],
  },
  {
    title: "Immersive",
    items: ["Unity / C#", "Unreal Engine / Blueprints", "Meta Quest", "HoloLens 2", "360° video", "TouchDesigner"],
  },
  {
    title: "AI-assisted workflow",
    items: ["NotebookLM", "ChatGPT", "Veo", "ElevenLabs", "HeyGen", "Whisk / Flow"],
  },
  { title: "Code", items: ["JavaScript", "HTML / CSS", "C#", "C++", "Python", "SQL"] },
] as const;

export const supportingWork = [
  { title: "Dewy Water Works", type: "Video & motion", proof: "Character-led explanation that makes technical processes approachable. [CONFIRM: source-page detail]" },
  { title: "Our Time", type: "Video & motion", proof: "Narrative pacing and visual storytelling in service of a clear message. [CONFIRM: source-page detail]" },
  { title: "Recruitment", type: "Video & motion", proof: "Audience-aware messaging shaped for a specific decision point. [CONFIRM: source-page detail]" },
  { title: "At the Doctor", type: "Video & motion", proof: "Scenario-driven communication grounded in a familiar context. [CONFIRM: source-page detail]" },
  { title: "Yoga Legends", type: "Video & motion", proof: "Instructional clarity expressed through timing, movement, and demonstration. [CONFIRM: source-page detail]" },
  { title: "Windsage", type: "Video & motion", proof: "Complex information organized into a concise visual narrative. [CONFIRM: source-page detail]" },
  { title: "Windsor Tunnel", type: "Video & motion", proof: "Spatial and process visualization for real-world infrastructure. [CONFIRM: source-page detail]" },
  { title: "Industrial XR", type: "Mixed reality", proof: "Unity prototypes for HoloLens 2 and Meta Quest connect instruction to action in space." },
  { title: "Starjourn", type: "Mixed reality", proof: "Interactive world-building and systems thinking. [CONFIRM: source-page detail]" },
  { title: "Stole My Heart", type: "Mixed reality", proof: "Immersive storytelling designed around presence and participant choice. [CONFIRM: source-page detail]" },
  { title: "Digital Winnifred", type: "AI experiment", proof: "Combined visual and textual anchors improve identity consistency in generated video." },
] as const;

export const confirmItems = [
  "Institution, course name, and terms taught for Immersive Storytelling Curriculum",
  "Degree titles, institutions, timeline years, and role titles",
  "Remote, hybrid, and relocation preferences",
  "Résumé PDF file",
  "One-line context for each supporting video and motion project",
  "One-line context for Starjourn and Stole My Heart",
] as const;
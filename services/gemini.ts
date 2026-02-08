
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS } from '../constants';

// Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a helpful "Recruiter Assistant" for a Product Management candidate.
Candidate context:
- Deep domain expertise in childcare and parenting transitions.
- Immersion-based discovery: Uses lived experience as a mother of two in the UK as continuous qualitative research.
- Cross-cultural perspective: Understands different systems due to British and Vietnamese family background.
- Knowledgeable in early-years philosophies (Montessori, Reggio Emilia) and how they impact parent choices.
- Focus: Reducing cognitive and emotional load for parents.
- Independent Blog: www.mumreviews.uk. Used for observing real-world product adoption, identifying usability gaps, and building domain depth.

Projects: ${JSON.stringify(PROJECTS)}
Skills: ${JSON.stringify(SKILLS)}

Your goal is to answer recruiter questions about the candidate's portfolio, experience, and product mindset. 
Highlight how their background (motherhood, multicultural perspective, community engagement) acts as a unique product discovery tool.
Keep answers professional, brief, and evidence-based.
Tone: Calm, professional, and product-focused.
`;

export async function askAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Correctly accessing the text property of GenerateContentResponse.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting right now, but feel free to explore the projects manually or email me directly!";
  }
}

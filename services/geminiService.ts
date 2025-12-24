import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client using the API key strictly from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Bùi Thanh Hương. 
Bùi Thanh Hương is a high-profile consultant, businesswoman, and public figure in Vietnam, often associated with luxury, elegance, and fashion.
Your tone should be professional, warm, sophisticated, and polite (Vietnamese culture inspired).
You should answer questions about her services (Consulting, Brand Representation, Public Speaking, and Lifestyle Coaching).
If users ask about personal details not provided, remain discreet and professional.
Answer in Vietnamese by default, but adapt to the user's language if they speak English.
Keep responses concise and elegant.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Utilize the generateContent method directly with the model and prompt.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    // Access the generated text content using the .text property of the response object.
    return response.text || "Xin lỗi, tôi gặp chút trục trặc trong quá trình xử lý. Bạn có thể thử lại sau được không?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tôi hiện đang bận một chút, xin vui lòng nhắn lại sau nhé.";
  }
};
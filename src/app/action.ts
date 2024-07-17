'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

const google_api_key = process.env.GOOGLE_GEMINI_API;

if (!google_api_key) {
    throw new Error('Google API key is not set!!');
}

const gen_ai = new GoogleGenerativeAI(google_api_key);

const model = gen_ai.getGenerativeModel({
    model: 'gemini-1.5-pro-latest',
});

export async function run(inputText: string): Promise<string> {
    const prompt = `Arre miyaan, is website ka toh kya kehna! Zara Hyderabadi style mein isko aise roast karo ki log haste haste khud ko sambhal na paayein. Landing page se lekar footer tak, har cheez pe ek se badhkar ek mazedaar comment karo ki samne bala rone hi lage . Aur dekho, biryani ka naam mat lena, sabko pata hai woh hamari jaan hai! Yeh raha URL: ${inputText}`;

    const result = await model.generateContent(prompt);
    const response = result.response;

    const text = response.text();

    const correctedText = text.replace(/\*\*/g, '');
    console.log(correctedText);
    

    return correctedText;
}

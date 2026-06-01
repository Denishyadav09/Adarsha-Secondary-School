import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) return NextResponse.json({ error: "No message" }, { status: 400 });

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        reply: "I don't have a specific answer for that. Please contact us at info@adarshaschool.edu.np or call 021-XXXXXX.",
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 300,
        messages: [
          {
            role: "system",
            content: `You are the AI assistant for Adarsha Secondary School in Nepal.
School facts:
- Location: Nepal
- Principal: Mr. Santosh Pokharel
- SEE pass rate 2081: 95%
- Classes: Grade 1–10
- Email: info@adarshavid.edu.np
- Vision: Empowering Students For A Better Tomorrow
Be helpful, concise, and friendly. Support both English and Nepali. If unsure, direct to contact us.`,
          },
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) throw new Error("OpenAI API error");
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "I'm not sure about that. Please contact the school directly.";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply: "Sorry, I'm having trouble right now. Please contact us at info@adarshavid.edu.np.",
    });
  }
}

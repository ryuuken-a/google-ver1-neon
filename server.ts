import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", agency: "NEONTOMY EVANGELION DIGITAL" });
});

// AI Project Scouter Endpoint
app.post("/api/scout", async (req, res) => {
  try {
    const { projectType, budget, timeline, description } = req.body;
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        recommendedArchitecture: "Spatial WebGL React App + Serverless Node Backend",
        estimatedCost: budget || "$1,500 - $3,500",
        estimatedTimeline: timeline || "2-3 weeks",
        deliverables: [
          "8K Shader WebGL Interactive Interface",
          "Responsive Cyberpunk UI Design",
          "Gemini / LLM Agent Workflow Integration",
          "SEO & High-Performance Core Web Vitals"
        ],
        technicalSpecs: "Built on React 19, Vite, Tailwind CSS v4, and Node.js microservices.",
        nextSteps: "Schedule technical discovery call with NEONTOMY Lead Architect."
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are the Lead AI Solutions Architect at NEONTOMY EVANGELION, an elite high-tech digital agency specializing in high-performance web development, spatial UI/UX, and AI systems architecture.
    
Analyze this client project request:
- Project Type: ${projectType || 'Custom Web & AI Application'}
- Target Budget: ${budget || 'Flexible'}
- Desired Timeline: ${timeline || '1-2 months'}
- Description & Requirements: ${description || 'High performance web app with modern design'}

Provide a structured, highly professional, realistic technical proposal response in JSON format matching this schema:
{
  "recommendedArchitecture": "string concise title",
  "estimatedCost": "string range e.g. $1,800 - $3,200",
  "estimatedTimeline": "string e.g. 14 Days Sprint",
  "deliverables": ["array of 4 specific technical deliverables"],
  "technicalSpecs": "string concise paragraph explaining tech stack choices",
  "nextSteps": "string advice on immediate next step"
}
Return ONLY valid JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const resultText = response.text;
    if (resultText) {
      const parsed = JSON.parse(resultText);
      return res.json(parsed);
    }
    
    throw new Error("Empty response from AI");
  } catch (error) {
    console.error("AI Scout error:", error);
    return res.json({
      recommendedArchitecture: "High-Performance WebGL + AI Integration",
      estimatedCost: "$2,000 - $4,500",
      estimatedTimeline: "2-3 weeks",
      deliverables: [
        "Interactive 8K Cyberpunk UI Architecture",
        "Custom Gemini AI Microservice Integration",
        "Responsive Mobile & Desktop Engineering",
        "Performance Optimization (<0.2s load time)"
      ],
      technicalSpecs: "React 19 + WebGL Shaders + Node.js API layer.",
      nextSteps: "Contact our lead engineers via the proposal form below."
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[NEONTOMY AGENCY SERVER] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

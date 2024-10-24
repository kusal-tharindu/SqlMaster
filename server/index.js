import express from "express";
import cors from "cors";
import generate from "./generate.js"; // Import your query generation logic

const app = express();
const port = process.env.PORT || 3002;

// Middleware for parsing JSON and handling CORS
app.use(express.json());
app.use(cors({
  origin: '*', // Allow all origins (can be restricted for production)
  methods: ['GET', 'POST'], // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Specify allowed headers
}));

// Test route to verify server is running
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route to generate SQL query
app.post("/generate", async (req, res) => {
  const { queryDescription } = req.body; // Extract query description from request body

  try {
    const sqlQuery = await generate(queryDescription); // Call generate logic
    res.status(200).json({ sqlQuery }); // Send back SQL query as JSON
  } catch (error) {
    console.error("Error generating SQL:", error); // Log error to console
    res.status(500).json({ error: "Internal Server Error" }); // Respond with error status
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});


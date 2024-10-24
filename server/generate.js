import openaiClient from "./api.js";

const generate = async (queryDescription) => {
  const chatGPT = async (queryDescription) => {
    const message = [
      { role: "system", content: `You are a highly skilled SQL query expert who converts natural language to SQL without using Markdown formatting.` },
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}` },
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
      temperature: 0,
    });

    return response.data.choices[0].message.content;
  };

  let sqlQuery = await chatGPT(queryDescription);
  
  // Remove Markdown-style code blocks if present
  sqlQuery = sqlQuery.replace(/```sql\n|```/g, '').trim();

  return sqlQuery;
};

export default generate;


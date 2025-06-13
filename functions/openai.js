const OpenAI = require("openai");
const properties = require("../data/properties.json");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const filterProperties = (location, maxPrice) => {
  return properties.filter((prop) => {
    const matchesLocation = location
      ? prop.location.toLowerCase() === location.toLowerCase()
      : true;
    const matchesPrice = maxPrice ? prop.price <= maxPrice : true;
    return matchesLocation && matchesPrice;
  });
};

const chatWithFunction = async (userMessage) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
      functions: [
        {
          name: "filterProperties",
          description: "Filter properties by location and max price",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "City or locality",
              },
              maxPrice: {
                type: "number",
                description: "Maximum price in INR",
              },
            },
          },
        },
      ],
      function_call: "auto",
    });

    const message = response.choices[0].message;

    if (message.function_call) {
      let args = {};
      try {
        args = JSON.parse(message.function_call.arguments);
      } catch {
        return "Sorry, I couldn't understand the filters you requested.";
      }

      const { location, maxPrice } = args;
      const filtered = filterProperties(location, maxPrice);

      if (filtered.length === 0) {
        if (location && maxPrice) {
          return `No properties found in ${location} under ₹${maxPrice.toLocaleString()}.`;
        }
        if (location) {
          return `No properties found in ${location}.`;
        }
        if (maxPrice) {
          return `No properties found under ₹${maxPrice.toLocaleString()}.`;
        }
        return `No properties found.`;
      }

      const result = filtered
        .map(
          (p) => `- ${p.type} in ${p.location}: ₹${p.price.toLocaleString()} (${p.size})`
        )
        .join("\n");

      return `Found ${filtered.length} properties:\n${result}`;
    }

    return message.content || "Sorry, I didn't understand your request.";
  } catch (error) {
    console.error("chatWithFunction error:", error);
    return "Something went wrong while processing your request.";
  }
};

module.exports = chatWithFunction;

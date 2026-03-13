export default function handler(req, res) {
  // This reads the GOOGLE_API environment variable you set in the Vercel dashboard
  const apiKey = process.env.GOOGLE_API;

  if (!apiKey) {
    return res.status(500).json({ 
      error: "Environment variable GOOGLE_API is not set in Vercel." 
    });
  }

  // Return the key as JSON to your frontend
  res.status(200).json({ key: apiKey });
}

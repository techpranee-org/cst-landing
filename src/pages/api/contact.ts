import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbw17F-ikka5UJvyPt_KiT5WlTDrLH1tGMZNWXxgiJefqAUOEwnt-lua6pyhfjmTLY4k/exec', {
        method: 'POST', // Ensure that this is a POST request
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body), // Pass the request body from frontend
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Data sent successfully!' });
      } else {
        return res.status(500).json({ error: 'Failed to send data' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Error sending data' });
    }
  } else {
    // This will handle methods other than POST
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

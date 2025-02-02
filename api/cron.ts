import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log("Cron job started"); // Log start
        
        const response = await fetch('https://marcodamico.vercel.app/blog');
        
        if (!response.ok) {
            throw new Error(`Failed to visit marcodamico.vercel.app/blog: ${response.statusText}`);
        }
        
        console.log("Cron job succeeded: Visited marcodamico.vercel.app/blog");
        
        res.status(200).json({ message: 'Visited marcodamico.vercel.app/blog successfully!' });
    } catch (error) {
        console.log("Cron job failed", error);
        res.status(500).json({ message: 'Error visiting marcodamico.vercel.app/blog', error: error.message });
    }
}

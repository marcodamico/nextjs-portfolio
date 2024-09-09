import type { NextApiRequest, NextApiResponse } from 'next';

import { getViewsCount } from '../app/db/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log("Cron job started"); // Log start
        let views = await getViewsCount();
        console.log("Cron job succeded");
        // Return the fetched data
        res.status(200).json({ message: 'Data fetched successfully!', views });
      } catch (error) {
        // Handle any errors
        console.log("Cron job failed");
        res.status(200).json({ message: 'Error fetching data', error: error.message });
      }
}

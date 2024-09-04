import { getViewsCount } from 'app/db/queries';

export default async function handler(req, res) {
    try {
        let views = await getViewsCount();
    
        // Return the fetched data
        res.status(200).json({ message: 'Data fetched successfully!', data });
      } catch (error) {
        // Handle any errors
        res.status(500).json({ message: 'Error fetching data', error: error.message });
      }
}

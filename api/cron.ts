import { NextResponse } from 'next/server';
import { getViewsCount } from 'app/db/queries';

export default async function handler() {
    try {
        console.log("Cron job started"); // Log start
        let views = await getViewsCount();
    
        // Return the fetched data
        return NextResponse.json({ message: 'Data fetched successfully!', views });
      } catch (error) {
        // Handle any errors
        return NextResponse.json({ message: 'Error fetching data', error: error.message });
      }
}

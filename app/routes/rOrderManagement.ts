import { json } from '@remix-run/node'
import { getLevelMaster } from '~/models/snop.server'
import { generatedAccuracyData } from '~/data/network/order'

export async function loader({ request }) {
  // const url = new URL(request.url);
  // // const page = Number(url.searchParams.get("page")) || 1;
  // // const limit = Number(url.searchParams.get("limit")) || 10; // Default to 10 rows per page

  // const skip = (page - 1) * limit;

  try {
    // Fetching the subset of records for the specified page, including related dimension_master data
    // const data = await getLevelMaster();
    const data = generatedAccuracyData

    // Fetching the total count of records in level_master
    // const totalCount = await prisma.level_master.count();

    // Returning data along with pagination details
    return json({
      data,
      // totalCount,
      // page,
      // totalPages: Math.ceil(totalCount / limit),
    })
  } catch (error) {
    console.error('Failed to load level master data:', error)
    return json(
      { success: false, error: 'Failed to load level master data' },
      { status: 500 }
    )
  }
}

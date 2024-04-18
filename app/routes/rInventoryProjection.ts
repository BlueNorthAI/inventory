import { json } from '@remix-run/node'
import { generatedSampleData } from '~/data/agGrid/snop/inventory/inventoryProjection'
export async function loader({ request }) {
  try {
    const data = generatedSampleData
    // console.log(data)
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

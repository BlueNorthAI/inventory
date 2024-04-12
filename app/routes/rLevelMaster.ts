import { json } from '@remix-run/node'
import { prisma } from '~/db.server'
import { getLevelMaster } from '~/models/snop.server'

export async function loader({ request }) {
  console.log('inside loader', request.url)
  // const url = new URL(request.url);
  // // const page = Number(url.searchParams.get("page")) || 1;
  // // const limit = Number(url.searchParams.get("limit")) || 10; // Default to 10 rows per page

  // const skip = (page - 1) * limit;

  try {
    // Fetching the subset of records for the specified page, including related dimension_master data
    // const data = await getLevelMaster();
    const data = [
      // Best Buy - New York data
      {
        customer: 'Best Buy',
        site: 'New York',
        measures: 'Target Plan (Revenue)',
        '2008Q1': 83764,
        '2008Q2': 187563,
        '2008Q3': 136162,
      },
      {
        customer: 'Best Buy',
        site: 'New York',
        measures: 'Financial Forecast (Revenue)',
        '2008Q1': 89303,
        '2008Q2': 181406,
        '2008Q3': 156720,
      },
      {
        customer: 'Best Buy',
        site: 'New York',
        measures: 'POS (Revenue)',
        '2008Q1': 57466,
        '2008Q2': 100277,
        '2008Q3': 0,
      },
      {
        customer: 'Best Buy',
        site: 'New York',
        measures: 'Achievement Rate',
        '2008Q1': 64.42,
        '2008Q2': 58.31,
        '2008Q3': 0,
      },
      {
        customer: 'Best Buy',
        site: 'New York',
        measures: 'Weighted Sales Price',
        '2008Q1': 487,
        '2008Q2': 735,
        '2008Q3': 461,
      },

      // San Jose data
      {
        customer: 'San Jose',
        site: 'California',
        measures: 'Target Plan (Revenue)',
        '2008Q1': 83936,
        '2008Q2': 182266,
        '2008Q3': 154791,
      },
      {
        customer: 'San Jose',
        site: 'California',
        measures: 'Financial Forecast (Revenue)',
        '2008Q1': 89468,
        '2008Q2': 181177,
        '2008Q3': 157509,
      },
      {
        customer: 'San Jose',
        site: 'California',
        measures: 'POS (Revenue)',
        '2008Q1': 57840,
        '2008Q2': 99282,
        '2008Q3': 0,
      },
      {
        customer: 'San Jose',
        site: 'California',
        measures: 'Achievement Rate',
        '2008Q1': 64.36,
        '2008Q2': 57.93,
        '2008Q3': 0,
      },
      {
        customer: 'San Jose',
        site: 'California',
        measures: 'Weighted Sales Price',
        '2008Q1': 595,
        '2008Q2': 736,
        '2008Q3': 538,
      },

      // Totals (you may need to calculate these based on the above data)
      {
        customer: 'Total',
        site: '',
        measures: 'Target Plan (Revenue)',
        '2008Q1': 167700,
        '2008Q2': 365953,
        '2008Q3': 290953,
      },
      {
        customer: 'Total',
        site: '',
        measures: 'Financial Forecast (Revenue)',
        '2008Q1': 178721,
        '2008Q2': 362583,
        '2008Q3': 314229,
      },
      {
        customer: 'Total',
        site: '',
        measures: 'POS (Revenue)',
        '2008Q1': 115050,
        '2008Q2': 199629,
        '2008Q3': 0,
      },
      {
        customer: 'Total',
        site: '',
        measures: 'Achievement Rate',
        '2008Q1': 64.39,
        '2008Q2': 58.12,
        '2008Q3': 0,
      },
      {
        customer: 'Total',
        site: '',
        measures: 'Weighted Sales Price',
        '2008Q1': 975,
        '2008Q2': 1471,
        '2008Q3': 919,
      },
    ]
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

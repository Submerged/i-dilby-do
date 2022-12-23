import {APIGatewayProxyEventV2, APIGatewayProxyResultV2} from 'aws-lambda';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { omit } from 'lodash';
// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

interface RSVPProp  {
  Name: string;
  Children: number;
  Attendance: string;
  Date: string;
}
const appendSpreadsheet = async (rows: any[]) => {
  await doc.useServiceAccountAuth({
    client_email: CLIENT_EMAIL!,
    private_key: PRIVATE_KEY!.replace(/\\n/g, "\n"),
  });
  // loads document properties and worksheets
  await doc.loadInfo();

  const sheet = doc.sheetsById[SHEET_ID!];
  const result = await sheet.addRows(rows);
  await new Promise(resolve => setTimeout(resolve, 200));
};

export async function main(
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
  console.log('event 👉', event);

  const newRow = JSON.parse(<string>event.body);
  console.log(newRow);
  try {
    const guests = JSON.parse(newRow?.Guests);
    const rows = [];
    guests.map((guest: any) =>
      rows.push({
        Name: guest?.name,
        Food: guest?.food,
        Restrictions: guest?.restrictions,
      })
    );
    newRow.Date = Date();
    rows.push(omit(newRow, 'Guests'));
    await appendSpreadsheet(rows);
  } catch(e) {
    console.log(e);
    return {
      body: JSON.stringify({message: newRow}),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET'
      },
      statusCode: 400,
    }
  }
  return {
    body: JSON.stringify({message: newRow}),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Method': 'GET'
    },
    statusCode: 200,
  };
}

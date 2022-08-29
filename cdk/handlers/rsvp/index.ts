import {APIGatewayProxyEventV2, APIGatewayProxyResultV2} from 'aws-lambda';
import { GoogleSpreadsheet } from "google-spreadsheet";
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
const appendSpreadsheet = async (row: any) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL!,
            private_key: PRIVATE_KEY!.replace(/\\n/g, "\n"),
        });
        // loads document properties and worksheets
        await doc.loadInfo();

        const sheet = doc.sheetsById[SHEET_ID!];
        const result = await sheet.addRow(row);
    } catch (e) {
        console.error('Error: ', e);
    }
};

export async function main(
    event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
    console.log('event 👉', event);

    const newRow = JSON.parse(<string>event.body);
    newRow.Date = Date();
    await appendSpreadsheet(newRow);
    return {
        body: JSON.stringify({message: newRow}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Method': 'GET'
},
        statusCode: 200,
    };
}

//Import xlsx plugin
import * as EXCEL from 'xlsx';
import fs from 'fs';

//Define the test data structure

interface TestRecord {
    Skill1: string,
    Skill2: string
}

// Create the method to read excel file
export function readExcelFile(filePath: string){

    // Read the excel file as a binary string
    const file = fs.readFileSync(filePath);

    // parse into the workbook
    const workbook = EXCEL.read(file);

    // Get the first sheet 
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    // Convert the sheet data into JSON format

    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 });

    // convert raw data into TestRecord
    const records: TestRecord[] = rawData.slice(1).map((column: any) => ({
        Skill1: column[0],
        Skill2: column[1]
    }));

    return records;


}


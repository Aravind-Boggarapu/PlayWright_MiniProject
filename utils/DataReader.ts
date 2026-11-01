import fs from 'fs'
import  * as XLXS from 'Xlsx'


export class DataProvider
{

public static readJson(filePath: string)
{

    let data=fs.readFileSync(filePath,'utf8');
    let parsedData=JSON.parse(data);

    return parsedData;

}

public static readExcel(filePath: string)
{
 let workBook=XLXS.readFile(filePath);
let sheetName=workBook.SheetNames[0];
let sheet=workBook.Sheets[sheetName];
let data=XLXS.utils.sheet_to_json(sheet,{header:1})
return data;

}

}
import fs from 'node:fs/promises';
import path from 'node:path';

const productPath = path.resolve(
    process.cwd(),
    "data/products.json"
);

export async function readFileSync() {
    try {
        const data = await fs.readFile(productPath, { encoding: 'utf8' });
        let result = JSON.parse(data);
        return result;
    } catch (err) {
        console.error(err);
    }
}

export async function writeFileSync(product: any) {
    const data = JSON.stringify(product);
    fs.writeFile(productPath, data);
    console.log("Good bye! See you later.");
}
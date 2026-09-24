import { select } from '@inquirer/prompts';
import  { print, create, update, find, remove, sort, save } from './controllers/switcher.controller.js';
import { setStore, getStore } from './store/products.store.js';
import { readFileSync, writeFileSync } from './modules/fs.modules.js';

const products = await readFileSync(); 
setStore(products); // Open storage

const main = async (recall?:number) => {
    if (recall == 6) return 0;
    console.clear();
    const flow = await select({
        message: 'Select the function',
        choices: [
            {
                name : "1️⃣ Print 🖨️",
                value : 0
            },
            {
                name : "2️⃣ New Product ✅",
                value : 1
            },
            {
                name : "3️⃣ Update ⬇️",
                value : 2
            },
            {
                name : "4️⃣ Find 🔎",
                value : 3
            },
            {
                name : "5️⃣ Remove ❌",
                value : 4
            },
            {
                name : "6️⃣ Sort ↕️",
                value : 5
            },
            {
                name : "7️⃣ Save & exits 👋",
                value : 6
            }
        ]
    });

    switch (flow) {
        case 0: {await print(); break;}
        case 1: {await create(); break;}
        case 2: {await update(); break;}
        case 3: {find(); break;} 
        case 4: {remove(); break;}
        case 5: {sort(); break;}
        case 6: {
            // writeFileSync(getStore()); // Save & Exit
            return 0;
            break;
        }
    }

    main(flow);
}

main();
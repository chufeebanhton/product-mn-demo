import { select, input } from '@inquirer/prompts';
import { addProduct, getStore } from '../store/products.store.js';

export async function get(a:number = 0, b:number = 9, recall?:number) {
    if (recall == 2) return 0;
    console.clear();
    const data = getStore();
    let options: {name: string, value: number}[] = [
        { name: "Get more...", value: 0},
        { name: "Get back...", value: 1},
        { name: "Exit!", value: 2}
    ]

    if (b <= 9) options.splice(1, 1);
    else if (data.length - b <= 0) options.splice(0, 1)

    console.table(data.slice(a, b).map((product:any) => ({
        ...product,
        image: "https://..."
    })));

    const flow = await select({
        message: "",
        choices: [
            ...options
        ]
    });

    if (flow == 0) { a = b + 1; b += 10 }

    else if (flow == 1) { b = a - 1; a -= 10 }
    await get(a, b, flow);     
}

export async function push(recall?: number) { // Chưa thêm chức năng nhập dữ liệu từ bàn phím, chưa validate được dữ liệu
    if (recall == 1) return 0;
    console.clear();
    let product;
    product = {
        id: "0987",
        name: "test",
        image: "ádasd",
        price: 200000
    }
    
    console.log("Thêm sản phẩm mới thành công!")
    console.log(addProduct(product));
    const flow = await select({
        message: "",
        choices: [
            {name: "Add more... ", value: 0},
            {name: "Exit!", value: 1}
        ]
    });
    return push(flow);
}

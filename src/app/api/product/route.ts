//add product
export async function POST(req:Request){
    const {title, description, price, imageUrl} = await req.json()
}
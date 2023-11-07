/* 

document (database) ---> app
database: {product: {fields: [{img, price}]}, banner}
database ---> product (document) ---> info of product 

product:
    {
        image: [img,img],
        product-name: string,
        price: number,
        slug: slug (ref: product-name),
        details: string
    }
*/

const product = {

    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{type: "image"}],
            options: {
                hotspot: true,
            }
        },
        {
            name: "productName",
            title: "Product Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "productName"
            }
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "details",
            title: "Details",
            type: "string",
        },
    ]
}

export default product;
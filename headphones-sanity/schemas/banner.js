/* 

// sanity
    banner: 
    {
        image: img,
        buttonText: string,
        product: string,
        largetext: string,
        largetext2: string,
        midText: string,
        smallText: string,
        desc: string,
        discount: string,
        saleTime: string,
    }

// traditional database
    [
        banner1: {},
        banner2: {},
    ]
*/

const banner = {
    name: "banner",
    title: "Banner",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "buttonText",
            title: "Button Text",
            type: "string"
        }, 
        {
            name: "product",
            title: "Product",
            type: "string"
        }, 
        {
            name: "desc",
            title: "Description",
            type: "string"
        }, 
        {
            name: 'smallText',
            title: 'Small Text',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'Mid Text',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Large Text1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Large Text2',
            type: 'string',
        },
        {
            name: "discount",
            title: "Discount",
            type: "string"
        },
        {
            name: "saleTime",
            title: "Sale Time",
            type: "string"
        }
    ]
}

export default banner;
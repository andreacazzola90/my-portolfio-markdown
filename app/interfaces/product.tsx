interface Product {
    body_html?: string,
    handle?: string,
    image?: Image,
    id?: string,
    published_at?: string,
    published_scope?: string,
    sort_order?: string,
    template_suffix?: string,
    title?: string,
    updated_at?: string,
    options?: any,
    vendor?: string,
    product_type?: string,
    tags?: string,
    status?: string,
    variants?: Variant[] | any,
    quantity?: number,
}

interface Variant {
    id?: number
    product_id?: number
    title?: string
    price?: string
    sku?: any
    position?: number
    inventory_policy?: string
    compare_at_price?: string
    fulfillment_service?: string
    inventory_management?: any
    option1?: string
    option2?: any
    option3?: any
    created_at?: string
    updated_at?: string
    taxable?: boolean
    barcode?: any
    grams?: number
    image_id?: any
    weight?: number
    weight_unit?: string
    inventory_item_id?: number
    inventory_quantity?: number
    old_inventory_quantity?: number
    requires_shipping?: boolean
    admin_graphql_api_id?: string
}


interface Image {
    src?: string | any,
    alt?: string | undefined,
    width?: number,
    height?: number,
    created_at?: string
}
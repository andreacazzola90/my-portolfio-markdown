interface Collection {
    id?: string,
    collection_id?: string,
    updated_at?: string,
    body_html?: string,
    default_product_image?: Image,
    handle?: string,
    image?: Image,
    title?: string,
    sort_order?: string,
    published_at?: string,
    products: [Product]
    pageInfo?: pageInfo
}
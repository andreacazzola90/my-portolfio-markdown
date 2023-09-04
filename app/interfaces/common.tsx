interface pageInfo {
    hasNextPage?: boolean,
    endCursor?: string
    hasPreviousPage?: boolean,
    startCursor?: string,
    current_page?: number,
}

interface Option {
    id?: string,
    product_id?: string,
    name?: string,
    position?: number
}


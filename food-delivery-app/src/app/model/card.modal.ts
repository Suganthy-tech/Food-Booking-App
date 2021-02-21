export interface card {
    name: string,
    type: string,
    cuisine: string,
    Availability: string[],
    price: number,
    currency: string,
    favorite: boolean,
    quantity?: number

}
export interface order {
    customerName?: string;
    custContactNumber?: string;
    items: card[];
    Amount: number;
    currency: string;
    orderDate: string;
    orderTime: string;
    expand: boolean;
}
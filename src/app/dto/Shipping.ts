export class Shipping
{
    billing_address: string
    billing_city: string
    billing_country: string
    billing_customer_name: string
    billing_email: string
    billing_last_name: string
    billing_phone: string
    billing_pincode: string
    billing_state: string
    breadth: number
    height: number
    length: number
    order_date: string
    order_id: string
    order_items: [
      {
        discount: string 
        hsn: string
        name: string
        selling_price: string
        sku: string
        tax: string
        units: number
      }
    ]
    sub_total: number
    weight: number
  }
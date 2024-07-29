export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  }
  

//Pick Utility Type
export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' | 'description' | 'image'> &  {
  quantity: number;
}

// export type GuitarID = Guitar['id'];
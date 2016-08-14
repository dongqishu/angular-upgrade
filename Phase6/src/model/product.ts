class Product {
    public id: number;
    public name: string;
    public tag: string;
    public description: string;
    public reviews: ProductReview;
    public price: number;
    public longDescription: string;
    public sourceUrl: string;
    public features: Array<string>;
    public imageUrl: string;
}

class ProductReview {
    public stars: number;
    public count: number;
    public myRating: number;
}
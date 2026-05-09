import { getProducts } from "@/lib/api";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div style={{ padding: "40px" }}>
            <h1>Products</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {products.map((product) => (
                    <div key={product._id} style={{ border: "1px solid #ddd", padding: "15px" }}>

                        {product.imageUrl && (
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                            />
                        )}

                        <h2>{product.name}</h2>
                        <p>Price: {product.price} mmk</p>
                        <p>Category: {product.category}</p>

                        <p style={{ color: product.stockStatus === "in-stock" ? "green" : "red" }}>
                            {product.stockStatus}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}
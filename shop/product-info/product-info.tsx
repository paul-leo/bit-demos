export type ProductInfoProps = {
  /**
   * sets the component children.
   */
  name?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
  count?: number;
};

export function ProductInfo({
  name,
  image,
  description,
  price,
  count = 999,
}: ProductInfoProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
      <p>{count}</p>
    </div>
  );
}

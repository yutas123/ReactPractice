const products = [
  { title: 'A', isFruit: false, id: 1 },
  { title: 'B', isFruit: false, id: 2 },
  { title: 'C', isFruit: true, id: 3 },
  { title: 'D', isFruit: false, id: 4 },
  { title: 'E', isFruit: false, id: 5 },
];

export function ShoppissssddngList() {
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
      {product.isFruit}
      {product.id}
    </li>
  );

  console.log(listItems);

  return (
    <ul>{listItems}</ul>
  );
}

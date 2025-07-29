fetch('data/products.json')
.then(res => res.json())
.then(products => {
  const list = document.getElementById('product-list');
  list.innerHTML = products.map(p => `
    <div class="product">
      <img src="images/${p.image}" alt="${p.name}" width="100%" />
      <h3>${p.name}</h3>
      <p><s>${p.price}৳</s> <strong>${p.offer_price}৳</strong></p>
    </div>`).join('');
});

const cart = [
    {
      id: 1,
      name: 'T-Shirt',
      price: 100000,
      quantity: 2,
      hotSale: false
    },
    {
      id: 2,
      name: 'Jean',
      price: 200000,
      quantity: 1,
      hotSale: false
    },
    {
      id: 3,
      name: 'Skirt',
      price: 150000,
      quantity: 3,
      hotSale: true
    },
    {
      id: 4,
      name: 'Shirt',
      price: 120000,
      quantity: 2,
      hotSale: false
    },
    {
      id: 5,
      name: 'Jacket',
      price: 250000,
      quantity: 1,
      hotSale: true
    }
  ];

function renderOrder(cart) {
    if(!Array.isArray(cart) || cart.length === 0) {
        console.log("Invalid ");
        return
    }

    const table = document.createElement("table")
    table.style.borderCollapse = "collapse"
    table.style.width = "100%"
    let itemStyle = "border: 1px solid black; padding: 8px; text-align:center"


    let thead = `
        <thead>
          <tr>
            <th style = "${itemStyle}">Tên sản phẩm</th>
            <th style = "${itemStyle}">Đơn giá</th>
            <th style = "${itemStyle}">Số lượng</th>
            <th style = "${itemStyle}">Thành tiền</th>
          </tr>
        </thead>
    `
    table.innerHTML = thead


    let total = 0
    let tbody = ""
    cart.forEach(item => {
        const rowStyle = item.hotSale ? "color: red" : ''
        total += item.price * item.quantity
        tbody += `
        <tr style = "${rowStyle}">
            <td style= "${itemStyle}">
            ${item.name}
            </td>
            <td style= "${itemStyle}">
            ${item.price} VND
            </td>
            <td style= "${itemStyle}">
            ${item.quantity}
            </td>
            <td style= "${itemStyle}">
            ${item.price * item.quantity} VND
            </td>
        </tr>
    `
    });
    table.innerHTML += tbody


    let tfoot = `
    <tfoot>
        <tr>
          <td colspan="3" style= "${itemStyle}">Tổng tiền</td>
          <td style= "${itemStyle}">${total} VND</td>
        </tr>
    </tfoot>
    `


    table.innerHTML += tfoot
    console.log(table.innerHTML);
    document.body.appendChild(table)
    
}

renderOrder(cart)
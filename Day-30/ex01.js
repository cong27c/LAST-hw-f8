// BT1

//   Yêu cầu:
//   Xây dựng hàm tạo menu từ dữ liệu cho trước. parentId là id của menu cha. Nếu parentId là 0 thì đó là menu chính, ngược lại là menu con.
//   Thay đổi font-size là 24px cho menu chính và font-size là 20px cho menu con bằng JavaScript.

const menu = [
    {
      id: 1,
      name: 'Home',
      parentId: 0
    },
    {
      id: 2,
      name: 'About',
      parentId: 0
    },
    {
      id: 3,
      name: 'News',
      parentId: 0
    },
    {
      id: 4,
      name: 'Products',
      parentId: 0
    },
    {
      id: 5,
      name: 'Contact',
      parentId: 0
    },
    {
      id: 6,
      name: 'T-Shirt',
      parentId: 4
    },
    {
      id: 7,
      name: 'Jean',
      parentId: 4
    },
    {
      id: 8,
      name: 'Skirt',
      parentId: 4
    }
  ];


function createMenu(menu) {
    const ulElement = document.createElement("ul")
    if(!Array.isArray(menu) || menu.length === 0) {
        alert("Du lieu ko hop le");
        return
    }


    let content = ""
    menu.forEach( item => {
        if(item.parentId === 0) {
            content += `
            <li>
                <a href ="#" ; style= "font-size: 24px">${item.name}</a>
            </li>
            `
        } else {
            content += `
            <ul>
                <Li>
                    <a href ="#"; style= "font-size: 20px">${item.name}</a>
                </Li>
            </ul>`
        }
    })


    ulElement.innerHTML += content
    document.body.appendChild(ulElement)
}
createMenu(menu)











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

  
function handleMenu(menu) {
  if(!Array.isArray(menu) || menu.length === 0) {
    console.log("Invalid ");
    return
}

  const obj = {}
  menu.forEach( item => {
    obj[item.id] = {...item, children: []}
  })

  const newMenu = []
  menu.forEach( item => {
    if(item.parentId === 0) {
      newMenu.push(obj[item.id])
    } else {
      obj[item.parentId].children.push(obj[item.id])
    }})
    function createList(items) {
      const ul = document.createElement("ul")
      items.forEach( item => {
        const li = document.createElement("li")
        const link = document.createElement("a")
        link.textContent= item.name
        link.href = "#"
    
        li.appendChild(link)
    
        if(item.parentId === 0) {
          li.style.fontSize = "24px"
        }else {
          li.style.fontSize = "20px"
        }
    
        ul.appendChild(li)
    
        if(item.children.length > 0) {
          li.appendChild(createList(item.children))
        }
      })
        return ul
    }
    const mainMenuElements = createList(newMenu)
    mainMenuElements.id = "main-menu"
    document.body.appendChild(mainMenuElements)
}

handleMenu(menu)






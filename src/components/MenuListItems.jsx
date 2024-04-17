
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import StarsIcon  from '@mui/icons-material/Stars';
import SupervisorAccountIcon  from '@mui/icons-material/SupervisorAccount';

import { useNavigate } from 'react-router-dom';



const icons =[
    {
        icon: <DashboardCustomizeIcon />,
        title: "Dashboard",
        url: "/stock/",
      },
      {
        title: "Purchase",
        icon: <ShopTwoIcon />,
        url: "/stock/purchase/",
      },
      {
        title: "Sales",
        icon: <AttachMoneyIcon />,
        url: "/stock/sales/",
      },
      {
        title: "Firms",
        icon: <StoreIcon />,
        url: "/stock/firms/",
      },
      {
        title: "Brands",
        icon: <StarsIcon />,
        url: "/stock/brands/",
      },
      {
        title: "Products",
        icon: <InventoryIcon />,
        url: "/stock/products/",
      },
      {
        title: "Admin Panel",
        icon: <SupervisorAccountIcon />,
        url: "https://21105.fullstack.clarusway.com/",
      },
]

const MenuListItems = () => {
    const navigate=useNavigate()
  return (
    <div>
         <List>
        {icons.map((item, index) => (
          <ListItem key={index} disablePadding onClick={()=>navigate(item.url)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MenuListItems;
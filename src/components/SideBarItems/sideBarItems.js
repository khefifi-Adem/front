import { useState } from "react"
import {Link} from "react-router-dom";

function SidebarItem({item}){
    const [open, setOpen] = useState(false)


    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>

                        {item.titre}
                    </span>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}/>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (

            <Link to={`${item.id}`} state={item} className="sidebar-item plain">
                <i className="fa fa-check"/>
                {item.titre}
            </Link>
        )
    }
}
export default SidebarItem;
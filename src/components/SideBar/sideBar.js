import SidebarItem from "../SideBarItems/sideBarItems";
import './sideBar.css';

function SideBar({data}){
    return (
        <div className="sidebar">
            {

                data.map((dataa) => <SidebarItem key={dataa.id} item={dataa} />) }
        </div>
    );
}


export default SideBar;
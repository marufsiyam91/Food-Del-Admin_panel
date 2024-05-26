import { assets } from "../assets/assets"


const Sidebar = () => {
  return (
    <aside className="max-w-[18%] min-h-[calc(100vh-101px)] border border-t-0">
        <div className="pt-12 flex flex-col items-end gap-5 ">
            <div className="flex border p-3 gap-3 w-2/3 items-center rounded-tl-md rounded-bl-md">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </div>
            <div className="flex border p-3 gap-3 w-2/3 items-center rounded-tl-md rounded-bl-md">
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </div>
            <div className="flex border p-3 gap-3 w-2/3 items-center rounded-tl-md rounded-bl-md">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
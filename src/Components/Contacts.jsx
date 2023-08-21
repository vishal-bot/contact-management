// All contacts are visible here and edit and delete option is also available
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "./Popup"
import { removeContact } from "../Redux/action"
const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()
    // console.log(AllContacts)

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className="justify-center pt-16  p-4  w-full ">
            <div className="m-4">
                <button className="bg-gray-300 font-bold p-3 text-2xl">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>

            </div>
            {AllContacts.length === 0 && 
            <div className=" m-auto w-fit p-4 align-middle text-blue-500 justify-center">
                <h1 className="text-3xl">No Contact Found Please add contact from <br /> Create Contact Button</h1>
            </div>}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-gray-300 border-2 m-4 p-1 text-center">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                                <div className="p-4">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />
                                    }
                                </div>
                                <div className="text-center font-bold">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Last Name  : {el.last_name}</p>
                                    <p>Mobile   : {el.mob}</p>
                                    <p>Status     : {el.status === "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className="p-2 bg-green-500 text-white">

                                        Edit
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className="p-2 bg-red-600 text-white">Delete</button>
                            </div>
                        </div>
                    })
                }


            </div>

        </div>
    )
}

export default Contacts
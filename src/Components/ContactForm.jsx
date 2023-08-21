// Importing dependencies
// This jsx is used to create Contact form using tailwindCss,Redux for storage.
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }
    function handleSave() {



        dispatch(addContact(form))

    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <h2 className="text-2xl font-bold mb-4">
            <button className="bg-gray-300 font-bold p-3 text-2xl">
                        Create Contact
            </button>
            </h2>
            <div className="border m-8 p-8">
            <div className="mb-4">
                <label className="font-bold mb-2" htmlFor="first-name">
                    First Name: &nbsp;
                </label>
                <input
                    className="border text-center"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="font-bold mb-2" htmlFor="last-name">
                    Last Name: &nbsp;
                </label>
                <input
                    className="border text-center"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="font-bold mb-2" htmlFor="last-name">
                    Mobile Number: &nbsp;
                </label>
                <input
                    className="border text-center"
                    id="last-name"
                    type="tel"
                    name="mob"
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="font-bold mb-2" htmlFor="status">
                    Status: &nbsp;
                </label>
                <select
                    className="border text-center"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}><strong>Active</strong></option>
                    <option value={"inactive"}><strong>Inactive</strong></option>
                </select>
            </div>
            </div>
            <button
                className="bg-gray-300 font-bold py-2 px-4"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}


export default ContactForm
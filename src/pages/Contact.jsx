import { useState } from "react";
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    useEffect(() => {
        document.title = "Contact | Gadget Heaven";
    }, []);

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate Form
    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required!";
        if (!formData.email.trim()) newErrors.email = "Email is required!";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email!";
        if (!formData.message.trim()) newErrors.message = "Message is required!";
        return newErrors;
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            setStatus("Message Sent Successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        }, 1000);
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 gap-10">
            {/* Address Section */}
            <div className="bg-white p-8 py-14 rounded-2xl shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-4">
                    Have a question or want to work together? Feel free to reach out!
                    We're always ready to assist you with any inquiries or collaborations.
                </p>

                <div className="space-y-4">
                    <div>
                    <div></div>
                        <p>South Moishan Bari, South Chuariakhola, Tumilia, Kaliganj, Gazipur</p>
                    </div>
                    <div><div className="flex">
                        <FaPhoneAlt />
                        <h3 className="font-semibold mb-2"> Phone:</h3>
                    </div>
                        <p>+880 1930 660293</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">📧 Email:</h3>
                        <p>subirdey93@example.com</p>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                {status && <p className="text-green-600 text-center">{status}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md h-24"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

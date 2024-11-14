    // src/components/Footer.jsx
    // import  from 'react';

    const Footer = () => {
    return (
        <footer className="bg-[#A5D2D9] p-8 text-gray-700">
        <div className="container mx-auto flex flex-wrap justify-between gap-8">
            <div className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold mb-2">GROOMY</h2>
            <p className="text-sm">Pet Shop</p>
            </div>

            <div className="w-full md:w-1/4">
            <h3 className="font-semibold mb-3">Help & Information</h3>
            <ul className="space-y-2">
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
                <li>Shipping & Returns</li>
                <li>Order Tracking</li>
                <li>Recycling</li>
                <li>Warranty</li>
            </ul>
            </div>

            <div className="w-full md:w-1/4">
            <h3 className="font-semibold mb-3">Shopping</h3>
            <ul className="space-y-2">
                <li>My Account</li>
                <li>Foods & Treats</li>
                <li>Brushes & Combs</li>
                <li>Toys & Accessories</li>
                <li>Soaps & Shampoos</li>
                <li>Gift Vouchers</li>
            </ul>
            </div>

            <div className="w-full md:w-1/4">
            <h3 className="font-semibold mb-3">Our Website</h3>
            <ul className="space-y-2">
                <li>Site Map</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Website Help</li>
            </ul>
            </div>

            <div className="w-full md:w-1/4 flex flex-col items-start">
            <h3 className="font-semibold mb-3">Get in Touch</h3>
            <div className="flex space-x-3 text-xl mb-4">
                <a href="#" aria-label="Facebook" className="hover:text-gray-500">
                F
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-500">
                T
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-gray-500">
                I
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-gray-500">
                Y
                </a>
            </div>
            <h3 className="font-semibold mb-2">Subscribe</h3>
            <form className="flex">
                <input
                type="email"
                placeholder="Enter email address"
                className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-gray-500"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600">
                Subscribe
                </button>
            </form>
            </div>
        </div>
        <div className="text-center text-xs mt-8">
            <p>&copy; Copyright Groomy 2024. Registered No: 123456789</p>
        </div>
        </footer>
    );
    };

    export default Footer;

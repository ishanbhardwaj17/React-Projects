const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
        description:
            "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 249.99,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
        description:
            "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
    },
    {
        id: 3,
        name: "Laptop Stand",
        price: 49.99,
        image:
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
        description:
            "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: 129.99,
        image:
            "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
        description:
            "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
    },
    {
        id: 5,
        name: "USB-C Hub",
        price: 39.99,
        image:
            "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
        description:
            "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 29.99,
        image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
        description:
            "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
    },
    {
        id: 7,
        name: "Monitor Stand",
        price: 79.99,
        image:
            "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
        description:
            "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
    },
    {
        id: 8,
        name: "Webcam HD",
        price: 89.99,
        image:
            "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
        description:
            "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        price: 59.99,
        image:
            "https://images.unsplash.com/photo-1512446816042-444d6412673b?w=500&h=500&fit=crop",
        description:
            "Portable Bluetooth speaker with deep bass and crystal-clear sound. Compact design with long battery life.",
    },
    {
        id: 10,
        name: "Noise Cancelling Earbuds",
        price: 119.99,
        image:
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
        description:
            "True wireless earbuds with active noise cancellation and immersive sound. Perfect for travel and workouts.",
    },
    {
        id: 11,
        name: "Gaming Chair",
        price: 199.99,
        image:
            "https://images.unsplash.com/photo-1616627981846-8c2f38c46eaf?w=500&h=500&fit=crop",
        description:
            "Ergonomic gaming chair with lumbar support and adjustable armrests. Designed for comfort during long sessions.",
    },
    {
        id: 12,
        name: "External SSD",
        price: 149.99,
        image:
            "https://images.unsplash.com/photo-1611078489935-0cb964de46e9?w=500&h=500&fit=crop",
        description:
            "High-speed external SSD with USB-C support. Fast data transfer and durable metal design.",
    },
    {
        id: 13,
        name: "Desk Lamp LED",
        price: 34.99,
        image:
            "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&h=500&fit=crop",
        description:
            "Minimal LED desk lamp with adjustable brightness and color temperature. Eye-friendly lighting for work and study.",
    },
    {
        id: 14,
        name: "Portable Power Bank",
        price: 44.99,
        image:
            "https://images.unsplash.com/photo-1609592546636-8f3b3cbd40e4?w=500&h=500&fit=crop",
        description:
            "High-capacity power bank with fast charging support. Reliable backup power for all your devices.",
    },
    {
        id: 15,
        name: "Wireless Charging Pad",
        price: 27.99,
        image:
            "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500&h=500&fit=crop",
        description:
            "Sleek wireless charging pad compatible with all Qi-enabled devices. Safe and efficient charging.",
    },
    {
        id: 16,
        name: "Smart Home Plug",
        price: 24.99,
        image:
            "https://images.unsplash.com/photo-1580894894513-541e068a3c08?w=500&h=500&fit=crop",
        description:
            "Wi-Fi enabled smart plug to control appliances remotely. Works with voice assistants and mobile apps.",
    },
    {
        id: 17,
        name: "Tablet Stand",
        price: 22.99,
        image:
            "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
        description:
            "Adjustable tablet stand for desk or kitchen use. Stable design ideal for video calls and streaming.",
    },
    {
        id: 18,
        name: "Wireless Presenter",
        price: 19.99,
        image:
            "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=500&h=500&fit=crop",
        description:
            "Wireless presentation clicker with laser pointer. Perfect for meetings, classrooms, and conferences.",
    },
    {
        id: 19,
        name: "Desk Organizer",
        price: 26.99,
        image:
            "https://images.unsplash.com/photo-1589987607627-616cac6b74aa?w=500&h=500&fit=crop",
        description:
            "Minimal desk organizer to keep your workspace tidy. Multiple compartments for accessories and stationery.",
    },
    {
        id: 20,
        name: "USB Microphone",
        price: 109.99,
        image:
            "https://images.unsplash.com/photo-1590602841691-6c96a6f56c56?w=500&h=500&fit=crop",
        description:
            "Professional USB condenser microphone for streaming, podcasting, and recording. Plug-and-play setup.",
    },

];

export function getProducts() {
    return products;
}

export function getProductById(id) {
    return products.find((p) => p.id === Number(id));
}

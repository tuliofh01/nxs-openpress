export interface User {
    id: number;
    username: string;
    email: string;
    role: 'user' | 'admin' | 'moderator';
    created_at: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
}

export interface Order {
    id: number;
    user_id: number;
    total_amount: number;
    status: 'pending' | 'paid' | 'fulfilled' | 'cancelled';
    created_at: string;
}

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    content: string; // HTML/Markdown
    author_id: number;
    published_at: string;
}

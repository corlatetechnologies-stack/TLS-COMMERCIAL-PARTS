import React, { useState } from 'react';
import { products } from '../data/products';
import { sendWhatsAppOrder } from '../utils/whatsapp';
import '../styles/Products.css';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredProduct, setHoveredProduct] = useState(null);

    // Get unique categories
    const categories = ['All', ...new Set(products.map(p => p.category))];

    // Filter products based on category and search
    const filteredProducts = products.filter(product => {
        const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    const handleOrderClick = (product) => {
        sendWhatsAppOrder(product);
    };

    return (
        <section id="products" className="products">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">🚗 Find Your Perfect Part</h2>
                    <p className="section-description">
                        We've got everything you need! Browse our hand-picked collection of quality Mercedes-Benz parts. 
                        Each part is carefully inspected and tested. Have a question? Just reach out on WhatsApp! 💬
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="products-controls">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="🔍 Search for a part..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </div>

                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div 
                                key={product.id} 
                                className="product-card"
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-content">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-category">{product.category}</p>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-footer">
                                        <button 
                                            className={`order-btn ${hoveredProduct === product.id ? 'hovered' : ''}`}
                                            onClick={() => handleOrderClick(product)}
                                            title="Order via WhatsApp"
                                        >
                                            <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                                            </svg>
                                            {hoveredProduct === product.id ? 'Chat with us' : 'Order'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-products">
                        <div className="no-products-icon">🔍</div>
                        <p className="no-products-text">Hmm, we couldn't find that part...</p>
                        <p className="no-products-hint">Try searching for something else or chat with us on WhatsApp!</p>
                    </div>
                )}

                {/* Results Counter */}
                <div className="products-info">
                    <p>👍 Showing <span className="highlight">{filteredProducts.length}</span> of <span className="highlight">{products.length}</span> parts</p>
                </div>

                {/* CTA Section */}
                <div className="products-cta">
                    <h3>💬 Can't find what you're looking for?</h3>
                    <p>Our team is ready to help! Chat with us on WhatsApp or give us a call.</p>
                    <div className="cta-buttons">
                        <a href="https://wa.me/message/HBNN47EW2DUXP1" target="_blank" rel="noopener noreferrer" className="cta-btn primary">
                            💬 WhatsApp Us
                        </a>
                        <a href="tel:+27630206053" className="cta-btn secondary">
                            📞 Call Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;

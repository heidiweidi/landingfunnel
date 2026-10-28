// WhatsApp Sales Funnel Configuration
// EION Harmony Product Details

const CONFIG = {
    whatsappNumber: "639000000000", // Replace with your WhatsApp number (e.g., "639123456789" for PH)
    productName: "EION Harmony",
    price: "₱16,000"
};

// Generate WhatsApp URL with pre-filled message
function generateWhatsAppUrl() {
    const message = `Hi! I'd like to order ${CONFIG.productName} for ${CONFIG.price}. Can you confirm availability and how to order?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

// Initialize WhatsApp links when DOM is ready
function initWhatsAppLinks() {
    const whatsappUrl = generateWhatsAppUrl();
    
    // Hero CTA
    const heroCta = document.getElementById('hero-cta');
    if (heroCta) {
        heroCta.href = whatsappUrl;
    }
    
    // Price section CTA
    const priceCta = document.getElementById('price-cta');
    if (priceCta) {
        priceCta.href = whatsappUrl;
    }
    
    // Sticky CTA (mobile)
    const stickyCta = document.getElementById('sticky-cta');
    if (stickyCta) {
        stickyCta.href = whatsappUrl;
    }
}

// Run when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhatsAppLinks);
} else {
    initWhatsAppLinks();
}

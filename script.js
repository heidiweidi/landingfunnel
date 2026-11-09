// EION Harmony - WhatsApp ordering configuration
const CONFIG = {
    whatsappNumber: "639275335783", // from the product card (JSTCaresIntl, +63 927 533 5783) - change if orders should go elsewhere
    productName: "EION Harmony Hot Air Blower",
    price: "₱16,000"
};

function whatsappUrl() {
    const message = `Hi! I'd like to order the ${CONFIG.productName} for ${CONFIG.price}. Can you confirm availability and how to order?`;
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function init() {
    const url = whatsappUrl();
    document.querySelectorAll('.js-wa').forEach(a => {
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
    });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

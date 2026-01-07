const PORT = process.env.PORT || 5002;

const APP_CONFIG = {
    PORT,
    API_PREFIX: '/api',
};

const ORDER_STATUS = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled',
};

module.exports = {
    APP_CONFIG,
    ORDER_STATUS,
};

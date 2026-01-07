const axios = require('axios');

const API_URL = 'http://localhost:5002/api/products';

const testData = {
    name: 'Artisan Sourdough',
    price: 6.5,
    bulkPrice: 5.0,
    minOrder: 10,
    category: 'Bread',
    description: 'Hand-crafted sourdough bread and naturally fermented.'
};

async function verifyPersistence() {
    console.log('--- Starting Data Persistence Test ---');

    try {
        // 1. Create a product
        console.log('Step 1: Creating a product...');
        const createRes = await axios.post(API_URL, testData);
        console.log('✓ Product created:', createRes.data);

        // 2. Fetch all products to verify it's there
        console.log('\nStep 2: Fetching all products to verify persistence...');
        const getAllRes = await axios.get(API_URL);
        const found = getAllRes.data.find(p => p.name === testData.name);

        if (found) {
            console.log('✓ Success! Product found in database via API.');
            console.log('✓ Verified Data:', found);
        } else {
            console.log('✗ Failure: Product was not found in the list after creation.');
        }

    } catch (error) {
        console.error('✗ Test failed:', error.response?.data || error.message);
        console.log('\n[TIP] Make sure the backend server is running (node server.js) and migrations are applied (npx prisma migrate dev).');
    }
}

verifyPersistence();

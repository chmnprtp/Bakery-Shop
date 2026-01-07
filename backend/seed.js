const prisma = require('./src/config/db');

async function seed() {
    console.log('Seeding database...');

    const products = [
        { name: 'Sourdough Bread', price: 5.00, bulkPrice: 4.00, minOrder: 10, category: 'Bread', description: 'Classic artisan sourdough.' },
        { name: 'Butter Croissants', price: 3.50, bulkPrice: 2.80, minOrder: 24, category: 'Pastry', description: 'Flaky and buttery layered pastry.' },
        { name: 'Plain Bagels', price: 2.00, bulkPrice: 1.50, minOrder: 50, category: 'Bread', description: 'Boiled and baked traditional bagels.' }
    ];

    for (const product of products) {
        await prisma.product.create({ data: product });
    }

    console.log('Seeding complete!');
    process.exit(0);
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});

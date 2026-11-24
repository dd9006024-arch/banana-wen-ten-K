import { PrismaClient } from '@prisma/client';
import { products, experiences, stories } from '../src/lib/content';

const db = new PrismaClient();

async function main() {
  for (const category of [...new Set(products.map((p) => p.category))]) {
    await db.productCategory.upsert({ where: { name: category }, update: {}, create: { name: category } });
  }
  for (const product of products) {
    const category = await db.productCategory.findUnique({ where: { name: product.category } });
    await db.product.upsert({
      where: { id: product.id },
      update: { name: product.name, description: product.description, price: product.price, unit: product.unit, image: product.image, fresh: !!product.fresh, categoryId: category?.id },
      create: { id: product.id, name: product.name, description: product.description, price: product.price, unit: product.unit, image: product.image, fresh: !!product.fresh, categoryId: category?.id },
    });
  }
  for (const experience of experiences) {
    await db.experience.upsert({ where: { id: experience.id }, update: { name: experience.name, price: experience.price, capacity: experience.capacity }, create: { id: experience.id, name: experience.name, price: experience.price, capacity: experience.capacity } });
  }
  for (const [index, story] of stories.entries()) {
    const id = `spot-${index + 1}`;
    await db.cultureSpot.upsert({
      where: { id },
      update: { name: story.title, address: story.address, description: story.description, latitude: story.lat, longitude: story.lng, image: story.image },
      create: { id, name: story.title, address: story.address, description: story.description, latitude: story.lat, longitude: story.lng, image: story.image },
    });
  }
}

main().finally(() => db.$disconnect());

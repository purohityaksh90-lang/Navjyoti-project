import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { products } from '@/lib/products';
export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F4F4F] mb-6">Our Story</h1>
            <div className="space-y-6 text-lg text-[#2F4F4F]/90">
              <p>
                Navjyoti Herbals was born from a deep-rooted belief in the healing power of nature. Our journey began in the serene landscapes where ancient herbal wisdom has been passed down through generations.
              </p>
              <p>
                We saw a need for pure, unadulterated herbal products in a market flooded with processed alternatives. Our mission is simple: to bring you the finest raw herbs, sourced ethically and handled with the utmost care, preserving their natural potency and purity.
              </p>
              <p>
                From our family to yours, we offer products that are not just remedies, but a connection to the earth's profound ability to nurture and heal.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1516253593875-bd7ba04221a3?q=80&w=1200&auto=format&fit=crop"
              alt="Herbal ingredients"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      {/* Products Section */}
      <section className="bg-white/40 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#2F4F4F]">Our Product Catalog</h2>
            <p className="mt-4 text-lg text-[#2F4F4F]/80 max-w-2xl mx-auto">Explore our complete range of pure and raw herbal products.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="bg-white/50 rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#D2B48C] transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-display text-[#2F4F4F] mb-2">{product.name}</h3>
                    <p className="text-[#2F4F4F]/90 flex-grow">{product.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
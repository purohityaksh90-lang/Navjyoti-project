import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/products';
import { Leaf, ShieldCheck, Globe } from 'lucide-react';
export default function HomePage() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  const brandValues = [
    {
      icon: <Leaf className="w-10 h-10 text-[#D2B48C]" />,
      title: '100% Natural',
      description: 'We use only the purest, raw ingredients sourced directly from nature, with no artificial additives.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#D2B48C]" />,
      title: 'Quality Assured',
      description: 'Every batch is meticulously tested to ensure the highest standards of purity and potency.',
    },
    {
      icon: <Globe className="w-10 h-10 text-[#D2B48C]" />,
      title: 'Sustainably Sourced',
      description: 'We partner with ethical growers who prioritize environmental sustainability and fair practices.',
    },
  ];
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560963952-a00762972f63?q=80&w=1920&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold [text-shadow:0_4px_8px_rgba(0,0,0,0.4)]"
          >
            Purity in Every Leaf
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200 [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]"
          >
            Rediscover wellness with Navjyoti Herbals, your trusted source for pure, raw herbal products straight from nature's heart.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <Button asChild size="lg" className="bg-[#D2B48C] text-[#2F4F4F] hover:bg-[#c8a77a] text-lg px-8 py-6 rounded-full transition-transform duration-300 hover:scale-105">
              <Link to="/about">Explore Our Products</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#2F4F4F]">Featured Products</h2>
          <p className="mt-4 text-lg text-[#2F4F4F]/80 max-w-2xl mx-auto">A selection of our most popular and effective herbal solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-white/50 rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#D2B48C] transition-all duration-300 group h-full"
              >
                <div className="overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-[#2F4F4F]">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#2F4F4F]/90">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Brand Values Section */}
      <section className="bg-white/40 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#2F4F4F]">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-[#2F4F4F]/80 max-w-2xl mx-auto">Our commitment to purity, quality, and sustainability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {brandValues.map((value, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="bg-[#F5F5DC] p-5 rounded-full mb-6 shadow-md">{value.icon}</div>
                <h3 className="text-2xl font-display font-semibold text-[#2F4F4F] mb-3">{value.title}</h3>
                <p className="text-[#2F4F4F]/90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
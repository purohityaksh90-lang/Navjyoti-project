import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MapPin, Phone, Mail } from 'lucide-react';
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });
  function onSubmit(values) {
    console.log(values);
    toast.success("Message Sent!", {
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }
  return (
    <div className="pt-24 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-[#2F4F4F]">Get In Touch</h1>
          <p className="mt-4 text-lg text-[#2F4F4F]/80 max-w-2xl mx-auto">We'd love to hear from you. Send us a message or find us at our location.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            className="bg-[#F5F5DC] p-8 md:p-12 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display text-[#2F4F4F] mb-8">Contact Form</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-[#2F4F4F]">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-white/80 focus:ring-[#D2B48C]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-[#2F4F4F]">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="bg-white/80 focus:ring-[#D2B48C]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-[#2F4F4F]">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" {...field} rows={6} className="bg-white/80 focus:ring-[#D2B48C]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-[#D2B48C] text-[#2F4F4F] hover:bg-[#c8a77a] text-lg py-6 rounded-lg transition-transform duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-display text-[#2F4F4F] mb-8">Our Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D2B48C] p-3 rounded-full text-[#2F4F4F] mt-1"><MapPin /></div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2F4F4F]">Address</h3>
                  <p className="text-[#2F4F4F]/90">123 Herbal Lane, Nature City, 54321</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#D2B48C] p-3 rounded-full text-[#2F4F4F] mt-1"><Phone /></div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2F4F4F]">Phone</h3>
                  <p className="text-[#2F4F4F]/90">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#D2B48C] p-3 rounded-full text-[#2F4F4F] mt-1"><Mail /></div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2F4F4F]">Email</h3>
                  <p className="text-[#2F4F4F]/90">contact@navjyotiherbals.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8 h-80 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019894986234!2d144.9537353159042!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1620312938921!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
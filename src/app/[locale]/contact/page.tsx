'use client';

import React, { useState, FormEvent } from 'react';
import { Header, Footer } from '@/components/layout';
import { Section, Container } from '@/design-system';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - user needs to set up their own service
      // For now, this will show how to integrate it
      // Users need to replace with their own SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'sprzedaz@afropolis.com',
        },
        'YOUR_PUBLIC_KEY'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main>
        <Section variant="gray">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-afro-blue mb-4">
                  {t('title')}
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  {t('description')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Form */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>{t('form.submit')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">{t('form.name')}</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('form.namePlaceholder')}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">{t('form.email')}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('form.emailPlaceholder')}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">{t('form.phone')}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('form.phonePlaceholder')}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">{t('form.message')}</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t('form.messagePlaceholder')}
                          rows={6}
                          className="mt-1"
                        />
                      </div>

                      {submitStatus === 'success' && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                          {t('form.success')}
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                          {t('form.error')}
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-afro-orange hover:bg-afro-orange/90 text-white font-bold"
                      >
                        {isSubmitting ? t('form.sending') : t('form.submit')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>{t('info.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-afro-blue mb-2">{t('info.address')}</h3>
                      <p className="text-gray-700">{tFooter('officeAddress')}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-afro-blue mb-2">{t('info.email')}</h3>
                      <a
                        href="mailto:sprzedaz@afropolis.com"
                        className="text-gray-700 hover:text-afro-orange transition-colors"
                      >
                        sprzedaz@afropolis.com
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-afro-blue mb-2">{t('info.phone')}</h3>
                      <a
                        href="tel:+220123456"
                        className="text-gray-700 hover:text-afro-orange transition-colors"
                      >
                        +220 123 456
                      </a>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-4">
                        Follow us on social media
                      </p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-afro-blue transition-colors">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-afro-blue transition-colors">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

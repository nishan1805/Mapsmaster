
import React from 'react';
import { Service, PricingPlan, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'gmb-opt',
    title: 'Google Business Profile Optimization',
    description: 'Optimize your GMB profile to appear in the local pack and attract more walk-ins.',
    icon: '📍',
  },
  {
    id: 'local-seo',
    title: 'Local Business SEO',
    description: 'Dominating local search queries to ensure neighborhood customers find you first.',
    icon: '🗺️',
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    description: 'High-quality lead generation strategies tailored for local businesses to drive real sales.',
    icon: '🎯',
  },
  {
    id: 'ads-marketing',
    title: 'Google / Meta Ads',
    description: 'Highly targeted ads on Google & Meta that bring instant leads and quality customers to your business.',
    icon: '📈',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom websites and web applications built to drive conversions and showcase your business professionally.',
    icon: '💻',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-focused design solutions that enhance customer experience and boost engagement rates.',
    icon: '🎨',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹1,250/mo',
    description: 'Perfect for businesses starting their Google Business visibility journey.',
    features: [
      'GBP Setup & Optimization',
      'Basic Keyword Optimization',
      '4 Google Posts per month',
      '2 Product Updates per month',
      'Unlimited Photo Uploads',
      'Review Management',
      'Visibility Boost Ranking Strategy',
      'Standard Support',
      'Monthly Report'
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹2,000/mo',
    description: 'Ideal for growing businesses aiming for strong first-page presence.',
    features: [
      'GBP Setup & Optimization',
      'Keyword Optimization (Up to 10 Keywords)',
      '8 Google Posts per month',
      '4 Product Updates per month',
      'Unlimited Photo Uploads',
      'Review Management',
      'Strong First-Page Push Ranking Strategy',
      'Priority Support',
      'Monthly Report'
    ],
    isPopular: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹3,000/mo',
    description: 'The ultimate package for multiple locations and maximum lead volume.',
    features: [
      'GBP Setup & Optimization',
      'Keyword Optimization (Up to 20 Keywords)',
      'Weekly Google Posts',
      'Weekly Product Updates',
      'Unlimited Photo Uploads',
      'Priority Review Management',
      'Aggressive Top-Position Push Strategy',
      'Dedicated Priority Support',
      'Detailed Monthly Report'
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    business: 'Sharma Auto Works',
    text: 'MapsMaster helped our garage get 3x more calls within 2 months. The GMB optimization was a game changer for us.',
    image: 'https://picsum.photos/id/64/100/100',
  },
  {
    id: '2',
    name: 'Anjali Gupta',
    business: 'Gupta Sweets & Snacks',
    text: 'Since working with the team, we are always in the top 3 on Google Maps. Our weekend sales have increased significantly.',
    image: 'https://picsum.photos/id/65/100/100',
  },
  {
    id: '3',
    name: 'Vikram Singh',
    business: 'Singh Real Estate',
    text: 'Professional, affordable, and results-driven. They understand the local market in Raipur perfectly.',
    image: 'https://picsum.photos/id/91/100/100',
  },
];

export const CLIENT_LOGOS = [
  '/clients/client1.png',
  '/clients/client2.png',
  '/clients/client3.png',
  '/clients/client4.png',
  '/clients/client5.png',
  '/clients/client6.png',
  '/clients/client7.png'
];

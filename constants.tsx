
import React from 'react';
import { Service, PricingPlan, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    description: 'High-quality lead generation strategies tailored for local businesses to drive real sales.',
    icon: '🎯',
  },
  {
    id: 'seo-marketing',
    title: 'SEO Marketing',
    description: 'Comprehensive digital marketing that puts your business at the forefront of search results.',
    icon: '📈',
  },
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
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹4,999/mo',
    description: 'Perfect for small shops looking to get started with local visibility.',
    features: [
      'GMB Setup & Audit',
      'Basic Keyword Optimization',
      '5 Photo Uploads Monthly',
      'Weekly Status Report',
      'Google Review Strategy'
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹12,499/mo',
    description: 'Comprehensive plan for scaling businesses wanting to dominate their area.',
    features: [
      'Full GMB Management',
      'Local Citation Building',
      '15 Photo/Video Uploads',
      'Negative Review Management',
      'Competitor Analysis Monthly',
      'Google Maps Ranking'
    ],
    isPopular: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹24,999/mo',
    description: 'The ultimate package for multiple locations and maximum lead volume.',
    features: [
      'Multi-Location Support',
      'Advanced Content Strategy',
      'Priority Support 24/7',
      'High-Authority Backlinks',
      'Custom Lead Gen Dashboard',
      'Dedicated Account Manager'
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
  'TechCorp', 'Lumina', 'UrbanStyle', 'PureFresh', 'GlobalSolutions', 'VibeCheck', 'ApexGroup'
];

import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
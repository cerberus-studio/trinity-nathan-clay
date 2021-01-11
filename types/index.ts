import React from 'react';

// This file exports prop types used by various components

// Prop types for the Session Request Fields on the Session Request Form
export interface SessionRequestFieldProps {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    invalid?: boolean;
    disabled: boolean;
    value: string;
    onChange: (value: string) => void;
}

// Prop types for the Cards on the Working Together section
export interface CardProps {
    image: any;
    imageLabel: string;
    title: string;
    content: string;
}

// Prop types for the individual case study components in the Case Study section
export interface CaseStudyProps {
    image: any;
    imageAlt: string;
    title: string;
    content: string;
}

// Prop types for individual carousel slides
export interface CarouselSlideProps {
    image: any;
    imageAlt: string;
}

// Prop types for carousel left / right buttons
export interface CarouselButtonsProps {
    next: () => void,
    previous: () => void,
    goToSlide: (slide: number) => void
}

// Prop types for HeadMeta/SEO info component
export interface MetaProps {
    title: string;
    description?: string;
}

// Prop types for List component
export interface ListProps {
    content: string;
}

// Prop types for Button component
export interface ButtonProps {
    type: string;
    href?: string;
    text: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent) => void;
}
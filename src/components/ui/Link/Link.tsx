import { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import { cn } from '@/utils/style';

interface LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Link: FC<LinkProps> = ({ href, children, className, onClick }) => {
    return (
        <NextLink
            href={href}
            onClick={onClick}
            className={cn(
                "relative",
                "text-gray-700 hover:text-blue-700 active:text-blue-800",
                "transition-colors duration-200",
                "after:content-[''] after:absolute after:bottom-0 after:left-0",
                "after:w-full after:h-0.5 after:bg-blue-700",
                "after:scale-x-0 after:origin-right",
                "after:transition-transform after:duration-300",
                "hover:after:scale-x-100",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                className
            )}
        >
            {children}
        </NextLink>
    );
}; 
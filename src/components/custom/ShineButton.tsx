"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ShineButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function ShineButton({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}: ShineButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={`relative overflow-hidden font-bold transition-all duration-300 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {/* Button Content */}
      <span className="relative z-10">{children}</span>

      {/* Shine Effect */}
      {!disabled && (
        <span className="absolute inset-0 z-0">
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-black/30 to-transparent animate-shine"
            style={{
              backgroundSize: '200% 100%',
              animation: 'shine 3s infinite',
            }}
          />
        </span>
      )}

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </motion.button>
  );
}

// 用于链接样式的版本
export function ShineLinkButton({
  children,
  href,
  className = ''
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden inline-block font-bold transition-all duration-300 ${className}`}
    >
      {/* Button Content */}
      <span className="relative z-10">{children}</span>

      {/* Shine Effect */}
      <span className="absolute inset-0 z-0">
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-black/30 to-transparent animate-shine"
          style={{
            backgroundSize: '200% 100%',
            animation: 'shine 3s infinite',
          }}
        />
      </span>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </motion.a>
  );
}

import React from 'react';
import classNames from 'classnames';

const variants = {
  default: 'bg-black text-white hover:bg-gray-800',
  outline: 'border border-gray-300 text-black hover:bg-gray-100',
  ghost: 'text-black hover:bg-gray-100',
};

const sizes = {
  default: 'px-4 py-2 text-sm',
  sm: 'px-3 py-1 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) {
  return (
    <button
      className={classNames(
        'rounded-md font-medium transition-colors duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

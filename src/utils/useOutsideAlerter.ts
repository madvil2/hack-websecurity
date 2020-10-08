import * as React from 'react';
const { useEffect } = React;

export const useOutsideAlerter = (ref: any, cb: (props?: any) => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setTimeout(() => {
        cb();
      }, 300);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

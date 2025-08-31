'use client';

import { useState, ReactNode, createContext, useContext, useEffect, useRef } from 'react';

interface AccordionContextType {
  openSectionIds: Set<string>;
  toggleSectionById: (sectionId: string) => void;
  enableMultiSectionOpen: boolean;
  accordionName: string;
  color: string;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const useAccordionContext = () => {
  const accordionContextValue = useContext(AccordionContext);
  if (!accordionContextValue) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return accordionContextValue;
};

interface SectionContextType {
  currentSectionId: string;
  isSectionOpen: boolean;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

const useSectionContext = () => {
  const sectionContextValue = useContext(SectionContext);
  if (!sectionContextValue) {
    throw new Error('AH and AC must be used within an AS (Accordion Section)');
  }
  return sectionContextValue;
};

export interface AccordionProps {
  name: string;
  children: ReactNode;
  enableMultiSectionOpen?: boolean;
  defaultOpen?: string[];
  className?: string;
  color?: string;
}

export function Accordion({
  name,
  children,
  enableMultiSectionOpen = false,
  defaultOpen = [],
  className = '',
  color = 'blue'
}: AccordionProps) {
  const [currentlyOpenSectionIds, setCurrentlyOpenSectionIds] = useState<Set<string>>(
    () => new Set(defaultOpen)
  );

  const toggleSectionById = (targetSectionId: string) => {
    setCurrentlyOpenSectionIds(previousOpenSections => {
      const updatedOpenSections = new Set(previousOpenSections);
      
      if (updatedOpenSections.has(targetSectionId)) {
        updatedOpenSections.delete(targetSectionId);
      } else {
        if (!enableMultiSectionOpen) {
          return new Set([targetSectionId]);
        }
        updatedOpenSections.add(targetSectionId);
      }
      
      return updatedOpenSections;
    });
  };

  return (
    <AccordionContext.Provider value={{ 
      openSectionIds: currentlyOpenSectionIds, 
      toggleSectionById, 
      enableMultiSectionOpen, 
      accordionName: name,
      color 
    }}>
      <div 
        className={`space-y-2 ${className}`}
        data-accordion-name={name}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface ASProps {
  id: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AS({ 
  id,
  children, 
  defaultOpen = false,
  className = '' 
}: ASProps) {
  const { openSectionIds, toggleSectionById, accordionName } = useAccordionContext();
  const isSectionCurrentlyOpen = openSectionIds.has(id);

  useEffect(() => {
    if (defaultOpen && !openSectionIds.has(id)) {
      toggleSectionById(id);
    }
  }, [defaultOpen, id, openSectionIds, toggleSectionById]);

  return (
    <SectionContext.Provider value={{ 
      currentSectionId: id, 
      isSectionOpen: isSectionCurrentlyOpen 
    }}>
      <div 
        className={`group ${className}`}
        data-accordion-section={`${accordionName}-${id}`}
      >
        {children}
      </div>
    </SectionContext.Provider>
  );
}

export interface AHProps {
  children: ReactNode;
  className?: string;
}

export function AH({
  children,
  className = ''
}: AHProps) {
  const { toggleSectionById, accordionName, color } = useAccordionContext();
  const { currentSectionId, isSectionOpen } = useSectionContext();

  const predefinedColors = {
    'blue': {
      bgActive: 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      textActive: 'text-blue-900 dark:text-blue-100',
      dotColor: 'bg-blue-500',
      chevronActive: 'text-blue-600 dark:text-blue-400',
      focusRing: 'focus:ring-blue-400'
    },
    'red': {
      bgActive: 'bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20',
      textActive: 'text-red-900 dark:text-red-100',
      dotColor: 'bg-red-500',
      chevronActive: 'text-red-600 dark:text-red-400',
      focusRing: 'focus:ring-red-400'
    },
    'green': {
      bgActive: 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      textActive: 'text-green-900 dark:text-green-100',
      dotColor: 'bg-green-500',
      chevronActive: 'text-green-600 dark:text-green-400',
      focusRing: 'focus:ring-green-400'
    },
    'purple': {
      bgActive: 'bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
      textActive: 'text-purple-900 dark:text-purple-100',
      dotColor: 'bg-purple-500',
      chevronActive: 'text-purple-600 dark:text-purple-400',
      focusRing: 'focus:ring-purple-400'
    },
    'amber': {
      bgActive: 'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20',
      textActive: 'text-amber-900 dark:text-amber-100',
      dotColor: 'bg-amber-500',
      chevronActive: 'text-amber-600 dark:text-amber-400',
      focusRing: 'focus:ring-amber-400'
    },
    'gray': {
      bgActive: 'bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30',
      textActive: 'text-gray-900 dark:text-gray-100',
      dotColor: 'bg-gray-600',
      chevronActive: 'text-gray-700 dark:text-gray-300',
      focusRing: 'focus:ring-gray-400'
    }
  };

  const isCustomColor = !predefinedColors[color as keyof typeof predefinedColors];
  const currentColorStyle = isCustomColor ? null : predefinedColors[color as keyof typeof predefinedColors];

  const getCustomStyles = () => {
    if (!isCustomColor) return {};

    if (color?.startsWith('#')) {
      return {
        '--custom-bg-active': `${color}15`,
        '--custom-text-active': color,
        '--custom-dot-color': color,
        '--custom-chevron-active': color,
        '--custom-focus-ring': `${color}66`
      } as React.CSSProperties;
    }

    return {};
  };

  return (
    <button
      onClick={() => toggleSectionById(currentSectionId)}
      style={getCustomStyles()}
      className={`w-full py-5 px-6 text-left flex justify-between items-center transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-lg
        ${isSectionOpen
          ? isCustomColor
            ? 'bg-[var(--custom-bg-active)] dark:bg-[var(--custom-bg-active)]'
            : currentColorStyle?.bgActive
          : 'hover:bg-gray-50 dark:hover:bg-gray-800/30'
        }
        focus:outline-none focus:ring-2 ${
          isCustomColor
            ? 'focus:ring-[var(--custom-focus-ring)]'
            : currentColorStyle?.focusRing
        } focus:ring-offset-2 dark:focus:ring-offset-gray-900
        ${className}`}
      aria-expanded={isSectionOpen}
      aria-controls={`accordion-content-${currentSectionId}`}
      data-accordion-header={`${accordionName}-header-${currentSectionId}`}
    >
      <span
        className={`font-medium transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isSectionOpen
            ? isCustomColor
              ? 'text-[var(--custom-text-active)] dark:text-[var(--custom-text-active)]'
              : currentColorStyle?.textActive
            : 'text-gray-800 dark:text-gray-100'
        }`}
      >
        {children}
      </span>
      <div className="flex items-center space-x-2">
        {isSectionOpen && (
          <span
            className={`w-2 h-2 rounded-full animate-pulse ${
              isCustomColor
                ? 'bg-[var(--custom-dot-color)]'
                : currentColorStyle?.dotColor
            }`}
            aria-hidden="true"
          />
        )}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isSectionOpen
              ? `rotate-180 ${
                  isCustomColor
                    ? 'text-[var(--custom-chevron-active)] dark:text-[var(--custom-chevron-active)]'
                    : currentColorStyle?.chevronActive
                }`
              : 'text-gray-400 dark:text-gray-500'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
  );
}

export interface ACProps {
  children: ReactNode;
  className?: string;
}

export function AC({ 
  children, 
  className = '' 
}: ACProps) {
  const { accordionName } = useAccordionContext();
  const { currentSectionId, isSectionOpen } = useSectionContext();
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const contentInnerWrapperRef = useRef<HTMLDivElement>(null);
  const [calculatedContentHeight, setCalculatedContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentInnerWrapperRef.current) {
      setCalculatedContentHeight(contentInnerWrapperRef.current.scrollHeight);
    }
  }, [children]);

  useEffect(() => {
    if (!contentContainerRef.current) return;
    
    if (isSectionOpen) {
      contentContainerRef.current.style.height = `${calculatedContentHeight}px`;
      contentContainerRef.current.style.opacity = '1';
    } else {
      contentContainerRef.current.style.height = '0px';
      contentContainerRef.current.style.opacity = '0';
    }
  }, [isSectionOpen, calculatedContentHeight]);

  return (
    <div
      ref={contentContainerRef}
      id={`accordion-content-${currentSectionId}`}
      className="overflow-hidden transition-[height,opacity] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ height: isSectionOpen ? calculatedContentHeight : 0 }}
      data-accordion-content={`${accordionName}-content-${currentSectionId}`}
    >
      <div ref={contentInnerWrapperRef} className={`px-6 py-4 text-gray-700 dark:text-gray-200 ${className}`}>
        {children}
      </div>
    </div>
  );
}

Accordion.Section = AS;
Accordion.Header = AH;
Accordion.Content = AC;

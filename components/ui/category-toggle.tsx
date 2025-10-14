"use client";

interface CategoryToggleProps {
  categories: Array<{
    key: string;
    label: string;
  }>;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export function CategoryToggle({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  className = '' 
}: CategoryToggleProps) {
  return (
    <div className={`flex gap-2 mb-8 ${className}`}>
      {categories.map(({ key, label }) => {
        const isSelected = activeCategory === key;
        return (
          <button
            key={key}
            onClick={() => onCategoryChange(key)}
            className={`btn-category ${isSelected ? 'selected' : 'unselected'}`}
            type="button"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Types
interface Category {
  id: string;
  name: string;
  count: number;
}

interface Brand {
  id: string;
  name: string;
  count: number;
}

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

interface ExpandedSections {
  categories: boolean;
  brands: boolean;
  price: boolean;
  ratings: boolean;
}

interface ProductSidebarFilterProps {
  onFiltersChange?: (filters: FilterState) => void;
  initialFilters?: Partial<FilterState>;
}

interface FilterState {
  selectedCategories: string[];
  selectedBrands: string[];
  priceRange: [number, number];
  selectedRatings: number[];
}

const Sidebar: React.FC<ProductSidebarFilterProps> = ({
  onFiltersChange,
  initialFilters = {},
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialFilters.selectedCategories || []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    initialFilters.selectedBrands || []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>(
    initialFilters.priceRange || [0, 1000000]
  );
  const [selectedRatings, setSelectedRatings] = useState<number[]>(
    initialFilters.selectedRatings || []
  );

  // Expandable sections state
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    categories: true,
    brands: true,
    price: true,
    ratings: true,
  });

  // Sample data
  const categories: Category[] = [
    { id: "electronics", name: "Electronics", count: 245 },
    { id: "fashion", name: "Fashion", count: 189 },
    { id: "home", name: "Home & Living", count: 156 },
    { id: "sports", name: "Sports", count: 98 },
    { id: "books", name: "Books", count: 67 },
    { id: "beauty", name: "Beauty", count: 134 },
    { id: "automotive", name: "Automotive", count: 45 },
  ];

  const brands: Brand[] = [
    { id: "samsung", name: "Samsung", count: 89 },
    { id: "apple", name: "Apple", count: 76 },
    { id: "nike", name: "Nike", count: 45 },
    { id: "adidas", name: "Adidas", count: 38 },
    { id: "sony", name: "Sony", count: 52 },
    { id: "lg", name: "LG", count: 34 },
  ];

  const ratings: number[] = [5, 4, 3, 2, 1];

  const priceRanges: PriceRange[] = [
    { label: "Under 100K", min: 0, max: 100000 },
    { label: "100K - 500K", min: 100000, max: 500000 },
    { label: "500K - 1M", min: 500000, max: 1000000 },
    { label: "Over 1M", min: 1000000, max: 10000000 },
  ];

  // Notify parent component when filters change
  const notifyFiltersChange = (newFilters: Partial<FilterState>) => {
    if (onFiltersChange) {
      const currentFilters: FilterState = {
        selectedCategories,
        selectedBrands,
        priceRange,
        selectedRatings,
        ...newFilters,
      };
      onFiltersChange(currentFilters);
    }
  };

  const toggleSection = (section: keyof ExpandedSections): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (categoryId: string): void => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter((id) => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(newCategories);
    notifyFiltersChange({ selectedCategories: newCategories });
  };

  const handleBrandChange = (brandId: string): void => {
    const newBrands = selectedBrands.includes(brandId)
      ? selectedBrands.filter((id) => id !== brandId)
      : [...selectedBrands, brandId];

    setSelectedBrands(newBrands);
    notifyFiltersChange({ selectedBrands: newBrands });
  };

  const handleRatingChange = (rating: number): void => {
    const newRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];

    setSelectedRatings(newRatings);
    notifyFiltersChange({ selectedRatings: newRatings });
  };

  const handlePriceRangeChange = (newRange: [number, number]): void => {
    setPriceRange(newRange);
    notifyFiltersChange({ priceRange: newRange });
  };

  const clearAllFilters = (): void => {
    const resetFilters: FilterState = {
      selectedCategories: [],
      selectedBrands: [],
      priceRange: [0, 1000000],
      selectedRatings: [],
    };

    setSelectedCategories(resetFilters.selectedCategories);
    setSelectedBrands(resetFilters.selectedBrands);
    setPriceRange(resetFilters.priceRange);
    setSelectedRatings(resetFilters.selectedRatings);

    if (onFiltersChange) {
      onFiltersChange(resetFilters);
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">& up</span>
      </div>
    );
  };

  return (
    <div className="w-max-full bg-white border border-gray-200 rounded-lg shadow-sm h-fit mt-20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Filter</h2>
          <button
            onClick={clearAllFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
            type="button"
          >
            Clear All
          </button>
        </div>

        {/* Categories */}
        <div className="border-b border-gray-200 pb-6">
          <button
            onClick={() => toggleSection("categories")}
            className="flex items-center justify-between w-full text-left mb-4"
            type="button"
          >
            <h3 className="text-base font-medium text-gray-900">Kategori</h3>
            {expandedSections.categories ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>

          {expandedSections.categories && (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-700 flex-1 group-hover:text-gray-900">
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        {/* <div className="border-b border-gray-200 pb-6">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full text-left mb-4"
            type="button"
          >
            <h3 className="text-base font-medium text-gray-900">Harga</h3>
            {expandedSections.price ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>

          {expandedSections.price && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange[0]}
                  onChange={(e) =>
                    handlePriceRangeChange([
                      parseInt(e.target.value) || 0,
                      priceRange[1],
                    ])
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="text-gray-500 font-medium">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange[1]}
                  onChange={(e) =>
                    handlePriceRangeChange([
                      priceRange[0],
                      parseInt(e.target.value) || 1000000,
                    ])
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded-md text-center">
                {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
              </div> */}

              {/* Quick Price Filters */}
              {/* <div className="grid grid-cols-1 gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() =>
                      handlePriceRangeChange([range.min, range.max])
                    }
                    className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md border border-gray-200 hover:border-blue-300 transition-colors"
                    type="button"
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div> */}

        {/* Brands */}
        <div className="border-b border-gray-200 pb-6">
          <button
            onClick={() => toggleSection("brands")}
            className="flex items-center justify-between w-full text-left mb-4"
            type="button"
          >
            <h3 className="text-base font-medium text-gray-900">Brand</h3>
            {expandedSections.brands ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>

          {expandedSections.brands && (
            <div className="space-y-3 max-h-48 ">
              {brands.map((brand) => (
                <label
                  key={brand.id}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.id)}
                    onChange={() => handleBrandChange(brand.id)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-gray-700 flex-1 group-hover:text-gray-900">
                    {brand.name}
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {brand.count}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Ratings */}
        <div className="pb-4">
          <button
            onClick={() => toggleSection("ratings")}
            className="flex items-center justify-between w-full text-left mb-4"
            type="button"
          >
            <h3 className="text-base font-medium text-gray-900">Rating</h3>
            {expandedSections.ratings ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>

          {expandedSections.ratings && (
            <div className="space-y-3">
              {ratings.map((rating) => (
                <label
                  key={rating}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => handleRatingChange(rating)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <div className="ml-3 flex-1">{renderStars(rating)}</div>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

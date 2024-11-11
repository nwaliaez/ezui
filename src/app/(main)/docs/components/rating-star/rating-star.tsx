import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // A utility function to join class names (if needed)

// Define the variants for the RatingStar component
const ratingStarVariants = cva("flex items-center space-x-1", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-lg",
      large: "text-xl",
    },
    color: {
      default: "text-gray-300",
      active: "text-yellow-500",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "default",
  },
});

interface RatingStarProps extends VariantProps<typeof ratingStarVariants> {
  initialRating?: number;
  maxRating?: number;
  onChange?: (rating: number) => void;
}

const RatingStar: React.FC<RatingStarProps> = ({
  initialRating = 0,
  maxRating = 5,
  size = "medium",
  onChange,
}) => {
  const [rating, setRating] = useState<number>(initialRating);

  const handleClick = (newRating: number) => {
    setRating(newRating);
    if (onChange) onChange(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <button
          key={i}
          className={cn(
            "p-1",
            i <= rating
              ? ratingStarVariants({ size, color: "active" })
              : ratingStarVariants({ size, color: "default" })
          )}
          onClick={() => handleClick(i)}
          aria-label={`Rate ${i} star${i > 1 ? "s" : ""}`}
        >
          ★
        </button>
      );
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default RatingStar;

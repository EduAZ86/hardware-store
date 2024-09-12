import { FC } from "react";
import { IRatingStartsProps } from "./types";
import { CardTitle } from "../typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

export const RatingStarts: FC<IRatingStartsProps> = ({ rating }) => {
    const fullStars = Array.from({ length: Math.floor(rating) }, (_, i) => i + 1)
    const halfStar = 5 - Math.floor(rating) > 0
    const emptyStars = Array.from({ length: 5 - Math.floor(rating) }, (_, i) => i + 1)
    return (
        <div className="w-full h-fit flex flex-col gap-2 justify-center items-center">
            <CardTitle text="Rating" />
            <div className="w-full h-10 flex flex-row justify-center text-light-primary dark:text-dark-primary">
                {fullStars.map((star, index) => {
                    return (
                        <FontAwesomeIcon key={`full-star-${index}`} icon={faStar} />
                    )
                }
                )}
                {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
                {emptyStars.map((start, index) => {
                    return (
                        <FontAwesomeIcon key={`empty-star-${index}`} icon={faEmptyStar} />
                    )
                }
                )}
            </div>

        </div>
    )
}
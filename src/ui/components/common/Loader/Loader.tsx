import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

export const Loader: FC = () => {
    return (
        <div className="w-full min-h-full flex justify-center p-10 items-center">
            <FontAwesomeIcon
                icon={faSpinner} spin
                className="animate-spin h-20 w-20 text-light-primary dark:text-dark-primary"
            />
        </div>
    );
}
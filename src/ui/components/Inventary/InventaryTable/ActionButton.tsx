import { FC, useState } from "react";
import { IActionCellProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEllipsisV, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DropDownMenu } from "../../common";
import { ListLI } from "./List";
import { useUIStore } from "@/lib/store/userInterface/useUIStore";
import { useDataProducts } from "@/hooks/products/useDataProducts";

export const ActionButton: FC<IActionCellProps> = ({
    id
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { setIdEditModal, setDeleteData } = useUIStore()
    const { data: product } = useDataProducts().useGetProductById({ id })
    return (
        <div
            className={`
            w-full h-5
            cursor-pointer
            hover:text-light-primary hover:dark:text-dark-primary
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FontAwesomeIcon
                className={`
                    text-lg          
                    `}
                icon={faEllipsisV}
            />
            <DropDownMenu
                backgroundColor="primary"
                isHovered={isHovered}
            >
                <ListLI>
                    <button
                        onClick={() => setIdEditModal(id)}
                        className="flex flex-row gap-2"
                    >
                        <FontAwesomeIcon icon={faEdit} /> edit
                    </button>
                </ListLI>
                <ListLI>
                    <button
                        onClick={() => setDeleteData({ id: id, name: product ? product.name : "" })}
                        className="flex flex-row gap-2 items-center"
                    >
                        <FontAwesomeIcon icon={faTrash} /> delete
                    </button>
                </ListLI>
            </DropDownMenu>
        </div>
    )
}
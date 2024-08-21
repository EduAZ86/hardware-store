import { ColumnDef } from "@tanstack/react-table";
import { IProductDataTable } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { ActionButton } from "./ActionButton";

export const columns: ColumnDef<IProductDataTable>[] = [
    {
        header: "Image",
        accessorKey: "image",
        cell: ({ getValue }) => {
            const imageUrl = getValue() as string;
            return <img src={imageUrl} alt="Product Image" className="w-12 h-12 object-cover" />;
        },
    },
    {
        header: "Name",
        accessorKey: "name",
        cell: ({ getValue }) => {
            const name = getValue() as string;
            return <span className="font-bold text-xs">{name}</span>;
        },
    },
    {
        header: "Category",
        accessorKey: "category",
        cell: ({ getValue }) => {
            const text = getValue() as string;
            return <span className="text-sm">{text}</span>;
        }
    },
    {
        header: "Brand",
        accessorKey: "brand"
        ,
        cell: ({ getValue }) => {
            const text = getValue() as string;
            return <span className="text-sm">{text}</span>;
        }
    },
    {
        header: "Sku",
        accessorKey: "sku"
        ,
        cell: ({ getValue }) => {
            const text = getValue() as string;
            return <span className="text-sm ">{text}</span>;
        }
    },
    {
        header: "Rating",
        accessorKey: "averageRating",
        cell: ({ getValue }) => {
            const text = getValue() as string;
            return <span className="w-full text-sm text-center">{text}</span>;
        }
    },
    {
        header: "Stock",
        accessorKey: "stock",
        cell: ({ getValue }) => {
            const text = getValue() as string;
            return <span className="text-sm text-center font-semibold">{text}</span>;
        }
    },
    {
        header: "Price",
        accessorKey: "price",
        cell: ({ getValue }) => {
            const text = getValue() as string;
            return <span className="text-sm font-semibold text-center">{text}</span>;
        }
    },
    {
        header: "Actions",
        accessorKey: "id",
        cell: ({ getValue }) => {
            const id = getValue() as string;
            return <ActionButton id={id} />;
        }
    }
]
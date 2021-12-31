import React from 'react'
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

export default function CrewlistItem({id, name}) {
    // const id = key

    const destroy = () => {
        if (confirm('Êtes vous sûr ?')) {
            Inertia.delete(route('crew.destroy', id))
        }
    };

    return (
        <li className={'flex justify-between items-center'}>
            {name}
            <button
                onClick={destroy}
                className={'border-2 border-red-800 text-red-800 text-sm inline-block rounded-full w-4 h-4 flex items-center justify-center'}>
                x
            </button>
        </li>
    )
}

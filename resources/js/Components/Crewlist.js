import React from 'react'
import CrewlistItem from '@/components/CrewlistItem'
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

export default function Crewlist() {
    const { crew } = usePage().props;
    // const { data } = crews;
    console.log(crew)
    return (
        <section className={'py-6'}>
            <h2 className={'mb-3 text-2xl'}>Membres de l'équipage</h2>
            <ul className={'grid grid-cols-3 gap-40'}>
                {crew.map(({ id, name }) => (
                    <CrewlistItem key={id} id={id} name={name} />
                ))}
            </ul>

        </section>
    )
}

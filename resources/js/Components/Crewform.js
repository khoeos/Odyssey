import React from 'react'
import { Inertia } from '@inertiajs/inertia'
import { InertiaLink, useForm } from '@inertiajs/inertia-react';

export default function Crewform() {

    const { data, setData, errors, post } = useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        setData('name', '');
        post(route('crew.store'));
        // post(route('login'));
    };

    return (
        <section className={'py-6'}>
            <h2 className={'mb-3 text-2xl'}>Ajouter un(e) Argonaute</h2>
            <span className={'text-red-500'}>{errors.name}</span>
            <form onSubmit={submit} className={'flex flex-col text-left mx-auto w-max'}>
                <label htmlFor="name">Nom de l'Argonaute</label>
                <div>
                    <input
                        type="text"
                        className={'h-10 border-2 border-black mt-3'}
                        name={'name'}
                        id={'name'}
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required />
                    <button
                        className={'h-10 px-3 border-y-2 border-r-2 border-black'}
                        type="submit"
                    >
                        Ajouter
                    </button>
                </div>

            </form>
        </section>
    )
}

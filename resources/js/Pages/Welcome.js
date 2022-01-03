import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Crewform from '@/Components/Crewform';
import Crewlist from '@/Components/Crewlist';

export default function Welcome(props) {
    return (
        <div className={'flex flex-col justify-between min-h-screen'}>
            <Head title="Les argonautes" />
            <header className={'p-6 bg-gray-100 fixed w-screen flex items-center justify-center'}>
                <img className={'w-28'} src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
                <h1 className={'text-5xl font-bold'}>Les argonautes</h1>
            </header>
            <main className={'py-28 mx-auto w-4/6 text-center'}>
                <Crewform />
                <Crewlist />
            </main>
            <footer className={'bg-red-400 flex flex-col items-center justify-center py-8 text-white font-bold'}>
                <p>
                    Réalisé par Léo Jeanjean en l'an 2021 après JC sur missive expresse de Jason
                </p>
                <a href="https://github.com/khoeos/Odyssey">Code source - Github</a>
            </footer>
        </div>
    );
}

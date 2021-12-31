import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Crewform from '@/Components/Crewform';
import Crewlist from '@/Components/Crewlist';

export default function Welcome(props) {
    return (
        <div className={'flex flex-col justify-between min-h-screen'}>
            <Head title="Les argonautes" />
            <header className={'bg-gray-100 fixed w-screen'}>
                <img className={'w-40'} src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
                Les argonautes
            </header>
            <main className={'py-20 mx-auto w-4/6 text-center'}>
                <Crewform />
                <Crewlist />
            </main>
            <footer className={'bg-red-400 flex flex-col items-center justify-center py-8 text-white font-bold'}>
                <p>
                    Réalisé par Léo Jeanjean en l'an 2021 après JC sur missive expresse de Jason
                </p>
                <a href="">Code source - Github</a>
            </footer>
        </div>
    );
}

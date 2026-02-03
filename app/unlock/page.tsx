'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

export default function UnlockPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const router = useRouter();

    const handleClick = async () => {
        if (loading) return;

        setError('');
        setLoading(true);
        setSuccess(false);

        try {
            const res = await fetch('/api/verify-password', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({password}),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);

                setTimeout(() => {
                    router.push('/');
                }, 1500);
            } else {
                setError('Incorrect password. Please try again.');
                setPassword('');
                setLoading(false);
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center  font-Aeonik">
            <div className="max-w-md w-full space-y-8 p-8">
                <Image className={"w-40 block mx-auto "} width={0} height={0} alt={""} src={"logo/logo-kagi.svg"}></Image>

                <div className="space-y-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        disabled={loading}
                        className="w-full px-3 py-2 h-12 border rounded-md"
                    />

                    {error && (
                        <div className="text-red-600 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        onClick={handleClick}
                        disabled={loading}
                        className="w-full py-2 px-4 bg-black text-white rounded-md h-12
                                  {/*disabled:opacity-50*/}
                                   flex items-center justify-center"
                    >
                        {loading ? (
                            <Image
                                src="/photos/fingerprint.svg"
                                alt="Unlocking"
                                width={32}
                                height={32}
                                className={`
        invert w-8 h-8
        transition-[mask-position,opacity,transform] duration-1000 ease-out
        [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]
        [mask-size:100%_200%]
        ${success
                                    ? '[mask-position:0%_0%] opacity-100 scale-100'
                                    : '[mask-position:0%_100%] opacity-50 scale-95'
                                }
    `}
                            />
                        ) : (
                            'Enter'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

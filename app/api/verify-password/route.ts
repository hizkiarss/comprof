import {NextRequest, NextResponse} from 'next/server';
import {createToken} from '@/lib/jwt';

export async function POST(request: NextRequest) {
    try {
        console.log("KOCAK");
        const {password} = await request.json();
        console.log("WALAH", password);
        if (password === process.env.PORTFOLIO_PASSWORD) {
            const token = await createToken();
            const response = NextResponse.json({success: true});
            response.cookies.set('portfolio_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
            });

            return response;
        }

        return NextResponse.json(
            {success: false, message: 'Invalid password'},
            {status: 401}
        );
    } catch (error) {
        return NextResponse.json(
            {success: false, message: 'Server error: ', error},
            {status: 500}
        );
    }
}

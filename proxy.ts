import {NextResponse, NextRequest} from 'next/server';
import {verifyToken} from '@/lib/jwt';

export async function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl;

    // Allow these paths without any checks
    if (
        pathname.startsWith('/api/') ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/favicon') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    const token = request.cookies.get('portfolio_token')?.value;
    const payload = token ? await verifyToken(token) : null;

    if (payload && pathname === '/unlock') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (!payload && pathname !== '/unlock') {
        return NextResponse.redirect(new URL('/unlock', request.url));
    }

    return NextResponse.next();
}
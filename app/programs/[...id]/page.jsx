'use client';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const ProgramPage = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    return ( 
    <div>Page Id {pathname}</div> 
    );
}
 
export default ProgramPage;

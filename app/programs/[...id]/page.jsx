'use client';
import { useRouter, useParams } from 'next/navigation';

const ProgramPage = () => {
    const router = useRouter();
    const params = useParams();
    return ( 
    <div>Page Id {params.id}</div> 
    );
}
 
export default ProgramPage;

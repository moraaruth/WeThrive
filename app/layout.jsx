import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
    title: 'we thrive',
    keywords: 'autism awareness, autism support, autism resources, autism spectrum disorder, early intervention autism, autism advocacy, special needs support, inclusive education, autism diagnosis, autism services, behavioral therapy, speech therapy autism, autism family support, autism friendly activities, neurodiversity, sensory friendly spaces, autism in children, autism in adults, social skills autism, autism friendly events',
    description: 'We are unique and yes, we thrive'
}

const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
        
        <html>
        <body>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html></AuthProvider> );
}
 
export default MainLayout;
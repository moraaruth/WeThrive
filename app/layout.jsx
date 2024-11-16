import '@/assets/styles/globals.css';

export const metadata = {
    title: 'we thrive',
    keywords: 'autism awareness, autism support, autism resources, autism spectrum disorder, early intervention autism, autism advocacy, special needs support, inclusive education, autism diagnosis, autism services, behavioral therapy, speech therapy autism, autism family support, autism friendly activities, neurodiversity, sensory friendly spaces, autism in children, autism in adults, social skills autism, autism friendly events'
}

const MainLayout = ({ children }) => {
    return ( <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html> );
}
 
export default MainLayout;
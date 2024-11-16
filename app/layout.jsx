import '@/assets/styles/globals.css';

export const metadata = {
    title: 'we thrive',
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
import InteractiveLaptop from './InteractiveLaptop';
import ResumeContent from './ResumeContent';

export default function Resume() {
    return (
        <section className="w-full min-h-screen bg-[#f3f2f0] dark:bg-[#0c0c0c] py-24 px-4 xl:px-8 text-foreground relative z-10 overflow-clip">
            {/* Background Grid Pattern (Subtle) */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.02]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Layout: Laptop on LEFT, Text on RIGHT */}
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-16 relative z-10 pt-10">
                <InteractiveLaptop />
                <ResumeContent />
            </div>
        </section>
    );
}


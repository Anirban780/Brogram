const LegalSection = ({ title, children }) => (
    <section className="my-8 rounded-lg bg-gray-800/50 p-6 shadow-lg">
        <h2 className="mb-4 border-b border-white/20 pb-2 text-2xl font-bold">
            {title}
        </h2>
        <div className="space-y-4">{children}</div>
    </section>
);
export default LegalSection;

import LegalSection from "@/components/ui/legal-section/legal-section";

export default function ContentPolicy() {
    return (
        <div className="min-h-screen p-10">
            <h1 className="mb-10 text-center text-4xl font-extrabold lg:mb-16">
                Content Policy
            </h1>

            <LegalSection title="1. Allowed Content">
                <p>
                    We welcome{" "}
                    <strong>
                        development-related content, blogs, memes, and code
                        snippets
                    </strong>
                    .
                </p>
                <p>Links to repositories on GitHub or GitLab are encouraged.</p>
                <p>
                    We promote <strong>social inclusion</strong> and{" "}
                    <strong>open-source collaboration</strong>.
                </p>
            </LegalSection>

            <LegalSection title="2. Prohibited Content">
                <p>
                    No <strong>NSFW content</strong> or posts that promote hate
                    speech, harassment, or plagiarism.
                </p>
                <p>Malicious code or harmful links will be removed.</p>
            </LegalSection>

            <LegalSection title="3. Moderation and Reporting">
                <p>
                    We use both <strong>automated systems</strong> and{" "}
                    <strong>user reports</strong> for moderation.
                </p>
                <p>
                    Users are encouraged to report content violations promptly.
                </p>
            </LegalSection>

            <LegalSection title="4. Copyright and Intellectual Property">
                <p>
                    Respect copyright laws. Violators may face account
                    suspension or ban.
                </p>
                <p>
                    Brogram follows a{" "}
                    <strong>&quot;notice-and-takedown&quot; policy</strong> for
                    handling claims.
                </p>
            </LegalSection>
        </div>
    );
}

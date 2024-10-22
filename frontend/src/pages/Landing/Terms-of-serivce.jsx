import LegalSection from "@/components/ui/legal-section/legal-section";

export default function ToS() {
    return (
        <div className="min-h-screen p-10">
            <h1 className="mb-10 text-center text-4xl font-extrabold lg:mb-16">
                Terms of Service
            </h1>

            <LegalSection title="1. Eligibility and Account Requirements">
                <p>
                    Brogram is available worldwide, and users must be at least{" "}
                    <strong>13 years old</strong> to create an account.
                </p>
                <p>
                    Browsing is allowed without sign-up, but posting requires{" "}
                    <strong>email registration</strong>.
                </p>
                <p>
                    Multiple accounts are allowed, but policy violations will
                    result in <strong>account suspension or bans</strong>.
                </p>
                <p>
                    Accounts inactive for <strong>5 years</strong> will be
                    automatically deleted.
                </p>
            </LegalSection>

            <LegalSection title="2. User Responsibilities">
                <p>
                    Users must secure their accounts and follow community
                    guidelines.
                </p>
                <p>
                    <strong>NSFW content is prohibited</strong>, and violations
                    may result in account suspension or ban.
                </p>
            </LegalSection>

            <LegalSection title="3. Content Ownership and Permissions">
                <p>
                    Users retain <strong>partial ownership</strong> of content
                    but grant Brogram a public-use license.
                </p>
                <p>
                    Featured content will require additional consent from users.
                </p>
            </LegalSection>

            <LegalSection title="4. Advertisements and Subscriptions">
                <p>
                    Brogram may offer{" "}
                    <strong>ads, subscriptions, and in-app purchases</strong> in
                    the future. Terms for paid features will be available upon
                    purchase.
                </p>
            </LegalSection>

            <LegalSection title="5. Copyright and Content Removal">
                <p>
                    We follow a{" "}
                    <strong>&quot;notice-and-takedown&quot; policy</strong> for
                    copyright violations.
                </p>
                <p>
                    Users should verify the accuracy of content before using it
                    in their projects.
                </p>
            </LegalSection>
        </div>
    );
}

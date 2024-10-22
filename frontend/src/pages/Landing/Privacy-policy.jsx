import LegalSection from "@/components/ui/legal-section/legal-section";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen p-10">
            <h1 className="mb-10 text-center text-4xl font-extrabold lg:mb-16">
                Privacy Policy
            </h1>

            <LegalSection title="1. Information We Collect">
                <p>
                    <strong>Account Information:</strong> We collect email
                    addresses for user registration.
                </p>
                <p>
                    <strong>Usage Data:</strong> We may use analytics tools like
                    Google Analytics to help us improve the platform.
                </p>
                <p>
                    Social logins are supported, subject to third-party
                    policies.
                </p>
            </LegalSection>

            <LegalSection title="2. How We Use Your Information">
                <p>
                    We use data to enhance your experience, enforce policies,
                    and ensure platform safety.
                </p>
            </LegalSection>

            <LegalSection title="3. Data Retention">
                <p>
                    User data is retained as long as the account is active.
                    Accounts inactive for <strong>5 years</strong> are deleted.
                </p>
            </LegalSection>

            <LegalSection title="4. User Rights">
                <p>
                    Users can request <strong>account deletion</strong> and
                    manage their privacy settings.
                </p>
            </LegalSection>
        </div>
    );
}

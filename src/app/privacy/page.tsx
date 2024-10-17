import { PageContainer } from "@/ui/components/common"

function Privacy() {
    return (
        <PageContainer>
            <div className="container mx-auto p-6 text-light-text dark:text-dark-text">
                <h1 className="text-2xl font-bold mb-4">Privacy Policy for Hardware Store ( fake example ) </h1>
                <p><strong>Last updated:</strong> Wednesday, October 16, 2024</p>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                    <p>
                        We collect the information you provide directly, as well as information generated automatically through your interaction with our site.
                    </p>
                    <h3 className="text-lg font-semibold mt-4">a) Account and Authentication Information:</h3>
                    <p>
                        When you register or log in through NextAuth, we collect information such as your name, email address, and profile picture.
                    </p>
                    <h3 className="text-lg font-semibold mt-4">b) Contact Information:</h3>
                    <p>
                        This includes your full name, email address, physical address, and phone number when placing an order or making an inquiry.
                    </p>
                    <h3 className="text-lg font-semibold mt-4">c) Purchase Information:</h3>
                    <p>
                        We collect order details, billing, and shipping information to process your purchases.
                    </p>
                    <h3 className="text-lg font-semibold mt-4">d) Usage Information:</h3>
                    <p>
                        Information about how you use our site, such as your IP address, pages visited, access time, and other technical data.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <p>
                        We use your information to process orders, authentication, improve the site, communicate with you, and for marketing purposes, only with your consent.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
                    <p>
                        We do not sell your information. We only share it with service providers, such as payment processors and shipping services, and when necessary to comply with the law.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">4. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies to enhance your experience, such as keeping your session active and analyzing site usage. You can disable them in your browser.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">5. Protecting Your Information</h2>
                    <p>
                        We implement reasonable security measures to protect your personal information, including data encryption and restricted access.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
                    <p>
                        We retain your personal information for as long as necessary to fulfill the purposes described, unless a longer retention period is required by law.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
                    <p>
                        You have rights regarding your information, such as accessing, rectifying, or deleting your data. To exercise these rights, contact us at <a href="mailto:eduardoayaviri@gmail.com" className="text-blue-500 underline">eduardoayaviri@gmail.com</a>.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
                    <p>
                        We reserve the right to update this policy at any time. We will notify you by posting the new version on our site with an updated date.
                    </p>
                </section>

                <section className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
                    <p>
                        If you have any questions, you can contact us at <a href="mailto:eduardoayaviri@gmail.com" className="text-blue-500 underline">eduardoayaviri@gmail.com</a>.
                    </p>
                </section>
            </div>
        </PageContainer>
    )
}

export default Privacy
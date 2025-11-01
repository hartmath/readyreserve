import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <PageLayout>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <Card className="p-12 bg-card/50 backdrop-blur-sm border-border space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using the ReadyReserve website and ReadyReserve™ platform (the "Service"), you agree to 
                be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access 
                the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>"Service"</strong> refers to the ReadyReserve™ platform, website, and related services</li>
                <li><strong>"User," "You," "Your"</strong> refers to the individual or entity accessing the Service</li>
                <li><strong>"Company," "We," "Us," "Our"</strong> refers to ReadyReserve</li>
                <li><strong>"Account"</strong> refers to your registered account on the Service</li>
                <li><strong>"Content"</strong> refers to all information, data, text, and materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground mb-4">To use certain features of the Service, you must:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept all responsibility for activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Free Trial</h2>
              <p className="text-muted-foreground mb-4">
                We offer a free 14-day trial period for new users. During the trial:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>You have full access to Service features</li>
                <li>No credit card is required</li>
                <li>You may cancel at any time without charges</li>
                <li>Auto-renewal requires valid payment information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Subscription and Billing</h2>
              <p className="text-muted-foreground mb-4">
                Subscriptions renew automatically unless canceled. By subscribing, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Pay all charges at the prices in effect when they occur</li>
                <li>Provide current, complete, and accurate billing information</li>
                <li>Authorize us to charge your payment method</li>
                <li>Accept responsibility for all applicable taxes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Use License</h2>
              <p className="text-muted-foreground mb-4">We grant you a limited, non-exclusive, non-transferable license to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and use the Service for your dealership's internal business purposes</li>
                <li>Access your account and content you upload</li>
              </ul>
              <p className="text-muted-foreground mt-4">This license does not include:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>The right to resell or sublicense the Service</li>
                <li>The right to reverse engineer or copy the Service</li>
                <li>The right to use the Service for competitive analysis</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. User Content</h2>
              <p className="text-muted-foreground mb-4">
                You retain ownership of content you submit ("User Content"). By submitting User Content, you grant us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>A worldwide, royalty-free license to use, store, and process your content</li>
                <li>The right to use aggregated, anonymized data for service improvement</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You are responsible for ensuring your User Content complies with all laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Prohibited Uses</h2>
              <p className="text-muted-foreground mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malicious code or viruses</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Collect or harvest personal information of other users</li>
                <li>Use automated systems to access the Service without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Service Availability</h2>
              <p className="text-muted-foreground">
                We strive for 99.9% uptime but do not guarantee uninterrupted access. We reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
                <li>Modify, suspend, or discontinue the Service at any time</li>
                <li>Perform scheduled maintenance</li>
                <li>Restrict access in cases of abuse or legal requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Cancellation and Refunds</h2>
              <p className="text-muted-foreground mb-4">You may cancel your subscription at any time through your account settings.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Cancellation takes effect at the end of your current billing period</li>
                <li>No refunds for partial billing periods</li>
                <li>Refunds at our discretion for extenuating circumstances</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All rights, title, and interest in the Service, including all intellectual property rights, belong to 
                ReadyReserve. The Service is protected by copyright, trademark, and other laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, ReadyReserve shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including lost profits, data loss, or business 
                interruption, arising from your use of the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">13. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold ReadyReserve harmless from any claims, damages, losses, 
                liabilities, and expenses arising from your use of the Service or violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via 
                email or prominent notice on the Service. Continued use after changes constitutes acceptance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">15. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
              <p className="text-muted-foreground mb-4">Questions about these Terms? Contact us at:</p>
              <p className="text-muted-foreground">
                <strong>ReadyReserve</strong><br />
                Email: legal@dealershipaccel.com<br />
                Phone: 1-800-DRIVE-AI
              </p>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;


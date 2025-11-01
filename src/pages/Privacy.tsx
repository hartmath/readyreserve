import { PageLayout } from "@/components/PageLayout";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <PageLayout>
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <Card className="p-12 bg-card/50 backdrop-blur-sm border-border space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to ReadyReserve ("we," "our," or "us"). We are committed to protecting your privacy 
                and ensuring you have a positive experience on our website and in using our services.
              </p>
              <p className="text-muted-foreground">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our ReadyReserve™ platform (the "Service").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                <li>Register for an account or request a demo</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Contact us for support or inquiries</li>
                <li>Use our Service</li>
              </ul>
              <p className="text-muted-foreground">
                Personal information may include: name, email address, phone number, dealership name, job title, 
                billing information, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Usage Data</h3>
              <p className="text-muted-foreground">
                We automatically collect certain information when you access and use our Service, including IP address, 
                browser type, operating system, access times, pages viewed, and the referring URL.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Lead Data</h3>
              <p className="text-muted-foreground">
                When you use ReadyReserve™, we process lead information provided by you or your dealership, including 
                customer names, contact information, and interaction history.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide, operate, and maintain our Service</li>
                <li>Improve, personalize, and expand our Service</li>
                <li>Process your transactions and send related information</li>
                <li>Send you marketing and promotional communications</li>
                <li>Respond to your comments and requests</li>
                <li>Monitor and analyze usage trends and activities</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Service providers who assist us in operating our Service</li>
                <li>Business partners when you request a demo or service</li>
                <li>Legal authorities when required by law or to protect our rights</li>
              </ul>
              <p className="text-muted-foreground mt-6">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information from 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our Service and store certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal 
                information from children.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                <strong>ReadyReserve</strong><br />
                Email: privacy@dealershipaccel.com<br />
                Phone: 1-800-DRIVE-AI
              </p>
            </div>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;


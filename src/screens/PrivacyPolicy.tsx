import { Card, CardContent } from "@/components/ui/card"
import PageSection from "@/lib/components/PageSection"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="text-sm text-muted-foreground space-y-2">{children}</div>
    </div>
  )
}

function PrivacyPolicy() {
  return (
    <PageSection maxWidthClassName="max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Effective date: March 29, 2026
        </p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <p className="text-sm text-muted-foreground">
            RAJ Constructions ("we", "our", or "us") is committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard data when you visit our website or
            contact us for construction services.
          </p>

          <Section title="1. Information We Collect">
            <p>
              When you use our contact or enquiry form, we collect the following
              information:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Project location</li>
              <li>Budget range</li>
              <li>Project requirements or message</li>
            </ul>
            <p>
              We may also collect basic analytics data (pages visited, device
              type, browser) through Firebase Analytics to improve our website
              experience.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information you provide to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Respond to your project enquiry or consultation request</li>
              <li>Share relevant information about our construction services</li>
              <li>Schedule site visits or follow-up discussions</li>
              <li>Improve our website content and service offerings</li>
            </ul>
            <p>
              We do not use your information for automated marketing campaigns
              or unsolicited communications.
            </p>
          </Section>

          <Section title="3. Data Storage and Security">
            <p>
              Enquiry data submitted through our website is stored securely on
              our backend systems. We apply reasonable technical measures to
              protect your information from unauthorised access, loss, or
              disclosure.
            </p>
            <p>
              While we take data security seriously, no method of transmission
              over the internet is completely secure. We encourage you to share
              only what is necessary for your enquiry.
            </p>
          </Section>

          <Section title="4. Sharing of Information">
            <p>
              We do not sell, rent, or trade your personal information to third
              parties. Your data may only be shared in the following limited
              circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                With our internal project team to process your enquiry or
                proposal
              </li>
              <li>
                When required by law or in response to a lawful request by
                public authorities
              </li>
            </ul>
          </Section>

          <Section title="5. Cookies and Analytics">
            <p>
              Our website may use cookies and Firebase Analytics to understand
              how visitors interact with our pages. This information is
              aggregated and does not personally identify you. You can disable
              cookies through your browser settings at any time.
            </p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              Our website may contain links to third-party platforms such as
              Google Maps or WhatsApp for your convenience. We are not
              responsible for the privacy practices of those platforms and
              encourage you to review their respective policies.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>
                Request deletion of your data, subject to any legal obligations
                we may have
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the
              details below.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected on this page with a revised effective date. Continued
              use of our website after changes are posted constitutes your
              acceptance of the updated policy.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>
              If you have questions about this Privacy Policy or how we handle
              your information, please reach out:
            </p>
            <ul className="list-none space-y-1 pl-2">
              <li>
                <span className="font-medium text-foreground">Company:</span>{" "}
                RAJ Constructions
              </li>
              <li>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <a
                  href="mailto:info@rajconstructions.com"
                  className="text-primary hover:underline"
                >
                  info@rajconstructions.com
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">Address:</span>{" "}
                123 Builder Street, Bengaluru, Karnataka 560001, India
              </li>
            </ul>
          </Section>
        </CardContent>
      </Card>
    </PageSection>
  )
}

export default PrivacyPolicy

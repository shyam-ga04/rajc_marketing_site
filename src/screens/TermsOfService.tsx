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

function TermsOfService() {
  return (
    <PageSection maxWidthClassName="max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Effective date: March 29, 2026
        </p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <p className="text-sm text-muted-foreground">
            By accessing or using the RAJ Constructions website
            ("Site"), you agree to be bound by these Terms of Service. Please
            read them carefully before using the Site. If you do not agree with
            any part of these terms, please do not use our Site.
          </p>

          <Section title="1. Use of the Site">
            <p>
              This Site is intended for individuals and organisations seeking
              information about RAJ Constructions and our construction services.
              You agree to use the Site only for lawful purposes and in a manner
              that does not infringe the rights of others.
            </p>
            <p>You must not:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>
                Use the Site to transmit harmful, offensive, or misleading
                content
              </li>
              <li>
                Attempt to gain unauthorised access to any part of the Site or
                our systems
              </li>
              <li>
                Reproduce, copy, or redistribute any content from the Site
                without our prior written consent
              </li>
            </ul>
          </Section>

          <Section title="2. Services and Enquiries">
            <p>
              The information on this Site describes the construction services
              offered by RAJ Constructions, including home construction, villa
              construction, renovation, interior design, architectural planning,
              turnkey construction, structural consultation, and house
              extensions.
            </p>
            <p>
              Submitting an enquiry through our contact form does not constitute
              a binding contract. A formal engagement between RAJ Constructions
              and a client is established only through a signed project agreement
              or work order, agreed upon separately.
            </p>
          </Section>

          <Section title="3. Project Estimates and Pricing">
            <p>
              Any cost estimates or budget ranges discussed during initial
              consultations or displayed on this Site are indicative only. Final
              project costs are determined after detailed scope discussions, site
              assessment, and formal estimation. RAJ Constructions is not
              liable for any reliance placed on preliminary estimates provided
              prior to a formal agreement.
            </p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content on this Site — including text, images, project
              photographs, logos, and service descriptions — is the property of
              RAJ Constructions or its licensed contributors. Unauthorised use,
              reproduction, or distribution of any content is strictly
              prohibited without prior written permission.
            </p>
          </Section>

          <Section title="5. Accuracy of Information">
            <p>
              We make reasonable efforts to ensure the information on this Site
              is accurate and up to date. However, we do not warrant that all
              content is complete, current, or error-free. Project details,
              timelines, and service offerings may change. We reserve the right
              to update content at any time without prior notice.
            </p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, RAJ
              Constructions shall not be liable for any direct, indirect,
              incidental, or consequential loss or damage arising from:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Your use of or inability to access the Site</li>
              <li>
                Reliance on information displayed on the Site prior to a formal
                engagement
              </li>
              <li>
                Any errors, interruptions, or delays in Site availability
              </li>
            </ul>
          </Section>

          <Section title="7. Third-Party Links">
            <p>
              This Site may contain links to third-party websites or platforms
              such as Google Maps or WhatsApp. These links are provided for
              convenience only. RAJ Constructions does not endorse or accept
              responsibility for the content or practices of any third-party
              site. Accessing those links is at your own risk.
            </p>
          </Section>

          <Section title="8. Privacy">
            <p>
              Your use of the Site is also governed by our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              , which explains how we collect and handle your personal
              information.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of India. Any disputes arising in connection with
              these terms shall be subject to the exclusive jurisdiction of the
              courts in Bengaluru, Karnataka, India.
            </p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Updated terms will be posted on this page with a revised effective
              date. Continued use of the Site after changes are published
              constitutes your acceptance of the revised terms.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              For any questions or concerns regarding these Terms of Service,
              please contact us:
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

export default TermsOfService

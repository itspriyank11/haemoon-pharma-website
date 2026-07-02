import LegalPage from './LegalPage'
import { company } from '../data/site'

/**
 * Terms of Service page. General, good-practice content for a pharmaceutical /
 * nutraceutical company website — review with legal counsel before relying on
 * it for compliance in a specific jurisdiction.
 */
export default function Terms() {
  const sections = [
    {
      heading: 'Acceptance of Terms',
      body: [
        `By accessing or using the ${company.name} website, you agree to be bound by these Terms of Service and by our Privacy Policy. If you do not agree, please do not use this website.`,
      ],
    },
    {
      heading: 'Use of the Website',
      body: [
        'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use of, this site by others. In particular, you agree not to:',
        {
          list: [
            'Use the site in any way that breaches applicable laws or regulations',
            'Attempt to gain unauthorised access to the site, its servers or connected systems',
            'Introduce viruses, malware or other harmful material',
            'Copy, reproduce or exploit any content for commercial purposes without our permission',
          ],
        },
      ],
    },
    {
      heading: 'Informational Purpose Only',
      body: [
        'The content on this website — including product information — is provided for general information only and does not constitute medical advice, a prescription, or an offer to sell any product where such an offer would be unlawful. Our products should be used only as directed by a qualified healthcare professional and in accordance with the approved product labelling.',
      ],
    },
    {
      heading: 'Intellectual Property',
      body: [
        `All trademarks, brand names, logos, product names, text, graphics and other content on this website are the property of ${company.legalName} or its licensors and are protected by applicable intellectual-property laws. You may not use them without our prior written consent.`,
      ],
    },
    {
      heading: 'Third-Party Links',
      body: [
        'This website may contain links to third-party websites for your convenience. We have no control over the content of those sites and accept no responsibility for them or for any loss arising from your use of them.',
      ],
    },
    {
      heading: 'Disclaimer of Warranties',
      body: [
        'This website is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we make no warranties, express or implied, regarding the accuracy, completeness or availability of the site or its content.',
      ],
    },
    {
      heading: 'Limitation of Liability',
      body: [
        'To the fullest extent permitted by law, we shall not be liable for any indirect, incidental or consequential loss or damage arising out of your access to, use of, or inability to use this website.',
      ],
    },
    {
      heading: 'Governing Law',
      body: [
        'These Terms are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts of Odisha, India.',
      ],
    },
    {
      heading: 'Changes to These Terms',
      body: [
        `We may revise these Terms of Service at any time. The current version will always be posted on this page with a revised "Last updated" date. Continued use of the website after changes constitutes acceptance of the revised Terms.`,
      ],
    },
  ]

  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of"
      highlight="Service"
      subtitle={`The terms that govern your use of the ${company.name} website.`}
      seoTitle="Terms of Service"
      seoDescription={`Terms of Service for the ${company.name} website — the rules for using our site and the basis on which we make our content available to you.`}
      updated="2 July 2026"
      intro={`Please read these Terms of Service carefully before using the ${company.name} website. They set out the rules for using our site and the basis on which we make our content available to you.`}
      sections={sections}
    />
  )
}
